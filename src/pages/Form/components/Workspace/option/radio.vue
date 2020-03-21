<template>
  <div>
    <div class="item-option">
      <p class="item-option-label">题目</p>
      <el-input
        size="small"
        clearable
        :value="value.title"
        @input="titleChange"
      />
    </div>

    <div class="item-option">
      <p class="item-option-label">选项</p>
      <draggable
        v-model="value.options"
        @start="drag=true"
        @end="drag=false"
        v-bind="dragOptions"
        handle=".sort-icon"
      >
        <transition-group type="transition" :name="!drag ? 'flip-list' : null">
          <div class="item-option-input" v-for="(item,index) in value.options" :key="item.id">
            <i class="fa fa-navicon sort-icon"></i>
            <el-input
              size="small"
              clearable
              :value="item.value"
              @input="optionInputChange($event,index)"
              :disabled="item.value==='其它'"
            />
            <i class="el-icon-delete delete-icon" @click="deleteOption(index)"></i>
          </div>
        </transition-group>
      </draggable>

      <div>
        <el-button type="text" @click.stop.prevent="addOption">
          添加选项
        </el-button>
        <el-button type="text" @click.stop.prevent="addOption('其它')" :disabled="hasOther">
          添加其它项
        </el-button>
      </div>

    </div>

    <div class="item-option">
      <p class="item-option-label">必填</p>
      <el-switch :value="value.request" @change="requestChange">
      </el-switch>
    </div>
  </div>
</template>

<script>
  import uuidV4 from 'uuid/v4';
  import { findIndex } from 'lodash';
  import draggable from 'vuedraggable';

  export default {
    name: 'RadioOption',
    components: { draggable },
    props: {
      value: {
        type: Object,
        default: () => Object.assign({}),
      },
    },
    data() {
      return {
        drag: false,
      };
    },
    computed: {
      addIndex: vm => {
        const index = vm.value && vm.value.options && vm.value.options.length || 0;
        if (vm.hasOther)
          return index - 1 < -1 ? 0 : index - 1;
        return index;
      },
      hasOther: vm => {
        const arr = vm.value && vm.value.options || [];
        return findIndex(arr, o => o.value === '其它') >= 0;
      },
      dragOptions() {
        return {
          animation: 200,
          ghostClass: 'ghost',
        };
      },

    },

    methods: {
      titleChange(title) {
        this.update({ title });

      },
      requestChange(request) {
        this.update({ request });
      },
      optionInputChange(value, index) {
        const { options } = this.value;
        const arr = [...options];
        arr.splice(index, 1, { ...arr[index], value });
        this.update({ options: arr });
      },

      deleteOption(index) {
        const { options } = this.value;
        const arr = [...options];
        arr.splice(index, 1);
        this.update({ options: arr });
      },
      addOption(event) {

        const { options } = this.value;
        const arr = [...options];
        if (event === '其它') {
          arr.push({ id: uuidV4(), value: '其它' });

        } else {
          const init = { id: uuidV4(), value: `选项${(this.addIndex || 0) + 1}` };

          if (this.hasOther) {
            arr.splice(arr.length - 1, 0, init);
          } else
            arr.push(init);
        }
        this.update({ options: arr });
      },
      update(obj) {
        this.$emit('change', obj);
      },
    },
  };
</script>

<style scoped lang="scss">
  @import '../../../styles';
</style>


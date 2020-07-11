<template>
  <div>
    <div class="item-option">
      <p class="item-option-label">题目</p>
      <v-text-field
          clearable
          :value="value.title"
          label="请输入"
          outlined
          single-line
          @input="titleChange"
          hide-details
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
            <v-icon class="sort-icon pl-0">mdi-drag mdi-24px</v-icon>
            <v-text-field
                dense
                class="ma-0"
                clearable
                :value="item.value"
                label="请输入"
                outlined
                single-line
                hide-details
                @input="optionInputChange($event,index)"
                :disabled="item.value==='其它'"
            />
            <v-icon class="delete-icon ml-2" @click="deleteOption(index)">mdi-delete-outline</v-icon>
          </div>
        </transition-group>
      </draggable>

      <div>
        <v-btn text @click.stop.prevent="addOption" color="primary">
          添加选项
        </v-btn>
        <v-btn text color="primary" @click.stop.prevent="addOption('其它')" :disabled="hasOther">
          添加其它项
        </v-btn>
<!--        <RelevanceBtn :value="value" @change="relevanceBtnChange"/>-->

      </div>
    </div>

    <div class="item-option">
      <p class="item-option-label">必填</p>
      <v-switch class="ma-0" :value="value.request" @change="requestChange"/>
    </div>

  </div>
</template>

<script>
  import { v4 as uuidV4 } from 'uuid';
  import { findIndex } from 'lodash';
  import draggable from 'vuedraggable';
  import RelevanceBtn from '../RelevanceBtn';

  export default {
    name: 'RadioOption',
    components: { draggable,RelevanceBtn },
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
      relevanceBtnChange(options){
        this.update({ options });
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
      handleRelevance() {

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


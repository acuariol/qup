<template>
  <div>
    <draggable
      v-bind:="dragOptions"
      :list="list"
      @start="drag=true"
      @end="drag=false"
      :group="{ name: 'block', pull: 'clone', put: false }"
    >
      <transition-group type="transition" :name="!drag ? 'flip-list' : null">

        <v-list-item
            v-for="item in list"
            :key="item.componentType"
            @click.stop="click(item)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.label"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </transition-group>

    </draggable>
  </div>
</template>

<script>
  import draggable from 'vuedraggable';
  import { type } from '../../const';

  const list = [
    {
      icon: 'mdi-radiobox-marked',
      componentType: type.RADIO,
      label: '单选题',
    },
    {
      icon: 'mdi-checkbox-marked-outline',
      componentType: type.MULTIPLE_RADIO,
      label: '多选题',
    },
    {
      icon: 'mdi-card-text-outline',
      componentType: type.ANSWER,
      label: '问答题',
    },
    {
      icon: 'mdi-star-outline',
      componentType: type.RATE,
      label: '评分',
    },
    {
      icon: 'mdi-numeric',
      componentType: type.NUMBER,
      label: '数字',
    },
    // {
    //   icon: 'mdi-trending-up',
    //   componentType: type.ADDRESS,
    //   label: '省市区',
    // },
    {
      icon: 'mdi-help-circle-outline',
      componentType: type.HELP_TEXT,
      label: '说明文字',
    },
    {
      icon: 'mdi-clock-outline',
      componentType: type.DATE,
      label: '日期',
    },

  ];
  export default {
    name: 'ControlPanel',
    data() {
      return { list ,drag:false};
    },
    components: { draggable },
    computed: {
      dragOptions() {
        return {
          animation: 200,
          ghostClass: 'ghost',

        };
      },
    },

    methods: {
      click(item) {
        this.$attrs.click(item);
      },
      log(evt) {
        console.log(evt);
      },
    },

  };
</script>

<style scoped lang="scss">
  @import '../../styles';
</style>

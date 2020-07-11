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

<!--    <div class="item-option">-->
<!--      <p class="item-option-label">日期格式</p>-->
<!--      <v-select-->
<!--          :items="items"-->
<!--          label="Outlined style"-->
<!--          outlined-->
<!--          single-line-->
<!--          hide-details-->
<!--          :value="value.dateType" @change="dateTypeChange"-->
<!--     />-->
<!--    </div>-->

    <div class="item-option">
      <p class="item-option-label">必填</p>
      <v-switch class="ma-0" hide-details :value="value.request" @change="requestChange"/>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'DateOption',
    props: {
      value: {
        type: Object,
        default: () => Object.assign({}),
      },
    },
    data(){
      return{
        items:[
          {
            text:'年-月-日',
            value:'date'
          },
          {
            text:'年-月-日 时:分:秒',
            value:'datetime'
          },

        ]
      }
    },

    methods: {
      titleChange(title) {
        this.update({ title });
      },
      dateTypeChange(dateType) {

        let format = 'date';
        let placeholder = 'YYYY-MM-DD';

        if (dateType === 'datetime') {
          format = 'YYYY-MM-DD HH:mm:ss';
          placeholder = '选择日期时间';
        }

        this.update({ dateType, format, placeholder });
      },
      requestChange(request) {
        this.update({ request });
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


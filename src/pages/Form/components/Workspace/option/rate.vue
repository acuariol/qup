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
      <p class="item-option-label">评分制</p>

      <v-radio-group hide-details :value="value.scoring" row @change="rateScoringChange" class="ma-0">
        <v-radio label="五分制" :value="5"></v-radio>
        <v-radio label="十分制" :value="10"></v-radio>
      </v-radio-group>

    </div>

    <div class="item-option">
      <p class="item-option-label">允许半选</p>
      <v-switch class="ma-0" hide-details :value="value.allowHalf" @change="allowHalfChange"/>
    </div>

    <div class="item-option">
      <p class="item-option-label">必填</p>
      <v-switch class="ma-0" hide-details :value="value.request" @change="requestChange"/>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'RateOption',
    props: {
      value: {
        type: Object,
        default: () => Object.assign({}),
      },
    },

    methods: {
      rateScoringChange(scoring) {
        this.update({ scoring });
      },
      allowHalfChange(allowHalf) {
        this.update({ allowHalf });
      },
      requestChange(request) {
        this.update({ request });
      },
      titleChange(title) {
        this.update({ title });
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


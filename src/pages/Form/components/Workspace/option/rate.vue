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
      <p class="item-option-label">评分制</p>
      <el-radio-group :value="value.scoring" @change="rateScoringChange">
        <el-radio :label="5">五分制</el-radio>
        <el-radio :label="10">十分制</el-radio>
      </el-radio-group>
    </div>

    <div class="item-option">
      <p class="item-option-label">允许半选</p>
      <el-switch :value="value.allowHalf" @change="allowHalfChange">
      </el-switch>
    </div>

    <div class="item-option">
      <p class="item-option-label">必填</p>
      <el-switch :value="value.request" @change="requestChange">
      </el-switch>
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
        this.update({ scoring: scoring === 5 ? 10 : 5 });
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


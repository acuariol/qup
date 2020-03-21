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
      <p class="item-option-label">提示文字</p>
      <el-input
        size="small"
        clearable
        :value="value.placeholder"
        @input="placeholderChange"
      />
    </div>

    <div class="item-option">
      <p class="item-option-label">单位</p>
      <el-input
        size="small"
        clearable
        :value="value.unit"
        @input="unitChange"
        placeholder="请输入"
      />
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
    name: 'NumberOption',
    props: {
      value: {
        type: Object,
        default: () => Object.assign({}),
      },
    },

    methods: {
      titleChange(title) {
        this.update({ title });
      },
      placeholderChange(placeholder) {
        this.update({ placeholder });
      },
      unitChange(unit) {
        this.update({ unit });
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


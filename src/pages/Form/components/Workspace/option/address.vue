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
      <p class="item-option-label">格式</p>
      <el-radio-group :value="value.format" @change="formatChange">
        <el-radio label="normal">省市区</el-radio>
        <el-radio label="detail">省市区-街道</el-radio>
      </el-radio-group>
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
    name: 'AddressOption',
    props: {
      value: {
        type: Object,
        default: () => Object.assign({}),
      },
    },

    methods: {
      formatChange(format) {
        this.update({ format: format === 'normal' ? 'detail' : 'normal' });
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


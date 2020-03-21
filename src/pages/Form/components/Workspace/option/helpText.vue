<template>
  <div>
    <div class="item-option">
      <p class="item-option-label">内容</p>
      <el-input
        type="textarea"
        size="small"
        clearable
        :value="value.content"
        @input="contentChange"
        :autosize="{ minRows: 3, maxRows: 6}"
      />
    </div>

    <div class="item-option">
      <p class="item-option-label">跳转链接</p>
      <el-input
        size="small"
        clearable
        :value="value.link"
        @input="LinkChange"
        placeholder="请输入，如：www.example.com"
      />
    </div>

  </div>
</template>

<script>

  export default {
    name: 'HelpTextOption',
    props: {
      value: {
        type: Object,
        default: () => Object.assign({}),
      },
    },

    methods: {
      contentChange(content) {
        this.update(  {content});
      },
      LinkChange(link) {
        this.update(  {link});
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


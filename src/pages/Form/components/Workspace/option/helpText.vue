<template>
  <div>
    <div class="item-option">
      <p class="item-option-label">内容</p>

      <v-textarea
          clearable
          :value="value.content"
          @input="contentChange"
          label="请输入"
          outlined
          single-line
          hide-details
      />


    </div>

    <div class="item-option">
      <p class="item-option-label">跳转链接</p>

      <v-text-field
          clearable
          :value="value.link"
          @input="LinkChange"
          label="请输入，如：www.example.com"
          outlined
          single-line
          hide-details
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


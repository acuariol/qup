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
      <p class="item-option-label">提示文字</p>

      <v-text-field
          clearable
          :value="value.placeholder"
          label="请输入"
          outlined
          single-line
          @input="placeholderChange"
          hide-details
      />

    </div>

    <div class="item-option">
      <p class="item-option-label">必填</p>
      <v-switch class="ma-0" :value="value.request" @change="requestChange">
      </v-switch>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'AnswerOption',
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


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
      <p class="item-option-label">格式</p>
      <v-radio-group hide-details :value="value.format" row @change="formatChange" class="ma-0">
        <v-radio label="省市区" value="normal"></v-radio>
        <v-radio label="省市区-街道" value="detail"></v-radio>
      </v-radio-group>
    </div>

    <div class="item-option">
      <p class="item-option-label">必填</p>
      <v-switch :value="value.request" @change="requestChange" class="ma-0">
      </v-switch>
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
        this.update({ format });
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


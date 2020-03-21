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
      <p class="item-option-label">日期格式</p>
      <el-select :value="value.dateType" @change="dateTypeChange" size="small">
        <el-option
          label="年-月-日"
          value="date"
        />
        <el-option
          label="年-月-日 时:分:秒"
          value="datetime"
        />
      </el-select>
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
    name: 'DateOption',
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


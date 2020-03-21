<template>
  <div class="date">
    <el-date-picker
      v-if="$attrs.data.dateType==='date'"
      :value="undefined"
      type="date"
      placeholder="选择日期"
      size="small"
    />

    <el-date-picker
      v-if="$attrs.data.dateType==='datetime'"
      v-model="undefined"
      type="datetime"
      placeholder="选择日期时间"
      size="small"
    >
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    name: 'date',
  };
</script>

<style scoped lang="scss">
  @import '../../../styles';
</style>

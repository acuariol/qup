<template>
  <div class="address">
    <el-cascader
      class="address-select"
      placeholder="请选择省市区"
      size="small"
    />


    <template v-if="$attrs.data.format==='detail'">
      <el-cascader
        class="address-select-jd"
        placeholder="请选择街道"
        size="small"
      />
      <el-input class="address-input" placeholder="请填写详细地址" size="small" />
    </template>


  </div>
</template>

<script>
  export default {
    name: 'address',
  };
</script>

<style scoped lang="scss">
  @import '../../../styles';
</style>

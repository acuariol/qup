<template>
  <div class="address">

    <v-select
        single-line
        label="请选择省市区"
        hide-details
        outlined
        no-data-text="暂无数据"
        class="mr-4"
        style="max-width: 500px"
        dense
    ></v-select>


    <template v-if="$attrs.data.format==='detail'">
      <v-text-field
          clearable
          dense
          label="请填写详细地址"
          outlined
          single-line
          hide-details
      />

    </template>


  </div>
</template>

<script>
  export default {
    name: 'addressBlock',
  };
</script>

<style scoped lang="scss">
  @import '../../../styles';
</style>

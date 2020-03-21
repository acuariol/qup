<template>
  <div>
    <div class="item" v-for="item in $attrs.data.options" :key="item.id">
      <i class="fa fa-circle-o"></i>
      <span style="padding: 0 16px">{{item.value}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'radio',
  };
</script>

<style scoped lang="scss">
  @import '../../../styles';

</style>

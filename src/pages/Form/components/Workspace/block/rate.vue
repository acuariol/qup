<template>
  <div>
    <div class="scoring-star">
      <i class="el-icon-star-on"></i>
      <i class="el-icon-star-on"></i>
      <i class="el-icon-star-on"></i>
      <i class="el-icon-star-on"></i>
      <i class="el-icon-star-on"></i>
      <transition name="fade">
          <span v-if="$attrs.data.scoring===10">
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
          </span>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'rate',
  };
</script>

<style scoped lang="scss">
  @import '../../../styles';
</style>

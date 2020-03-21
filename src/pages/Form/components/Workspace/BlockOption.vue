<template>
  <div class="block-option">
    <i class="el-icon-copy-document" @click.stop.prevent="$emit('copyBlock')"></i>
    <i class="el-icon-delete" @click.stop.prevent="$emit('deleteBlock')"></i>
  </div>
</template>

<script>
  export default {
    name: 'BlockOption',
  };
</script>

<style scoped lang="scss">
  @import '../../styles';
</style>


<template>
  <v-card class="block-option">
    <i class="el-icon-copy-document" @click.stop.prevent="$emit('copyBlock')"></i>
    <i class="el-icon-delete" @click.stop.prevent="$emit('deleteBlock')"></i>
  </v-card>
</template>

<script>
  export default {
    name: 'BlockOption',
  };
</script>

<style scoped lang="scss">
  @import '../../styles';
</style>


<template>
  <div class="helpText">
    <span>
      {{ $attrs.data.content }}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'helpText',
  };
</script>

<style scoped lang="scss">
  @import '../../../styles';
</style>

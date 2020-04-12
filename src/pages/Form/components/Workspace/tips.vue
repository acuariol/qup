<template>
  <div>
    <v-card outlined v-if="type==='center'" class="center">
      <i class="el-icon-top-left icon"></i><span>1</span>点击添加问题
    </v-card>
    <div v-if="type==='right'" class="right">
      <span>2</span>添加问题项后在这里编辑
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tips',
    props: {
      type: String,
    },
  };
</script>

<style scoped lang="scss">
  .center {
    padding: 24px 76px;
    font-size: 1rem;
    font-weight: 500;

    border-radius: 5px;
    margin-top: 50px;
    position: relative;
  }

  .right {
    font-size: 1rem;
  }

  .icon {
    color: var(--v-primary-base);
    font-weight: 700;
    font-size: 1.8rem;
    position: absolute;
    top: 20px;
    left: 20px;
  }

  span {
    color: var(--v-primary-base);
    font-weight: 700;
    padding-right: 6px;
    font-size: 1.2rem;
  }

</style>

<template>
  <div class="chart-card-box">
    <v-card dark class="card-title title font-weight-bold pa-2 px-10" color="#03A9F4">
      {{title}}
    </v-card>

    <v-card>
      <div style="display: flex;justify-content: center;align-items: center">
        <slot />
      </div>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'ChartCard',
    props: {
      title: String,
    },
    mounted() {
     console.log( this.$attrs)
    }
  };
</script>

<style scoped lang="scss">
  .chart-card-box {
    position: relative;

    .card-title {
      position: absolute;
      top: -24px;
      left: 24px;
      width: auto;
      z-index: 1;
    }
  }
</style>

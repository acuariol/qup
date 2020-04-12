<template>
  <div class="chart-card-box mt-8">
    <v-card dark class="card-title title font-weight-bold pa-4 px-12" color="#4DB6AC">
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
      top: -32px;
      left: 24px;
      width: auto;
      z-index: 1;
    }
  }
</style>

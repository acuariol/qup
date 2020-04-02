<template>
  <div class="polyline-box">
    <div ref="line" style="width: 560px;height:500px;"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    name: 'Polyline1',
    mounted() {
      const chart = echarts.init(this.$refs.line, 'mui');

      const option = {
        xAxis: {
          type: 'category',
          data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        },
        yAxis: {
          type: 'value',
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
        }],
      };

      chart.setOption(option);
    },
  };
</script>

<style scoped lang="scss">
.polyline-box{
  canvas{
    width: 100%;
  }
}
</style>

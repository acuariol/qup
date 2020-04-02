<template>
  <div ref="pie" style="width:800px;height:500px;" ></div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    name: 'Pie',
    mounted() {

      const chart = echarts.init(this.$refs.pie, 'mui');

      const data = this.genData(10);

      const option = {
        // title: {
        //   text: '同名数量统计',
        //   subtext: '纯属虚构',
        //   left: 'center',
        // },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          data: data.legendData,
          selected: data.selected,
        },
        series: [
          {
            name: '姓名',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: data.seriesData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };
      chart.setOption(option);
    },
    methods: {
      genData(count) {
        var nameList = [
          '赵', '钱', '孙', '李', '周', '吴', '郑', '王',
        ];
        var legendData = [];
        var seriesData = [];
        var selected = {};
        for (var i = 0; i < count; i++) {
          let name = Math.random() > 0.65
            ? makeWord(4, 1) + '·' + makeWord(3, 0)
            : makeWord(2, 1);
          legendData.push(name);
          seriesData.push({
            name: name,
            value: Math.round(Math.random() * 100000),
          });
          selected[name] = i < 6;
        }

        return {
          legendData: legendData,
          seriesData: seriesData,
          selected: selected,
        };

        function makeWord(max, min) {
          var nameLen = Math.ceil(Math.random() * max + min);
          var name = [];
          for (var i = 0; i < nameLen; i++) {
            name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
          }
          return name.join('');
        }
      },
    },
  };
</script>

<style scoped lang="scss">

</style>

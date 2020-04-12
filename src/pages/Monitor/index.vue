<template>
  <div>

    <v-row class="mb-12">
      <v-col xs="12" sm="12" md="3" lg="3" xl="3" v-for="item in figure" :key="item.id">
        <FigureCard :item="item"></FigureCard>
      </v-col>
    </v-row>

    <v-row class="mb-4">
      <v-col xs="12" sm="12" md="7" lg="7" xl="7">
        <ChartCard title="填写完成度">
          <Pie />
        </ChartCard>
      </v-col>

      <v-col xs="12" sm="12" md="5" lg="5" xl="5">
        <ChartCard title="一周填写量">
          <Polyline1 />
        </ChartCard>
      </v-col>
    </v-row>

    <v-row>
      <v-col xs="12" sm="12" md="7" lg="7" xl="76">
        <ChartCard title="基本雷达图"  >
          <Radar class="pt-8"/>
        </ChartCard>
      </v-col>

      <v-col xs="12" sm="12" md="5" lg="5" xl="5">
        <ChartCard title="漏斗图">
          <Funnel class="pt-12"/>
        </ChartCard>
      </v-col>
    </v-row>

  </div>
</template>

<script>
  import Pie from '../../components/charts/Pie';
  import Radar from '../../components/charts/Radar';
  import ChartCard from '../../components/card/ChartCard';
  import Polyline1 from '../../components/charts/Polyline1';
  import Funnel from '../../components/charts/Funnel';
  import FigureCard from '../../components/card/FigureCard';

  export default {
    name: 'Monitor',
    components: { Pie, FigureCard, Polyline1, ChartCard, Radar,Funnel },
    data() {
      return {
        figure: [
          {
            id: '1',
            icon: 'mdi-file-table-outline',
            title: '填写量',
            total: 59368,
            relative: 220,
            relativeIcon: 'mdi-arrow-up',
            color: '#F44336',
          },
          {
            id: '2',
            icon: 'mdi-file-table-outline',
            title: '有效问卷',
            total: 43602,
            relative: 80,
            relativeIcon: 'mdi-arrow-down',
            color: '#9C27B0',
          },
          {
            id: '3',
            icon: 'mdi-file-table-outline',
            title: '有效率',
            total: '73.44%',
            relative: '0.4%',
            relativeIcon: 'mdi-arrow-down',
            color: '#607D8B',
          },
          {
            id: '4',
            icon: 'mdi-file-table-outline',
            title: '日平均填写量',
            total: 1978,
            relative: 8,
            relativeIcon: 'mdi-arrow-up',
            color: '#00BCD4',
          },
        ],
      };
    },
    methods: {},
  };
</script>

<style scoped>

</style>

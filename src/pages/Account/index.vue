<template>
  <div>
    <v-row>
      <v-col xs="12" sm="12" md="4" xl="4" lg="4">
        <v-card class="pa-6">
          <v-row justify="center">
            <v-avatar color="indigo" size="124">
              <span class="white--text headline">64</span>
            </v-avatar>
          </v-row>
          <v-row justify="center" class="pt-4">
            <h1 class="title font-weight-bold">Acuario</h1>
          </v-row>
          <v-row justify="center">
            <p class="subtitle-1 font-weight-medium">life is life</p>
          </v-row>

          <div>
            <div class="d-flex mb-3">
              <div class="pr-2">
                <v-icon size="20">mdi-church</v-icon>
              </div>
              <p class="subtitle-2 font-weight-medium ma-0 prt-3">
                前端开发
              </p>
            </div>

            <div class="d-flex mb-3">
              <div class="pr-2">
                <v-icon size="20">mdi-home-search</v-icon>
              </div>
              <p class="subtitle-2 font-weight-medium ma-0 prt-3">
                蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED
              </p>
            </div>
          </div>


          <div class="pt-12">
            <p class="subtitle-2 font-weight-medium mb-3">标签</p>

            <div>
              <v-chip v-for="chip in chips" :key="chip" class="mr-2 mb-2">
                {{chip}}
              </v-chip>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col xs="12" sm="12" md="8" xl="8" lg="8">
        <v-card>
          <v-tabs v-model="tab">
            <v-tabs-slider></v-tabs-slider>
            <v-tab>基本设置</v-tab>
            <v-tab>安全设置</v-tab>
            <v-tab>新消息通知</v-tab>

            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card
                    flat
                    tile
                    class="pa-6"
                >
                  <Base />
                </v-card>
              </v-tab-item>

              <v-tab-item>
                <v-card
                    flat
                    tile
                    class="pa-6"
                >
                  <Safety />
                </v-card>
              </v-tab-item>

              <v-tab-item>
                <v-card
                    flat
                    tile
                    class="pa-6"
                >
                  <Notice />
                </v-card>
              </v-tab-item>

            </v-tabs-items>

          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

  import Base from './components/Base';
  import Safety from './components/Safety';
  import Notice from './components/Notice';

  export default {
    name: 'Account',
    components: { Safety, Base,Notice },
    data() {
      return {
        tabDada: [
          {
            title: '基本设置',
            value: 'tab-1',
          },
          {
            title: '安全设置',
            value: 'tab-2',
          },
          {
            title: '新消息通知',
            value: 'tab-3',
          },
        ],
        tab: null,
        tabs: 3,
        chips: [
          '很有想法的',
          '专注设计',
          '辣~',
          '大长腿,',
          '川妹子',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      };
    },
  };
</script>

<style scoped lang="scss">
  .prt-3 {
    position: relative;
    top: 3px;
  }
</style>

<template>
  <div>
    <v-row>
      <v-col xs="12" sm="12" md="4" xl="4" lg="4">

        <v-card class="pa-6">
          <Boilerplate v-if="!userInfo" />
          <div v-else>
            <v-row justify="center">
              <v-avatar color="indigo" size="124">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                >
              </v-avatar>
            </v-row>
            <v-row justify="center" class="pt-4">
              <h1 class="headline font-weight-bold">{{userInfo.name}}</h1>
            </v-row>
            <v-row justify="center">
              <p class="subtitle-1 font-weight-medium">{{userInfo.profile}}</p>
            </v-row>

            <div>
              <div class="d-flex mb-3">
                <div class="pr-2">
                  <v-icon size="20">mdi-smart-card-outline</v-icon>
                </div>
                <p class="subtitle-2 font-weight-medium ma-0 prt-3">
                  {{userInfo.station}}
                </p>
              </div>

              <div class="d-flex mb-3">
                <div class="pr-2">
                  <v-icon size="20">mdi-file-tree</v-icon>
                </div>
                <p class="subtitle-2 font-weight-medium ma-0 prt-3">
                  {{userInfo.position}}
                </p>
              </div>

              <div class="d-flex mb-3">
                <div class="pr-2">
                  <v-icon size="20">mdi-home-city</v-icon>
                </div>
                <p class="subtitle-2 font-weight-medium ma-0 prt-3">
                  {{userInfo.country}}-{{userInfo.street}}
                </p>
              </div>
            </div>

            <div class="pt-12">
              <p class="subtitle-2 font-weight-medium mb-3">标签</p>

              <div>
                <v-chip v-for="chip in userInfo.tags" :key="chip" class="mr-2 mb-2">
                  {{chip}}
                </v-chip>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col xs="12" sm="12" md="8" xl="8" lg="8">

        <v-card class="pa-4" v-if="!userInfo">
          <Boilerplate show="right" />
        </v-card>
        <v-card v-else>

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
  import { mapActions, mapState } from 'vuex';
  import Base from './components/Base';
  import Safety from './components/Safety';
  import Notice from './components/Notice';
  import Boilerplate from './components/Boilerplate';

  import { delay } from 'lodash';

  export default {
    name: 'Account',
    components: { Safety, Base, Notice, Boilerplate },
    computed: {
      ...mapState(['userInfo']),
    },
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
      };
    },
    methods: {
      ...mapActions(['fetchUserInfo']),
    },
    mounted() {
      delay(() => {
        if (!this.userInfo)
          this.fetchUserInfo();
      },1500);

    },
  };
</script>

<style scoped lang="scss">
  .prt-3 {
    position: relative;
    top: 3px;
  }
</style>

<template>
  <v-app>
    <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="indigo darken-2"
        dark
        prominent
        shrink-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title
          style="width: 300px"
          class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Questionnaire</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>


      <NoticeIconMenu></NoticeIconMenu>


      <AccountIconMenu></AccountIconMenu>


    </v-app-bar>

    <v-navigation-drawer
        app
        :clipped="$vuetify.breakpoint.lgAndUp"
        v-model="drawer"
        class="v-navigation-drawer"
    >
      <v-list shaped>
        <v-subheader>主菜单</v-subheader>

        <v-list-item-group v-model="menuIndex" color="primary">

          <div v-for="item in menu" :key="item.text">
            <v-list-group
                v-if="item.children"
                prepend-icon="mdi-clock"
                no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{item.text}}</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                  v-for="subItem in item.children"
                  :key="subItem.text"
                  link
              >
                <v-list-item-content>
                  <v-list-item-title v-text="subItem.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

            </v-list-group>

            <v-list-item
                link
                v-else
                @click.stop.prevent="handleNav(item.path)"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>


        </v-list-item-group>

      </v-list>

      <v-list shaped>
        <v-subheader class="mt-4 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>

        <v-list-item
            v-for="item in items2"
            :key="item.text"
            link
        >
          <v-list-item-avatar>
            <img
                :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                alt=""
            >
          </v-list-item-avatar>
          <v-list-item-title v-text="item.text" />
        </v-list-item>

      </v-list>

    </v-navigation-drawer>

    <v-content>
      <v-container fluid style="background: #f3f3f3;height: 100%">
        <notifications
            :duration="7000"
            class="my-vue-notification"
            group="response"
        />
        <router-view></router-view>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
  import AccountIconMenu from '@/components/AccountIconMenu';
  import NoticeIconMenu from '@/components/NoticeIconMenu';
  import { findIndex } from 'lodash';

  export default {
    name: 'BasicLayout',
    components: { AccountIconMenu ,NoticeIconMenu},
    data() {
      return {
        drawer: null,
        miniVariant: false,
        menuIndex: -1,
        item1: 1,
        item2: 2,
        menu: [
          { icon: 'mdi-trending-up', text: '问卷管理', path: '/form' },
          { icon: 'mdi-youtube-subscription', text: '数据管理', path: '/monitor' },
          { icon: 'mdi-history', text: 'History' },
          { icon: 'mdi-playlist-play', text: 'Playlists' },
          {
            icon: 'mdi-clock',
            text: 'Watch Later',
            path: '/about',
            children: [
              { icon: 'mdi-history', text: 'History' },
              { icon: 'mdi-playlist-play', text: 'Playlists' },
            ],
          },

        ],
        items2: [
          { picture: 28, text: 'Joseph' },
          { picture: 38, text: 'Apple' },
          { picture: 48, text: 'Xbox Ahoy' },
          { picture: 58, text: 'Nokia' },
          { picture: 78, text: 'MKBHD' },
        ],
        currentPath: '',
      };
    },

    watch: {
      $route({ path }) {
        this.handleMenuIndex(path)
      },
    },
    methods: {
      handleNav(path) {
        if (path && this.$router.currentRoute.path !== path)
          this.$router.push(path);
      },
      handleMenuIndex(path) {
        if (!path) return;
        const index = findIndex(this.menu, o => o.path === path);
        if (typeof index === 'number' && index >= 0)
          this.menuIndex = index;
      },
    },
    mounted() {
      this.handleMenuIndex(this.$router.currentRoute.path);
    },
  };
</script>

<style scoped lang="scss">
  @import "./styles";
</style>

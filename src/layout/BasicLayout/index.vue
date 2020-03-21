<template>
  <v-app>
    <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="blue darken-3"
        dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title
          style="width: 300px"
          class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Questionnaire</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
        app
        :clipped="$vuetify.breakpoint.lgAndUp"
        v-model="drawer"
        class="v-navigation-drawer"
    >
      <v-list shaped>
        <v-subheader>主菜单</v-subheader>
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


          <v-list-item link v-else @click.stop.prevent="handleNav(item.path)">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </div>


        <v-subheader class="mt-4 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
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
  export default {
    name: 'BasicLayout',
    data() {
      return {
        drawer: null,
        miniVariant: false,
        item: 1,
        menu: [
          { icon: 'mdi-trending-up', text: '问卷管理', path: '/form' },
          { icon: 'mdi-youtube-subscription', text: 'Subscriptions' },
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
      };
    },
    methods: {
      handleNav(path) {
        if (path && this.$router.currentRoute.path !== path)
          this.$router.push(path);
      },
    },
  };
</script>

<style scoped lang="scss">
  @import "styles";
</style>

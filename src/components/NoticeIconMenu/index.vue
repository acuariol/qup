<template>
  <div style="display: inline-block">
    <v-menu
        offset-y
        bottom
        right
        :min-width="$vuetify.breakpoint.xsOnly?'100%':500"
        :max-width="$vuetify.breakpoint.xsOnly?'100%':500"
        transition="slide-y-transition"
        class="elevation-0"
        :close-on-content-click="false"
        v-model="visible"
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" @click="visible=true">
          <v-badge color="red" :value="noticeLength" :content="noticeLength">
            <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-toolbar dense class="elevation-0">
        <v-subheader class="pa-0">未读消息</v-subheader>
        <v-spacer></v-spacer>

        <v-btn v-show="!isNoticePage" depressed rounded small outlined @click="handleNav">进入消息中心</v-btn>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn class="ml-3" icon @click="clear" v-on="on" v-show="noticeLength">
              <v-icon>mdi-notification-clear-all</v-icon>
            </v-btn>
          </template>
          <span>清除</span>
        </v-tooltip>

      </v-toolbar>

      <v-list>
        <template v-for="item in notice">
          <v-list-item
              v-if="!item.lookOver"
              :key="item.path"
              @click="showNotice(item)"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>
                {{item.text}}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-subheader class="justify-center" v-show="!noticeLength">暂无通知</v-subheader>
      </v-list>
    </v-menu>

    <v-dialog
        v-model="dialog"
        width="600"
        persistent
    >

      <v-card>
        <v-card-title :class="`title ${item.color} white--text`">
          {{item.title}}
        </v-card-title>

        <v-card-text>
          <p class="subtitle-1 font-weight-medium pt-3">{{item.text}}</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              :color="item.color"
              text
              @click="close"
          >
            关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>

  import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';


  export default {
    name: 'NoticeIconMenu',
    computed: {
      ...mapState(['notice']),
      ...mapGetters(['noticeLength']),
    },
    watch: {
      $route({ path }) {
        this.isNoticePage = path === '/notice';
      },
    },
    data() {
      return {
        visible: false,
        isNoticePage: false,
        dialog: false,
        item: {},
      };
    },
    methods: {
      ...mapActions(['fetchNotice']),
      ...mapMutations(['clearNotice']),

      handleNav() {
        this.$router.replace('/notice');
        this.visible = false;
      },
      showNotice(item) {
        this.item = item;
        this.dialog = true;
        this.visible = false;
      },
      close() {
        this.dialog = false;
        this.clearNotice(this.item);
      },
      clear() {
        this.visible = false;
        this.clearNotice();
      },
    },
    mounted() {
      this.fetchNotice();
      this.isNoticePage = this.$router.currentRoute.path === '/notice';
    },
  };
</script>

<style scoped>

</style>

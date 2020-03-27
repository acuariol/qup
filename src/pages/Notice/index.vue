<template>
  <div>
    <v-card class="pa-6 pa-md-9">
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
            v-for="item in notice"
            :key="item.key"
            :color="item.color"
        >
          <div slot="opposite">{{item.date}}</div>
          <v-card
              :color="item.color"
              dark
          >
            <v-card-title class="title">{{item.title}}</v-card-title>
            <v-card-text class="white text--primary">
              <p class="subtitle-1 font-weight-medium pt-3">{{item.text}}</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </div>
</template>

<script>

  import { mapState } from 'vuex';

  export default {
    name: 'Notice',
    computed: {
      ...mapState(['notice']),
    },

  };
</script>

<style scoped>

</style>

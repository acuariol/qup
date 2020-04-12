<template>

  <div class="pa-6 pa-md-9">
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
          v-for="item in notice"
          :key="item.key"
          :color="item.color"
      >
        <div slot="opposite">{{item.date}}</div>
        <v-card :color="item.color">
          <v-card-title :class="`title ${item.color} white--text`">
            {{item.title}}
          </v-card-title>
          <v-card elevation="0" class="pa-4">
            <p class="subtitle-1 font-weight-medium pt-3">{{item.text}}</p>
          </v-card>
        </v-card>
      </v-timeline-item>
    </v-timeline>
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

<template>
  <v-card
      class="pa-4"
      :color="item.color"
      dark
  >
    <v-card-title class="pa-0 pb-2">
      <v-icon
          left
      >
        {{item.icon}}
      </v-icon>
      <span class="title font-weight-light">{{item.title}}</span>
    </v-card-title>

    <v-card-text class="pa-0">
      <div class="d-flex align-center">
        <div class="display-1 font-weight-bold">{{item.total}}</div>
        <v-chip
            class="ma-2 font-weight-bold"
            color="white"
            outlined
            pill
        >
          {{item.relative}}
          <v-icon right>{{item.relativeIcon}}</v-icon>
        </v-chip>

      </div>
      <p class="subtitle-1 font-weight-medium">统计于该月</p>

    </v-card-text>


  </v-card>
</template>

<script>
  export default {
    name: 'FigureCard',
    props: { item: Object },
  };
</script>

<style scoped>

</style>

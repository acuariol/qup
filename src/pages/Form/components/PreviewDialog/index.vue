<template>
  <v-dialog
      v-model="previewVisible"
      fullscreen
      hide-overlay
      persistent
      transition="dialog-bottom-transition"
  >
    <v-container fluid class="ma-0 pa-0" style="height: 100%">

      <div style="display: flex;flex-direction: column;height: 100%">
        <v-toolbar dark color="secondary">
          <v-btn icon dark @click.stop="cancelPreview">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>当前为预览界面，回答不计入结果</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <Preview />
      </div>


    </v-container>


  </v-dialog>
</template>

<script>
  import Preview from '../Preview';
  import { createNamespacedHelpers } from 'vuex';

  const { mapState, mapMutations, mapGetters, mapActions } = createNamespacedHelpers('form');

  export default {
    name: 'PreviewDialog',
    components: { Preview },
    computed: {
      ...mapState(['previewVisible', 'isRowPreview', 'previewData', 'schema', 'editData', 'previewId']),
      ...mapGetters(['users', 'addTypeStr']),
    },
    methods: {
      ...mapMutations(['setState']),
      ...mapActions(['fetchActivityDetail']),
      cancelPreview() {
        this.setState({ previewVisible: false });
        this.setState({ isRowPreview: false });
      },

    },
  };
</script>

<style scoped lang="scss">
  .title {
    display: flex;
    align-items: center;
  }
</style>


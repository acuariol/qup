<template>
  <v-dialog
      v-model="editDialogVisible"
      fullscreen
      hide-overlay
      persistent
      transition="dialog-bottom-transition"
  >
    <v-card height="100%">
      <div style="display: flex;flex-direction: column;height: 100%">
        <v-toolbar dark color="secondary">
          <v-btn icon dark @click.stop="handleExit">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title v-if="editType==='add'">新建</v-toolbar-title>
          <v-toolbar-title v-if="editType==='edit'">编辑</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click.stop="handleExit">保存</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <Workspace></Workspace>
      </div>

    </v-card>
  </v-dialog>
</template>

<script>

  import { createNamespacedHelpers } from 'vuex';
  import Workspace from '../Workspace';

  const { mapState, mapActions, mapMutations } = createNamespacedHelpers('form');

  export default {
    name: 'EditDialog',
    components: { Workspace },
    computed: {
      ...mapState(['editDialogVisible', 'editType']),
    },
    methods: {
      ...mapMutations(['exit']),
      handleExit() {
        this.exit();
      },
    },
  };
</script>

<style scoped>

</style>

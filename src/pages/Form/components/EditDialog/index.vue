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
            <!--            <v-btn v-if="step==='editInfo'" dark text @click.stop="toggleStep('editForm')">下一步</v-btn>-->

            <template v-if="step==='editForm'">
              <v-btn dark text @click.stop="toggleStep('editInfo')">上一步</v-btn>

              <v-btn dark text @click.stop="handlePreview">预览</v-btn>
              <v-btn dark text @click.stop="handleSave">保存</v-btn>
            </template>

          </v-toolbar-items>
        </v-toolbar>

        <div class="area-edit">
          <BaseInput v-if="editData&&step==='editInfo'"></BaseInput>
          <Workspace v-if="editData&&step==='editForm'"></Workspace>
        </div>

      </div>

    </v-card>
  </v-dialog>
</template>

<script>

  import { createNamespacedHelpers } from 'vuex';
  import Workspace from '../Workspace';
  import BaseInput from '../BaseInput';
  const { mapState, mapMutations } = createNamespacedHelpers('form');

  export default {
    name: 'EditDialog',
    components: { Workspace, BaseInput },
    computed: {
      ...mapState(['editDialogVisible', 'step', 'editType', 'schema', 'previewVisible', 'editData']),
    },
    methods: {
      ...mapMutations(['exit', 'addition','modify', 'setState', 'setPreviewData']),
      handleExit() {
        this.exit();
      },
      handleSave() {
        if (this.editType === 'add')
          this.addition();

        if (this.editType === 'edit')
          this.modify();
      },
      handlePreview() {
        this.setPreviewData();
      },
      toggleStep(step) {
        this.setState({ step });
      },
    },
  };
</script>

<style scoped lang="scss">
  .area-edit {
    width: 100%;
    height: 100%;
    position: relative;
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>

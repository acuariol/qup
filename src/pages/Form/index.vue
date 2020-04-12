<template>
  <div>
    <v-card class="mb-6">
      <v-card-title>
        问卷管理
      </v-card-title>

      <v-card-text>
        <div class="title-option">
          <div>
            <template v-if="listLength">
              <v-btn @click.stop="toggleShowSelect">
                {{showSelect?'取消多选':'多选'}}
              </v-btn>

              <v-btn style="margin: 0 8px" color="error" v-if="selectedLength" @click.stop="handleDeleteSelected">删除选中
              </v-btn>
            </template>
          </div>
          <v-btn color="primary" @click.stop="handleCreat">新添</v-btn>
        </div>
      </v-card-text>
    </v-card>

    <Table :showSelect="showSelect"></Table>
    <EditDialog></EditDialog>
    <PreviewDialog></PreviewDialog>
  </div>
</template>

<script>

  import Table from './components/Table';
  import EditDialog from './components/EditDialog';
  import PreviewDialog from './components/PreviewDialog';
  import { cloneDeep } from 'lodash';
  import { createNamespacedHelpers } from 'vuex';

  const { mapState, mapActions, mapMutations, mapGetters } = createNamespacedHelpers('form');

  export default {
    name: 'Form',
    components: { Table, EditDialog, PreviewDialog },
    computed: {
      ...mapState(['selected']),
      ...mapGetters(['listLength']),
      selectedLength: _this => _this.selected.length,
    },
    watch: {
      listLength(val) {
        if (val === 0) this.showSelect = false;
      },
    },
    data() {
      return {
        showSelect: false,
      };
    },
    methods: {
      ...mapMutations(['setState', 'removeMultiple']),
      ...mapActions(['fetchList']),
      toggleShowSelect() {
        this.showSelect = !this.showSelect;
        if (this.selected.length)
          this.setState({ selected: [] });
      },
      handleDeleteSelected() {
        this.removeMultiple();
      },
      handleCreat() {

        const record = {
          description: '',
          endTime: '',
          name: '',
          startTime: '',
        };

        this.setState({ editData: cloneDeep(record), editDialogVisible: true });

      },
    },
    mounted() {
      this.fetchList();
    },
  };
</script>

<style scoped lang="scss">
  .title-option {
    display: flex;
    justify-content: space-between;
  }
</style>

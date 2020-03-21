<template>
  <div>

    <v-card class="mb-6">
      <v-card-title>
        问卷管理
      </v-card-title>

      <v-card-text>
        <div class="title-option">
          <v-btn @click.stop="showSelect = !showSelect">多选</v-btn>
          <v-btn color="primary" @click.stop="handleCreat">新添</v-btn>
        </div>
      </v-card-text>
    </v-card>

    <Table :showSelect="showSelect"></Table>
    <EditDialog></EditDialog>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  import Table from './components/Table';
  import EditDialog from './components/EditDialog';
  import { cloneDeep } from 'lodash';

  const { mapState, mapActions, mapMutations } = createNamespacedHelpers('form');

  export default {
    name: 'Form',
    components: { Table, EditDialog },
    data() {
      return {
        showSelect: false,
      };
    },
    methods: {
      ...mapMutations(['setState']),
      handleCreat() {

        const record = {
          description: '',
          endTime: '',
          formName: '',
          name: '',
          startTime: '',
        };

        this.setState({ editData: cloneDeep(record), editDialogVisible: true });

      },
    },
    mounted() {

    },
  };
</script>

<style scoped lang="scss">
  .title-option {
    display: flex;
    justify-content: space-between;
  }
</style>

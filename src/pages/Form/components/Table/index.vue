<template>
  <div>
    <v-data-table
        :headers="headers"
        :items="list"
        class="elevation-2"
        :single-select="singleSelect"
        item-key="id"
        :show-select="showSelect"
        v-model="selected"
        hide-default-footer
        :items-per-page="20"
        :loading="loading"
        loading-text="加载中..."
    >
      <template v-slot:item.option="{ item }">
        <v-btn class="mr-3" small @click="previewItem(item)">预览</v-btn>
        <v-btn class="mr-3" small @click="editItem(item)">编辑</v-btn>

        <v-menu
            bottom
            :close-on-content-click="false"
            transition="slide-y-transition"
        >
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="mr-3" small color="error">删除</v-btn>
          </template>

          <v-card min-width="180">
            <v-card-title class="subtitle-1">
              确定删除吗？
            </v-card-title>

            <v-card-actions>
              <v-spacer />
              <v-btn @click="deleteItem(item)" small color="error">
                确定
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>

      </template>
    </v-data-table>

    <v-pagination
        class="pagination"
        v-model="page"
        :length="4"
        circle
    />

    <v-snackbar
        v-model="snackbar"
        color="success"
        top
        vertical
        :timeout="3000"
    >
      删除成功
    </v-snackbar>
  </div>
</template>

<script>

  import { createNamespacedHelpers } from 'vuex';

  const { mapState, mapMutations } = createNamespacedHelpers('form');
  export default {
    name: 'Table',
    props: {
      showSelect: Boolean,
    },
    computed: {
      ...mapState(['list', 'loading']),
      selected: {
        get: function () {
          return this.$store.state.form.selected;
        },
        set: function (newValue) {
          this.$store.state.form.selected = newValue;
        },
      },
    },
    data() {
      return {
        page: 1,
        snackbar: false,
        singleSelect: false,
        headers: [
          { text: '表单名称', align: 'center', sortable: false, value: 'name' },
          { text: '描述', value: 'description', align: 'center', sortable: false },
          { text: '开始时间', value: 'startTime', align: 'center' },
          { text: '结束时间', value: 'endTime', align: 'center' },
          { text: '操作', value: 'option', align: 'center', sortable: false },
        ],

      };
    },
    methods: {
      ...mapMutations(['remove', 'setPreviewData', 'setState']),
      editItem(row) {
        const { schema, ...reset } = row;

        this.setState({
          schema: JSON.parse(schema),
          editData: reset,
          editDialogVisible: true,
          editType: 'edit',
          step: 'editInfo',
        });

      },
      deleteItem(row) {

        this.remove({ id: row.id });
        this.snackbar = true;
      },
      previewItem(row) {
        this.setPreviewData({
          name: row.name,
          description: row.description,
          schema: JSON.parse(row.schema),
        });
      },
    },
  };
</script>

<style scoped lang="scss">
  .pagination {
    padding: 10px 0;
    justify-content: flex-end;
  }


</style>

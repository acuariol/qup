<template>
  <v-dialog
      v-model="dialog"
      width="800"
      persistent
  >
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" text color="primary" v-if="value.componentType===type.RADIO" @click.stop.prevent="click">
        关联
      </v-btn>
    </template>

    <v-card>
      <v-card-text>
        <v-row>
          <v-col class="text-left" cols="3"><span class="subtitle-1 font-weight-bold">选项</span></v-col>
          <v-col class="text-left"><span class="subtitle-1 font-weight-bold">关联题目</span></v-col>
        </v-row>
        <v-divider />
        <template v-for="item in itemValue.options">
          <v-row :key="item.uuid" align="center">
            <v-col class="text-left" cols="3">
              {{ item.value }}
            </v-col>
            <v-col class="text-left">
              <v-select
                  hide-details
                  v-model="item.relevance"
                  item-text="title"
                  item-value="uuid"
                  :items="selectableSchema"
                  chips
                  label="请选择"
                  multiple
                  outlined
                  no-data-text="暂无可选"
                  single-line
                  persistent-hint
              />
            </v-col>
          </v-row>
          <v-divider />
        </template>
      </v-card-text>

      <v-card-actions class="px-6">
        <v-spacer></v-spacer>
        <v-btn
            text
            @click="handleCancel"
        >
          取消
        </v-btn>

        <v-btn
            color="primary"
            @click="handleOk"
            text
        >
          确定
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script>

  import { createNamespacedHelpers } from 'vuex';
  import { cloneDeep } from 'lodash';

  const { mapState, mapMutations } = createNamespacedHelpers('form');
  import { type } from '../../const';

  export default {
    name: 'RelevanceBtn',
    props: {
      value: {
        type: Object,
        default: () => Object.assign({}),
      },
    },
    computed: {
      ...mapState(['selectableSchema']),
    },
    watch: {
      value(val) {
        this.itemValue = cloneDeep(val);
      },
    },
    data() {
      return {
        dialog: false,
        type,
        itemValue: {},
      };
    },
    methods: {
      ...mapMutations(['filterSelectableSchema']),
      click() {
        this.filterSelectableSchema({ uuid: this.value.uuid });
      },
      handleCancel(){
        this.dialog = false
        this.$emit('change', this.value.options)
      },
      handleOk(){
        this.dialog = false
        this.$emit('change', this.itemValue.options)
      }
    },
    mounted() {
      this.itemValue = cloneDeep(this.value || {});
    },
  };
</script>

<style scoped>

</style>

import { getFormList } from '@/services/form';

import { differenceBy, findIndex } from 'lodash';
import call from 'await-to-js';
import { v4 as uuidV4 } from 'uuid';
import { saveJSON } from '@/utils/utils';

const form = {
  namespaced: true,
  state: {
    list: [], // 列表
    selected: [],

    condition: {}, // 搜索条件
    loading: false, // 列表加载状态
    total: 0,
    size: 10,
    current: 1,

    editType: 'add',
    editDialogVisible: false,
    step: 'editInfo',

    // 预览
    previewVisible: false,
    isRowPreview: false,
    previewData: {
      name: '',
      schema: {},
      description: '',
    },

    editData: null,  // 新建、编辑所保存的数据
    schema: {},

    selectableSchema: [],
  },
  getters: {
    listLength: state => state.list.length,
  },
  actions: {
    async fetchList({ commit }) {
      commit('setState', { loading: true });
      const [err, response] = await call(getFormList());

      if (!err) {
        const { data, total } = response;
        commit('setState', { list: data, total });
      }
      commit('setState', { loading: false });
    },
  },
  mutations: {
    setState: (state, payload) => {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
    addition(state) {

      state.list.unshift({
        ...state.editData,
        id: uuidV4(),
        schema: JSON.stringify(state.schema || '{}'),
      });

      state.editDialogVisible = false;
      state.editData = null;
      state.schema = {};
      state.step = 'editInfo';

    },
    modify(state) {
      const { editData, schema, list } = state;
      const index = findIndex(list, o => o.id === editData.id);
      list.splice(index, 1, { ...editData, schema: JSON.stringify(schema) });
      state.list = list;

      state.editDialogVisible = false;
      state.editData = null;
      state.schema = {};
      state.step = 'editInfo';

    },
    remove(state, { id }) {
      state.list = state.list.filter(item => item.id !== id);
    },
    filterSelectableSchema(state, { uuid }) {
      const schemaArr = Object.keys(state.schema).map(uuid => ({ ...state.schema[uuid] }))
        .filter(o => o.componentType !== 'helpText');
      const index = findIndex(schemaArr, o => o.uuid === uuid);
      state.selectableSchema = schemaArr.splice(index + 1, schemaArr.length - 1);

    },
    removeMultiple(state) {
      state.list = differenceBy(state.list, state.selected, 'id');
      state.selected = [];
    },
    setPreviewData: (state, payload) => {
      const org = payload ? payload : state.editData;
      state.previewData.name = org.name;
      state.previewData.description = org.description;

      state.previewData.schema = payload ? payload.schema : state.schema;
      state.previewVisible = true;
    },
    exit: (state) => {
      state.editDialogVisible = false;
      state.editData = null;
      state.schema = {};
      state.step = 'editInfo';
    },
  },


};
export default form;

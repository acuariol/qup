import { getFormList } from '@/services/form';

import { cloneDeep, findIndex, differenceBy, concat } from 'lodash';
import moment from 'moment';


const form = {
  namespaced: true,
  state: {
    list: [], // 列表
    condition: {}, // 搜索条件
    loading: false, // 列表加载状态
    total: 0,
    size: 10,
    current: 1,

    editType: 'add',
    editDialogVisible: false,
    step: 'editAct', // 第一步是编辑活动相关的 editAct。 第二步是编辑表单 editForm

    // 预览
    previewVisible: false,
    isRowPreview: false,
    previewData: {
      formName: '',
      schema: {},
      description: '',
    },


    editData: null,  // 新建、编辑所保存的数据
    originalEditData: null,  // 原始数据，
    schema: {},

  },
  getters: {},

  actions: {
    async fetchList() {
      const response = await getFormList();
      console.log(response);
    },

    async addition({ state, getters, commit, dispatch }) {

    },
    async modify({ state, getters, commit, dispatch }) {


    },
    async remove({ dispatch }, payload) {

    },


  },
  mutations: {
    setState: (state, payload) => {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },


    exit: (state) => {
      state.editDialogVisible = false;
    },
  },


};
export default form;

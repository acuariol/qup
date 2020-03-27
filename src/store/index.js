import Vue from 'vue';
import Vuex from 'vuex';
import form from './modules/form';
import call from 'await-to-js';
import { getNotice } from '@/services/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notice: [],
  },
  getters: {
    noticeLength: state => {
      let len = 0;
      const length = state.notice.length;
      for (let i = 0; i < length; i++) {
        if (!state.notice[i].lookOver)
          len++;
      }
      return len;
    },
  },

  actions: {
    async fetchNotice({ commit }) {
      const [err, response] = await call(getNotice());

      if (!err) {
        const { data } = response;
        commit('setState', { notice: data.map(o => ({ ...o, lookOver: false })) });
      }
    },
  },
  mutations: {
    setState: (state, payload) => {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
    clearNotice(state, payload) {
      if (payload) {
        state.notice = state.notice.map(o => payload.id === o.id ? { ...o, lookOver: true } : o);
      } else
        state.notice = state.notice.map(o => ({ ...o, lookOver: true }));
    },
  },
  modules: {
    form,
  },
});

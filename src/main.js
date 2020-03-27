import Vue from 'vue';
import Notifications from 'vue-notification';

// 全局注册echarts主题
import echarts from 'echarts';
import theme from '@/components/charts/theme';
echarts.registerTheme('mui', theme);

import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import store from './store';

import './plugins/element.js';
import '../src/styles/global.scss';
import './mock/index';

Vue.use(Notifications);

Vue.config.productionTip = false;
Vue.config.devtools = true; // 支持vue devtool 调试

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app');

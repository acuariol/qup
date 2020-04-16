import Vue from 'vue';
import Vuetify from 'vuetify/lib';
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#00796B',
        secondary: '#424242',
        accent: '#80CBC4',
        intense:'#00796B',
        container:'#F5F5F5',
        blockIntense:'#f5f5f5'
      },
      dark:{
        primary: '#00796B',
        secondary: '#424242',
        accent: '#80CBC4',
        intense:'#272727',
        container:'#121212',
        blockIntense:'#353535'
      }
    },
  },
});

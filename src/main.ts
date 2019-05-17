import Vue from 'vue';
import App from './App.vue';
import 'vuetify/dist/vuetify.css';
import Vuetify from 'vuetify';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');

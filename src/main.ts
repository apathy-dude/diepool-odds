import Vue from 'vue';
import App from './App.vue';
import 'vuetify/dist/vuetify.css';
import Vuetify from 'vuetify';

Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
  render: (h) => h(App),
}).$mount('#app');

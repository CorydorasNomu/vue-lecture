import Vue from 'vue';
import Bootstrap from 'bootstrap-vue';
import VueChartJs from 'vue-chartjs';
import App from './App.vue';
import router from './router/index';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

Vue.use(Bootstrap)
Vue.use(VueChartJs)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

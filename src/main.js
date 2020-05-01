import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from './store'
import App from './App.vue'

Vue.config.productionTip = false;


Vue.use();

new Vue({
  VueRouter,
  Store,
  render: h => h(App),
}).$mount('#app');

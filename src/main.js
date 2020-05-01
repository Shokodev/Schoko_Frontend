import Vue from 'vue'
//import VueRouter from 'vue-router'
import store from './store/index'
import App from './App.vue'

Vue.config.productionTip = false;


//Vue.use();

new Vue({

  store,
  render: h => h(App),
}).$mount('#app');

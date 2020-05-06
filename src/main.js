import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/index';
import store from './store/index'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;


Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');

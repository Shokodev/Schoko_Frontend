import Vue from 'vue';
import Vuex from 'vuex';
import websocket from './modules/websocket'
import notifications from './modules/notifications'
import settings from './modules/settings'


Vue.use(Vuex);

export default new Vuex.Store({
modules: {
  websocket,
  notifications,
  settings
}
});

import Vue from 'vue';
import Vuex from 'vuex';
import websocket from './modules/websocket'
import notifications from './modules/notifications'
import settings from './modules/settings'
import structure from './modules/structure'
import devices from "./modules/devices"
import bacnetObject from "./modules/bacnetObject";



Vue.use(Vuex);

export default new Vuex.Store({
modules: {
  websocket,
  notifications,
  settings,
  structure,
  devices,
  bacnetObject
}
});

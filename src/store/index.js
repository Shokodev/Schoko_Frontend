import Vue from 'vue';
import Vuex from 'vuex';
import websocket from './modules/websocket'
import notifications from './modules/notifications'
import settings from './modules/settings'
import structure from './modules/structure'
<<<<<<< HEAD
import devices from "./modules/devices"

=======
import devices from "./modules/devices";
import bacnetObject from "./modules/bacnetObject";
>>>>>>> f948b79c6a56883c0a830d67158c3803d776ffc5


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

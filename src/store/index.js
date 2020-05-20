import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import websocket from './modules/websocket'
import notifications from './modules/notifications'
import settings from './modules/settings'
import LogicalView from './modules/logicalView'
import devices from "./modules/devices"
import bacnetObject from "./modules/bacnetObject";



Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    websocket,
    notifications,
    settings,
    LogicalView,
    devices,
    bacnetObject
  },
  plugins: [createPersistedState()]
});

export default store

import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import websocket from './modules/websocket'
import notifications from './modules/notifications'
import settings from './modules/settings'
import LogicalView from './modules/logicalView'
import devices from "./modules/devices"
import bacnetObject from "./modules/bacnetObject";
import bacnetView from "./modules/bacnetView";



Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    websocket,
    notifications,
    settings,
    LogicalView,
    devices,
    bacnetObject,
    bacnetView
  },
  plugins: [createPersistedState({
    paths: ['settings']
  })]
});

export default store

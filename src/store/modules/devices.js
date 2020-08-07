import axios from 'axios';

export const state = {
  devices: [],
  devicesInitialized: false,
  loadingActive: false
};

export const actions = {

  async loadDevices({commit, rootState }) {
    commit('setLoadingActive', true);
    const response = await axios.get(
        rootState.settings.host.protocol + rootState.settings.host.ip +":"+rootState.settings.host.port + "/devices"
    )
    commit('setDevices', response.data);
    commit('setLoadingActive', false);
  },

  async preloadDevices({commit, rootState}) {
   await axios.get(
       rootState.settings.host.protocol + rootState.settings.host.ip +":"+rootState.settings.host.port + "/preload/devices"
    ).then(res => {
     commit('preloadDevices', res.data);
  }).catch((error) => {
  console.log('Cant preload devices: ' + error);
});


  },

  async sendDevices({commit, rootState}, selectedDevices) {
    commit('syncDevices', selectedDevices);
    commit('setLoadingActive', true);
    axios.post(
        rootState.settings.host.protocol + rootState.settings.host.ip +":"+rootState.settings.host.port + "/devices", selectedDevices
    ).then(res => {
      if(res.status === 200) {
        this.dispatch('preloadDevices');
      }
      commit('setLoadingActive', false);
    });
  }
};

export const mutations = {
  syncDevices: (state, devices) => (state.syncdDevices = devices),
  setDevices: (state, devices) => (state.devices = devices),
  preloadDevices: (state, devices) => (state.devices = devices),
  setLoadingActive: (state, loadingActive) => (state.loadingActive = loadingActive)
};

export const getters = {
  getDevices: state => state.devices,
  isOverlayActive: state => state.loadingActive
};
export default {
  state,
  actions,
  mutations,
  getters

};

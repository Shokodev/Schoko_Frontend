import axios from 'axios';

export const state = {
  devices: [],
  devicesInitialized: false,
  loadingActive: false
};

export const actions = {

  async loadDevices({commit}) {
    commit('setLoadingActive', true);
    const response = await axios.get(
      "http://localhost:8098/devices"
    )
    commit('setDevices', response.data);
    commit('setLoadingActive', false);
  },

  async preloadDevices({commit}) {
    const response = await axios.get(
        "http://localhost:8098/preload/devices"
    );
    commit('preloadDevices', response.data)
  },

  async sendDevices({commit}, selectedDevices) {
    commit('syncDevices', selectedDevices);
    commit('setLoadingActive', true);
    axios.post(
      "http://localhost:8098/devices", selectedDevices
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

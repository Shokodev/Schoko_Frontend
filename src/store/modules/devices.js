import axios from 'axios';

export const state = {
  devices: [],
  devicesInitialized: false
};

export const actions = {

  async loadDevices({
    commit
  }) {
    const response = await axios.get(
      "http://localhost:8098/devices"
    );
    commit('setDevices', response.data)
  },

  async preloadDevices({
                      commit
                    }) {
    const response = await axios.get(
        "http://localhost:8098/preload/devices"
    );
    commit('preloadDevices', response.data)
  },


  async sendDevices({commit}, selectedDevices) {
    commit('syncDevices', selectedDevices);
    axios.post(
      "http://localhost:8098/devices", selectedDevices
    ).then(res => {
      if(res.status === 200) {
        this.dispatch('preloadDevices');
      }
    });
  }
};

export const mutations = {
  syncDevices: (state, devices) => (state.syncdDevices = devices),
  setDevices: (state, devices) => (state.devices = devices),
  preloadDevices: (state, devices) => (state.devices = devices)
};

export const getters = {
  getDevices: state => state.devices
};
export default {
  state,
  actions,
  mutations,
  getters

};

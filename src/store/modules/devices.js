import axios from 'axios';

export const state = {
  devices: [],
  syncdDevices: [],
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


  async sendDevices( {commit}, selectedDevices) {
    commit('syncDevices', selectedDevices);
    axios.post(
      "http://localhost:8098/devices", selectedDevices
    )
  }
};

export const mutations = {
  setDevices: (state, devices) => (state.devices = devices),
  syncDevices: (state, devices) => (state.syncdDevices = devices)
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

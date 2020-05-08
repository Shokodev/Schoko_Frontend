import axios from 'axios';

export const state = {
    devices: {}
};

export const actions = {
    async devices({commit}) {
        const response = await axios.get(
            "http://localhost:8098/devices"
        );
        commit('setDevices', response.data)
    }
};
export const mutations = {
    setDevices: (state, devices) => (state.devices = devices)
};

export const getters = {
  getDevices: state => state.devices
};
export default{
    state,
    actions,
    mutations,
    getters

};

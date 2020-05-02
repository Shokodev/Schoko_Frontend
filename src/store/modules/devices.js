import axios from 'axios';

export const state = {
    deviceStructure: {}
};

export const actions = {
    async deviceStructure({commit}) {
        const response = await axios.get(
            "http://localhost:8098/devices"
        );
        commit('setDeviceStructure', response.data)
    }
};
export const mutations = {
    setDeviceStructure: (state, deviceStructure) => (state.deviceStructure = deviceStructure)
};

export const getters = {

};

export default{
    state,
    actions,
    mutations,
    getters

};
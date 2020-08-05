import axios from 'axios';

export const state = {
    logicalView: {}
};

export const actions = {
    // Using axios for REST and getting the information for the Structure view.
    // The data is saved in the store.
    // @author Vogt Andreas,Daniel Reiter, Rafael Grimm
    // @version 1.0
    async readLogicalView({commit, rootState} ) {
        const response = await axios.get(
          "https://" + rootState.settings.host.ip +":"+rootState.settings.host.port + '/logicalview'
        );
        commit('setLogicalView', response.data)
    }
};
export const mutations = {
    setLogicalView: (state, structure) => (state.logicalView = structure)
};

const getters = {
    getLogicalView: state => state.logicalView
};

export default{
    actions,
    mutations,
    getters,
    state
};

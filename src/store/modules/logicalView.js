import axios from 'axios';

export const state = {
    structure: {}
};

export const actions = {
    // Using axios for REST and getting the information for the Structure view.
    // The data is saved in the store.
    // @author Vogt Andreas,Daniel Reiter, Rafael Grimm
    // @version 1.0
    async completeHierarchy({commit}) {
        const response = await axios.get(
            "http://localhost:8098/logicalview"
        );
        commit('setHierarchy', response.data)
    }
};
export const mutations = {
    setHierarchy: (state, structure) => (state.structure = structure)
};

const getters = {
    getHierarchy: state => state.structure
};

export default{
    actions,
    mutations,
    getters,
    state
};

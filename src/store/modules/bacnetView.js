import axios from 'axios';

export const state = {
bacnetView: [],
};

export const actions = {

  async loadBacnetView({commit, rootState }) {
    const response = await axios.get(
      "https://" + rootState.settings.host.ip +":"+rootState.settings.host.port + "/hierarchy"
    )
    commit('bacnetView', response.data);
  },

};

export const mutations = {
  bacnetView: (state, view) => (state.bacnetView = view),

};

export const getters = {
  getBacnetView: state => state.bacnetView,

};
export default {
  state,
  actions,
  mutations,
  getters

};

const state = {
eventList: ["leer"]
};



export const getters = {
getEvents: state => state.Eventlist
};

const mutations = {
  events(state, eventList) {
    state.eventList = eventList;
  }

};
export const actions = {
subscribeBacnetObject({ state, commit}, bacnetObject) {
  if (this.stompClient && this.stompClient.connected) {
    const subscribeURL = "/objects/objectSub";
    this.stompClient.subscribe(
    subscribeURL,
    tick => {
      const BacnetObjectSub = JSON.parse(tick.body);
      commit("updateBacnetObjet", BacnetObjectSub);
    })
  }
}
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

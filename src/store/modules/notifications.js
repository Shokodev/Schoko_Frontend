<<<<<<< HEAD
=======


>>>>>>> 9643176a8e2af862071f40289642f0f556ce7463
const state = {
eventList: ["leer"]
};

<<<<<<< HEAD


export const getters = {
getEvents: state => state.Eventlist
=======
export const getters = {
eventList: state => state.Eventlist
>>>>>>> 9643176a8e2af862071f40289642f0f556ce7463
};

const mutations = {
  events(state, eventList) {
    state.eventList = eventList;
  }

};
export const actions = {
  // eslint-disable-next-line no-unused-vars
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



export const state = {
eventList: []
};

export const getters = {
getEventList: state => state.eventList
};

const mutations = {
  newEvents(state, events) {
    state.eventList = events;
  }

};
export const actions = {
  // eslint-disable-next-line no-unused-vars
  subriceToEvents({ state, commit}) {
    console.log("subscribe to WS")
  if (this.stompClient && this.stompClient.connected) {
    const subscribeURL = "/broker/eventSub";
    this.stompClient.subscribe(subscribeURL, tick => {
      const events = JSON.parse(tick.body);
      commit("newEvents", events);
      console.log(events)
    })
  }
}
};

export default {
  state,
  getters,
  actions,
  mutations
};

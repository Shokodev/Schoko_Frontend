

export const state = {
  eventList:[],
  neweventList:[]
};

export const getters = {
getEventList: state => state.neweventList
};

const mutations = {
  newEvents(state, events) {

  //change Date Format from ISO to LocalString
    state.eventList = events;
    state.neweventList = state.eventList
    for (let i = 0; i < state.eventList.length; i++) {
      state.neweventList[i].timeStamp = new Date(state.eventList[i].timeStamp).toLocaleString()
    }
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

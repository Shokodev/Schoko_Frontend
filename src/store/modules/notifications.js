

export const state = {
  eventList:[],
  neweventList:[],
  scopedObjectName: " "
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
  },
  commitScopedObjectName: (state, scopedObjectName) => (state.scopedObjectName = scopedObjectName),

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
},

  //Used to get events if Tab was closed or new opened
  fetchEvents() {
    const subscribeURL = "/app/getEvents";
    console.log()
    this.stompClient.send(subscribeURL, "Fetch Events", {});
  },

  //send acknowledge or reset to object via objectName
  ackEvent({ commit },objectName){
    commit('commitScopedObjectName',objectName);
    const subscribeURL = "/app/ack";
    this.stompClient.send(subscribeURL, JSON.stringify(state.scopedObjectName), {});
  },
};




export default {
  state,
  getters,
  actions,
  mutations
};

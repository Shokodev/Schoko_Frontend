import Stomp from "webstomp-client";

export const state = () => ({
  websocketURL: "ws://localhost:8098/ws/events",
  connected: false
});

export const actions = {
  connect ({ state, commit }) {

    if (state.connected) return;
    this.socket = new WebSocket(state.websocketURL);
    this.stompClient = Stomp.over(this.socket);
    this.stompClient.debug = msg => {}; // eslint-disable-line
    this.stompClient.connect(
      {
      },
      frame => { // eslint-disable-line 
        commit("setConnected", true);
        console.log("Subscribe");
        this.stompClient.subscribe("/broker/eventSub", tick => {
          const events = JSON.parse(tick.body);
          commit("notifications/events", events, { root: true});
        });
      },
      error => {
        console.log(error);
        commit("setConnected", false);
      }
    );
  }
};

export const mutations = {
  setConnected(state, status) {
    state.connected = status;
  }
};

export const getters = {
  connected: state => state.connected
};

export default {
  state,
  actions,
  mutations,
  getters
}

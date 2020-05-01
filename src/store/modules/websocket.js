import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

export const state = () => ({
  websocketURL: "http://localhost:8098/ws",
  connected: false
});

export const getters = {
  connected: state => state.connected
};

export const mutations = {
  setConnected(state, status) {
    state.connected = status;
  }
};


export const actions = {
  connect({ state, commit }) {
    if (state.connected) return;
    this.socket = new SockJS(state.websocketURL);
    this.stompClient = Stomp.over(this.socket);
    this.stompClient.debug = msg => {}; // eslint-disable-line
    this.stompClient.connect(
      {},
      frame => { // eslint-disable-line 
        commit("setConnected", true);
        this.stompClient.subscribe("/broker/eventSub", tick => {
          const events = JSON.parse(tick.body);
          commit("index/events", events, { root: true});
        });
      },
      error => {
        console.log(error);
        commit("setConnected", false);
      }
    );
  }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

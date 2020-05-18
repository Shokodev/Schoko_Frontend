import Stomp from "webstomp-client";

export const state = () => ({
  websocketURL: "ws://localhost:8098/ws",
  connected: false,
  connect_callback: {},
  error_callback: {},
  frame: {}
});

export const actions = {
  connect ({ state, commit }) {

    if (state.connected) return;
    this.socket = new WebSocket(state.websocketURL);
    this.stompClient = Stomp.over(this.socket);
    this.stompClient.debug = msg => {}; // eslint-disable-line
    console.log("ws is connecting")
    this.stompClient.connect( {},  frame => {
      commit("setConnected", frame.command)
      this.dispatch('subriceToEvents', null, {root: true});
      this.dispatch('fetchEvents', null, {root: true});
    })
  },
};

export const mutations = {
  setConnected(state, status) {
    state.connected = status;
  }
};

export const getters = {
  getConnecionState: state => state.connected
};

export default {
  state,
  actions,
  mutations,
  getters
}

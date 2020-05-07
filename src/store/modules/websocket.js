import Stomp from "webstomp-client";

export const state = () => ({
  websocketURL: "ws://localhost:8098/ws",
  connected: false

});

export const actions = {
  connect ({ state}) {

    if (state.connected) return;
    this.socket = new WebSocket(state.websocketURL);
    this.stompClient = Stomp.over(this.socket);
    this.stompClient.debug = msg => {}; // eslint-disable-line
    this.stompClient.connect(

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

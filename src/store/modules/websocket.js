import Stomp from "webstomp-client";


export const state = () => ({
  connected: false,
  connect_callback: {},
  error_callback: {},
  frame: {}
});

export const actions = {
  connect ({ state, commit, rootState }) {

    if (state.connected) return;
    this.socket = new WebSocket(rootState.settings.host.ws + rootState.settings.host.ip +":"+rootState.settings.host.port + "/ws" );
    this.stompClient = Stomp.over(this.socket);
    this.stompClient.debug = msg => {}; // eslint-disable-line
    console.log("ws is connecting")
    this.stompClient.connect( {},  frame => {
      if(frame.command === 'CONNECTED') {
        console.log(frame.command);
        commit("setConnected", frame.command)
        this.dispatch('subriceToEvents', null, {root: true});
        this.dispatch('fetchEvents', null, {root: true});
      }
    })
  },
};

export const mutations = {
  setConnected(state, status) {
    state.connected = status;
  }
};

export const getters = {
  getConnectionState: state => state.connected
};

export default {
  state,
  actions,
  mutations,
  getters
}

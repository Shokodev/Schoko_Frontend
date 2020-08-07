import axios from 'axios';

export const state = {

    settings: {"port":"BAC0","localDeviceID":"1001","precisionRealValue":2,"scanSeconds":5},

    host:  { "ip":"127.0.0.1",
              "port":"8098",
              "protocol":"https://", //-> http://
              "ws": "wss://" //-> ws://
            },

};
export const actions = {
    // Using axios for the REST communication. The new settings are being send to the backend.
    // Waiting on a response from the server for committing the data to the store and proceeding the application
    // Maybe add a timeout if the server is down
    // @author Vogt Andreas,Daniel Reiter, Rafael Grimm
    // @version 1.0

    setHostConnection({ commit }, host) {
      commit('hostSettings', host)
    },

    async newSettings({ state, commit },settings)  {
        axios.post(
            state.host.protocol + state.host.ip +":"+ state.host.port + "/settings", settings
        )
            .then( res => {
                commit('setSettings', res.data);
            });
    },
    // Read the settings from the server and ad them to the store
    // @author Vogt Andreas,Daniel Reiter, Rafael Grimm
    // @version 1.0
    async readSettings({state, commit}) {
        const response = await axios.get(
            state.host.protocol + state.host.ip +":"+ state.host.port + "/settings"
        );
        commit('backendSettings', response.data);
    }
};

export const mutations = {
    setSettings: (state, settings) => (state.settings = settings),
    backendSettings: (state, settings) => (state.settings = settings),
    hostSettings: (state, host ) => (state.host = host)
};

export const getters = {
    getSettings: state => state.settings,
    getHostIp: state => state.host.ip,
    getHostPort: state => state.host.port,
};

export default {
    state,
    actions,
    mutations,
    getters
}

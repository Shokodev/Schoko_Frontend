import axios from 'axios';

export const state = {
<<<<<<< HEAD
    settings: {"port":"BAC0","siteName":"Site01","siteDescription":"Site","bacnetSeparator":"'","localDeviceID":"1001","precisionRealValue":2}
=======
    settings: {}
>>>>>>> f948b79c6a56883c0a830d67158c3803d776ffc5

};
export const actions = {
    // Using axios for the REST communication. The new settings are being send to the backend.
    // Waiting on a response from the server for committing the data to the store and proceeding the application
    // Maybe add a timeout if the server is down
    // @author Vogt Andreas,Daniel Reiter, Rafael Grimm
    // @version 1.0
    async newSettings({ commit },settings)  {
        axios.post(
            "http://localhost:8098/settings", settings
        )
            .then( res => {
                commit('setSettings', res.data);

            });

    },
    // Read the settings from the server and ad them to the store
    // @author Vogt Andreas,Daniel Reiter, Rafael Grimm
    // @version 1.0
    async readSettings({commit}) {
        const response = await axios.get(
            "http://localhost:8098/settings"
        );
        commit('backendSettings', response.data);
    }
};
export const mutations = {
    setSettings: (state, settings) => (state.settings = settings),
    backendSettings: (state, settings) => (state.settings = settings)
};

export const getters = {
    getSettings: state => state.settings
};

export default {
    state,
    actions,
    mutations,
    getters

}

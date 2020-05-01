import axios from 'axios';

export const state = {
    settings: {"port":"BAC0","siteName":"Anlage","siteDescription":"Site","bacnetSeparator":"'","localDeviceID":"1001","precisionRealValue":2}

};
export const actions = {
    // Using axios for the REST communication. The new settings are being send to the backend.
    // Waiting on a response from the server for committing the data to the store and proceeding the application
    // Maybe add a timeout if the server is down
    // @author Vogt Andreas,Daniel Reiter, Rafael Grimm
    // @version 1.0
    async newSettings({ state, commit })  {
        axios.post(
            "http://localhost:8098/settings", state.settings
        )
            .then( res => {
                commit('setSettings', res.data);

            });

    }
    // Read the settings from the server and ad them to the store
    // @author Vogt Andreas,Daniel Reiter, Rafael Grimm
    // @version 1.0
    /*async readSettings({commit}) {
        const response = await axios.get(
            "http://localhost:8098/settings"
        );
        commit('backendSettings', response.data);
    }*/
};
export const mutations = {
    setSettings: (state, settings) => (state.settings = settings)
};

const getters = {

};

export default {
    actions,
    mutations,
    getters,
    state
}

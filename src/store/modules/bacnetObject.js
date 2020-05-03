

export const state = {
    bacnetObject:[],
};

export const getters = {
bacnetObject: state=> state.BacNetObject
};
const mutations = {
    subBacnetobject(state, object){
        state.bacnetObject=object;
    }

};

export const actions = {
    // eslint-disable-next-line no-unused-vars
    subscribeToBacNetObject({ state, commit},objectName) {
        console.log("subscribe to WS BacNetObject")
        if (this.stompClient && this.stompClient.connected) {
            const subscribeURL = "/app/"+objectName;
            this.stompClient.subscribe(subscribeURL, tick => {
                const object = JSON.parse(tick.body);
                commit("subBacnetobject", object);
                console.log(object)
            })
            console.log("Wurde gesendet:" + objectName)
        }
    },
    endSubToBacNetObject(objectName){
        this.stompClient.unsubscribe('/app/' + objectName);
        console.log("SubEnd:"+objectName)
    },

};

export default {
    state,
    getters,
    actions,
    mutations
};

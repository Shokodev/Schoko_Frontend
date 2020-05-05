

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
            const subscribeURL = "/broker/"+objectName;
            const sendURL = "/app/"+objectName;
            this.stompClient.subscribe(subscribeURL, tick => {

                const object = JSON.parse(tick.body);
                commit("subBacnetobject", object);
                console.log(object)
            })
            this.stompClient.send(sendURL,"",{})
            console.log("Wurde gesendet:" + objectName)
        }
    },
    endSubToBacNetObject(){
        this.stompClient.send("/app/end","B'H'HGrp11CH'MxCrt'TFl",{})
        this.stompClient.unsubscribe("broker/B'H'HGrp11CH'MxCrt'TFl");

        console.log("SubEnd: B'H'HGrp11CH'MxCrt'TFl")
    },

};
export default {
    state,
    getters,
    actions,
    mutations
};

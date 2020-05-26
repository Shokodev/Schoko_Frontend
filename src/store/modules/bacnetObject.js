

export const state = {
    bacnetObject: []
};

export const getters = {
getBacnetObject: state=> state.bacnetObject
};



const mutations = {
    subBacnetobject(state, object){
        state.bacnetObject=object;
    }

};

export const actions = {
    // eslint-disable-next-line no-unused-vars
    subscribeToBacNetObject({ state, commit},objectName) {
        console.log("subscribe to WS"+objectName)
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
    endSubToBacNetObject(subEndObjectName){
        this.buffer=subEndObjectName
        console.log(subEndObjectName)
        this.stompClient.send("/app/end",this.buffer,{})
        this.stompClient.unsubscribe("broker/"+this.buffer);
        //console.log("SubEnd:" + subendObjectName) // Warum wird hier nicht wie oben das richtige dargestellt?
    },

};
export default {
    state,
    getters,
    actions,
    mutations
};

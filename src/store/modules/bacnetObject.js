

export const state = {
    bacnetObject: [],
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
    endSubToBacNetObject({commit},subEndObjectName){
        console.log("Unsubscribe"+subEndObjectName)
        if (this.stompClient && this.stompClient.connected) {
            const subscribeURL = "/broker/"+subEndObjectName;
            const sendURL = "/app/end/"+subEndObjectName;
            this.stompClient.unsubscribe(subscribeURL, tick => {

                console.log(JSON.parse(tick.body)) ;
                commit("subBacnetobject", null);

            })
            this.stompClient.send(sendURL,subEndObjectName,{})
            console.log("Wurde gesendet:" + subEndObjectName)
        }

    },
    sendValueToBacNetObject(subObjectName, property){
        const sendURL = "/app/setValue/" + subObjectName;
        this.stompClient.send(sendURL,property,{})
        console.log("Wurde gesendet");
    }

};
export default {
    state,
    getters,
    actions,
    mutations
};

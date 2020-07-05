

export const state = {
    bacnetObject: [],
    property: {},

};

export const getters = {
getBacnetObject: state=> state.bacnetObject
};



const mutations = {
    subBacnetobject(state, object){
        state.bacnetObject=object;
    },
    setWriteProperty(state,property){
        state.property= property
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
                //console.log(object)
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
    sendValueToBacNetObject({state,commit}, property){
        commit("setWriteProperty", property)
        let result = state.bacnetObject.find(oblject=>{return oblject['propertyIdentifier']==='object-name'})
        const sendURL = "/app/setValue/" + result.value;
        this.stompClient.send(sendURL,JSON.stringify(property),{})
        console.log("Wurde gesendet an:"+sendURL+"Wert:"+property.value);

    },
    // eslint-disable-next-line no-unused-vars
    releaseValueToBacNetObject({state,commit},objectName){
        const sendURL = "/app/releaseValue/" + objectName;
        this.stompClient.send(sendURL)
        console.log("Wurde gesendet an:"+sendURL+"Release"+objectName);
    }


};
export default {
    state,
    getters,
    actions,
    mutations
};

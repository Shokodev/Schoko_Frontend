<template>
    <v-bottom-sheet v-model="sheet" persistent>
    <v-sheet class="text-center" height="60em">
        <v-btn
                class="mt-6"
                text
                color="black"
                @click="$emit('closeDatapoint'), sheet=!sheet,endWS()"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
    <div class="text-center">
        <Binary></Binary>
    </div>
            </v-sheet>
        </v-bottom-sheet>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Binary from "./PropertyView/Binary";
    export default {
        name: "Datapoint",
        components: {Binary},
        props: {
            node: Object
        },
        data() {
            return {
                sheet: true,
                transl:[],
                headers: [
                    {
                        align: 'start',
                        sortable: false,
                        value: 'description',
                    },
                    {text: 'Identifier', value: 'propertyIdentifier'},
                    {text: 'Value', value: 'value'},

                ],
                translate: [
                    {   value : 'description', de: "Beschreibung"
                    },
                    {   value :'present-value', de: "Aktueller Wert"
                    },
                    {   value :'object-identifier', de: "Objekt Identifier"
                    },
                    {   value :'object-name', de: "Objekt Name"
                    },
                    {   value :'out-of-service', de: "Ausser Betrieb"
                    },
                    {   value :'active-text', de: "Aktiver Text"
                    },
                    {   value :'inactive-text', de: "Inaktiver Text"
                    },
                    {   value :'polarity', de: "Polarität"
                    },
                    {   value :'state-text', de: "Status Text"
                    },
                    {   value :'priority-array', de: "Prioritäten"
                    }

                    ]
            }
        },
        created() {
            //do something after creating vue instance
            this.loadObject();


        },
        computed: {
            ...mapGetters(["getBacnetObject"]),
            bacNetObject: function () {
                let transl = this.getBacnetObject
                /*let translateName = this.translate
                transl.forEach(function(transl){
                    for (let i = 0; i < translateName.length; i++) {

                        if(translateName[i].value === transl.propertyIdentifier)
                        {
                            transl.propertyIdentifier=translateName[i].de
                        }

                    }

                })*/
                return transl
            }
        },
        methods: {
            ...mapActions([
                'subscribeToBacNetObject',
                'endSubToBacNetObject',
                'sendValueToBacNetObject',
                'releaseValueToBacNetObject'

            ]),

            loadObject: function () {
                this.subscribeToBacNetObject(this.node.objectName);

            },
            endWS: function () {
                this.endSubToBacNetObject(this.node.objectName);
            },
            sendProperty: function (value) {
                let obliect = {
                    propertyIdentifier: 'present-value',
                    value: value
                }
                this.sendValueToBacNetObject(obliect)


            },
            releaseValue: function () {
            this.releaseValueToBacNetObject(this.node.objectName)
            }




        },
    };


</script>

<style scoped>

</style>

<template>
    <div class="text-center">
        <v-bottom-sheet v-model="sheet" persistent>

            <v-sheet class="text-center" height="60em">
                <v-btn
                        class="mt-6"
                        text
                        color="error"
                        @click="$emit('closeDatapoint'), sheet=!sheet,endWS()"
                >close</v-btn>


                <v-expansion-panels>
                    <v-expansion-panel
                            v-for="item in bacNetObject" :key="item.propertyIdentifier">
                        <v-expansion-panel-header
                                :disabled="item.propertyIdentifier!== 'present-value'"
                                :hide-actions="item.propertyIdentifier!== 'present-value'">
                            {{ item.propertyIdentifier }}: {{item.value}}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-text-field v-model="item.value">

                            </v-text-field>
                            <v-btn @click= "sendProperty(item.value)">Send</v-btn>
                            <v-btn @click= "releaseProperty(item.value)">Freigeben</v-btn>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>

            </v-sheet>
        </v-bottom-sheet>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "Datapoint",
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
                    {
                        description: "Beschreibung"
                    },
                    {  'present-value': "Aktueller Wert"}

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
                transl.forEach(function(transl){

                    const translate = [
                        {
                             description: "Beschreibung"
                        },
                        {    'present-value': "Aktueller Wert"}

                    ];

                    for (let i = 0; i < translate.length; i++) {

                        if(translate[i].keys(transl.propertyIdentifier))
                        {console.log(translate[i])
                            transl.propertyIdentifier=translate[i].value
                        }
                    }

                })
                return transl
            }
        },
        methods: {
            ...mapActions([
                'subscribeToBacNetObject',
                'endSubToBacNetObject',
                'sendValueToBacNetObject'

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



        },
    };


</script>

<style scoped>

</style>

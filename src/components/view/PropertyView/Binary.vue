<template>
    <div class="text-center">
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    Aktueller Wert: {{bacNetObject[0].value}}
                </v-expansion-panel-header>
                <v-expansion-panel-content @click="dropdownValue">
                    <v-overflow-btn
                            class="my-2"
                            items="hoi"
                            label=""
                            target="#dropdown-example"
                    ></v-overflow-btn>
                    <v-btn>Send</v-btn>
                    <v-btn>Freigeben</v-btn>


                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header
                        :disabled="true"
                        :hide-actions="true">
                    Objekt Identifier: {{bacNetObject[1].value}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header
                        :disabled="true"
                        :hide-actions="true">
                    Objekt Name: {{bacNetObject[2].value}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header
                        :disabled="true"
                        :hide-actions="true">
                    Beschreibung: {{bacNetObject[3].value}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header
                        :disabled="true"
                        :hide-actions="true">
                    Aktiver Text: {{bacNetObject[4].value}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header
                        :disabled="true"
                        :hide-actions="true">
                    Inaktiver Text: {{bacNetObject[5].value}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header
                        :disabled="true"
                        :hide-actions="true">
                    Ausser Betrieb: {{bacNetObject[6].value}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header
                        :disabled="true"
                        :hide-actions="true">
                    Polarität: {{bacNetObject[7].value}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header
                        :disabled="true"
                        :hide-actions="true">
                    Priotität: {{bacNetObject[8].value}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Binary",
        data() {

            return {
                sheet: true,
                transl:[],
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

        computed: {
            ...mapGetters(["getBacnetObject"]),
            bacNetObject: function () {
                let transl = this.getBacnetObject
                return transl
            }
        },
        methods: {
            ...mapActions([
                'subscribeToBacNetObject',
                'sendValueToBacNetObject',
                'releaseValueToBacNetObject'

            ]),
            dropdownValue: function (){
                let result = this.bacnetObject.find(oblject=>{return oblject['propertyIdentifier']==='inactive-text'})
                console.log(result)
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
            },
        },
    }

</script>

<style scoped>

</style>
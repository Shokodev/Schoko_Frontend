<template>
    <div class="text-center">
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    Aktueller Wert: {{propertyName("present-value")}}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-select
                            v-on:click="dropdownValue"
                            class="my-2"
                            :items="items"
                            label="Wert"
                            target="#dropdown-example"
                            v-model="sendValue"
                            solo
                    ></v-select>
                    <v-btn  @click="sendProperty">Send</v-btn>
                    <v-btn>Freigeben</v-btn>

                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header
                        :disabled="true"
                        :hide-actions="true">

                    Objekt Identifier: {{propertyName("object-identifier")}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header
                        :disabled="true"
                        :hide-actions="true">
                    Objekt Name: {{propertyName("object-name")}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header
                        :disabled="true"
                        :hide-actions="true">
                    Beschreibung: {{propertyName("description")}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header
                        :disabled="true"
                        :hide-actions="true">
                    Aktiver Text: {{propertyName("active-text")}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header
                        :disabled="true"
                        :hide-actions="true">
                    Inaktiver Text: {{propertyName("inactive-text")}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header
                        :disabled="true"
                        :hide-actions="true">
                    Ausser Betrieb: {{propertyName("out-of-service")}}</v-expansion-panel-header>
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
                sendValue: "",
                sheet: true,
                items: [],
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
        },
        methods: {
            ...mapActions([
                'subscribeToBacNetObject',
                'sendValueToBacNetObject',
                'releaseValueToBacNetObject'

            ]),
            sendProperty: function () {

                let obliect = {
                    propertyIdentifier: 'present-value',
                    value: this.sendValue
                }
                this.sendValueToBacNetObject(obliect)
            },
            releaseValue: function () {
                this.releaseValueToBacNetObject(this.node.objectName)
            },
            dropdownValue: function () {
                this.items.push(this.propertyName("active-text"));
                this.items.push(this.propertyName("inactive-text"));

            },
            propertyName: function (searchName) {
            return this.getBacnetObject.find(oblject=>{return oblject['propertyIdentifier']===searchName}).value
            }
        }
    }

</script>

<style scoped>

</style>
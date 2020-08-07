<template>
    <div class="text-center">
        <v-expansion-panels class="pa-10">
            <v-expansion-panel>
                <v-expansion-panel-header class="font-weight-bold">
                  Aktueller Wert: <span class="ma-2 font-weight-regular"> {{propertyName("present-value")}}</span>
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
                        :hide-actions="true"
                        class="font-weight-bold">

                  Objekt Identifier:  <span class="ma-2 font-weight-regular">{{propertyName("object-identifier")}}</span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                </v-expansion-panel-content>
            </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
                :disabled="true"
                :hide-actions="true"
                class="font-weight-bold">

              Priorität:  <span class="ma-2 font-weight-regular">{{propertyName("priority-array")}}</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
            </v-expansion-panel-content>
          </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header
                        :disabled="true"
                        :hide-actions="true"
                        class="font-weight-bold">
                    Objekt Name: <span class="ma-2 font-weight-regular">{{propertyName("object-name")}}</span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                </v-expansion-panel-content>
            </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
                :disabled="true"
                :hide-actions="true"
                class="font-weight-bold">
              Beschreibung: <span class="ma-2 font-weight-regular">{{propertyName("description")}}</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
                :disabled="true"
                :hide-actions="true"
                class="font-weight-bold">
              Aktiv Text: <span class="ma-2 font-weight-regular">{{propertyName("active-text")}}</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
                :disabled="true"
                :hide-actions="true"
                class="font-weight-bold">
              Inaktiv Text: <span class="ma-2 font-weight-regular">{{propertyName("inactive-text")}}</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
                :disabled="true"
                :hide-actions="true"
                class="font-weight-bold">
              Ausser Betrieb: <span class="ma-2 font-weight-regular">{{propertyName("out-of-service")}}</span>
            </v-expansion-panel-header>
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
                this.releaseValueToBacNetObject(this.propertyName("object-name"))
            },

            dropdownValue: function () {
                this.items.push(this.propertyName("active-text"));
                this.items.push(this.propertyName("inactive-text"));

            },
            propertyName: function (searchName) {
            return this.getBacnetObject.find(property=>{return property['propertyIdentifier']===searchName}).value
            }
        }
    }

</script>

<style scoped>

</style>

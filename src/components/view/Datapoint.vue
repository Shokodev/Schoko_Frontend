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
                            v-for="item in getBacnetObject" :key="item.propertyIdentifier">
                        <v-expansion-panel-header
                                :disabled="item.propertyIdentifier!== 'present-value'">{{ item.propertyIdentifier }}: {{item.value}}</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-text-field v-model="item.value">

                            </v-text-field>
                            <v-btn @click= "sendProperty()">Send</v-btn>
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
                headers: [
                    {
                        align: 'start',
                        sortable: false,
                        value: 'description',
                    },
                    {text: 'Identifier', value: 'propertyIdentifier'},
                    {text: 'Value', value: 'value'},

                ],
            }
        },
        created() {
            //do something after creating vue instance
            this.loadObject();
        },
        computed: {
            ...mapGetters(["getBacnetObject"])
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
                console.log(this.node.objectName)
                this.endSubToBacNetObject(this.node.objectName);
            },
            sendProperty: function (item,value) {
                console.log(item+value)
            }


        },
    };


</script>

<style scoped>

</style>
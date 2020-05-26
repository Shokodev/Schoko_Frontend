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

                <div>{{node.objectName}}</div>

                <v-data-table light md="2"
                              :headers="headers"
                              :items="getBacnetObject"
                              :items-per-page="20"
                              class="elevation-1"
                >

                </v-data-table>

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
                'endSubToBacNetObject'

            ]),

            loadObject: function () {
                this.subscribeToBacNetObject(this.node.objectName);

            },
            endWS: function () {
                console.log(this.node.objectName)
                this.endSubToBacNetObject(this.node.objectName);
            }

        },
    };


</script>

<style scoped>

</style>
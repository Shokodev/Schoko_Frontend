<template>
    <div class="text-center">
        <v-bottom-sheet v-model="sheet" persistent>

            <v-sheet class="text-center" height="60em">
                <v-btn
                        class="mt-6"
                        text
                        color="error"
                        @click="$emit('closeDatapoint'), sheet=!sheet"
                >close</v-btn>
<div>{{node.objectName}}</div>


                <div class="py-3">This is a bottom sheet using the persistent prop</div>
            </v-sheet>
        </v-bottom-sheet>
    </div>
</template>

<script>
    export default {
        name: "Datapoint",
        props: {
            node: Object
        },
        data() {
            return {
                sheet: true,
            }
        },

    }
</script>

<style scoped>

</style>
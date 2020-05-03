<template>
    <button  v-on:click="sendSettings">Send Default Settings</button>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "StructureView",
        data() {
            return {

            }
        },

        methods: {
            ...mapActions([
                'newSettings'


            ]),
            sendSettings: function () {
                this.newSettings();
            },
        }
    };
</script>

<style scoped>

</style>
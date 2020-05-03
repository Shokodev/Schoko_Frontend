<template>
    <button  v-on:click="structure">Struktur</button>
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
                'completeHierarchy'


            ]),
            structure: function () {
                this.completeHierarchy();
            }
        }
    };
</script>

<style scoped>

</style>
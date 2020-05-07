<template>
    <button  v-on:click="structure">LogicalView</button>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: "LogicalView",
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

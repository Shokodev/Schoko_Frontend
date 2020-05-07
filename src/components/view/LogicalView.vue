<template>
  <div class="logicalview">
    <h1 class="subheading grey--text">Logische Sicht</h1>
    <button  v-on:click="structure">LogicalView</button>
  </div>
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

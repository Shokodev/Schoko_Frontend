<template>
  <div class="logicalview">
    <h1 class="subheading grey--text">Logische Sicht</h1>
    <v-card
      class="mx-auto"
    >
      <v-card-text>

       <StructureView
               :node="getLogicalView"
               :name="objectName"
       >
       </StructureView>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import StructureView from "./StructureView";


    export default {
        name: "LogicalView",
      components: {StructureView},
      data() {
            return {
              sheet: false,
              objectName: "objectName",

            }
        },

        methods: {
            ...mapActions([
                'readLogicalView'
            ]),
            readLogiView: function () {
                this.readLogicalView();
            },
          openNode() {
            this.expanded = !this.expanded;
            if (!this.hasChildren) {
              this.$emit('onClick', this.node);
            }}
        },
        computed: {
          ...mapGetters([
            'getLogicalView'
          ]),
        },
        mounted() {
          this.readLogiView();
        }
    };
</script>

<style scoped>

</style>

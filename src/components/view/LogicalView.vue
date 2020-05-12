<template>
  <div class="logicalview">
    <h1 class="subheading grey--text">Logische Sicht</h1>
    <button  v-on:click="readLogiView">LogicalView</button>
    <v-card
      class="mx-auto"
    >
      <v-card-text>
        <v-treeview
          :items="getLogicalView.children"
          item-text=name
          shaped
          hoverable
        >
        </v-treeview>
      </v-card-text>
    </v-card>

    <template>
      <div class="text-center">
        <v-bottom-sheet v-model="sheet" persistent>
          <template v-slot:activator="{ on }">
            <v-btn
              color="green"
              dark
              v-on="on"
            >
              Open Persistent
            </v-btn>
          </template>
          <v-sheet class="text-center" height="200px">
            <v-btn
              class="mt-6"
              flat
              color="error"
              @click="sheet = !sheet"
            >close</v-btn>
            <div class="py-3">This is a bottom sheet using the persistent prop</div>
          </v-sheet>
        </v-bottom-sheet>
      </div>
    </template>

  </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: "LogicalView",
        data() {
            return {
              sheet: false,

            }
        },

        methods: {
            ...mapActions([
                'readLogicalView'
            ]),
            readLogiView: function () {
                this.readLogicalView();
            }
        },
        computed: {
          ...mapGetters([
            'getLogicalView'
          ])
        }
    };
</script>

<style scoped>

</style>

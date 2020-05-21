<template>
  <div class="bacnetview">
    <h1 class="subheading grey--text">BACnet Sicht</h1>
    <v-container>
      <v-btn v-on:click="loadBacnetView" block color="secondary" dark>load</v-btn>
      <StructureView
      :node="getBacnetView"
      :name="name"
      >
      </StructureView>
    </v-container>
  </div>
</template>


<script>
import { mapGetters, mapActions} from "vuex";
import StructureView from "./StructureView"

export default {
  name: "BacnetView",
  data() {
    return {
      nodeChildren : {
        objectName: "Nodes konnten nicht geladen werden",
        description: "Einstellungen Prüfen",
      },
      name: "name",
    }
  },

  components: {
    StructureView
  },

  mounted() {
    this.loadBacnetView();
  },

  methods: {
    ...mapActions([
      'loadBacnetView'
    ]),
  },

  computed: {
    ...mapGetters(["getBacnetObject", "getBacnetView"])
  },


}
</script>

<style >

</style>

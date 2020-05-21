<template>
  <div class="bacnetview">
    <h1 class="subheading grey--text">BACnet Sicht</h1>
    <v-container>
      <v-btn v-on:click="loadSite" block color="secondary" dark>load</v-btn>
      <StructureView
      :node="nodeChildren"
      :name="name"
      >
      </StructureView>
    </v-container>
  </div>
</template>


<script>
import axios from 'axios';

import { mapGetters } from "vuex";
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


  methods: {
     loadSite: async function() {
      let siteNode = await this.httpReq()
      this.nodeChildren = siteNode.data
        console.log(this.nodeChildren)
      },



    httpReq : async() => {
      return axios.get("http://192.168.1.105:8098/hierarchy")
    }
  },
  computed: {
    ...mapGetters(["getBacnetObject"])
  },

}
</script>

<style >

</style>

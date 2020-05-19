<template>
  <div class="bacnetview">
  <h1 class="subheading grey--text">BACnet Sicht</h1>
    <v-container >

      <v-btn  v-on:click="loadSite" block color="secondary" dark>load Site</v-btn>

    <tree-view v-for="node in nodes"></tree-view>

    </v-container>



  </div>
</template>


<script>
import axios from 'axios';
import TreeView from './TreeView.vue'
import { mapGetters } from "vuex";

export default {
  name: "BacnetView",
  data() {
    return {
      siteNodes: [],
    }
  },

  components: {
    TreeView
  },

  methods: {
     loadSite: async function() {
      let fetchedNodes = await this.httpReq()
      this.siteNodes = fetchedNodes.data.children
        console.log(this.siteNodes)
      },

    httpReq : async() => {
      return axios.get("http://localhost:8098/hierarchy")
    }
  },
  computed: {
    ...mapGetters(["getBacnetObject"])
  },

}
</script>

<style >

</style>

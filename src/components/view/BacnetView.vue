<template>
<div class="bacnetview">
  <h1 class="subheading grey--text">BACnet Sicht</h1>
  <v-container>

<v-row
cols="1"
>
<v-card
  class="mx-auto" max-width="800" outlined
>
<v-btn block color="secondary" dark>Block Button</v-btn>
</v-card>
</v-row>

<v-row
cols="1"
>
<v-card
  class="mx-auto" max-width="800" outlined
>
<v-btn block color="secondary" dark>Block Button</v-btn>
</v-card>
</v-row>

  </v-container>


</div>
</template>


<script>
import axios from 'axios';
import { mapGetters } from "vuex";

export default {
  name: "BacnetView",
  data() {
    return {
    }
  },

  mounted() {

  },

  methods: {
     loadSite: async function() {
      let siteNode = await this.httpReq("Site01")
      this.nodeChildren = siteNode.data.children
        console.log(this.nodeChildren)
      },
    loadChildren: function(child) {
      this.nodeParent = child; // Does not work..
      this.nodeChildren = child.children;
      console.log(child.children)
    },
    loadParent: function() {
      console.log(this.nodeParent)
      this.nodeChildren = this.nodeParent.children;
      console.log(this.nodeChildren)
    },
    httpReq : async(path) => {
      return axios.get("http://localhost:8098/structure/" + path)
    }
  },
  computed: {
    filter () {
    return this.caseSensitive
      ? (item, search, textKey) => item[textKey].indexOf(search) > -1
      : undefined
  },
    ...mapGetters(["getBacnetObject"])
  },

}
</script>

<style >

</style>

<template>
<div>
  <button v-on:click="loadSite">Load Site01</button>
  <p>
    {{siteName}}
  </p>
  <p>
    <span v-on:click="loadParent">{{nodeParent.objectName}}{{nodeParent.description}}</span>
  </p>

  <div v-on:click="loadChildren(child)" :key="child.objectName" v-for="child in nodeChildren">
    <span>{{child.objectName}}{{child.description}}</span>
  </div>
</div>
</template>


<script>
import axios from 'axios';

export default {
  name: "BacnetView",
  data() {
    return {
      siteName: "Site01",
      bacnetNode: "",
      nodeChildren: [],
      nodeParent: [],
      activeNode: "",
      httpResp: {}
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
  }
}
</script>

<style >

</style>

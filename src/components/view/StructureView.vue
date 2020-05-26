<template>
  <div
  :style="{'margin-left' : '${depth * 20'}"
  >

    <v-btn @click="openNode" block color="secondary" dark>
      {{nodeName}} ({{node.description}})
      <div>
        <Datapoint :node="node" @closeDatapoint="showDatapoint= false" v-if="showDatapoint"></Datapoint>
      </div>
    </v-btn>

    <div v-if="expanded">
      <StructureView
      v-for="child in node.children"
      :node="child"
      :name="name"
      :key="child.nodeName"
      />
    </div>


  </div>
</template>

<script>
  import Datapoint from "./Datapoint";
  export default {
    name: 'StructureView',
    components: {Datapoint},
    props: {
      node: Object,
      name: String
    },
    data() {
      return {
        expanded: false,
        showDatapoint: false,

      }
    },

    computed: {
      hasChildren() {
        return this.node.children;
      },
      nodeName(){
        return this.node[this.name];
      }
    },

    methods: {
  openNode() {
    this.expanded = !this.expanded;
    if (!this.hasChildren) {
        this.showDatapoint = true;
    }
  },

  }
}


</script>

<style scoped>

.type {
  margin-left: 10px;
}
</style>

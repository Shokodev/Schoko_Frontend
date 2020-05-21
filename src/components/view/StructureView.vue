<template>
  <div
  :style="{'margin-left' : '${depth * 20'}"
  >

    <v-btn @click="openNode" block color="secondary" dark>{{nodeName}} ({{node.description}})
      <v-btn
        color="primary"
        @click="overlay = !overlay"
      >
              <v-icon>mdi-arrow-right-bold </v-icon>
      </v-btn>


      <v-overlay :value="overlay">

    <v-btn
      icon
      @click="overlay = false"
    >
      <v-icon>close</v-icon>
    </v-btn>
  </v-overlay>

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
  export default {
    name: 'StructureView',
    props: {
      node: Object,
      name: String
    },
    data() {
      return {
        expanded: false,
        overlay: false,
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
      this.$emit('onClick', this.node);
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

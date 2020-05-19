<template>
  <div
  :style="{'margin-left' : '${depth * 20'}"
  >

    <v-btn @click="openNode" block color="secondary" dark>{{node.objectName}} ({{node.description}})</v-btn>

    <div v-if="expanded">
      <StructureView
      v-for="child in node.children"
      :node="child"
      :key="child.objectName"
      />
    </div>

  </div>
</template>

<script>
  export default {
    name: 'StructureView',
    props: {
      node: Object,
    },
    data() {
      return {
        expanded: false
      }
    },

    computed: {
      hasChildren() {
        return this.node.children;
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

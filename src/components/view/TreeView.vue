<template>
  <div class="tree-menu">
    <div>{{ name }}</div>
    <tree-menu
      v-for="node in nodes"
      :nodes="node.nodes"
      :label="node.name"
      :key="node.name"
    >
    </tree-menu>
  </div>
</template>
<script>
  export default {
    props: [ 'name', 'nodes' ],
    name: 'tree-view'
  }
</script>

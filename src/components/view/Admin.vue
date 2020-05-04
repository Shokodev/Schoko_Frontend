<template>
  <div>
    <button  v-on:click="connectToWs">Verbinden</button>
    <button  v-on:click="loadEvents">Events</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {

    }
  },

methods: {
  ...mapActions([
    'connect',
    'newSettings',
    'completeHierarchy',
    'deviceStructure',
    'subriceToEvents'
  ]),

  connectToWs: function () {
    this.connect();
  },
  loadEvents: function () {
    this.subriceToEvents();
  }
},
};
</script>

<style>
</style>

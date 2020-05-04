<template>
  <div>
    <button  v-on:click="connectToWs">Verbinden</button>
    <button  v-on:click="loadEvents">Events</button>
    <button  v-on:click="loadObject">Object Laden</button>
    <button  v-on:click="endWS">End Object</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {
      objectName:"B'H'HGrp11CH'MxCrt'TFl"

    }
  },

methods: {
  ...mapActions([
    'connect',
    'newSettings',
    'completeHierarchy',
    'deviceStructure',
    'subriceToEvents',
    'subscribeToBacNetObject',
    'endSubToBacNetObject'

  ]),

  connectToWs: function () {
    this.connect();
  },
  loadEvents: function () {
    this.subriceToEvents();
  },
  loadObject: function () {
    this.subscribeToBacNetObject(this.objectName);
  },
  endWS: function () {
    this.endSubToBacNetObject(this.objectName);
  }

},
};
</script>

<style>
</style>

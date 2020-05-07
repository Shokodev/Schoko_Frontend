<template>
  <div>
    <v-container class="my-5">

      <v-btn rounded color  v-on:click="connectToWs">Verbinden</v-btn>
      <v-btn rounded color  v-on:click="loadEvents">Events</v-btn>
      <v-btn rounded color  v-on:click="loadObject">Object Laden</v-btn>
      <v-btn rounded color  v-on:click="endWS">End Object</v-btn>

      <v-card class="ma-3">

        <a>lorem</a>

      </v-card>
    </v-container>

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
    this.endSubToBacNetObject("B'H'HGrp11CH'MxCrt'TFl");
  }

},
};
</script>

<style>
</style>

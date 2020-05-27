<template>
  <div class="admin">
    <h1 class="subheading grey--text">Admin</h1>
    <v-container class="my-5">
      <v-btn rounded color  v-on:click="connectToWs">Verbinden</v-btn>
      <v-btn rounded color  v-on:click="loadEvents">Events</v-btn>
    </v-container>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Admin',
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


},
};
</script>

<style>
</style>

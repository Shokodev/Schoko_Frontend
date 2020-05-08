<template>
  <div class="devices">
    <h1 class="subheading grey--text">Geräte</h1>
<v-btn outlined mx="4" v-on:click="devices">Device</v-btn>
<v-btn outlined mx="4" v-on:click="sendSelectedDevices">Send Devices</v-btn>

<v-card class="mx-auto"
max-width="800"
tile
>
<v-list-item v-for="device in getDevices" :key="device.name" >
  <v-list-item-content>
    <v-list-item-title>
      {{ device.name }}
    </v-list-item-title>
  </v-list-item-content>
</v-list-item>


</v-card>



</div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  name: "Devices",
  data() {
    return {

    }
  },

  methods: {
    ...mapActions([
      'loadDevices',
      'sendDevices'


    ]),
    devices: function() {
      this.loadDevices();
    },
    sendSelectedDevices: function() {
      this.sendDevices();
    }
  },
  computed: {
    ...mapGetters([
      'getDevices'
    ])
  }
};
</script>

<style scoped>

</style>

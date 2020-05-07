<template>
<button v-on:click="devices">Device</button>
</template>

<script>
import {
  mapActions
} from 'vuex'
export default {
  name: "Devices",
  data() {
    return {

    }
  },

  methods: {
    ...mapActions([
      'deviceStructure'


    ]),
    devices: function() {
      this.deviceStructure();
    }
  }
};
</script>

<style scoped>

</style>
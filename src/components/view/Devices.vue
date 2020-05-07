<template>
  <div class="devices">
    <h1 class="subheading grey--text">Geräte</h1>
<button v-on:click="devices">Device</button>
</div>
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

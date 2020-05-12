<template>
<div class="devices">
  <h1 class="subheading grey--text">Geräte</h1>
<v-card class="mx-auto" max-width="800" outlined>

    <v-container fluid>
      <v-row>


        <v-col cols="12" sm="6">
          <v-subheader v-text="'Kontroller auswählen'"></v-subheader>
        </v-col>

        <v-col cols="12" sm="6">
          <v-select
            v-model="selectedDevices"
            :items="getDevices"
            item-text="name"
            item-value=getDevices
            label="Auswählen"
            multiple
            chips
            return-object
            hint="Zu importierende Kontroller auswählen"
            persistent-hint
          ></v-select>
        </v-col>



          <v-col cols="12" md="6">
            <v-btn outlined v-on:click="devices">Geräte suchen</v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-btn outlined v-on:click="sendSelectedDevices">Auswahl senden</v-btn>
          </v-col>
      </v-row>
    </v-container>


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
      selectedDevices: []
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
      this.sendDevices(this.selectedDevices);
      console.log(this.selectedDevices)
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

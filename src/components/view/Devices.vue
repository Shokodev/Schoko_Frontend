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

<v-card lightgrey class="mx-auto" max-width="800" v-for="devices in getDevices" :key="devices.name" >
  <v-container fluid>
    <v-row>
      <v-col cols="6" sm="3" >
        <v-card-title>{{devices.name}}</v-card-title>
        <v-subheader v-text="devices.modelName"></v-subheader>
      </v-col>
      <v-col cols="6" sm="3" >
        <v-subheader v-text="devices.description"></v-subheader>
      </v-col>
      <v-col cols="6" sm="3" >
      </v-col>
      <v-col cols="6" sm="3" >
      <v-chip v-if="devices.alreadyImported" color="green">Importiert</v-chip>
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
      overlay: false,
      selectedDevices: []
    }
  },

  methods: {
    ...mapActions([
      'loadDevices',
      'sendDevices',
      'preloadDevices'
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
  },

  mounted() {
    this.preloadDevices();
  }

};
</script>

<style scoped>

</style>

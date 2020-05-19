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
            <v-btn outlined v-on:click="devices" >Geräte suchen</v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-btn outlined v-on:click="sendSelectedDevices" >Auswahl importieren</v-btn>
          </v-col>
      </v-row>
    </v-container>
</v-card>

<v-card lightgrey class="mx-auto" max-width="800" v-for="devices in getDevices" :key="devices.name" >
  <v-container>
    <v-layout row>
      <v-flex md2>
        <v-subheader v-text="devices.name"></v-subheader>
      </v-flex>
      <v-flex md6>
        <v-subheader v-text="devices.modelName"></v-subheader>
      </v-flex>
    </v-layout>



    <v-row>
      <v-col sm="3">
        <v-card-title></v-card-title>
      </v-col>
      <v-col>
        <v-subheader v-text="devices.modelName"></v-subheader>
      </v-col>
      <v-col>
        <v-subheader v-text="devices.description"></v-subheader>
      </v-col>
      <v-col>
        <v-subheader v-text="devices.instanceNumber"></v-subheader>
      </v-col>
      <v-col>
      <v-chip v-if="devices.alreadyImported" color="green">Importiert</v-chip>
      </v-col>
    </v-row>
  </v-container>
</v-card>

  <div class="text-center">
      <v-overlay
              :value="isOverlayActive"
              :opacity="0.7"
      >
        <v-progress-circular
                :size="200"
                :width="10"
                color=#FAFAFA
                indeterminate
        >{{loadingText}}</v-progress-circular>
      </v-overlay>
    </div>

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
      selectedDevices: [],
      loadingText: ""
    }
  },

  methods: {
    ...mapActions([
      'loadDevices',
      'sendDevices',
      'preloadDevices'
    ]),

    devices: function() {
      this.loadingText = "Geräte suchen...";
      this.loadDevices();
    },

    sendSelectedDevices: function() {
      this.loadingText = "Geräte importieren...";
      this.sendDevices(this.selectedDevices);
      console.log(this.selectedDevices)
    }
  },

  computed: {
    ...mapGetters([
      'getDevices',
      'isOverlayActive',
    ])
  },

  mounted() {
    this.preloadDevices();
  }

};
</script>

<style scoped>

</style>

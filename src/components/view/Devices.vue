<template>
<div class="devices">
  <h1 class="subheading grey--text">Geräte Suche</h1>
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

  <div>
    <h1 class="subheading grey--text">Geräteliste</h1>
    <v-data-table light md="2"
                  :headers="headers"
                  :items="getDevices"
                  class="elevation-1"
                  hide-default-footer
    >
    <template v-slot:item.alreadyImported="{ item }">
      <v-checkbox v-model="item.alreadyImported" disabled></v-checkbox>
    </template>
    </v-data-table>
  </div>

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
      loadingText: "",
      headers: [
        {text: 'Gerät', value: 'name'},
        {text: 'Gerätetyp', value: 'modelName'},
        {text: 'Adresse', value: 'description'},
        {
          text: 'Importiert',
          value: 'alreadyImported'
        }
      ],
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

<template>
<div class="settings">
  <h1 class="subheading grey--text">Einstellungen</h1>
  <v-card
   class="mx-auto"
   max-width="800"
   outlined
 >
  <v-form>
    <v-container>
      <v-row >
        <v-col cols="12" md="4">
          <v-text-field v-model="settings.siteName" label="Site Beschreibung" :counter="16" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="settings.localDeviceID" label="Device ID" :counter="8" required>

          </v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="settings.bacnetSeparator" label="BACnet Seperator" :counter="1" required>

          </v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-select v-model="settings.port" label="BACnet Port" :items="bacnetPorts" :rules="[v => !!v || 'BACnet Port is required']" required>

          </v-select>
        </v-col>

        <v-col cols="12" md="4">
          <v-slider
          v-model="settings.precision"
          max="4"
          label="Präzision">
          </v-slider>
        </v-col>

      </v-row>
       <v-divider></v-divider>

      <v-btn large color="blue-grey" class="white--text" @click="sendSettings()">
        Speichern
        <v-icon right dark>save</v-icon>
      </v-btn>

    </v-container>
  </v-form>
</v-card>
</div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  name: "Settings",
  data() {
    return {
      settings: {
        siteName: "DefaultSite",
        port: "BAC0",
        siteDescription: "Description",
        bacnetSeparator: "'",
        localDeviceID: "100010",
        precision: "2"
      },
      max: 4,
      dummyValue: 27.2486,
      bacnetPorts: [
        'BAC0',
        'BAC1',
        'BAC2',
        'BAC3',
        'BAC4',
        'BAC5',
        'BAC6',
        'BAC7',
        'BAC8',
        'BAC9',
        'BACA',
        'BACB',
        'BACC',
        'BACD',
        'BACE',
        'BACF'
      ]

    }
  },
  computed: {
    ...mapGetters([
      "getSettings"
    ]),
  },
  methods: {
    ...mapActions([
      'newSettings'
    ]),
    sendSettings: function() {
      this.newSettings(this.settings);
    },
  },
  mounted() {
    this.settings.siteDescription = this.getSettings.siteDescription;
    this.settings.siteName = this.getSettings.siteName;
    this.settings.port = this.getSettings.port;
    this.settings.bacnetSeparator = this.getSettings.bacnetSeparator;
    this.settings.localDeviceID = this.getSettings.localDeviceID;
    this.settings.precision = this.getSettings.precision;
  }
};
</script>

<style scoped>

</style>

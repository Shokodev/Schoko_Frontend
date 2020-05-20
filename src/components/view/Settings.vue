<template>
<div class="settings">
  <h1 class="subheading grey--text">Einstellungen</h1>
  <v-card class="mx-auto" max-width="800" outlined>
    <v-form>
      <v-container>
        <v-row>

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
          <v-subheader class="pl-0">Anzahl Stellen nach Komma</v-subheader>
          <v-slider
          v-model="settings.precisionRealValue"
          max="4"
          min="0"
          :thumb-size="17"
          :thumb-color="slider.color"
          :track-color="track.color"
          :track-fill-color="trackFill.color"
          thumb-label="always">
          </v-slider>
        </v-col>

        <v-col cols="12" md="4">
          <v-subheader class="pl-0">Geräte Scan Zeit in Sekunden</v-subheader>
          <v-slider
                  v-model="settings.scanSeconds"
                  max="30"
                  min="5"
                  :thumb-size="17"
                  :thumb-color="slider.color"
                  :track-color="track.color"
                  :track-fill-color="trackFill.color"
                  thumb-label="always">
          </v-slider>
        </v-col>

        </v-row>
        <v-divider></v-divider>



      </v-container>
    </v-form>
  </v-card>

<v-card class="mx-auto" max-width="800" outlined>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="host.ip" label="Host IP" :counter="15" required>

            </v-text-field>
            </v-col>

            <v-col cols="12" md="4">
            <v-text-field v-model="host.port" label="Host Port" :counter="4" required>

          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</v-card>

<v-btn large color="blue-grey" class="white--text" @click="sendSettings()">
  Speichern
  <v-icon right dark>save</v-icon>
</v-btn>

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
        port: "BAC0",
        bacnetSeparator: "'",
        localDeviceID: "100010",
        precisionRealValue: 2,
        scanSeconds: 5
      },
      host: {
        "ip": "",
        "port": "",
      },

      track: { label: 'track-color', color: 'light-black lighten-8' },
      trackFill: { label: 'track-fill-color', color: 'grey lighten-6' },
      slider: { label: 'thumb-color', color: 'grey' },
      max: 4,
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
      "getSettings",
      "getHostIp",
      "getHostPort",
    ]),
  },
  methods: {
    ...mapActions([
      'newSettings',
      'readSettings',
      'setHostConnection',
      'connect',
    ]),


    sendSettings: function() {
      this.setHostConnection(this.host);
      this.newSettings(this.settings);
      this.connect();
    },

  },
  mounted() {
    this.readSettings();
    this.settings.port = this.getSettings.port;
    this.settings.bacnetSeparator = this.getSettings.bacnetSeparator;
    this.settings.localDeviceID = this.getSettings.localDeviceID;
    this.settings.precisionRealValue = this.getSettings.precisionRealValue;
    this.settings.scanSeconds = this.getSettings.scanSeconds;
    this.host.ip = this.getHostIp;
    this.host.port = this.getHostPort;
  }
};
</script>

<style scoped>

</style>

<template>
<div>

    <div>
        <label>Site Description</label>
        <input v-model="settings.siteDescription">
    </div>
    <div>
        <label>Site DeviceID</label>
        <input v-model="settings.localDeviceID">
    </div>
    <div>
        <label>BACnet Seperator</label>
        <input v-model="settings.bacnetSeparator">
    </div>
    <div>
        <label>BACnet Port</label>
        <input v-model="settings.port">
    </div>
    <div>
        <button @click="sendSettings()">Speichern</button>
    </div>

</div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: "Settings",
        data() {
            return {
                settings: {
                    siteName: "DefaultSite",
                    port: Number,
                    siteDescription: "Description",
                    bacnetSeparator: "'",
                    localDeviceID: "",
                    precision: "2"
                },

            }
        },
        computed: {
            ...mapGetters([
                "getSettings"
            ]),
        },methods: {
            ...mapActions([
                'newSettings'
            ]),
            sendSettings: function () {
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
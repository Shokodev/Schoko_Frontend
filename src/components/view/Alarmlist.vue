<template>

  <v-data-table
    :headers="headers"
    :items="getEventList"
    :items-per-page="20"
    class="elevation-1"
  ></v-data-table>

</template>

<script>
import { mapGetters } from "vuex";


    export default {
      data() {
        return {
        headers: [
          {
            text: 'Alarm',
            align: 'start',
            sortable: false,
            value: 'description',
          },
          { text: 'DatumZeit', value: 'timeStamp' },
          { text: 'Objekt Name', value: 'objectName' },
          { text: 'Aktueller Wert', value: 'presentValue' },
          { text: 'Zustand', value: 'toState' },
        ]
}
},

computed: {
  ...mapGetters(["getEventList"])
  }
}

</script>

<style scoped>

</style>

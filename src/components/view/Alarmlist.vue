<template>
  <div>
  <v-data-table light
    :headers="headers"
    :items="getEventList"
    :items-per-page="20"
    class="elevation-1"
  ></v-data-table>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";



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
            {text: 'DatumZeit', value: 'timeStamp'},
            {text: 'Objekt Name', value: 'objectName'},
            {text: 'Aktueller Wert', value: 'presentValue'},
            {text: 'Zustand', value: 'toState'},
          ]
        }
      },

      computed: {
        ...mapGetters(["getEventList"])
      },
      methods: {
        ...mapActions([


        ]),
      }
    };
</script>

<style scoped>

</style>

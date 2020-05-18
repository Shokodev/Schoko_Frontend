<template>
  <div class="alarmlist">
    <h1 class="subheading grey--text">Alarmliste</h1>
  <v-data-table light md="2"
    :headers="headers"
    :items="getEventList"
    :items-per-page="20"
    class="elevation-1"
  >
    <template v-slot:item.ackState="{ item }">
      <v-btn text small color="error" v-if="item.ackState" class="ma-2"  @click="commandClicked(item.objectName)">
        ICON
      </v-btn>
    </template>
    <template v-slot:item.resetState="{ item }">
      <v-btn text small color="error" v-if="item.resetState" class="ma-2"  @click="commandClicked(item.objectName)">
        ICON
      </v-btn>
    </template>
  </v-data-table>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";

    export default {
      data() {
        return {
          scopedObjectName: " ",
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
            {text: 'Quittieren', value: 'ackState', sortable: false},
            {text: 'Zurücksetzen', value: 'resetState', sortable: false},
          ],
        }
      },

      computed: {
        ...mapGetters(["getEventList"])
      },
      methods: {
        ...mapActions([
           'ackEvent',
        ]),
        commandClicked: function(objectName){
          this.scopedObjectName = objectName;
          console.log(this.scopedObjectName);
          this.ackEvent(this.scopedObjectName);
        }
      },

    };
</script>

<style scoped>

</style>

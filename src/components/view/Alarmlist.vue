<template>
    <div>
      <table>
        <tr>
          <th title="DatumZeit">Datum / Zeit</th>
          <th title="Objekt Name">Objekt Name</th>
          <th title="Beschreibung">Beschreibung</th>
          <th title="Aktueller Wert">Aktueller Wert</th>
          <th title="Zustand">Zustand</th>
          <th title="Reset">Reset</th>
          <th title="Quit">Quit</th>
          <th title="Gerät">Gerät</th>
        </tr>
        <tr :key="child.eventID" v-for="child in getEventList">
          <td>{{child.timeStamp}}</td>
          <td>{{child.objectName}}</td>
          <td>{{child.description}}</td>
          <td>{{child.presentValue}}</td>
          <td>{{child.toState}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
import { mapGetters } from "vuex";


    export default {
        name: "Alarmlist",


computed: {
  ...mapGetters(["getEventList"])
}
    }
</script>

<style scoped>

</style>

<template>
  <v-app class="primary">
    <Navbar />
    <v-content class="mx-4 my-3">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/view/Navbar'
import { mapActions } from 'vuex'

export default {
  components: { Navbar },
  name: 'App',
  data () {
    return {

    }
  },

  created() {
    //do something after creating vue instance
      this.connect();
  },


watch: {
  isWsConnected: function() {
    this.loadEvents
  }
},

  methods: {
    ...mapActions([
      'connect',
      'subriceToEvents',

    ]),


    loadEvents: function () {
      this.subriceToEvents();
    }

  },

}
</script>

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

export default {
  components: { Navbar },
  name: 'App',
  data () {
    return {

    }
  }
}
</script>

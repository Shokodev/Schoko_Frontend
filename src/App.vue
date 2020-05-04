<template>
  <div id="app">
<<<<<<< HEAD
=======
    <body>
    <HelloWorld></HelloWorld>

>>>>>>> f948b79c6a56883c0a830d67158c3803d776ffc5
    <section class="columns ">
      <aside id="menu" class="column is-narrow">
        <Menu  class="sticky"></Menu>
      </aside>
      <router-view id="content" class="column"></router-view>
    </section>

    </body>
  </div>
</template>

<script>
import Menu from "./components/Menu";
<<<<<<< HEAD
export default {
  name: 'app',
  components: {Menu}
}
=======
import HelloWorld from "./components/HelloWorld";
import {mapActions} from 'vuex'
export default {
  name: 'app',
  components: {
    Menu, HelloWorld
  },
>>>>>>> f948b79c6a56883c0a830d67158c3803d776ffc5

mounted() {
  this.readSettings();
},
methods: {
...mapActions([
        "readSettings"
])
}
};
</script>

<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }
  #menu{
    padding-left: 2em;
    padding-top: 3em;
  }
  #content{
    padding-left: 1.5em;
    padding-top: 3em;
  }
  .sticky{
    position: sticky;
    top: 0px;
  }


</style>

<template>
  <div id="app">

    <body>
    <HelloWorld></HelloWorld>


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
import {mapActions} from 'vuex';
export default {
  name: 'app',
  components: {
    Menu
  },

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

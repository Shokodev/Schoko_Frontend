<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <section class="columns ">
      <aside id="menu" class="column is-narrow">
        <Menu  class="sticky"></Menu>
      </aside>
      <router-view id="content" class="column"></router-view>
    </section>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import HelloWorld from "./components/HelloWorld";
export default {
  name: 'app',
  components: {Menu, HelloWorld}
}

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
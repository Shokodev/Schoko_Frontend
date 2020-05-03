<template>
  <div class="hello">
<<<<<<< HEAD
    <button  v-on:click="test">Click Me</button>
    <button  v-on:click="sendSettings">Send Default Settings</button>
    <p>{{getEvents}}
    </p>
=======
    <button  v-on:click="test">Notification</button>
>>>>>>> 9643176a8e2af862071f40289642f0f556ce7463
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {

    }
  },

methods: {
  ...mapActions([
    'connect',
    'newSettings',
    'completeHierarchy',
    'deviceStructure'


  ]),

  test: function () {
    this.connect();
  }
},
computed: {
  ...mapGetters(["getEvents"]),
},
};


</script>








<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

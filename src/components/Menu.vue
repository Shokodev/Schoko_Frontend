<template>
    <div>
        <p  class="menu-label">Menu</p>
        <ul  class="menu-list ">
            <li><router-link  to="/alarmlist">Alarmliste</router-link></li>
            <li><router-link  to="/structure">Struktur</router-link></li>
            <li><router-link  to="/devices">Gerätesicht</router-link></li>
            <li><router-link  to="/settings">Einstellungen</router-link></li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters } from "vuex";

    export default {
        name: "Menu",
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters([
            ])
        }
    }
</script>

<style >

</style>
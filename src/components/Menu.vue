<template>
    <div>
        <p  class="menu-label">Menu</p>
        <ul  class="menu-list ">
            <li><router-link  to="/bacnetview">BACnet Strukur</router-link></li>
            <li><router-link  to="/alarmlist">Alarmliste</router-link></li>
            <li><router-link  to="/structure">Struktur</router-link></li>
            <li><router-link  to="/devices">Gerätesicht</router-link></li>
            <li><router-link  to="/settings">Einstellungen</router-link></li>
            <li><router-link  to="/admin">Admin</router-link></li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "Menu",
        data() {
            return {
            }
        },
    }
</script>

<style >

</style>

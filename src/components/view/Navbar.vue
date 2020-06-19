<template>
  <nav>
    <v-app-bar
    >
      <v-app-bar-nav-icon @click.stop="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">BACnet-Browser</span>
        <span> Schoko</span>
      </v-toolbar-title>
          <v-spacer></v-spacer>
      <svg v-if="getConnectionState" id="Group" width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="21" r="20" fill="#8FE324"/>
      <path d="M19.1126 1.70772C19.486 0.989165 20.514 0.989164 20.8874 1.70772L27.035 13.5389C27.3809 14.2046 26.8979 15 26.1477 15L13.8523 15C13.1021 15 12.6191 14.2046 12.965 13.5389L19.1126 1.70772Z" fill="#E9E9E9"/>
      <path d="M20.8874 40.2923C20.514 41.0108 19.486 41.0108 19.1126 40.2923L12.965 28.4611C12.6191 27.7954 13.1021 27 13.8523 27L26.1477 27C26.8979 27 27.3809 27.7954 27.035 28.4611L20.8874 40.2923Z" fill="#E9E9E9"/>
      <circle cx="20" cy="21" r="3" fill="#E9E9E9"/>
    </svg>
      <span v-if="!getConnectionState" class="red--text text-center">Verbindung zum Service fehlgeschlagen.</span>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" class="secondary" temporary>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'home', text: 'Dashboard', route: '/' },
        { icon: 'account_tree', text: 'BACnet', route: '/bacnetview' },
        { icon: 'notification_important', text: 'Alarmliste', route: '/alarmlist' },
        { icon: 'device_hub', text: 'Logische Sicht', route: '/logicalview' },
        { icon: 'view_agenda', text: 'Geräte', route: '/devices' },
        { icon: 'settings', text: 'Einstellungen', route: '/settings' },
        { icon: 'healing', text: 'Admin', route: '/admin' },
      ]
    }
  },
  computed: {
    ...mapGetters([
        "getConnectionState"
    ])
  }
}
</script>

<style>
  #Group {
    transform: translateX(-50%) translateY(-50%);
    animation: Group__rotation__1 3000ms 0ms linear infinite;
    margin-top: 40px;
  }

  @keyframes Group__rotation__1 {
    from {
      transform: translateX(-50%) translateY(-50%) rotate(0deg);
    }

    to {
      transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
  }
</style>

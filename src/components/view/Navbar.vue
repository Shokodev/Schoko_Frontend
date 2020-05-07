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
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'home', text: 'Home', route: '/' },
        { icon: 'account_tree', text: 'BACnet', route: '/bacnetview' },
        { icon: 'notification_important', text: 'Alarmliste', route: '/alarmlist' },
        { icon: 'device_hub', text: 'Logische Sicht', route: '/logicalview' },
        { icon: 'view_agenda', text: 'Gerätesicht', route: '/devices' },
        { icon: 'settings', text: 'Einstellungen', route: '/settings' },
        { icon: 'healing', text: 'Admin', route: '/admin' },
      ]
    }
  }
}
</script>

<style>
</style>

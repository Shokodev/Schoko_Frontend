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

    <v-navigation-drawer app v-model="drawer" class="primary" temporary>
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
        { icon: 'dashboard', text: 'Home', route: '/' },
        { icon: 'folder', text: 'BACnet', route: '/bacnetview' },
        { icon: 'person', text: 'Alarmliste', route: '/alarmlist' },
        { icon: 'person', text: 'Logische Sicht', route: '/structure' },
        { icon: 'dashboard', text: 'Gerätesicht', route: '/devices' },
        { icon: 'folder', text: 'Einstellungen', route: '/settings' },
        { icon: 'person', text: 'Admin', route: '/admin' },
      ]
    }
  }
}
</script>

<style>
</style>

<template>
    <v-app id="inspire">
    
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list dense>
        <v-list-tile :key="item" v-for="item in items">

          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>

      </v-list>

    </v-navigation-drawer>
    
    <v-toolbar class="drawer-color" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <div class="logo-section">
        <img class="logo-style" src='../assets/vueManagement.png' /> 
      </div>
      <v-toolbar-title>Vue Management</v-toolbar-title>
    </v-toolbar>

    <router-view></router-view>
  
  </v-app>
</template>


<script>

export default {
    name: 'management',
    data () {
        return {
          items: [
              { title: 'Dashboard', icon: 'dashboard' },
              { title: 'Desenho', icon: 'create' },
              { title: 'Usuários', icon: 'group' },
          ],
          right: null,
          mini: true,
          drawer: true,
        }
    }
}
</script>

<style scoped>
@import '../css/management.css';
</style>

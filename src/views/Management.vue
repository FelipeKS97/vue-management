<template>
    <v-app id="inspire">
    
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile>

          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>

        <v-list-tile>
        
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
        
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
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

    <v-content>
      <v-container fluid grid-list-md>
        <v-layout row wrap>

          <v-flex d-flex xs12 sm6 md6>
            <v-card >
              <v-card-title primary class="title">Novos Desenhos</v-card-title>
              <bar-chart></bar-chart>
              <v-card-text></v-card-text>
            </v-card>
          </v-flex>

          <v-flex d-flex xs12 sm6 md6>
            <v-card >
              <v-card-title primary class="title">Cadastros Recentes</v-card-title>
              <line-chart></line-chart>
              <v-card-text></v-card-text>
            </v-card>
          </v-flex>
          
        </v-layout>
      </v-container>
    </v-content>
  
  </v-app>
</template>


<script>

import Bar from '../components/BarChart.vue'
import Line from '../components/LineChart.vue'

export default {
    name: 'management',
    components: {
      'bar-chart': Bar,
      'line-chart': Line
    },
    data () {
        return {
          items: [
              { title: 'Dashboard', icon: 'dashboard' },
              { title: 'Canvas', icon: 'message_draw' },
              { title: 'Users', icon: 'account_group' },
          ],
          right: null,
          mini: true,
          drawer: true,
          admins: [
              ['Management', 'people_outline'],
              ['Settings', 'settings']
          ],
          cruds: [
              ['Create', 'add'],
              ['Read', 'insert_drive_file'],
              ['Update', 'update'],
              ['Delete', 'delete']
          ],
        }
    }
}
</script>

<style scoped>
@import '../css/management.css';
</style>

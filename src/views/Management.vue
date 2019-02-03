<template>
    <v-app id="inspire">
    <v-navigation-drawer permanent>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <div class="logo-section">
              <img class="logo-style" src='../assets/vueManagement.png' /> 
            </div>
            <v-list-tile-title class="title">
              Vue Management
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
  
      <v-divider></v-divider>

      <v-list  dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title">
          <!--<v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>-->
          <v-list-tile-title>{{item.title}}</v-list-tile-title>
        </v-list-tile>
       
      </v-list>
  
    </v-navigation-drawer>
  </v-app>
</template>


<script>

export default {
     name: 'management',
    data () {
        return {
            items: [
                { title: 'Dashboard', icon: 'dashboard' },
                { title: 'Canvas', icon: 'message_draw' },
                { title: 'Users', icon: 'account_group' },
            ],
            right: null,
            admins: [
                ['Management', 'people_outline'],
                ['Settings', 'settings']
            ],
            cruds: [
                ['Create', 'add'],
                ['Read', 'insert_drive_file'],
                ['Update', 'update'],
                ['Delete', 'delete']
            ]
        }
    }
}
</script>

<style scoped>
@import '../css/management.css';
</style>

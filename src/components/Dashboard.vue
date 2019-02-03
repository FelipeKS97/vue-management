<template>
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout row wrap>

          <v-flex :key="item" v-for="item in items" d-flex xs12 sm6 md6>
            <v-card>
              <v-card-title primary class="title">{{item.title}}</v-card-title>
              <bar-chart v-if=" item.type ==='chart' "></bar-chart>
              <line-chart v-if=" item.type ==='line' "></line-chart>
              <v-card-text></v-card-text>
            </v-card>
          </v-flex>

          
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
import Bar from '../components/BarChart.vue'
import Line from '../components/LineChart.vue'

export default {
    name: 'dashboard',
    components: {
      'bar-chart': Bar,
      'line-chart': Line
    },
    data () {
        return {
          items: [
              { title: 'Novos Desenhos', type: 'chart' },
              { title: 'Cadastros Recentes', type: 'line' },
          ],
        
        }
    }
}
</script>


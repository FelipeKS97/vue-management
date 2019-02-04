<template>
<v-content>
    <v-container fluid grid-list-md>
    <v-layout row wrap>

        <v-flex d-flex xs12 sm12 md12>
        <v-card>
            
            <v-card-title primary class="title">
                <v-list-tile-avatar>
                    <img src="https://randomuser.me/api/portraits/men/85.jpg">
                </v-list-tile-avatar>
                John Leider
            </v-card-title>
            <v-card-text>Email: {{email}}</v-card-text>
        </v-card>
        </v-flex>
        
    </v-layout>
    </v-container>
</v-content>
    
</template>

<script>
export default {
    name: 'profile',
    computed: {
        email () {
            return this.$store.state.userData.email
        }
    },

}
</script>

<style>

</style>

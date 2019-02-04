<template>
<v-content>
    <v-container fluid grid-list-md>
    <v-layout row wrap>

        <v-flex d-flex xs12 sm12 md12>
        <v-card>
            
            <v-card-title primary class="title">
                Área de Desenho
            </v-card-title>

            <canvas  @mousemove="mouseMove" @mousedown="mouseDown" @mouseup="mouseUp" id="quadro" style="background: white; width: 1000px; height: 500px;"></canvas>
            <v-card-text></v-card-text>
        </v-card>
        </v-flex>
        
    </v-layout>
    </v-container>
</v-content>
    
</template>

<script>


export default {
    name: 'canvas',
    data() {
        return {
            ctx: document.getElementById("quadro").getContext("2d"),
            desenhando: false
        }

    },
    methods: {
        mouseDown(e) {
            this.ctx.moveTo(e.clientX, e.clientY);
            this.desenhando = true;
        },
        mouseUp(e) {
            this.desenhando = false;
        },
        mouseMove(e) {
            if (this.desenhando) {
                this.ctx.lineTo(e.clientX, e.clientY);
                this.ctx.stroke();
            }
        }
    },
    computed: {
        email () {
            return this.$store.state.userData.email
        }
    },

}
</script>

<style>

</style>

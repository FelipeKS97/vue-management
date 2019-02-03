<template>
<div id="login-page">
    <v-progress-linear v-if="isLoading" class="loading-bar" height="2" color='#fff' :indeterminate="true">{{alert('test')}}</v-progress-linear>
  <div id="login">
    <div id="description"> 
        <template v-if="!isSignUp">
            <h1>Login</h1>
            <p>Bem Vindo! Realize seu login no sistema com e-mail e senha.</p>
        </template>
      
        <template v-else>
            <h1>Cadastro</h1>
            <p>Cadastre-se agora informando seu e-mail e senha.</p>
        </template>
    </div>
    <div id="form">
        <div class="logo-section">
            <img class="logo-style" src='../assets/vueManagement.png' /> 
        </div> 
      <form @submit.prevent="isSignUp? doSignUp() : doLogin()">
        <label for="email">E-mail</label>
        <input type="text" id="email" v-model="email" placeholder="exemplo@exemplo.com" autocomplete="off">

        <label for="password">Senha</label>
        <i class="fas" :class="[passwordIcon]" @click="hidePassword = !hidePassword"></i>
        <input type="password" id="password" v-model="password" placeholder="**********">

        <template v-if="isSignUp">
            <label for="password">Confirmar Senha</label>
            <input type="password" id="password" v-model="confirmPassword" placeholder="**********">
        </template>

        <v-btn type="submit">{{isSignUp ? 'Cadastrar' : 'Acessar' }}</v-btn>

        <v-btn flat color="#fff" @click="isSignUp = !isSignUp"> 
            {{!isSignUp ? 'Criar Conta' : 'Voltar'}}
        </v-btn>
        
      </form>
    </div>
  </div>
  <notifications position="bottom right" group="login" />
</div>
</template>

<script>

//import { mapActions } from 'vuex'

export default {
    name: 'login',
    data: function() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            hidePassword: true,
            isSignUp: false,

        }
    },
    computed: {
        passwordIcon() {
            return this.hidePassword ? 'eye' : 'eye-off'
        },
        isLoading () {
            return this.$store.state.isLoading
        }
    },
    methods: {
        doLogin() {

            if(this.email.length === 0  || this.password.length === 0 ) {
                this.$notify({
                    group: 'login',
                    title: 'Atenção!',
                    type: 'warn',
                    text: 'Informe email e senha.',
                    duration: 5000,
                });

            } else {

                this.$store.dispatch({
                    type: 'login',
                    email: this.email,
                    password: this.password
                })

            }
        },
        doSignUp() {
            if(this.email.length === 0  || this.password.length === 0 || this.confirmPassword.length ===0 ) {
                this.$notify({
                    group: 'login',
                    title: 'Atenção!',
                    type: 'warn',
                    text: 'Informe email e senha.',
                    duration: 5000,
                });

            } else {

                if(this.password === this.confirmPassword) {
                    this.$store.dispatch({
                        type: 'register',
                        email: this.email,
                        password: this.password
                    })
                }
                else {
                    this.$notify({
                        group: 'login',
                        title: 'Atenção!',
                        type: 'warn',
                        text: 'As senhas não estão iguais.',
                        duration: 5000,
                    });
                }

            }
        }
    }
}
</script>

<style scoped>
    @import '../css/login.css';
</style>

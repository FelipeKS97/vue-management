<template>
<div id="login-page">
  <div id="login">
    <div id="description">    
        <template v-if="!isSignUp">
            <h1>Login</h1>
            <p>Bem Vindo! Realize seu login no sistema com e-mail e Senha.</p>
        </template>
      
        <template v-else>
            <h1>Cadastro</h1>
            <p>Cadastre-se agora informando seu e-mail e senha.</p>
        </template>
    </div>
    <div id="form">
      <form @submit.prevent="isSignUp? doSignUp() : doLogin()">
        <label for="email">E-mail</label>
        <input type="text" id="email" v-model="email" placeholder="exemplo@exemplo.com" autocomplete="off">

        <label for="password">Senha</label>&nbsp;
        <i class="fas" :class="[passwordIcon]" @click="hidePassword = !hidePassword"></i>
        <input :type="passwordType" id="password" v-model="password" placeholder="**********">

        <v-btn type="submit">{{isSignUp ? 'Cadastrar' : 'Acessar' }}</v-btn>

        <v-btn flat color="#fff" @click="isSignUp = !isSignUp"> 
            {{!isSignUp ? 'Criar Conta' : 'Voltar'}}
        </v-btn>
        
      </form>
    </div>
  </div>
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
            hidePassword: true,
            isSignUp: false,

        }
    },
    computed: {
        passwordHide() {
            return this.hidePassword ? 'password' : 'text'
        },
        passwordIcon() {
            return this.hidePassword ? 'eye' : 'eye-off'
        }
    },
    methods: {
        doLogin() {
            this.$store.dispatch({
                type: 'doLogin',
                info: 'test'
            })

            //this.$router.push('/management')

        },
        doSignUp() {
            //this.$router.push('/management')

        }
    }
}
</script>

<style scoped>
    @import '../css/login.css';
</style>

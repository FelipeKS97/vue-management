<template>
<div id="login-page">
  <div id="login">
    <div id="description">
      <h1>Login</h1>
      <p>Bem Vindo! Realize seu login no sistema com E-mail e Senha.</p>
    </div>
    <div id="form">
      <form @submit.prevent="doLogin">
        <label for="email">E-mail</label>
        <input type="text" id="email" v-model="email" placeholder="exemplo@exemplo.com" autocomplete="off">

        <label for="password">Senha</label>&nbsp;
        <i class="fas" :class="[passwordIcon]" @click="hidePassword = !hidePassword"></i>
        <input :type="passwordType" id="password" v-model="password" placeholder="**********">

        <button type="submit">Acessar</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>


export default {
    name: 'login',
    data: function() {
        return {
            email: '',
            password: '',
            hidePassword: true,
            isSignUp: false

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
        alert('Not yet')
        }
    }
}
</script>

<style scoped>
@import '../css/login.css';
</style>

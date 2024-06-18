<template>

<v-layaout align-center justify-center>
  <v-flex xs12 sm8 md4> 
    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-tittle> Login </v-toolbar-tittle>
      </v-toolbar>
      <v-card-text>
          <v-form> 
            <v-text-field label="Usuario" v-model="user" prepend-icon="fa fa-user"></v-text-field>
            <v-text-field label="Contraseña" v-model="password" prepend-icon="fa fa-lock" type="password"></v-text-field>
            <input type="checkbox" v-model="rememberMe" icon="fa fa-check">Recordarme?</input>
          </v-form>

      </v-card-text>
      <v-card-actions>

        <v-spacer></v-spacer>
        <v-btn color="primary" @click="LoginUser">Login</v-btn>
        <v-btn color="primary" to="register">Registrarse</v-btn>
      </v-card-actions>
      </v-card>
</v-flex>
</v-layaout>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import UserAuth from '@/stores/store';
import router from '@/router';
const UseAuth = UserAuth()
const user = ref('')
const password = ref('')
const rememberMe = ref(false)
const LoginUser = async () => {
  const login = await UseAuth.login(user.value, password.value, rememberMe.value)
  if (login == false ){
    window.alert('Usuario o contraseña incorrectos')
  }else{
    window.alert('Bienvenido')
    router.push('/note')
  }
}
</script>

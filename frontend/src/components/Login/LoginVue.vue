<template>
  <FloatLabel>
    <InputText id="username" v-model="user" />
    <label for="username">Username</label>

  </FloatLabel>
  <FloatLabel>
    <Password id="password" v-model="password" :feedback="false" />
    <label for="password">Password</label>
  </FloatLabel>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import UserAuth from '@/stores/store';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Password from 'primevue/password';
import router from '@/router';
const UseAuth = UserAuth()
const user = ref('')
const password = ref('')
const rememberMe = ref(false)
const LoginUser = async () => {
  const login = await UseAuth.login(user.value, password.value, rememberMe.value)
  if (UseAuth.errores == null ) {
    window.alert("Login correcto")
    router.push('/note')
  } else {
    window.alert(UseAuth.mensaje)
  }
}
</script>

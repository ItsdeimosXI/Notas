<template>
    <v-app-bar-nav-icon @click="drawer = !drawer" icon="fa fa-bars"></v-app-bar-nav-icon>
    <v-navigation-drawer
      theme="dark"
      permanent
      v-model="drawer"
    >
    <v-list-item prepend-icon="fa fa-bars" @click="drawer = !drawer"> </v-list-item>
    <v-list nav>
      <v-list-item prepend-icon="fa fa-home" tittle="Home" value="Home" to="/">
        Home
      </v-list-item>
      <v-list-item prepend-icon="fa fa-sign-in" title="Login" v-if="!IsAuth" value="Login" to="/login">
      </v-list-item>

      <v-list-item prepend-icon="fa fa-sticky-note" title="Notes" value="Notes" to="/note"></v-list-item>
      <v-list-item prepend-icon="fa fa-sign-out" title="Logout" v-if="IsAuth" @click="logout" value="Logout" to="/">
      </v-list-item>
    </v-list>
  </v-navigation-drawer>


</template>
<script setup lang="ts">
import {useRouter } from 'vue-router'
import UserAuth from '../stores/store';
import { computed, ref } from 'vue';
const store = UserAuth()
const router = useRouter()
const drawer = ref(false)
const logout = () => {
  store.logout()  
  router.push('/login')
}
const IsAuth = computed(() => !!store.token)
</script>
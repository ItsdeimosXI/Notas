<template>
  <v-app class="d-flex">
    <Navbar/>
    <v-main>
    <RouterView />
    </v-main>

  </v-app>
</template>

<script setup>
import Navbar from './components/navbar.vue'
</script>




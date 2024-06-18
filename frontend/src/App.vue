<template>
  <v-app>
    <Navbar />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import Navbar from './components/navbar.vue'
</script>




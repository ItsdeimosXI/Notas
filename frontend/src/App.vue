<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/login">login</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/note">Note</RouterLink>
        </li>
        </ul>
    </div>
  </div>
</nav>
<!-- Navbar -->
  <RouterView />

</template>


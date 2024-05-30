<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    <div class="container-fluid">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink to="/login">login</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            <RouterLink to="/note">Note</RouterLink>
          </li>
        </ol>
      </nav>
    </div>
  </nav>
  <RouterView />
</template>


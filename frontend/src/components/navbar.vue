<template>
  <MegaMenu :model="items" orientation="horizontal"> 
    <template #item="{ item, props }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate" >
              <span v-bind="props.icon" />
              <span v-bind="props.label">{{ item.label }}</span>
          </a>
      </router-link>
  </template>
  <template #end>
          <Button v-if="IsAuth" icon="fa fa-sign-out" @click="logout" label="Logout" class="p-button-danger"></Button>
  </template>
  </MegaMenu>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import {RouterLink, useRouter } from 'vue-router';
import UserAuth from '../stores/store';
import MegaMenu from 'primevue/megamenu';
import { computed, ref } from 'vue';
const store = UserAuth()
const router = useRouter()
const logout = () => {
  store.logout()  
  router.push('/login')
}
const IsAuth = computed(() => !!store.token)

const items = ref([
  {label: 'Home',
    icon: 'fa fa-home',
    route: '/'
  },
  { 
    label: 'login',
    icon: 'fa fa-sign-in',
    route: '/login',
    visible: !IsAuth.value
  },
  { 
    label: 'register',
    icon: 'fa fa-user-plus',
    route: '/register'
  },
  {
    label: 'notas',
    icon: 'fa fa-sticky-note',
    route: '/note'
  },
])


</script>

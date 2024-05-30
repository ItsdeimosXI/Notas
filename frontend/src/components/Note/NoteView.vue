<template>
    <div class="card" style="width: 18rem" v-for="note in notes" :key="note.id">
        <div class="card-body">
          <p>ID: {{note.id}}</p>
          <h5 class="card-title" >{note.usuario}</h5>
          <h5 class="card-title" >{note.nombre}</h5>
          <p class="card-text">{note.description}</p>

        </div>
      </div>
</template>

<script setup lang="ts">
import UserAuth from '@/stores/store'
import { ref, type Ref } from 'vue'
import Inotes from '@/interfaces/Inotes'
const store = UserAuth()

const notes:Ref<Array<Inotes>>  = ref([])
notes.value = await store.GetNote()
</script>

<style scoped>

</style>
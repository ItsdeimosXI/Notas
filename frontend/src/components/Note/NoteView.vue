<template>
    <div class="card" style="width: 18rem" v-for="note in notes" :key="note.id">
        <div class="card-body">
          <p>ID: {{note.id}}</p>
          <h5 class="card-title" >{{note.user}}</h5>
          <h5 class="card-title" >{{note.nombre}}</h5>
          <p class="card-text">{{note.descripcion}}</p>

        </div>
      </div>
</template>

<script setup lang="ts">
import UserAuth from '@/stores/store'
import { ref, type Ref, onMounted } from 'vue'
import Inotes from '@/interfaces/Inotes'
const store = UserAuth()

const notes:Ref<Array<Inotes>>  = ref([])
  onMounted(async () => {
  try {
    const fetchedNotes = await store.GetNote()
    notes.value = fetchedNotes
    console.log(notes.value)
  } catch (error) {
    console.error("Failed to fetch notes:", error)
  }
})
</script>

<style scoped>

</style>
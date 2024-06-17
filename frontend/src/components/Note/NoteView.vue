<template>
  <v-container fluid >
  <v-row>
    <v-col v-for="note in notes" :key="note.id"  cols="12" sm="6" md="4" lg="3" >
    <v-card>
        <v-card-tittle> {{ note.nombre }} </v-card-tittle>
        <v-card-text> {{ note.descripcion }} </v-card-text>
        <v-card-actions>
            <v-btn color="red" @click="eliminar(note.id)">Eliminar</v-btn>
        
        </v-card-actions>
    </v-card>
</v-col>
</v-row>
  </v-container>
  <router-link :to="{ name: 'note-create' }">
    <v-btn color="blue" class="sticky">
        <i class="fa-solid fa-check"></i> Crear nueva nota
    </v-btn>
</router-link>
</template>

<script setup lang="ts">
import UserAuth from '@/stores/store'
import { ref, type Ref, onMounted } from 'vue'
import Inotes from '@/interfaces/Inotes'
import router from '@/router';
const store = UserAuth()

const notes:Ref<Array<Inotes>>  = ref([])
  onMounted(async () => {
  try {
    const fetchedNotes = await store.GetNote()
    notes.value = fetchedNotes
  } catch (error) {
    console.error("Failed to fetch notes:", error)
  }
})
const eliminar = async (id: number) => {
  try {
    await store.DeleteNote(id)
    notes.value = notes.value.filter((note) => note.id !== id)
  } catch (error) {
    console.error("Fallo al eliminar la nota: ", error)
  }
  router.push({ name: 'note' })
}
</script>
<style scoped>
.sticky{
    position: sticky;
    position: -webkit-sticky;;
    top: 500px;
    bottom: 30px;
    left: auto;
    z-index: 1000;
  }
</style>
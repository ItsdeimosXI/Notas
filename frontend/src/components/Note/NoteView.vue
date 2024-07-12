<template>
  <el-container class="container">
  <el-card v-for="note in notes" :key="note.id" style="width: 450px;">
    <template #header>
        {{ note.nombre }}
    </template>
    <p> {{ note.descripcion }} </p>
    <template #footer>
      <p> {{ note.usuario }} </p>
      <el-button plain @click="open(note.id)">
        <i class="fa-solid fa-trash"></i> Eliminar
      </el-button>
    </template>
  </el-card>
</el-container>
  <router-link :to="{ name: 'note-create' }">
    <v-btn color="blue" class="sticky">
        <i class="fa-solid fa-check"></i> Crear nueva nota
    </v-btn>
</router-link>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
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

const open = (id: number) => {
  ElMessageBox.confirm(
    'La nota se eliminara permanentemente. Continuar?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then(() => {
      eliminar(id),
      ElMessage({
        type: 'success',
        message: 'Borrado completo',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Borrado cancelado',
      })
    })
}
</script>
<style scoped>
.sticky{
    display: flex;
    position: fixed;
    top: auto;
    bottom: 30px;
    z-index: 1000;
  }
.container{
  display: flex;;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: auto;
  flex: auto;
}
</style>
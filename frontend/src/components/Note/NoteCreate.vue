<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">
                    Crear Nueva Nota
                </div>
        <div class="card-body">
            <form>
                <div class="input-goup mb-3">
                    <span class="input-group-text">
                        <i class="fa-solid fa-commenting">
                        </i>
                    </span>
                    <input v-model="nombre" type="text" id="nombre" class="form-control" maxlength="20" placeholder="Nombre de la nota" required >
                </div>
                <div class="input-goup mb-3">
                    <span class="input-group-text">
                        <i class="fa-solid fa-commenting">
                        </i> 
                        Descripcion de la nota
                    </span>
                    <textarea v-model="descripcion" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="d-grid col-6 mx-auto">
                    <button type="submit" class="btn btn-success" @click.prevent="SendNote">
                        <i class="fa-solid fa-floppy-disk"></i>
                        Guardar
                    </button>
                </div>
            </form>
        </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import UserAuth from '@/stores/store';
import { useRouter } from 'vue-router'
import { ref } from 'vue';
const store = UserAuth()
const nombre = ref('')
const router = useRouter()
const descripcion = ref('')
console.log(nombre.value, descripcion.value)
const SendNote = async () => {
    const note = await store.CreateNote(nombre.value, descripcion.value)
    router.push('/note')
}
</script>

<style scoped>

</style>
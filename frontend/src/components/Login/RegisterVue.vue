<template>
    <section class="vh-100" style="background-color: #eee;">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style="border-radius: 25px;">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registrarse</p>
      
                      <form class="mx-1 mx-md-4">
            
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example1c">Tu Nombre de usuario</label>
                            <input type="text" id="form3Example1" class="form-control" v-model="username" />
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example1c">Tu nombre</label>
                            <input type="text" id="form3Examplec" class="form-control" v-model="first_name" />
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div data-mdb-input-init class="form-outline flex-fill mb-0">
                              <label class="form-label" for="form3Example1c">Tu Apellido</label>
                              <input type="text" id="form3Example1c" class="form-control" v-model="last_name"/>
                            </div>
                          </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c"> Email</label>
                            <input type="email" id="form3Example3c" class="form-control" v-model="email"/>
               
                          </div>
                        </div>
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example4c">contraseña</label>
                            <input type="password" id="form3Example4c" class="form-control" v-model="password" />

                          </div>
                        </div>
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example4cd">Repite la contraseña</label>
                            <input type="password" id="form3Example4cd" class="form-control" v-model="password2"/>

                          </div>
                        </div>
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg" @click.prevent="Register">Registrarme</button>
                        </div>
      
                      </form>
      
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid" alt="Sample image">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import store from '@/stores/store';
import router from '@/router';
const password = ref('')
const password2 = ref('')
const last_name = ref('')
const first_name = ref('')
const username = ref('')
const email = ref('')
const Auth = store()
const Register = async () =>{
  const register = await Auth.register(username.value,first_name.value,last_name.value,email.value,password.value,password2.value)
  if(Auth.errores !== null){
    window.alert("Faltan datos para completar el registro")
  }else{
    window.alert("registro correcto")
    router.push('/login')
  }
}
const UserRules = [{
  required: (value: any) => !!value || 'Este campo es requerido'
}, (value: string | any[]) => {
  if (value.length < 4) return true
  return 'El nombre de usuario debe contener al menos 4 caracteres'
}
]
</script>

<style scoped>

</style>
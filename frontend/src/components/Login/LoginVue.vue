<template>
  <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid" alt="Sample image">
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>

              <p class="lead fw-normal mb-0 me-3">Sign in</p>

            <!-- Email input -->
            <div data-mdb-input-init class="form-outline mb-4">
              <input type="email" id="form3Example3" class="form-control form-control-lg"
                placeholder="Nombre de usuario" v-model="user" />
              <label class="form-label" for="form3Example3" >Username</label>
            </div>
  
            <!-- Password input -->
            <div data-mdb-input-init class="form-outline mb-3">
              <input type="password" id="form3Example4" class="form-control form-control-lg"
                placeholder="Ingrese su contraseña" v-model="password" />
              <label class="form-label" for="form3Example4">Contraseña</label>
            </div>
            <div>
              <input v-model="rememberMe" id="rememberMe" type="checkbox">
              <label for="rememberMe">Remember me</label>
            </div>
            <div class="text-center text-lg-start mt-4 pt-2">
              <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem" @click="LoginUser">Login</button>
              <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
                <router-link class="link-danger" to="/register">Register</router-link> </p>
            </div>
  
          </form>
        </div>
      </div>
    </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UserAuth from '@/stores/store';
import router from '@/router';
const UseAuth = UserAuth()
const user = ref('')
const password = ref('')
const rememberMe = ref(false)
const LoginUser = async () => {
  const login = await UseAuth.login(user.value, password.value, rememberMe.value)
  if (login == false ){
    window.alert('Usuario o contraseña incorrectos')
  }else{
    window.alert('Bienvenido')
    router.push('/note')
  }
}
</script>

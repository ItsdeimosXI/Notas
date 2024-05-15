<template>
    <form>
        <!-- Email input -->
        <div data-mdb-input-init class="form-outline mb-4">
          <input type="text" id="form2Example1" class="form-control" v-model="user"/>
          <label class="form-label" for="form2Example1" >Usuario</label>
        </div>
      
        <!-- Password input -->
        <div data-mdb-input-init class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control" v-model="password" {{store.password}}/>
          <label class="form-label" for="form2Example2">Password</label>
        </div>
      
        <!-- 2 column grid layout for inline styling -->
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <!-- Checkbox -->
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
              <label class="form-check-label" for="form2Example31"> Remember me </label>
            </div>
          </div>
      
          <div class="col">
            <!-- Simple link -->
            <a href="#!">Forgot password?</a>
          </div>
        </div>
      
        <!-- Submit button -->
        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4" {{ store.Login()}} >Sign in</button>

    </form>
</template>

<script setup lang="ts">
import { UseAuthStore } from '@/stores/store';
import { ref } from 'vue';
const user = ref('')
const password = ref('')
const store = UseAuthStore
</script>

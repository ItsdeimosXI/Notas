import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const UseAuthStore = defineStore('Auth', {
  state: () => 
    (
      {Logged: false }
    ),
    actions: {
      async Login(username, password){
        try{
          const res = await fetch()
        }
      }
    }
   
})

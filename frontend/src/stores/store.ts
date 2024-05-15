import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const UseAuthStore = defineStore('Auth', {
  state: () =>
  (
    {
      authUser: null
    }

  ),
  getters: {
    user: (state) => state.authUser
  },
  actions: {
    async GetToken(){
      await axios.get("api/token")
    },
    async GetUser()
    async Login(username: string, password:string): Promise<boolean> {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/api-auth/login/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password
          })
        })
        const response = await res.json()
        if ('non_field_errors' in response) {
            this.error = "Login failed"
            return false
            }else{
              this.Token = response.data.key
              return true
            }
      }
      catch(error){
        this.error = "Login failed"
        return false
      }
      }
  }

})

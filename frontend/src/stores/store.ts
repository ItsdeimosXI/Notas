import axios from "axios";
import { defineStore } from "pinia";

const UserAuth = defineStore("userAuth", {
  state: () => {
    return {
      token: null,
      error: null
    }
    
  },
  actions: {
    async login(username: string, password:string) {
      const response: any = await axios.post('/api/token/', {
        username: username,
        password: password,
      }).then(response => {
        this.token = response.data.access
        return this.token
      }).catch(error => {
        this.error = error
        return this.error
        })
    },
    async register( username: string, first_name: string, last_name: string,email: string,password: string, password2: string,) {
      const response: any = await axios.post('/api/register/', {
        email: email,
        password: password,
        password2: password2,
        username: username,
        first_name: first_name,
        last_name: last_name,
    }).catch(error => {
      return error
    })
    },
    async GetNote(){
      const response = await axios.get('/api/notes/', {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }).then(response => {
        return response.data
      }).catch(error => {
        console.log(error);
        return []
      })
      return response
    },
    async CreateNote(content: string){
      const response = await axios.post('/api/note/',
      { content: content },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        
      }
      }).catch(error => {
        console.log(error);
      })
    }
  }
})

export default UserAuth
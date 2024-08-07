import axios from "axios";
import { defineStore } from "pinia";

const UserAuth = defineStore("userAuth", {
  state: () => {
    return {
      token: localStorage.getItem('token') || null,
      errores: null,
      mensaje: []
    }
  },
  actions: {
    async login(username: string, password:string, rememberMe: boolean) {
      const response: any = await axios.post('/api/token/', {
        username: username,
        password: password,
      }).then(response => {
        this.errores = null
        this.mensaje = []
        this.token = response.data.access
        if (rememberMe) {
          localStorage.setItem('token', this.token)
        } else {
          sessionStorage.setItem('token', this.token)
        }
        return this.token
      }).catch( (error) =>{
        if (error.response.status >= 400){
          this.errores = error.response.status
          this.mensaje = error.response.data.detail
        }
        })
    },
    logout() {
      this.token = null;
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
    },
    async register( username: string, first_name: string, last_name: string,email: string,password: string, password2: string,) {
      const response: any = await axios.post('/api/register/', {
        email: email,
        password: password,
        password2: password2,
        username: username,
        first_name: first_name,
        last_name: last_name,
    }).catch( (error) => {
      if (error.response.status >= 400){
        this.errores = error.response.status
        this.mensaje = error.response.data
        console.log(this.errores)
        console.log(error.response.data)
    }
    })
    },
    async GetNote(){
      const response = await axios.get('/api/notes/', {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }).then(response => {
        return response.data
      }).catch( (error)=> {
        if (error.response.status > 400){
         this.errores = error.response.status
          console.log(this.errores)
        }
        
      })
      return response
    },
    async CreateNote(nombre: string, descripcion: string){
      const response = await axios.post('/api/notes/',
      { nombre: nombre, descripcion: descripcion },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
      }
      }).catch(error => {
        console.log(error);
      })
    },
    async DeleteNote(id: number){
      const response = await axios.delete('/api/notes/' + id, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }).then(response => {
        return response.data
      }).catch(error => {
        console.log(error);
        return []
      })
  },
  }
})

export default UserAuth
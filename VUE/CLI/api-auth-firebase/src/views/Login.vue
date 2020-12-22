<template>
  <h1 class="my-5">Login</h1>
  <form @submit.prevent="procesarFormulario()">
      <input 
        type="email" 
        placeholder="emal"
        class="form-control my-2"
        v-model.trim="email"
      >
      <input 
        type="password" 
        placeholder="password"
        class="form-control my-2"
        v-model.trim="password1"
      >
      <button 
        type="submit"
        class="btn btn-primary"
        :disabled=bloquear
      >
        Enviar
      </button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            email: '',
            password1: ''
        }
    },
    computed: {
        bloquear(){
            if (!this.email.includes('@')) {
                return true
            }
            if (this.password1.length > 5) {
                return false
            }
            return true
        }
    },
    methods:{
      ...mapActions(['loginUsuario']),
      procesarFormulario(){
        this.loginUsuario({email: this.email, password: this.password1})
        this.email = ''
        this.password1 = ''
      }
    }
}
</script>
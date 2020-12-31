<template>
  <h1 class="my-5">Login</h1>
  <div class="alert alert-danger" v-if="error.tipo !== null">
    {{ error.mensaje }}
  </div>
  <form @submit.prevent="procesarFormulario()">
      <input 
        type="email" 
        placeholder="emal"
        class="form-control my-2"
        v-model.trim="email"
        :class="[error.tipo === 'invalidUser' ? 'is-invalid' : '']"
      >
      <input 
        type="password" 
        placeholder="password"
        class="form-control my-2"
        v-model.trim="password1"
        :class="[error.tipo === 'invalidUser' ? 'is-invalid' : '']"
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
import { mapActions, mapState } from 'vuex'
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
        },
        ...mapState(['error'])
    },
    methods:{
      ...mapActions(['loginUsuario']),
      async procesarFormulario(){
        await this.loginUsuario({email: this.email, password: this.password1})
        if (this.error.tipo !== null) {
          return
        }
        this.email = ''
        this.password1 = ''
      }
    }
}
</script>
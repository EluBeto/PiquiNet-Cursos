<template>
  <div class="navbar navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">
        Formularios
      </router-link>
      <div class="d-flex">
          <router-link 
            to="/" 
            class="btn btn-dark"
             v-if="usuarioAutenticado"
          >
            Tareas
          </router-link>
          <router-link 
            to="/login" 
            class="btn btn-dark"
             v-if="!usuarioAutenticado"
          >
            Login
          </router-link>
          <router-link 
            to="/registro" 
            class="btn btn-dark"
             v-if="!usuarioAutenticado"
          >
            Registro
          </router-link>
          <button
            class="btn btn-dark"
            v-if="usuarioAutenticado"
          >
            Cerrar Sesión
          </button>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['usuarioAutenticado'])
  }
}
</script>

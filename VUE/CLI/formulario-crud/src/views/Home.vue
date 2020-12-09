<template>
  <form @submit.prevent="procesarForm">
    <Input :tarea="tarea"/>
  </form>
  <hr>
  {{ tarea }}
</template>

<script>
import Input from '../components/Input'
export default {
  name: 'Home',
  components: {
    Input
  },
  data() {
    return {
      tarea:{
        id: String,
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  methods:{
    procesarForm(){
      console.log(this.tarea)
      if (this.tarea.nombre.trim() === "") {
        console.error('El campo esta vacio')
        return
      }
      console.log('Se guardo')
      this.tarea = {
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent="procesarForm">
    <Input :tarea="tarea"/>
  </form>
  
  <hr>

  <ListaTareas />

</template>

<script>
import Input from '../components/Input'
import ListaTareas from '../components/ListaTareas'
import { mapActions } from "vuex"

const shortid = require('shortid')

export default {
  name: 'Home',
  components: {
    Input,
    ListaTareas
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
    ...mapActions(['setTareas']),
    procesarForm(){
      console.log(this.tarea)
      if (this.tarea.nombre.trim() === "") {
        console.error('El campo esta vacio')
        return
      }
      console.log('Se guardo')
      
      //Generar ID
      this.tarea.id = shortid.generate()
      console.log(this.tarea.id)
      // Enviar datos
      this.setTareas(this.tarea)

      this.tarea = {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  }
}
</script>

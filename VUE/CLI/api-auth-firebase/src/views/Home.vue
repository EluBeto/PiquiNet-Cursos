<template>
  <h1>Formulario con VUE</h1>
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
    ...mapActions(['setTareas', 'cargarLocalstorage']),
    procesarForm(){
      if (this.tarea.nombre.trim() === "") {
        console.error('El campo esta vacio')
        return
      }
      console.log('Se guardo')
      
      //Generar ID
      this.tarea.id = shortid.generate()
      
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
  },
  created(){
    this.cargarLocalstorage()
  }
}
</script>

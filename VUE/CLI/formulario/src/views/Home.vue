<template>
  <form>
    <input type="text" 
           class="form-control my-2" 
           placeholder="Ingrese nombre"
           v-model="tarea.nombre"
    >
    <div class="form-check form-check-inline">
      <input type="checkbox"
             class="form-check-input"
             id="check1"
             v-model="tarea.categorias"
             value="javascript"
      >
      <label class="form-check-label"
             for="check1"
      >
        Java Script
      </label>
    </div>

    <div class="form-check form-check-inline">
      <input type="checkbox"
             class="form-check-input"
             id="check2"
             v-model="tarea.categorias"
             value="node-js"
      >
      <label class="form-check-label"
             for="check2"
      >
        Node.js
      </label>
    </div>

    <div class="mt-2">
      <div class="form-check form-check-inline">
      <input type="radio"
             class="form-check-input"
             id="radio-1"
             v-model="tarea.estado"
             value="urgente"
      >
      <label class="form-check-label"
             for="radio-1"
      >
        Urgente
      </label>
    </div>

    <div class="form-check form-check-inline">
      <input type="radio"
             class="form-check-input"
             id="radio-2"
             v-model="tarea.estado"
             value="relax"
      >
      <label class="form-check-label"
             for="radio-2"
      >
        Relax
      </label>
    </div>
    </div>

    <div class="mt-2">
      <input type="number"
             class="form-control my-2"
             v-model.number="tarea.numero">
    </div>
     
  </form>
  <hr>
  {{ tarea }}
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      tarea:{
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
}
</script>

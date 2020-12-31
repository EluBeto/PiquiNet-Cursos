<template>
  <div class="about">
    <h1>Contador: {{ contador }}</h1>
  </div>
  <hr>
  <button
  class="btn btn-success"
   @click="aumentar"
  >+</button>
  <button
  class="btn btn-danger"
   @click="disminuir"
  >-</button>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const contador = ref(0)

    const aumentar = () => {
      contador.value ++
    }

    const disminuir = () => {
      contador.value --
    }
    
    return {
      contador,
      aumentar,
      disminuir
    }
  }
}
</script>

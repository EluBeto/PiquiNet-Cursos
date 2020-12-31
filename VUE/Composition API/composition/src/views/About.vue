<template>
  <div class="about">
    <h1 :style="{'color' : cambiaColor}">Contador: {{ contador }}</h1>
  </div>
  <hr>
  <button class="btn btn-success" @click="aumentar" >+</button>
  <button
  class="btn btn-danger"
   @click="disminuir"
  >-</button>
  <hr>
  <input type="text" class="form-control" v-model="texto">
  <p>{{texto}}</p>
</template>
<script>
import { computed, ref } from 'vue'
export default {
  setup() {
    const contador = ref(0)
    const texto = ref('')

    const aumentar = () => {
      contador.value ++
    }

    const disminuir = () => {
      contador.value --
    }

    const cambiaColor = computed(() => {
      if (contador.value < 0) {
        return 'red'
      } else {
        return 'blue'
      }
    })

    return {
      contador,
      texto,
      aumentar,
      disminuir,
      cambiaColor
    }
  }
}
</script>

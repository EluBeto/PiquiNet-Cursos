<template>
  <div class="about">
    <Titulo :contador="contador" :cambiaColor="cambiaColor" />
    <!-- <h1 :style="{'color' : cambiaColor}">Contador: {{ contador }}</h1> -->
  </div>
  <hr>
    <!-- <button 
        class="btn btn-success"
        @click="aumentar"
    >
      +
    </button>
    <button
      class="btn btn-danger"
      @click="disminuir"
    >
      -
    </button> -->
    <Btn :textoBoton="'Autmentar'" @accion="aumentar"/>
    <Btn :textoBoton="'Disminuir'" @accion="disminuir" />
  <hr>
  <input type="text" class="form-control" v-model="texto">
  <p>{{texto}}</p>
</template>
<script>
import { computed, ref } from 'vue'
import Titulo from '../components/Titulo'
import Btn from '../components/Btn'
export default {
  components: {
    Titulo,
    Btn
  },
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

<template>
  <h1>App Contador: {{ contador }}</h1>
  <contador-uno></contador-uno>
  <contador-accion></contador-accion>
</template>

<script>
import { provide, ref } from 'vue'
import ContadorUno from './components/ContadorUno'
import ContadorAccion from './components/ContadorAccion'
export default {
  name: 'App',
  components: {
    ContadorUno,
    ContadorAccion
  },
  setup() {
    const contador = ref(0)

    provide('contador', contador)

    return { contador }
  }
}
</script>

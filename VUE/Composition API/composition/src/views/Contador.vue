<template>
  <h1 :style="{'color' : cambiaColor}">Contador: {{ contador }} </h1>
  <Btn :textoBoton="'Aumentar'" @accion="aumentar" />
  <Btn :textoBoton="'Disminuir'" @accion="disminuir" />
</template>

<script>
import Btn from '../components/Btn'
import { useContador } from '../hooks/useContador'
export default {
    components: {
        Btn
    },
    setup() {
     // const { contador, aumentar, disminuir } = useContador()
        return { ...useContador() }
    }
}
</script>

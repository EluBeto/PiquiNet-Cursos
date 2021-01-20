<template>
  <!-- <h1>Detalle: {{ $route.params.nombre }}</h1> -->
  <h1>Detalle: {{ nombre }}</h1>
</template>

<script>
import {useRoute} from 'vue-router'
export default {
    props: ['nombre'],
    setup(props) {
        console.log(props.nombre)
        const nombreParams = useRoute()
        console.log(nombreParams.params.nombre)
    }
}
</script>

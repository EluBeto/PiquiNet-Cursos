<template>
  <!-- <h1>Detalle: {{ $route.params.nombre }}</h1> -->
  <h1>Detalle: {{ nombre }}</h1>
  <p v-for="(pais, index) in arrayData" :key="index">
      Region: {{ pais.region }}
      <br>
      Capital: {{ pais.capital }}
  </p>
</template>

<script>
import {useRoute} from 'vue-router'
import {useFetch} from '../hooks/useFetch'
export default {
    props: ['nombre'],
    setup(props) {
        // console.log(props.nombre)
        const nombreParams = useRoute()
        // console.log(nombreParams.params.nombre)

        return {...useFetch(`https://restcountries.eu/rest/v2/name/${nombreParams.params.nombre}`)}
    }
}
</script>

<template>
  <div class="container">
    <h1 class="text-center">Paises API</h1>
    <Continentes></Continentes>
    <CardList></CardList>
  </div>
</template>

<script>
import CardList from './components/CardList'
import Continentes from './components/Continentes'
export default {
  name: 'App',
  components: {
    CardList,
    Continentes
   }
}
</script>

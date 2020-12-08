<template>
  <Titulo texto="Ruta con parametros" />
  <h2>Parametro: {{$route.params.id}}</h2>
  <hr>
  <h2>{{articulo.title}}</h2>
  <hr>
  <p>
    {{articulo.body}}
  </p>
  
</template>

<script>
import Titulo from "../components/Titulo";
export default {
  components: {
    Titulo
  },
  data() {
    return {
      articulo: {}
    }
  },
  methods: {
    async cargaArticulo(id){
      try {
          const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          const objeto = await data.json()
          console.log(objeto)
          this.articulo = objeto
      } catch (error) {
          console.error(error)
      }
    }
  },
  created(){
    this.cargaArticulo(this.$route.params.id)
  }
}
</script>

<style>

</style>
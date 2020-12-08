<template>
  <div class="home">
    <h1 :style="colorContador">
      {{ titulo }} - {{ contador }}
    </h1>
    <button @click="accionIncrementar">Incrementar</button>
    <BtnDisminuir />
    
    <hr>

    <BotonAccion :estado="true"/> <BotonAccion :estado="false"/>
  </div>
</template>

<script>
import BtnDisminuir from '../components/BtnDisminuir'
import BotonAccion from '../components/BotonAccion'
import { mapState, mapMutations, mapActions } from "vuex"

export default {
  name: 'Home',
  components: {
    BtnDisminuir,
    BotonAccion
  },
  data() {
    return {
      titulo: 'Mi contador VUEX'
    }
  },
  computed: {
    ...mapState(['contador']),
    colorContador(){
      return [this.contador > 100 ? {'color': 'green'} : {'color': 'red'}]
    }
  },
  methods:{
    ...mapMutations(['incrementar']),
    ...mapActions(['accionIncrementar'])
  }
}
</script>

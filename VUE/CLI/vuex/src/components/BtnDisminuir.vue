<template>
  <div>
    <button @click="accionDisminuir(50)">Disminuir</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: 'BtnDisminuir',
  methods: {
    ...mapActions(['accionDisminuir'])
  }

}
</script>

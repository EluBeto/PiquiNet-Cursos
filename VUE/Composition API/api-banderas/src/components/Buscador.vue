<template>
  <input type="text"
    placeholder="Ingrese Pais"
    class="form-control my-3"
    v-model="texto"
    @keyup="procesarImput"
  >
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
    setup() {
        const texto = ref('')
        const store = useStore()
        const procesarImput = () => {
            store.dispatch('filtroName', texto.value)
        }
        return { texto, procesarImput }
    }
}
</script>

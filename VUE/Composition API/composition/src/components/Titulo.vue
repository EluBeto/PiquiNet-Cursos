<template>
  <h1
    :style="{'color' : cambiaColor}"
  >
    Contador: {{ signoPeso }}
  </h1>
</template>

<script>
import { computed } from 'vue'
export default {
    props: ['contador', 'cambiaColor'],
    setup(props) {
      const signoPeso = computed(() => {
        return '$' + props.contador
      })
      return { signoPeso }
    }
    // computed: {
    //   signoPeso() {
    //     return '$' + this.contador
    //   }
    // }
}
</script>

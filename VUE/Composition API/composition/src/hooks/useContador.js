import { computed, ref } from 'vue'
export function useContador() {
    const contador = ref(0)

    const aumentar = () => {
        contador.value ++
    }
  
    const disminuir = () => {
      contador.value --
    }

    const cambiaColor = computed(() => {
      if (contador.value < 0) {
        return 'red'
      } else {
        return 'blue'
      }
    })

    return { contador, aumentar, disminuir, cambiaColor }
}
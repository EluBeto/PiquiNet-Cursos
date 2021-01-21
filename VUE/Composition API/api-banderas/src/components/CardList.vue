<template>
  <div class="row">
      <div class="col-12">
          Card
      </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()
        onMounted(() => {
            store.dispatch('getPaises')
            // store.state.paises
        })
    }
}
</script>

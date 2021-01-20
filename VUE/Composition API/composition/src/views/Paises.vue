<template>
  <h1>Lista de Paises</h1>
  <p v-for="(pais, index) in arrayData" :key="index">
      {{ pais.name }}
  </p>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
    setup() {
        const arrayData = ref([])

        onMounted(async() => {
            try 
            {
                const res = await fetch('api.json')
                arrayData.value = await res.json()
            } catch (error) {
                console.error(error)
            }
        })
        // const fetchData = async() => {
        //     try 
        //     {
        //         // const res = await fetch('https://restcountries.eu/rest/v2/all')
        //         const res = await fetch('api.json')
        //         arrayData.value = await res.json()
        //     } catch (error) {
        //         console.error(error)
        //     }
        // }
        // fetchData()

        return { arrayData }
    }
}
</script>

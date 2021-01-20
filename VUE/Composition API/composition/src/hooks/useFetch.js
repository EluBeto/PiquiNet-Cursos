import { onMounted, ref } from 'vue'

export function useFetch(url) {
    const arrayData = ref([])

    onMounted(async() => {
        try 
        {
            const res = await fetch(url)
            arrayData.value = await res.json()
        } catch (error) {
            console.error(error)
        }
    })

    return { arrayData }
}
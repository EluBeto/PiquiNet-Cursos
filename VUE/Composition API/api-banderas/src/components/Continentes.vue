<template>
    <div class="text-center">
        <h3>Filtrar por continentes: </h3>
        <div class="btn-group mb-3">
            <button class="btn btn-dark" @click="filterByRegion('Americas')">AM</button>
            <button class="btn btn-dark" @click="filterByRegion('Europe')">EU</button>
            <button class="btn btn-dark" @click="filterByRegion('Asia')">AS</button>
            <button class="btn btn-dark" @click="filterByRegion('Oceania')">OC</button>
            <button class="btn btn-dark" @click="filterByRegion('Africa')">AF</button>
            <button class="btn btn-dark" @click="filterByRegion('')">ALL</button>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()
        const filterByRegion = (region) => {
            store.dispatch('filtraRegion', region)
        }

        return {filterByRegion}
    }
}
</script>

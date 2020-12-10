import { createStore } from 'vuex'
import router from "../router"

export default createStore({
  state: {
    tareas: [],
    tarea:{
      id: String,
      nombre: '',
      categorias: [],
      estado: '',
      numero: 0
    }
  },
  mutations: {
    cargar(state, payload){
      state.tareas = payload
    },
    set(state, payload){
      state.tareas.push(payload)
    },
    eliminar(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)
    },
    tarea(state, payload){
      if (!state.tareas.find(item => item.id === payload)) {
        router.push('/')
        return
      }
      state.tarea = state.tareas.find(item => item.id === payload)
    },
    update(state, payload){
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      router.push('/')
    }
  },
  actions: {
    async cargarLocalstorage({commit}){
      try {
        const respuesta = await fetch('https://udemy-api-elu-default-rtdb.firebaseio.com/tareas.json')
        const dataDB = await respuesta.json()
        const arrayTareas = []

        for (let id in dataDB) {
          arrayTareas.push(dataDB[id])
        }
        commit('cargar', arrayTareas)
      } catch (error) {
        console.error(error)
      }
    },
    async setTareas({commit}, tarea){
      try {
        const res = await fetch(`https://udemy-api-elu-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
          method:'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea)
        })

        const dataDB = await res.json()
      } catch (error) {
        console.error(error)
      }
      commit('set', tarea)
    },
    deleteTareas({commit}, id){
      commit('eliminar', id)
    },
    setTarea({commit}, id){
      commit('tarea', id)
    },
    updateTarea({commit}, tarea){
      commit('update', tarea)
    }
  },
  modules: {
  }
})

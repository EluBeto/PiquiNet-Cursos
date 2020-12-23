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
    },
    user: null
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },
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
    serrarSesion({ commit }){
      commit('setUser', null)
      router.push('/Login')
      localStorage.removeItem('usuario')
    },
    async loginUsuario({ commit }, usaurio){
      try {
        const rest = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBQPcqQIZs8_DVyhgI7khMSYVng2pmhXJk', {
          method: 'POST',
          body: JSON.stringify({
            email: usaurio.email,
            password: usaurio.password,
            returnSecureToken: true
          })
        })

        const userDB = await rest.json()
        if (userDB.error) {
         return console.error(userDB) 
        }
        commit('setUser', userDB)
        router.push('/')
        localStorage.setItem('usuario', JSON.stringify(userDB))

      } catch (error) {
        console.error(error)
      }
    },
    async registrarUsuario({commit}, user){
      try {
        const rest = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBQPcqQIZs8_DVyhgI7khMSYVng2pmhXJk', {
          method: 'POST',
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            returnSecureToken: true
          })
        })
        const userDB = await rest.json()
        if (userDB.error) {
          console.error(userDB.error)
          return
        }
        commit('setUser', userDB)
        router.push('/Login')
        localStorage.setItem('usuario', JSON.stringify(userDB))

      } catch (error) {
        console.error(error);
      }
    },
    async cargarLocalstorage({ commit, state }){
      if (localStorage.getItem('usuario')) {
        commit('setUser', JSON.parse(localStorage.getItem('usuario')))
      } else {
        return commit('setUser', null)
      }
      try {
        const respuesta = await fetch(`https://udemy-api-elu-default-rtdb.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`)
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
    async setTareas({ commit, state }, tarea){
      try {
        await fetch(`https://udemy-api-elu-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
          method:'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea)
        })

        commit('set', tarea)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteTareas({ commit, state }, id){
      try {
         await fetch(`https://udemy-api-elu-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
          method: 'DELETE'
        })
        commit('eliminar', id)

      } catch (error) {
        console.error(error);
      }
    },
    setTarea({commit}, id){
      commit('tarea', id)
    },
    async updateTarea({ commit, state }, tarea){
     try {
        await fetch(`https://udemy-api-elu-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
          method:'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea)
        })
       commit('update', tarea)
     } catch (error) {
       console.error('Valio:');
       console.error(error);
     }
    }
  },
  getters: {
    usuarioAutenticado(state) {
      return !!state.user
    }
  },
  modules: {
  }
})

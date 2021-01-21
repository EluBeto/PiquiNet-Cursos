import { createStore } from 'vuex'

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: []
  },
  mutations: {
    setPaises(state, payload) {
      state.paises = payload
    },
    setPaisesFiltrados(state, payload) {
      state.paisesFiltrados = payload
    }
  },
  actions: {
    async getPaises({ commit }) {
      try {
        const responsePaises = await fetch('api.json')
        const data = await responsePaises.json()
        commit('setPaises', data)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})

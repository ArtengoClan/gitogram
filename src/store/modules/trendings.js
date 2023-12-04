import * as api from '@/api'

export default ({
  namespaced: true,
  state: {
    trendings: {
      data: []
    }
  },
  getters: {
    getRepoById: (state) => (id) => {
      return state.trendings.data.find(item => item.id === id)
    }
  },
  mutations: {
    UPDATE_TRENDINGS (state, payload) {
      state.trendings.data = payload
    },
    SET_REAME: (state, payload) => {
      state.trendings.data = state.trendings.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    }
  },
  actions: {
    async fetchTrendings ({ commit }) {
      try {
        const { data } = await api.trandings.getTrendings()
        // this.items = data.items
        commit('UPDATE_TRENDINGS', data.items)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return
      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        console.log(data)
        commit('SET_REAME', { id, content: data })
      } catch (error) {
        console.log(error)
        // throw (error)
      }
    }
  }
})

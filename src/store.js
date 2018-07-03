import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    tokenData: null
  },
  mutations: {
    setToken (state, token) {
      state.tokenData = token
    }

  },
  actions: {

  }
})

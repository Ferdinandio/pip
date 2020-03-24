import Vue from 'vue'
import Vuex from 'vuex'
// import moment from "moment"
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  actions: {
    fetchPosts ({ commit }, numberPage) {
      return axios.get(`https:5e63f7a3782c970014a89ee5.mockapi.io/api/post?page=${numberPage}&limit=3`).then((data) => {
        commit('loadPage', data.data)
      })
    }
  },
  mutations: {
    loadPage (state, page) {
      state.page = page
    }
  },
  state: {
    page: []
  },
  getters: {
    page: state => state.page
  }
})

export default store

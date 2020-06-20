import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {},
    userRole: [],
    pageTab: {}
  },
  mutations: {
    setUserInfo(state, data) {
      state.userInfo = data
    },
    setUserRole(state, data) {
      state.userRole = data
    },
    setPageTab(state, data) {
      const list = { ...state.pageTab }
      list[data.name] = data
      state.pageTab = list
    },
    delPageTab(state, data) {
      const list = { ...state.pageTab }
      delete list[data]
      state.pageTab = { ...list }
    }
  }
})

export default store

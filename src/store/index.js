import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// 初始化时用sessionStorage.getItem('token')，这样子刷新页面就无需重新登录
const state = {
  token: window.sessionStorage.getItem('token'),
  username: ''
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})

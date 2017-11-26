import * as types from './types'

// actions常用于异步更改状态。也就是说它一般用来先发送请求，然后再commit

// 下面的代码可以说没必要。没发请求，多此一举。因为项目很久之前写的，这里我就不做大更改了，更改看下面
// 对于vuex不是很理解的可不看下面，先跟着我先的代码走一遍，之后思想明了，自己再做更改即可。写代码就是这样，刚开始难以写一手漂亮的代码。
// 直接在页面发送请求后再store.commit()是完全可以的

export default {
  UserLogin ({ commit }, data) {
    commit(types.LOGIN, data)
  },
  UserLogout ({ commit }) {
    commit(types.LOGOUT)
  },
  UserName ({ commit }, data) {
    commit(types.USERNAME, data)
  }
}

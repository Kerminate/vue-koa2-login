import axios from 'axios'
import store from './store'
import router from './router'

// 设置全局axios默认值
axios.defaults.timeout = 5000 // 5000ms的超时验证
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 创建一个axios实例
const instance = axios.create()
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

axios.interceptors.request.use = instance.interceptors.request.use

// request拦截器
instance.interceptors.request.use(
  config => {
    // 每次发送请求之前检测,若vuex存有 token,那么都要放在请求头发送给服务器
    if (store.state.token) {
      config.headers.Authorization = `token {store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// response拦截器
instance.interceptors.response.use(
  response => response,
  // 默认除了2XX之外的都是错误的，就会走这里
  error => {
    if (error.response) {
      
    }
  }
)

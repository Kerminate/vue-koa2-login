import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'

Vue.use(Router)

// 路由懒加载 使用require.ensure来替代import,它能帮你将该组件以及该组件的所有依赖分割到一个单独的chunk中去
const index = resolve => {
  // []用来指定该路由组件需要加载的依赖
  require.ensure(['../components/index.vue'], () => {
    resolve(require('../components/index.vue'))
  })
}

const Login = resolve => {
  require.ensure(['../components/Login.vue'], () => {
    resolve(require('../components/Login.vue'))
  })
}

const Register = resolve => {
  require.ensure(['../components/Register.vue'], () => {
    resolve(require('../components/Register.vue'))
  })
}

const Hello = resolve => {
  require.ensure(['../components/Hello.vue'], () => {
    resolve(require('../components/Hello.vue'))
  })
}

const Error404 = resolve => {
  require.ensure(['../components/404.vue'], () => {
    resolve(require('../components/404.vue'))
  })
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '*',
      name: 'error',
      component: Error404
    }
  ]
})

// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  // 获取store里的token
  let token = store.state.token
  // 判断要去的路由有没有requiresAuth
  if (to.meta.requireAuth) {
    if (token) {
      next()
    } else {
      next({
        path: '/index',
        query: { redirect: to.fullPath } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router

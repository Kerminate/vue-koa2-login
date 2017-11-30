const Koa = require('koa')
const app = new Koa()

// router
const Router = require('koa-router')

// 父路由
const router = new Router()

// bodyparser: 该中间件用于post请求的数据
const bodyparser = require('koa-bodyparser')
app.use(bodyparser())

// 引入子路由
const loginRouter = require('./server/routes/user.js')

// 装载子路由
router.use('/api', loginRouter.routes(), loginRouter.allowedMethods()) // allowedMethods:当前接口运行的method

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(8080, () => {
  console.log('The server is running at http://localhost:' + 8888)
})

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/vue-login', {
  useMongoClient: true
})

let db = mongoose.connection
// 防止mongoose: mpromise错误
mongoose.Promise = global.Promise

db.on('error', () => {
  console.log('数据库连接出错！')
})

db.on('connected', () => {
  console.log('数据库连接成功！')
})

// 声明schema
const userSchema = mongoose.Schema({
  username: String,
  password: String,
  token: String,
  create_time: Date
})

// 根据schema生成model
const model = {
  User: mongoose.model('User', userSchema)
}

module.exports = model

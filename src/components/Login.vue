<template lang="html">
  <div>
    <el-form :model="loginForm" :rules="rules" label-width="100px" ref="loginForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from '@/axios'
import Register from './Register'

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名不能少', trigger: 'blur' },
          { min: 6, max: 16, message: '用户名在6到16位之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) { // 验证通过
          let opt = this.loginForm
          api.userLogin(opt)
            .then(({ data }) => { // 解构赋值拿到data
              // 账号不存在
              if (data.info === false) {
                this.$message({
                  type: 'info',
                  message: '账号不存在'
                })
                return false
              }
              // 账号存在
              if (data.success) {
                this.$message({
                  type: 'success',
                  message: '登录成功'
                })
                let token = data.token
                let username = data.username
                this.$store.dispatch('UserLogin', token)
                this.$store.dispatch('UserName', username)
                // 如果用户手动输入"/"那么会跳转到这里来，即this.$route.query.redirect有参数
                let redirectUrl = decodeURIComponent(this.$route.query.redirect || '/')
                // 跳转到指定的路由
                this.$router.push({
                  path: redirectUrl
                })
              } else {
                this.$message({
                  type: 'info',
                  message: '密码错误！'
                })
              }
            })
        } else {
          // 验证不通过
          return false
        }
      })
    }
  },
  components: {
    Register
  }
}
</script>

<style lang="css">
</style>

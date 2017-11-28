<template lang="html">
  <div>
    <el-row>
      <el-col :span="10" :offset="7">
        <!-- el-tabs放在这里其实不合理，可以提到App.vue里面。然后引入Login组件和Register组件 -->
        <el-tabs v-model="activeName">
          <el-tab-pane label="登录" name="login">
            <el-form :model="loginForm" :rules="rules" label-width="100px" ref="loginForm">
              <el-form-item label="用户名" prop="username">
                <el-input v-model="loginForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                <el-buttom @click="resetForm('loginForm')">重置</el-buttom>
              </el-form-item>
            </el-form>
          </el-tab-pane>

          <el-tab-pane label="注册" name="register">
            <Register></Register>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from 'axios'
import Register from './Register'

export default {
  data () {
    return {
      activeName: 'login', // 选项卡
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
    
  }
}
</script>

<style lang="css">
</style>

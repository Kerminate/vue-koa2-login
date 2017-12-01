<template lang="html">
  <div>
    <el-row>
      <el-col :span="10" :offset="7">
        <el-tabs v-model="activeName">
          <el-tab-pane label="登录" name="login">
            <Login></Login>
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
import Login from './Login'
import Register from './Register'

export default {
  data () {
    return {
      activeName: 'login' // 选项卡
    }
  },
  components: {
    Login,
    Register
  }
}
</script>

<style lang="css">
</style>

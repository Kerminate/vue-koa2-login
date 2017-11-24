<template lang="html">
  <div>
    <el-form :model="regForm" :rules="rules" label-width="100px" ref="regForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="regForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="regForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword">
        <el-input v-model="regForm.checkPassword" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('regForm')">注册</el-button>
        <el-button @click="resetForm('regForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>

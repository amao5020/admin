<template>
  <div>
    <div class="m20 loginInput"><i class="el-icon-user"></i>
      <input v-model="username"
             type="text"
             :placeholder="placeholderShow1?'请输入用户名':''"
             @click="placeholderShow1=false"
             @blur="placeholderShow1=true">
    </div>
    <div class="m20 loginInput"><i class="el-icon-lock"></i>
      <input v-model="password"
             type="text"
             :placeholder="placeholderShow2?'请输入密码':''"
             @click="placeholderShow2=false"
             @blur="placeholderShow2=true"
             show-password>
    </div>
    <div class="loginBtn "><span>登录</span></div>
    <div class="linkBtn">
      <a href="#"
         @click="goToSetPw()">忘记密码</a></div>
  </div>
</template>
<script>
export default {
  name: 'loginBox',
  data () {
    return {
      username: null,
      password: null,
      placeholderShow1: true,
      placeholderShow2: true
    }
  },
  methods: {
    goToRegister () {
      this.$emit('changeTab')
    },
    goToSetPw () { }
  }
}
</script>

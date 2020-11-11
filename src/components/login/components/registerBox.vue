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
    <div class="m20 loginInput"><i class="el-icon-lock"></i>
      <input v-model="rePassword"
             type="text"
             :placeholder="placeholderShow3?'确认密码':''"
             @click="placeholderShow3=false"
             @blur="placeholderShow3=true"
             show-password>
    </div>
    <div class="loginBtn"><span>注册</span></div>
  </div>
</template>
<script>
export default {
  name: 'loginBox',
  data () {
    return {
      username: null,
      password: null,
      rePassword: null,
      placeholderShow1: true,
      placeholderShow2: true,
      placeholderShow3: true
    }
  },
  methods: {
    login () { }
  }
}
</script>

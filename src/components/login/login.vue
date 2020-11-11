<template>
  <div class="login-container">
    <div class="login">
      <ul class="loginTab">
        <li class="tabBox0 fll">
          <a id="tab0"
             :class="tab=='tab0'?'tabClickColor':null"
             @click="tabChange('tab0')">用户登陆</a>
        </li>
        <li class="tabBox1 fll">
          <a id="tab1"
             :class="tab=='tab1'?'tabClickColor':null"
             @click="tabChange('tab1')">用户注册</a>
        </li>
        <div class="clear"></div>
      </ul>
      <login-box v-if="tab=='tab0'"></login-box>
      <register-box v-if="tab=='tab1'"></register-box>
    </div>
  </div>
</template>
<script>
import LoginBox from '@/components/login/components/loginBox'
import RegisterBox from '@/components/login/components/registerBox'
export default {
  name: 'Login',
  components: {
    LoginBox,
    RegisterBox,
  },
  data () {
    return {
      tab: 'tab0'
    }
  },
  methods: {
    tabChange (tab) {
      this.tab = tab
    }
  }
}
</script>
<style scoped>
.tabClickColor {
  color: rgb(69, 149, 185);
}
</style>

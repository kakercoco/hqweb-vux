<template>
	<div class="login">
		<group>
    <x-input title="title" v-model="phone" placeholder="手机号" type="tel" is-type="china-mobile">
      <img slot="label" style="margin-right:10px;display:block;" src="http://hqwell.cn/images/login01.png" width="22" height="22">
    </x-input>
    </group>
    <group>
    <x-input title="title" v-model="password" placeholder="密码" :min=6 :max=12  :type="type">
      <img slot="label" style="margin-right:10px;display:block;" src="http://hqwell.cn/images/login02.png" width="22" height="22">
      <img slot="right"  src="http://hqwell.cn/images/login03.png" width="22" @click="ck">
    </x-input>
  </group>
  <p class="forgit" @click="forgitPsd"><span>忘记密码?</span></p>
  <x-button  type="default" style="border-radius:99px;background-color:#fc3;font-size:14px;">登录</x-button>
  <p class="go-register">
    <span>没有账号</span>
    <span @click="goRegister">快速注册></span>
  </p>
	</div>
</template>

<script>
import { XInput, Group, XButton } from 'vux'
export default {
  name: 'car',
  components: {
    XInput,
    Group,
    XButton
  },
  data () {
    return {
      phone: '',
      password: '',
      type: 'password'
    }
  },
  methods: {
    ck () {
      this.type = 'text'
    },
    goRegister () {
      this.$router.push({ path: '/login/register' })
    },
    forgitPsd () {
      this.$router.push({ path: '/login/findPassword' })
    }
    // ckss () {
    //   this.$router.push({path: '/login/register'})
    // }
  }
}
</script>

<style>
.login {
  height: 100vh;
  padding: 1rem 0.35rem 0;
  background-color: #fff;
}
.weui-cells:before {
  border: none !important;
}
.forgit {
  font-size: 0.1rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: right;
}
.forgit span{
  text-decoration: underline;
  color: #999;
}
.go-register {
  height: 0.4rem;
  line-height: 0.4em;
  text-align: center;
  font-size: 0.14rem;
}
.go-register span {
  line-height: 0.6rem;
}
.go-register span:nth-of-type(2) {
  color: #ff7c08;
  margin-left: 0.1rem;
}
</style>
<template>
	<div>
		<div class="error-mes">
      <icon type="safe-warn" class="fl"></icon>
      <p class="fl">您的手机号 <span style="color:#fc3;">15670520667</span>  已注册黄雀商城</p>
		</div>
		<p style="padding:0.3rem 0.1rem">
			<x-button  type="default" style="background-color:#fc3;font-size:14px;">重新登录</x-button>
			<x-button  type="default" style="font-size:14px;" plain>找回密码</x-button>
		</p>
		<p class="issue">
			<span>遇到问题？请</span>
			<span>联系客服</span>
		</p>
	</div>
</template>

<script>
import { XButton, Icon } from 'vux'
export default {
  name: 'findPassword',
  components: {
    XButton,
    Icon
  },
  data () {
    return {
      phone: '',
      agree: false
    }
  },
  methods: {
    ck () {
      this.$router.push({ path: '/login/setPassword' })
    }
  }
}
</script>

<style scoped>
.error-mes {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.156rem;
  padding: 0 0.1rem;
  margin-top: 0.3rem;
}
.error-mes i{
  margin-top: 0.1rem;
  margin-right: 0.1rem;
}
.weui-btn_plain-default{
  border:1px solid #fc3!important;
}
.issue {
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.125rem;
    padding: 0 0.1rem;
}
.issue span:nth-of-type(2) {
    color: #fc3;
}
</style>
<template>
	<div>
		<group>
			<x-input required v-model="phone" placeholder="请输入你的手机号" style="font-size:0.12rem;" type="tel" is-type="china-mobile">
			</x-input>
		</group>
		<h4 class="user-xieyi">
		 	<check-icon :value.sync="agree" style="font-size:0.12rem;">同意</check-icon>
			<a href="#" class="c-f7c08" style="text-decoration: underline;">《黄雀用户协议》</a>
		</h4>
		<p style="padding:0.3rem 0.1rem" >
			<x-button  @click.native="ck()" :disabled=!agree type="default" style="background-color:#fc3;font-size:14px;" >下一步</x-button>
		</p >
		<p class="issue">
			<span>遇到问题？请</span>
			<span>联系客服</span>
		</p>
	</div>
</template>

<script>
import { XInput, Group, XButton, CheckIcon } from 'vux'
export default {
  name: 'findPassword',
  components: {
    XInput,
    Group,
    XButton,
    CheckIcon
  },
  data () {
    return {
      phone: '',
      agree: false
    }
  },
  methods: {
    ck () {
      this.$router.push({ path: '/login/registerError' })
    }
  }
}
</script>

<style>
.name {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.125rem;
  padding: 0 0.1rem;
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
.vux-check-icon > .weui-icon-success:before,
.vux-check-icon > .weui-icon-success-circle:before {
  color: #fc3 !important;
}
.user-xieyi {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.125rem;
  padding: 0 0.1rem;
}
.user-xieyi a {
  text-decoration: underline;
  color: #fc3;
}
</style>
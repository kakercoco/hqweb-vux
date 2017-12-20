<template>
	<div>
		<h4 class="name">请输入您注册的手机号</h4>
		<group>
			<x-input required v-model="phone" placeholder="请输入你的手机号" type="tel" is-type="china-mobile">
			</x-input>
		</group>
		<p style="padding:0.3rem 0.1rem">
			<x-button @click.native="ck" action-type="submit" type="default" style="background-color:#fc3;font-size:14px;">下一步</x-button>
		</p>
		<p class="issue">
			<span>遇到问题？请</span>
			<span>联系客服</span>
		</p>
	</div>
</template>

<script>
import { XInput, Group, XButton } from 'vux'
export default {
  name: 'findPassword',
  components: {
    XInput,
    Group,
    XButton
  },
  data () {
    return {
      phone: ''
    }
  },
  methods: {
    ck () {
      this.$router.push({ path: '/login/findPasswordCode' })
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
.issue{
	height: 0.4rem;
	line-height: 0.4rem;
	font-size: 0.125rem;
	padding: 0 0.1rem;
}
.issue span:nth-of-type(2){
	color: #fc3;
}
</style>
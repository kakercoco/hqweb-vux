<template>
	<div>
		<group >
			<x-input v-model="phone"  type="tel" is-type="china-mobile" placeholder="请输入你的新手机">
			</x-input>
      <x-input required v-model="code" placeholder="请输入验证码" type="tel" class="weui-cell_vcode">
        <span slot="right" class="weui-vcode-span">获取验证码</span>
			</x-input>
		</group>
		<p style="padding: 0.3rem 0.1rem 0">
			<x-button @click.native="ck" action-type="submit" type="default" style="background-color:#fc3;font-size:14px;">确定</x-button>
		</p>
		<p class="issue">
			<span>遇到问题？请</span>
			<span>联系客服</span>
		</p>
	</div>
</template>

<script>
import { XInput, Group, XButton, AlertModule } from 'vux'
export default {
  name: 'findPassword',
  components: {
    XInput,
    Group,
    XButton,
    AlertModule
  },
  data () {
    return {
      phone: '',
      code: ''
    }
  },
  methods: {
    ck () {
      AlertModule.show({
        title: '已更改完毕',
        content: 'Do you agree?',
        onShow () {
          console.log('Plugin: I\'m showing')
        },
        onHide () {
          console.log('Plugin: I\'m hiding now')
        }
      })
      this.$router.push({ path: '/setting/changePhone' })
    }
  }
}
</script>

<style scoped>

.issue{
	height: 0.4rem;
	line-height: 0.4rem;
	font-size: 0.125rem;
	padding: 0 0.1rem;
}
.issue span:nth-of-type(2){
	color: #fc3;
}
.weui-vcode-span{
    margin-left: 5px;
    float: right;
    height: 0.44rem;
    line-height: 0.44rem;
    width: 0.9rem;
    background-color: #ffcc33;
    font-size: 0.12rem;
    text-align: center;
    color: #fff;
}
</style>
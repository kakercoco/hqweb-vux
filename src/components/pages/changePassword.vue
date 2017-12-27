<template>
	<div>
		<group >
			<x-input required v-model="oldPassword" placeholder="请输入旧密码" type="text">
			</x-input>
		</group>
		<group>
			<x-input required v-model="password" placeholder="请输入新密码" type="text" >
			</x-input>
			<x-input required v-model="againPassword" placeholder="请再次输入新密码" type="text" >
			</x-input>
		</group>
    <h4 class="psd-mes">密码为6-20位字母/数字/符号</h4>
		<p style="padding: 0.1rem">
			<x-button action-type="submit" type="default" style="background-color:#fc3;font-size:14px;">确认</x-button>
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
      oldPassword: '',
      password: '',
      againPassword: ''
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

.issue{
	height: 0.4rem;
	line-height: 0.4rem;
	font-size: 0.125rem;
	padding: 0 0.1rem;
}
.issue span:nth-of-type(2){
	color: #fc3;
}
.psd-mes{
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.125rem;
    padding: 0 0.1rem;
    font-weight: normal;
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
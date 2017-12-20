<template>
	<div>
		<h2>登录页面</h2>
		<ul>
			<li v-for="item in mes" :key="item.age">{{item.age}}</li>
		</ul>
		<button @click="ck">找回密码</button>
		<button @click="cks">设置密码</button>
		<button @click="ckss">注册</button>
	</div>
</template>

<script>
  export default{
    name: 'car',
    data () {
      return {
        mes: [{
          name: 'kaker',
          age: 18
        }, {
          name: 'eills',
          age: 30
        }]
      }
    },
    methods: {
      ck () {
        this.$router.push({path: '/login/findPassword'})
      },
      cks () {
        this.$router.push({path: '/login/setPassword'})
      },
      ckss () {
        this.$router.push({path: '/login/register'})
      }
    }
  }
</script>

<style>
</style>
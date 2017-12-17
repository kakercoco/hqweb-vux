<template>
	<div>
		<h2>找回密码</h2>
		<ul>
			<li v-for="item in mes" :key="item.age">{{item.age}}</li>
		</ul>
		<h6>5656</h6>
	</div>
</template>

<script>
	//import Vue from "vue"
	export default{
		name:'car',
		data(){
			return {
				mes:[{
					name:'kaker',
					age:18
				},{
					name:'eills',
					age:30
				}]
			}
		},
		methods:{
			ck(){
				this.$router.push({path:'login/setPassword'})
			}
		}
	}
</script>

<style>
</style>
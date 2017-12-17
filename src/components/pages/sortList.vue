<template>
	<div>
		<h2>二级分类页面</h2>
		<ul>
			<li v-for="item in mes" :key="item.age">{{item.age}}</li>
		</ul>
		<button @click="ck">点击</button>
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
				this.$set(this.mes ,0,{name:'angle',age:26})
				console.log(this.mes)
			}
		}
	}
</script>

<style>
</style>
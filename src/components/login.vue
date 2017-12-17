<template>
	<div>
		<router-view></router-view>
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
		}
	}
</script>

<style>
</style>
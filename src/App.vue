<template>
	<div id="app">
		<router-view v-wechat-title="$route.meta.title" img-set="../src/assets/logo.png"></router-view>
	</div>
</template>

<script>
	export default {
	  name: 'app'
	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	@import '../static/css/media-100.css';
	body,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	ul,
	li,
	p,
	span,
	div,
	input,
	html,
	img,
	a {
		box-sizing: border-box;
	}
	body {
		background-color: #f3f3f3;
		font-size: 0.14rem;
		color: #333;
	}
	li {
		list-style: none;
	}
	i,em{
		font-style: normal;
	}
	a {
		text-decoration: none;
		color: #333;
	}
	.tac {
		text-align: center;
	}
	
	.tar {
		text-align: right;
	}
	
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	.bg-fff {
		background-color: #fff;
	}
	
	.mt-10 {
		margin-top: 0.1rem;
	}
	
	.mr-10 {
		margin-right: 0.1rem;
	}
	
	.ml-10 {
		margin-left: 0.1rem;
	}
	
	.mt-5 {
		margin-top: 0.05rem;
	}
	
	.mt-20 {
		margin-top: 0.2rem;
	}
	
	.ml-20 {
		margin-left: 0.2rem;
	}
	
	.c-333 {
		color: #333;
	}
	
	.c-999 {
		color: #999;
	}
	.c-fff{
		color: #fff;
	}
	.weui-cells{
		margin-top: 0.1rem !important;
	}
	.weui-input{
		font-size: 0.125rem!important;
	}
</style>
<template>
	<div class="main">
		<router-view></router-view>
		<tabbar style="position: fixed;">
			<tabbar-item link='/main/index'>
				<img slot="icon" src="https://hqwell.net/images/home.png">
				<img slot="icon-active" src="https://hqwell.net/images/home2.png">
				<span slot="label">首页</span>
			</tabbar-item>
			<tabbar-item link='/main/sort'>
				<img slot="icon" src="https://hqwell.net/images/sort.png">
				<img slot="icon-active" src="https://hqwell.net/images/sort2.png">
				<span slot="label">分类</span>
			</tabbar-item>
			<tabbar-item link='/main/car' badge="2">
				<img slot="icon" src="https://hqwell.net/images/shop.png">
				<img slot="icon-active" src="https://hqwell.net/images/shop2.png">
				<span slot="label">购物车</span>
			</tabbar-item>
			<tabbar-item link='/main/self'>
				<img slot="icon" src="https://hqwell.net/images/my.png">
				<img slot="icon-active" src="https://hqwell.net/images/my2.png">
				<span slot="label">我的</span>
			</tabbar-item>
		</tabbar>
	</div>
</template>

<script>
	import { Tabbar, TabbarItem } from 'vux'

	export default {
		name: 'home',
		components: {
			Tabbar,
			TabbarItem
		}
	}
</script>

<style>
	.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
		color: #000 !important;
	}
	.main{
		padding-bottom: 55px;
	}
</style>
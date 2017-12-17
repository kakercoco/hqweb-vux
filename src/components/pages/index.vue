<template>
	<div style="padding-bottom: 0.5rem;">
		<swiper dots-position="center">
			<swiper-item v-for="(item, index) in banner_list" :key="index">
				<img :src="item.img" class="swiper-img">
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import { Swiper, SwiperItem } from 'vux'
	import { Group, Cell } from 'vux'
	import { Tab, TabItem } from 'vux'
	export default {
		name: 'home',
		components: {
			Swiper,
			SwiperItem,
			Group,
			Cell,
			Tab,
			TabItem
		},
		data() {
			return {
				name: 'kaker',
				tabShow:0,
				banner_list: [{
					url: 'javascript:',
					img: 'https://hqwell.net/images/banner3.jpg',
					title: '送你一朵fua'
				}, {
					url: 'javascript:',
					img: 'https://hqwell.net/images/banner.png',
					title: '送你一次旅行',
				}],
			}
		},
		created() {

		},
		mounted() {

		},
		methods: {
			
		}
	}
</script>

<style>
	.swiper-img {
		width: 100%;
	}
	
</style>
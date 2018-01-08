<template>
	<div class="self">
		<blur :blur-amount=40 :url="url"  class="mytitle">
			<router-link tag="p" class="center fl" to="/setting/data"><img :src="url" ></router-link>
			<div class="myt-c fl ml-20 mt-10" id="gstar">
				<h3 v-cloak>{{data.user_name}}</h3>
				<p>等级
					<rater :max=5 star="❤" disabled active-color="#fc3" v-model="stars" :font-size=20></rater>
				</p>
			</div>
			<router-link tag="div" to="/setting/setting" class="myt-r fr mt-10">
					<img src="https://hqwell.net/images/setting.png" />
					<span>设置</span>
			</router-link>
		</blur>
		<div class="my-cont">
			<div class="myc-top ">
				<ul>
					<li>
						<a href="#">
							<b v-cloak>{{data.total_score}}</b><br />
							<span>我的积分</span>
						</a>
					</li>
					<li>
						<a href="#">
							<b v-cloak>{{data.total_favorites}}</b><br />
							<span>我的收藏</span>
						</a>
					</li>
					<li>
						<a href="myquan.html">
							<b v-cloak>{{data.total_coupon}}</b><br />
							<span>优惠券</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<group>
			<cell title="全部订单" is-link link="/order" value="查看全部订单" style='font-size: 13px;'>
			</cell>
		</group>
		<grid class="bg-fff total" :cols=5>
			<grid-item label="待付款" link="/main/index" class="my-grid__label">
				<img slot="icon" src="https://hqwell.net/images/total_dfk.png">
			</grid-item>
			<grid-item label="待发货" link="/setting/data">
				<img slot="icon" src="https://hqwell.net/images/total_dfh.png">
			</grid-item>
			<grid-item label="待收货">
				<img slot="icon" src="https://hqwell.net/images/total_dsh.png">
			</grid-item>
			<grid-item label="已完成">
				<img slot="icon" src="https://hqwell.net/images/total_ywc.png">
			</grid-item>
			<grid-item label="已取消">
				<img slot="icon" src="https://hqwell.net/images/total_yqx.png">
				<span>12</span>
			</grid-item>
		</grid>
		<group>
			<cell title="售后/退货" is-link link="/order" style='font-size: 13px;'></cell>
		</group>
		<group>
			<cell title="站点信息" is-link link="/car" style='font-size: 13px;'></cell>
			<cell title="专属客服" is-link link="/" style='font-size: 13px;'></cell>
		</group>
		<group>
			<cell title="发票管理" is-link link="/manage/invoiceList" style='font-size: 13px;'></cell>
			<cell title="收货地址管理" is-link link="/server" style='font-size: 13px;'></cell>
		</group>
		<button @click="ck">点击登录</button>
	</div>
</template>

<script>
	import axios from '../../../libs/axios.js'
	import { Blur, Group, Cell, Grid, GridItem, Rater } from 'vux'
	export default {
	  name: 'self',
	  components: {
	    Blur,
	    Group,
	    Cell,
	    Grid,
	    GridItem,
	    Rater
  },
	  data () {
	    return {
	      name: 'kaker',
	      url: 'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg',
	      data: {},
	      star: [],
	      stars: 3.7
    }
  },
	  created () {
	    axios.get('shop/v2/home')
        .then(
         (data) => {
	           console.log(data)
	           this.data = data.data
         }
	)
  },
	  methods: {
	    ck: function () {
	      console.log(this.$router)
	      this.$router.push('/login/login')
	    }
  }
	}
</script>

<style scoped>
	.center {
		text-align: center;
		padding-top: 0.2rem;
		color: #fff;
	}
	
	.center img {
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 50%;
		border: 4px solid #ececec;
	}
	
	.vux-x-icon {
		fill: red;
		margin-right: 0.05rem;
		margin-top: 0.1rem;
	}
	
	.myt-c {
		width: 50%;
	}
	
	.mytitle {
		padding: .1rem;
		height: 1.2rem !important;
	}
	
	.myt-c h3 {
		height: 0.5rem;
		line-height: 0.5rem;
		font-size: 0.177rem;
	}
	
	.myt-c p {
		height: 0.35rem;
		font-size: 0.125rem;
		color: #99864d;
	}
	
	.myt-r {
		width: 10%;
	}
	
	.myt-r a {
		width: 100%;
		height: 100%;
		display: block;
	}
	
	.myt-r img {
		width: 0.22rem;
	}
	
	.myt-r span {
		display: block;
		color: #fff;
		font-size: 0.115rem;
	}
	
	.myc-top {
		height: 0.64rem;
		background-color: #fff;
	}
	
	.myc-top li {
		width: 33.33%;
		text-align: center;
		height: 0.64rem;
		padding: 0.1rem 0;
		float: left;
	}
	
	.myc-top a {
		width: 100%;
		height: 100%;
		display: block;
	}
	
	.myc-top b {
		font-size: 0.15rem;
		color: #333;
	}
	
	.myc-top span {
		font-size: 0.115rem;
		color: #666;
	}
	
	.myc-cent {
		height: 1.35rem;
		background-color: #fff;
	}
	
	.mycc-title {
		font-size: 0.135rem;
		height: 0.4rem;
		line-height: 0.4rem;
		padding: 0 0.1rem;
		border-bottom: 0.01rem solid #F3F3F3;
	}
	
	.mycc-timg {
		font-size: 0.12rem;
		color: #666
	}
	
	.mycc-timg img {
		height: 0.13rem;
		float: right;
		margin-top: 0.13rem;
		margin-left: 0.1rem;
	}
	
	.myc-cent li {
		text-align: center;
		width: 20%;
	}
	
	.myc-cent li a {
		height: 100%;
		width: 100%;
		display: block;
		padding: 0.15rem;
		position: relative;
	}
	
	.weui-grid span {
		position: absolute;
		top: 0.08rem;
		right: 33%;
		width: 0.16rem;
		height: 0.16rem;
		line-height: 0.14rem;
		border-radius: 0.16rem;
		border: 0.01rem solid #FFCC33;
		font-style: normal;
		background-color: #fff;
		font-size: 0.115rem;
		color: #fc3;
	}
	
	.total .weui-grid__icon img {
		height: 0.2rem;
		width: auto;
		display: block;
		margin: 0 auto;
	}
	.my-grid__label .weui-grid__label{
		font-size: 11px !important;
	}
	.weui-grid:before{
		border: none;
	}
	.weui-grids:after{
		border: none;
	}
	
</style>
<template>
	<div class="car" style="padding-bottom: 0.5rem;">
		<div class="logobar">
			<div class="logobar-logo logobar-left">黄雀商城</div>
			<div class="logobar-right">
				<span class="logobar-text fr" @click="delete_show=!delete_show" v-show="delete_show">编辑全部</span>
				<span class="logobar-text fr" @click="delete_show=!delete_show" v-show="!delete_show">完成</span>
			</div>
		</div>
		<div>
			<swipeout>
				<swipeout-item :right-menu-width="100" v-for="a in 5" :key="a">
					<div slot="right-menu">
						<swipeout-button type="warn">删除</swipeout-button>
					</div>
					<div slot="content" class="produceList">
						<check-icon :value.sync="demo1" class="fl"></check-icon>
						<img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/59dee0eed7a0d.jpg" alt="" />
						<div class="fl produceMes">
							<h4>护舒宝超净棉pinkcess丝薄日用10片/包</h4>
							<p class="fl">￥<span>9.20</span></p>
							<group class='fr'>
								<x-number v-model="value" button-style="round" :min=1 :max=99 fillable @on-change="change"></x-number>
							</group>
						</div>
					</div>
				</swipeout-item>
				<swipeout-item :right-menu-width="100">
					<div slot="right-menu">
						<swipeout-button type="warn">删除</swipeout-button>
					</div>
					<div slot="content" class="produceList">
						<span class="fl old-date">失效</span>
						<img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/5a0166d0841af.jpg" alt="" />
						<div class="fl produceMes">
							<h4>护舒宝超净棉pinkcess丝薄日用10片/包</h4>
							<p>抱歉，宝贝暂不能购买</p>
						</div>
					</div>
				</swipeout-item>
			</swipeout>
		</div>
		<div class="fixed-foot">
			<div class="fixed_inner">
				<div class="pay-point">
					<check-icon :value.sync="demo1" class="fl allCheck" >全选</check-icon>
								
					<div class="totalcount fr" v-show="delete_show">
						<div class="buy-btn-fix fr">
							结算(0)
						</div>
						<p class="c-333 tar">合计：<em>¥</em><i>5656</i></p>
						<p class="tar">已优惠¥<i>0</i><i> &nbsp;金额说明&gt;</i></p>
					</div>
				</div>
				<div class="del-btn-fix " v-show="!delete_show">
					<a href="javascript:void(0);" class="btn-del" @click="delAllgoods()">删除</a>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	// import axios from '../../libs/axios.js'
	import { Swipeout, SwipeoutItem, SwipeoutButton, CheckIcon, Group, XNumber } from 'vux'
	export default {
	  name: 'car',
	  components: {
	    CheckIcon,
	    Swipeout,
	    SwipeoutItem,
	    SwipeoutButton,
	    Group,
	    XNumber
  },
	  data () {
    return {
	      delete_show: true, // 编辑全部
	      demo1: false,
	      value: 1
    }
  },
	  methods: {
	    ck () {
	      // console.log(aa)
    },
	    change (val) {
	      console.log('数量发生变化' + val)
    }
  }
	}
</script>

<style>
	.left-delete {
		width: 100%;
		height: 1.2rem;
		position: relative;
		z-index: 2;
		margin-top: 0.08rem;
	}
	
	.move {
		position: relative;
		width: 100%;
		height: 100%;
		padding: 0.1rem;
	}
	
	.deleteIcon {
		width: 0.66rem;
		height: 100%;
		position: absolute;
		right: 0;
		top: 0;
		background-color: #ec1c00;
		border-color: #ec1c00;
		color: #fff;
		display: inline-block;
		text-align: center;
		line-height: 1.2rem;
		font-size: 0.18rem;
		color: #fff;
	}
	
	.logobar {
		width: 100%;
		height: 0.45rem;
		background: #fff;
		padding: 0 0.15rem
	}
	
	.logobar-logo {
		background: url(https://hqwell.net/images/logo2.png) no-repeat;
		background-size: 0.21rem;
		-webkit-background-size: 0.21rem
	}
	
	.logobar-left,
	.logobar-right {
		width: 45%;
		height: 0.21rem;
		line-height: 0.21rem;
		margin-top: 0.13rem
	}
	
	.logobar-left {
		text-indent: 0.25rem;
		font-size: 0.15rem;
		float: left;
		color: #000
	}
	
	.logobar-right {
		float: right;
		font-size: 0.136rem;
		color: #999
	}
	
	.logobar-text {
		padding: 0 0.1rem
	}
	
	.produceList {
		height: 1.16rem;
		padding: 0.1rem;
		margin-top: 0.1rem;
	}
	
	.old-date {
		margin-top: 0.3rem;
	}
	
	.vux-check-icon {
		margin-top: 0.35rem;
	}
	
	.produceList .weui-icon-success:before {
		color: #fc3 !important;
	}
	
	.produceList img {
		height: 100%;
		float: left;
	}
	
	.produceMes {
		width: 60%;
		float: right;
	}
	
	.produceMes h4 {
		color: #333;
		height: 0.4rem;
		line-height: 0.2rem;
		min-height: 0.4rem;
		overflow: hidden;
		word-break: break-all;
		margin: 0;
		font-size: 0.146rem;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		font-weight: normal;
	}
	
	.produceMes p {
		margin-top: 0.3rem;
		color: #ff7c08;
	}
	
	.vux-number-round .vux-number-selector {
		width: 26px !important;
		height: 26px !important;
	}
	
	.vux-number-input {
		height: 26px !important;
	}
	
	.weui-cells:before,
	.weui-cells:after {
		border: none !important;
	}
	
	.fixed-foot {
		height: 0.5rem;
		z-index: 9;
		position: fixed;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		bottom: 0.52rem;
		left: 0;
		right: 0;
		width: 100%;
	}
	
	.fixed_inner {
		margin: 0 auto;
		position: relative;
		background: #fff;
		max-width: 7.68rem;
		height: 0.5rem;
		font-size: 0.15rem;
	}
	.allCheck{
		margin-top: 0.12rem;
	}
	.allCheck .weui-icon-success:before{
		color: #fc3 !important;
	}
	.totalcount{
		height: 0.5rem;
		width: 70%;
		font-size: 0.11rem;
	}
	.totalcount p:nth-of-type(1) em{
		color: #fc3;
		font-size: 0.11rem
	}
	.totalcount p:nth-of-type(1) i{
		color: #fc3;
		font-size: 0.17rem
	}
	.totalcount p:nth-of-type(2){
		color: #999;
	}
	.buy-btn-fix{
		width: 1rem;
		height: 100%;
		background-color: #fc3;
		margin-left: 0.1rem;
		font-size: 0.167rem;
		text-align: center;
		line-height: 0.5rem;
	}
</style>
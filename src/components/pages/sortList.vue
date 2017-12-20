<template>
	<div>
		<div class="sort-top fl">
			<p class="fl sort-serch ml-10">
				<img src="https://hqwell.net/images/search.png" class="fl sort-serch-logo" />
				<input type="text" name="sort-ipt" value="" class="sort-serch-ipt" id="searchText" placeholder="搜索您想要的商品" />
			</p>
			<p class="sort-logo fr sort-logo-block"></p>
		</div>
		<div class="sort-cont">
			<div class="sort-search-title">
				<ul>
					<li class="fl tac " v-bind:class="{'c-f7c08':zhFlag}" @click="zhFuc()">综合</li>
					<li class="fl tac" v-bind:class="{'c-f7c08':xLFlag}" @click="xLFuc()">销量</li>
					<li class="fl tac" v-bind:class="{'c-f7c08':jGFlag}" @click="jGFuc()">价格 <img src="https://hqwell.net/images/sort-jg.png" alt="" id='jgimg'></li>
					<li class="fl tac" id="filter" v-bind:class="{'c-f7c08':sXFlag}" @click="sXFuc()">筛选<img src="https://hqwell.net/images/sort-sx.png" /></li>
				</ul>
			</div>
			<!---->
			<div class="sort-search-cont">
				<!--纵向展示-->
				<ul class="sort-search-cont-ul  mt-5">
					<li class="sort-search-cont-ltem" v-for="(goods,index) in List" :key="index">
						<a href="javascript:void(0);" @click="getproduce(goods.goods_id)">
							<div class="fl sort-scont-pick">
								<img v-bind:src="goods.goods_thums" />
							</div>
							<div class="fl sort-scont-cont">
								<h4 class="c-333 mt-10">{{goods.goods_name}}</h4>
								<p class="mt-20 c-fc3">￥<span>{{goods.act_price}}</span><small class="c-999 ml-20">{{goods.show_sold_count}}人付款</small></p>
							</div>
						</a>
					</li>
				</ul>
				<!--大图显示效果-->
				<!--横向展示-->
				<ul class="sort-search-cont-ul2 displayNone mt-5">
					<li class="fl sort-search-cont-ltem2" v-for="(goods,index) in List" :key="index">
						<a href="javascript:void(0);" @click="getproduce(goods.goods_id)">
							<div class="fl sort-scont-pick2">
								<img v-bind:src="goods.goods_thums" />
							</div>
							<div class="fl sort-scont-cont2">
								<h4 class="c-333 mt-5">{{goods.goods_name}}</h4>
								<p class="c-fc3  mt-5">￥<span>{{goods.act_price}}</span><small class="c-999 ml-20">{{goods.show_sold_count}}人付款</small></p>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from '../../libs/axios'
	export default {
		name: 'sort',
		data() {
			return {
				minNum: '', //价格区间        最小值
				maxNum: '', //价格区间     最大值
				zhFlag: true, //整合
				xLFlag: false, //销量
				jGFlag: false, //价格
				sXFlag: false, //筛选
				jGstatus: false, //false 升序排序  true 降序排序
				List: [], //商品列表
				brandsList: [], //筛选中的品牌列表
				specList: [], //筛选中的属性列表
				brandId: 0, //品牌id为零
				specArr: [], //属性id
				specNum: 0 //属性个数
			}
		},
		created() {
			console.log(this.$route.params)
			let params = {
				car_id: this.$route.params,
				station_id: 1
			}
			axios.get('shop/v2/category/goodslist', {
					params
				})
				.then(
					(data) => {
						console.log(data)
						this.List = data.data.goods_info.data;
						this.brandsList = data.data.brands_list;
						this.specList = data.data.spec_list;
						this.specNum = data.data.spec_list.length;
					},
					(err) => {
						console.log(err)
					}
				)
		},
		methods: {
			ck() {
				//console.log(this.$route.params.cat_id)
			}
		},
		watch: {
			'$route': 'ck'
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.sort-top {
		height: 0.5rem;
		background-color: #fff;
		width: 100%;
		border-bottom: 2px solid #eee;
		position: fixed;
		top: 0;
	}
	
	.sort-logo2 {
		width: 0.22rem;
		margin: 0.15rem 0.1rem;
	}
	
	.sort-logo {
		width: 0.22rem;
		height: 0.22rem;
		background: url(https://hqwell.net/images/search_block.png) no-repeat;
		margin: 0.15rem 0.1rem;
		-webkit-background-size: cover;
		background-size: cover;
	}
	
	.sort-serch {
		width: 85%;
		height: 0.31rem;
		background-color: #F3F3F3;
		border-radius: 0.3rem;
		margin-top: 0.1rem;
	}
	
	.sort-serch-logo {
		height: 0.18rem;
		margin-left: 0.1rem;
		margin-top: 0.07rem;
	}
	
	.sort-serch-ipt {
		border: none;
		outline: none;
		background-color: transparent;
		height: 0.31rem;
		line-height: 0.31rem;
		font-size: 0.13rem;
		width: 85%;
		margin-left: 0.1rem;
	}
	
	.sort-cont {
		width: 100%;
		padding: 0.5rem 0 0;
	}
	
	.sort-search-title {
		height: 0.4rem;
		width: 100%;
		background-color: #fff;
		position: fixed;
		top: 0.5rem;
	}
	
	.sort-search-title li {
		width: 25%;
		height: 0.4rem;
		line-height: 0.4rem;
		font-size: 0.1335rem;
	}
	
	.sort-search-title li img {
		height: 0.15rem;
	}
	
	.sort-search-cont {
		overflow-y: scroll;
		height: 100%;
		padding-top: 0.4rem;
	}
	
	.sort-search-cont .sort-search-cont-ltem {
		height: 1.05rem;
		padding: 0.05rem;
		background-color: #fff;
		margin-bottom: 0.02rem;
	}
	
	.sort-search-cont li a {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.sort-scont-pick {
		height: 100%;
		width: 24%;
		text-align: center;
	}
	
	.sort-scont-pick img {
		height: 100%;
	}
	
	.sort-scont-cont {
		width: 76%;
	}
	
	.sort-scont-cont h4 {
		font-size: 0.135rem;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-all;
		min-height: 0.3rem;
		line-height: 0.17rem;
		font-weight: 500;
	}
	
	.sort-scont-cont p {
		font-size: 0.14rem;
	}
	
	.sort-scont-cont span {
		font-size: 0.2rem;
	}
	
	.sort-search-cont .sort-search-cont-ltem2 {
		width: 49.7%;
		background-color: #fff;
		height: 2.1rem;
		padding: 0.05rem;
		margin-bottom: 0.02rem;
	}
	
	.sort-search-cont-ltem2:nth-of-type(2n-1) {
		margin-right: 0.6%;
	}
	
	.sort-scont-pick2 {
		width: 100%;
		height: 1.35rem;
		text-align: center;
	}
	
	.sort-scont-pick2 img {
		height: 100%;
	}
	
	.sort-scont-cont2 {
		width: 100%;
	}
	
	.sort-scont-cont2 h4 {
		font-size: 0.115rem;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-all;
		min-height: 0.3rem;
		line-height: 0.16rem;
		font-weight: 500;
	}
	
	.sort-scont-cont2 p {
		font-size: 0.14rem;
	}
	
	.sort-scont-cont2 span {
		font-size: 0.2rem;
	}
	
	.displayNone {
		display: none !important;
	}
	
	.sort-filter {
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		right: -100%;
		z-index: 25;
	}
	
	.sort-filter-l {
		width: 15%;
		height: 100%;
	}
	
	.sort-filter-r {
		width: 85%;
		height: 100%;
		position: relative;
	}
	
	.sort-ft-title {
		height: 0.5rem;
		line-height: 0.5rem;
		border-bottom: 1px solid #ccc;
		font-size: 0.156rem;
	}
	
	.sort-ft-cont {
		height: 85%;
		overflow: scroll;
	}
	
	.sort-ft-cont section {
		padding: 0.1rem;
	}
	
	.sort-ft-sec1 {
		width: 100%;
		height: 1rem;
		border-bottom: 1px solid #ccc;
	}
	
	.sort-ft-cont h3 {
		font-size: 0.156rem;
		height: 0.35rem;
		line-height: 0.35rem;
	}
	
	.sort-ft-sec1 input {
		outline: none;
		border: none;
		background-color: #E8E8E8;
		width: 1.2rem;
		height: 0.3rem;
		font-size: 0.125rem;
		border-radius: 0.05rem;
	}
	
	.sort-ft-sec2 li {
		width: 23%;
		height: 0.27rem;
		line-height: 0.27rem;
		border-radius: 0.05rem;
		font-size: 0.125rem;
		border: 1px solid #ccc;
		margin-right: 0.05rem;
		margin-bottom: 0.1rem;
	}
	
	.sort-ft-foot {
		height: 0.5rem;
		width: 100%;
		position: absolute;
		bottom: 0;
	}
	
	.sort-ft-foot button {
		width: 50%;
		height: 0.5rem;
		outline: none;
		font-size: 0.156rem;
	}
</style>
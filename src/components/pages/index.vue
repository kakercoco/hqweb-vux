<template>
	<div>
		<swiper dots-position="center">
			<swiper-item v-for="(item, index) in banner_list" :key="index">
				<img :src="item.img" class="swiper-img">
			</swiper-item>
		</swiper>
		<grid :cols="5" class="nav bg-fff">
			<grid-item label="特惠组合">
				<img slot="icon" src="https://hqwell.net/images/nav_01.png">
			</grid-item>
			<grid-item label="清洁洗护">
				<img slot="icon" src="https://hqwell.net/images/nav_02.png">
			</grid-item>
			<grid-item label="家庭家居">
				<img slot="icon" src="https://hqwell.net/images/nav_03.png">
			</grid-item>
			<grid-item label="粮油干货">
				<img slot="icon" src="https://hqwell.net/images/nav_04.png">
			</grid-item>
			<grid-item label="食品饮料">
				<img slot="icon" src="https://hqwell.net/images/nav_05.png">
			</grid-item>
		</grid>
		<div class="hot bg-fff">
			<div class="hot-b fl">
				<img src="https://hqwell.net/images/pic_kb.png" />
			</div>
			<div class="hot-h fl">
				<marquee style="height: 43px;" :interval='3000'>
			      <marquee-item v-for="(item, index) in newsList" :key="index" style="height: 22px;" >
			      	<span class="hot-hh">活动</span>
			      	<i style="font-style: normal;">{{item.title}}</i>
			      </marquee-item>
			    </marquee>
			</div>
		</div>
		<div>
			<img src="https://hqwell.net/images/zbShow.png" class="zbShow" />
		</div>
		<div class="no-xl mt-5">
			<ul>
				<li class="fr">
					<a href="javasrcipt:void(0)"></a>
				</li>
				<li class="fr">
					<a href="javasrcipt:void(0)"></a>
				</li>
				<li class="fr">
					<a href="javasrcipt:void(0)"></a>
				</li>
			</ul>
		</div>
		<!--商品分类start-->
		<div class="buy-bk">
			<div class="bk-l fl bg-fff" id="testId">
				<a href="myhome/produce.html?id=228">
					<img src="https://hqwell.net/images/bk_logo.png" class="bk_logo" />
					<div class="bk-ll fl">
						<p>护舒宝丝薄日用</p>
						<p>劲爆价 8.0折</p>
						<p>￥9.20</p>
						<p><del>原价 ￥11.00</del></p>
					</div>
					<div class="bk-lr fr">
						<img src="https://hqwell.net/images/hot-pro1.png" class="bk-pro" />
						<p class="tac" style="margin-top: -0.2rem;">
							<img src="https://hqwell.net/images/jd_logo.png" />
							<span>¥ 10.00</span>
						</p>

						<p class="tac">
							<img src="https://hqwell.net/images/tm_logo.png" />
							<span>¥ 11.00</span>
						</p>
					</div>
				</a>
			</div>
			<div class="bk-r fr bg-fff">
				<a href="myhome/produce.html?id=317">
					<p class="mt-10">达利园 蛋黄牌</p>
					<p>劲爆价 6.0折</p>
					<img src="https://hqwell.net/images/hot-pro2.png" />
					<p class="tac">￥6.9</p>
					<p class="tac"><del>原价 ￥11.00</del></p>
				</a>
			</div>
		</div>
		<!--特惠组合-->
		<div class="thzh bg-fff">
			<div class="buy-item-title">
				<img src="https://hqwell.net/images/open_title01.png" class="item-img" />
			</div>
			<ul class="thzh-ul clearfix">
				<li class="fl" v-for="item in groupList" v-cloak>
					<a href="javascript:void(0)" @click="groupFun(item.comb_id)">
						<div class="fl thzh-li-l">
							<h3 v-text="item.comb_name"></h3>
							<p v-text="item.comb_child_name"></p>
							<span style="font-size: 0.2rem;color: #ff5050;" v-text="'￥'+item.price"></span>
						</div>
						<div class="fr thzh-li-r">
							<img :src="item.comb_thums" alt="" />
						</div>
					</a>
				</li>

			</ul>
			<ul class="thzh-ul-two">
				<li class="fl">
					<a href="myhome/produce.html?id=229">
						<p class="tac">护舒宝丝薄</p>
						<span class="tac">￥8.80</span>
						<img src="https://hqwell.net/images/hot-item1.png" alt="" />
					</a>
				</li>
				<li class="fl">
					<a href="myhome/produce.html?id=272">
						<p class="tac">麻辣鲜</p>
						<span class="tac">￥2.50</span>
						<img src="https://hqwell.net/images/hot-item2.png" alt="" />
					</a>
				</li>
				<li class="fl">
					<a href="myhome/produce.html?id=83">
						<p class="tac">高露洁牙膏</p>
						<span class="tac">￥3.80</span>
						<img src="https://hqwell.net/images/hot-item3.png" alt="" />
					</a>
				</li>
				<li class="fl">
					<a href="myhome/produce.html?id=196">
						<p class="tac">妙洁保鲜袋</p>
						<span class="tac">￥5.50</span>
						<img src="https://hqwell.net/images/hot-item4.png" alt="" />
					</a>
				</li>
			</ul>
		</div>
		<!--个人洗护-->
		<div class="thzh mt-10 bg-fff">
			<div class="buy-item-title">
				<img src="https://hqwell.net/images/open_title02.png" class="item-img" />
				<a href="javascript:void(0)" @click="moreSort(190,'清洁洗护')">更多<img src="https://hqwell.net/images/myback.png" class="fr"></a>
			</div>
			<ul class="grxh-ul">
				<li class="fl">
					<a href="myhome/produce.html?id=219">
						<div class="fl grxh-li-l">
							<h3>潘婷洗发露</h3>
							<p>全网最低价</p>
							<h4>￥57.00</h4>
						</div>
						<div class="fr grxh-li-r">
							<img src="https://hqwell.net/images/grxh1.png" alt="" />
						</div>
					</a>
				</li>
				<li class="fl">
					<a href="myhome/produce.html?id=208">
						<div class="fl grxh-li-l">
							<h3>沙宣洗发露</h3>
							<p>超品精选</p>
							<h4>￥54.00</h4>
						</div>
						<div class="fr grxh-li-r">
							<img src="https://hqwell.net/images/grxh2.png" alt="" />
						</div>
					</a>
				</li>
				<li class="fl">
					<a href="myhome/produce.html?id=252">
						<div class="fl grxh-li-l">
							<h3>舒肤佳沐浴露</h3>
							<p>舒适的最好选择</p>
							<h4>￥33.80</h4>
						</div>
						<div class="fr grxh-li-r">
							<img src="https://hqwell.net/images/grxh3.png" alt="" />
						</div>
					</a>
				</li>
				<li class="fl">
					<a href="myhome/produce.html?id=246">
						<div class="fl grxh-li-l">
							<h3>吉列威锋</h3>
							<p>男人精选</p>
							<h4>￥22.00</h4>
						</div>
						<div class="fr grxh-li-r">
							<img src="https://hqwell.net/images/grxh4.png" alt="" />
						</div>
					</a>
				</li>

			</ul>
			<ul class="thzh-ul-two">
				<li class="fl" @click="threeSort(207)">
					<a href="javascript:void(0)">
						<p class="tac">沐浴露</p>
						<img src="https://hqwell.net/images/grxh-item1.png" alt="" />
					</a>
				</li>
				<li class="fl" @click="threeSort(283)">
					<a href="javascript:void(0)">
						<p class="tac">牙膏</p>
						<img src="https://hqwell.net/images/grxh-item2.png" alt="" />
					</a>
				</li>
				<li class="fl" @click="threeSort(199)">
					<a href="javascript:void(0)">
						<p class="tac">洗发水</p>
						<img src="https://hqwell.net/images/grxh-item3.png" alt="" />
					</a>
				</li>
				<li class="fl" @click="threeSort(250)">
					<a href="javascript:void(0)">
						<p class="tac">面膜</p>
						<img src="https://hqwell.net/images/grxh-item4.png" alt="" />
					</a>
				</li>
			</ul>
		</div>
		<!--卡片轮播-->
		<div class="hq-card">
			<swiper :show-dots="false">
				<swiper-item v-for="(item, index) in cardList" :key="index">
					<img :src="item.img">
				</swiper-item>
			</swiper>
		</div>
		<!--家庭家具-->
		<div class="thzh bg-fff">
			<div class="buy-item-title">
				<img src="https://hqwell.net/images/open_title08.png" class="item-img" />
				<a href="javascript:void(0)" @click="moreSort(123,'家庭家居')">更多<img src="https://hqwell.net/images/myback.png" class="fr"></a>
			</div>
			<ul class="grxh-ul clearfix">
				<li class="fl">
					<a href="myhome/produce.html?id=225">
						<div class="fl grxh-li-l">
							<h3>奥妙洗衣液</h3>
							<p>好用不伤手</p>
							<h4>￥50.00</h4>
						</div>
						<div class="fr grxh-li-r">
							<img src="https://hqwell.net/images/jtjj1.png" alt="" />
						</div>
					</a>
				</li>
				<li class="fl">
					<a href="myhome/produce.html?id=295">
						<div class="fl grxh-li-l">
							<h3>威猛先生污净</h3>
							<p>厨房卫生不伤脑</p>
							<h4>￥29.60</h4>
						</div>
						<div class="fr grxh-li-r">
							<img src="https://hqwell.net/images/jtjj2.png" alt="" />
						</div>
					</a>
				</li>
				<li class="fl">
					<a href="myhome/produce.html?id=234">
						<div class="fl grxh-li-l">
							<h3>奥妙洗衣皂</h3>
							<p>满50减10</p>
							<h4>￥7.20</h4>
						</div>
						<div class="fr grxh-li-r">
							<img src="https://hqwell.net/images/jtjj3.png" alt="" />
						</div>
					</a>
				</li>
				<li class="fl">
					<a href="myhome/produce.html?id=348">
						<div class="fl grxh-li-l">
							<h3>暖舒舒护颈枕</h3>
							<p>伴你午夜眠</p>
							<h4>￥40.00</h4>
						</div>
						<div class="fr grxh-li-r">
							<img src="https://hqwell.net/images/jtjj4.png" alt="" />
						</div>
					</a>
				</li>

			</ul>
			<ul class="thzh-ul-two">
				<li class="fl" @click="threeSort(469)">
					<a href="javascript:void(0)">
						<p class="tac">洗衣粉</p>
						<img src="https://hqwell.net/images/jtjj-item1.png" alt="" />
					</a>
				</li>
				<li class="fl" @click="threeSort(391)">
					<a href="javascript:void(0)">
						<p class="tac">软包抽纸</p>
						<img src="https://hqwell.net/images/jtjj-item2.png" alt="" />
					</a>
				</li>
				<li class="fl" @click="threeSort(401)">
					<a href="javascript:void(0)">
						<p class="tac">洗洁精</p>
						<img src="https://hqwell.net/images/jtjj-item3.png" alt="" />
					</a>
				</li>
				<li class="fl" @click="threeSort(370)">
					<a href="javascript:void(0)">
						<p class="tac">陶瓷餐具</p>
						<img src="https://hqwell.net/images/jtjj-item4.png" alt="" />
					</a>
				</li>
			</ul>
		</div>
		<!--粮油干货-->
		<div class="thzh bg-fff mt-10">
			<div class="buy-item-title">
				<img src="https://hqwell.net/images/open_title03.png" class="item-img" />
				<a href="javascript:void(0)" @click="moreSort(120,'粮油干货')">更多<img src="https://hqwell.net/images/myback.png" class="fr"></a>
			</div>
			<ul class="grxh-ul clearfix">
				<li class="fl">
					<a href="myhome/produce.html?id=266">
						<div class="fl grxh-li-l">
							<h3>海天一品鲜</h3>
							<p>厨房精选</p>
							<h4>￥10.90</h4>
						</div>
						<div class="fr grxh-li-r">
							<img src="https://hqwell.net/images/lygh1.png" alt="" />
						</div>
					</a>
				</li>
				<li class="fl">
					<a href="myhome/produce.html?id=116">
						<div class="fl grxh-li-l">
							<h3>太太乐鸡精</h3>
							<p>厨房精选</p>
							<h4>￥3.90</h4>
						</div>
						<div class="fr grxh-li-r">
							<img src="https://hqwell.net/images/lygh2.png" alt="" />
						</div>
					</a>
				</li>
				<li class="fl">
					<a href="myhome/produce.html?id=268">
						<div class="fl grxh-li-l">
							<h3>欧丽薇兰</h3>
							<p>初榨橄榄油</p>
							<h4>￥198.00</h4>
						</div>
						<div class="fr grxh-li-r">
							<img src="https://hqwell.net/images/lygh3.png" alt="" />
						</div>
					</a>
				</li>
				<li class="fl">
					<a href="myhome/produce.html?id=261">
						<div class="fl grxh-li-l">
							<h3>李锦记老抽</h3>
							<p>厨房精选</p>
							<h4>￥6.50</h4>
						</div>
						<div class="fr grxh-li-r">
							<img src="https://hqwell.net/images/lygh4.png" alt="" />
						</div>
					</a>
				</li>

			</ul>
			<ul class="thzh-ul-two">
				<li class="fl" @click="threeSort(239)">
					<a href="javascript:void(0)">
						<p class="tac">油</p>
						<img src="https://hqwell.net/images/lygh-item1.png" alt="" />
					</a>
				</li>
				<li class="fl" @click="threeSort(169)">
					<a href="javascript:void(0)">
						<p class="tac">调味料</p>
						<img src="https://hqwell.net/images/lygh-item2.png" alt="" />
					</a>
				</li>
				<li class="fl" @click="threeSort(447)">
					<a href="javascript:void(0)">
						<p class="tac">番茄酱</p>
						<img src="https://hqwell.net/images/lygh-item3.png" alt="" />
					</a>
				</li>
				<li class="fl" @click="threeSort(444)">
					<a href="javascript:void(0)">
						<p class="tac">辣椒酱</p>
						<img src="https://hqwell.net/images/lygh-item4.png" alt="" />
					</a>
				</li>
			</ul>
		</div>
		<!--卡片轮播-->
		<div class="hq-card">
			<swiper :show-dots="false">
				<swiper-item v-for="(item, index) in cardList" :key="index">
					<img :src="item.img">
				</swiper-item>
			</swiper>
		</div>
		<!--食品饮料-->
				<div class="thzh bg-fff">
					<div class="buy-item-title">
						<img src="https://hqwell.net/images/open_title07.png" class="item-img" />
						<a href="javascript:void(0)" @click="moreSort(127,'食品饮料')">更多<img src="https://hqwell.net/images/myback.png" class="fr"></a>
					</div>
					<ul class="grxh-ul clearfix">
						<li class="fl">
							<a href="myhome/produce.html?id=285">
								<div class="fl grxh-li-l">
									<h3>康师傅牛肉面</h3>
									<p>好吃还便宜</p>
									<h4>￥12.00</h4>
								</div>
								<div class="fr grxh-li-r">
									<img src="https://hqwell.net/images/spyl1.png" alt="" />
								</div>
							</a>
						</li>
						<li class="fl">
							<a href="myhome/produce.html?id=340">
								<div class="fl grxh-li-l">
									<h3>旺仔牛奶糖</h3>
									<p>办公室零食</p>
									<h4>￥2.90</h4>
								</div>
								<div class="fr grxh-li-r">
									<img src="https://hqwell.net/images/spyl2.png" alt="" />
								</div>
							</a>
						</li>
						<li class="fl">
							<a href="myhome/produce.html?id=153">
								<div class="fl grxh-li-l">
									<h3>喜力啤酒</h3>
									<p>敞开星世界</p>
									<h4>￥6.80</h4>
								</div>
								<div class="fr grxh-li-r">
									<img src="https://hqwell.net/images/spyl3.png" alt="" />
								</div>
							</a>
						</li>
						<li class="fl">
							<a href="myhome/produce.html?id=329">
								<div class="fl grxh-li-l">
									<h3>乐事薯片</h3>
									<p>美妙滋味</p>
									<h4>￥5.60</h4>
								</div>
								<div class="fr grxh-li-r">
									<img src="https://hqwell.net/images/spyl4.png" alt="" />
								</div>
							</a>
						</li>

					</ul>
					<ul class="thzh-ul-two">
						<li class="fl" @click="threeSort(157)">
							<a href="javascript:void(0)">
								<p class="tac">薯片/膨化</p>
								<img src="https://hqwell.net/images/spyl-item1.png" alt="" />
							</a>
						</li>
						<li class="fl" @click="threeSort(348)">
							<a href="javascript:void(0)">
								<p class="tac">梅类</p>
								<img src="https://hqwell.net/images/spyl-item2.png" alt="" />
							</a>
						</li>
						<li class="fl" @click="threeSort(163)">
							<a href="javascript:void(0)">
								<p class="tac">蛋黄派</p>
								<img src="https://hqwell.net/images/spyl-item3.png" alt="" />
							</a>
						</li>
						<li class="fl" @click="threeSort(424)">
							<a href="javascript:void(0)">
								<p class="tac">水</p>
								<img src="https://hqwell.net/images/spyl-item4.png" alt="" />
							</a>
						</li>
					</ul>
				</div>

	</div>
</template>

<script>
	import { Swiper, SwiperItem } from 'vux'
	import { Grid, GridItem } from 'vux'
	import { Marquee, MarqueeItem } from 'vux'
	import axios from '../../libs/axios'
	export default {
		name: 'home',
		components: {
			Swiper,
			SwiperItem,
			Grid,
			GridItem,
			Marquee, MarqueeItem,
		},
		data() {
			return {
				name: 'kaker',
				tabShow: 0,
				banner_list: [{ //轮播图数据
					url: 'javascript:',
					img: 'https://hqwell.net/images/banner3.jpg',
					title: '送你一朵fua'
				}, {
					url: 'javascript:',
					img: 'https://hqwell.net/images/banner.png',
					title: '送你一次旅行',
				}],
				newsList: [{ //文字滚动数据
					url: 'javascript:',
					title: '选对过冬被，睡好这辈子'
				}, {
					url: 'javascript:',
					title: '黄雀秋品首尔风尚'
				}, {
					url: 'javascript:',
					title: '黄雀地标商品，民俗风韵之窗'
				}, {
					url: 'javascript:',
					title: '民俗风韵之窗'
				}],
				groupList: [],	//特惠组合列表
				cardList:[{		//卡片列表
					img:"https://hqwell.net/images/card_banner.png"
				},{		
					img:"https://hqwell.net/images/card_banner2.png"
				},{		
					img:"https://hqwell.net/images/card_banner3.png"
				}]
			}
		},
		created() {
			//			let kb = {
			//				"station_id": 8,
			//				"type": 0,
			//				"cat_id": 1
			//			}
			//			axios.get('shop/v2/articles/list', {
			//					params: kb
			//				})
			//				.then(
			//					(data) => {
			//						console.log(data)
			//						this.newsList = data.data
			//						console.log(this.newsList)
			//					},
			//					(err) => {
			//						console.log(err)
			//					}
			//				)
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
	
	.nav .weui-grid {
		padding: 10px;
	}
	.nav{
		border-bottom: 1px solid #eee;
	}
	.nav .weui-grid:before,
	.nav .weui-grid:after {
		border: none;
	}
	
	.nav.weui-grids:after,
	.nav.weui-grids:before {
		border: none;
	}
	
	.nav .weui-grid__icon {
		width: 38px;
		height: 38px;
	}
	
	.nav .weui-grid__label {
		font-size: 12px;
	}
	
	.hot {
		height: 0.53rem;
		overflow: hidden;
		padding: 0.05rem;
	}
	
	.hot-b {
		height: 100%;
		padding: 0.05rem;
		width: auto;
	}
	
	.hot-b img {
		height: 100%;
	}
	
	.hot-h {
		height: 100%;
		width: 80%;
		font-size: 11px;
	}
	
	.hot-hh {
		color: #ffa800;
		border: 1px solid #ffa800;
		padding: 0.02rem;
		border-radius: 0.03rem;
		float: left;
		height: 0.15rem;
		line-height: 0.11rem;
		/*margin-top: 0.04rem;*/
		margin-right: 0.05rem;
		font-size: 0.1rem;
	}
	
	.hot-h p {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		height: 0.21rem;
	}
	
	.text-scroll {
		overflow: inherit !important;
	}
	
	.vux-slider>.vux-swiper {
		overflow: initial !important;
	}
	
	.zbShow {
		width: 100%;
	}
	
	.no-xl {
		width: 100%;
		height: 1.05rem;
		background: url(https://hqwell.net/images/no-xl-bg.png) no-repeat;
		background-size: cover;
		padding: 0.1rem 0.1rem;
	}
	
	.no-xl ul {
		height: 100%;
	}
	
	.no-xl li {
		width: 0.75rem;
		height: 100%;
		margin-left: 0.1rem;
	}
	
	.no-xl li a {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.buy-bk {
		padding: 0.05rem 0;
		height: 1.9rem;
	}
	
	.bk-l {
		width: 64%;
		height: 100%;
		position: relative;
	}
	
	.bk-r {
		width: 35%;
		height: 100%;
	}
	
	.bk_logo {
		position: absolute;
		top: 0;
		left: 0;
		width: 0.9rem;
	}
	
	.bk-ll {
		margin-top: 0.8rem;
		width: 50%;
	}
	
	.bk-lr {
		width: 50%;
	}
	
	.bk-ll p {
		width: 70%;
		margin: 0 auto;
	}
	
	.bk-ll p:nth-of-type(1) {
		font-size: 0.115rem;
		color: #646464;
	}
	
	.bk-ll p:nth-of-type(2) {
		font-size: 0.105rem;
		color: #fff;
		background: linear-gradient(to right, #5500b3, #d100fe);
		padding: 0 0.05rem;
		margin-top: 0.05rem;
		margin-bottom: 0.05rem;
	}
	
	.bk-ll p:nth-of-type(3) {
		font-size: 0.205rem;
		color: #f20909;
		font-weight: bold;
	}
	
	.bk-ll p:nth-of-type(4) {
		font-size: 0.115rem;
		color: #bdbdbd;
	}
	
	.bk-lr {
		padding-right: 0.05rem;
	}
	
	.bk-pro {
		width: 100%;
	}
	
	.bk-lr p img {
		width: 0.2rem;
	}
	
	.bk-lr p {
		color: #bdbdbd;
		font-size: 0.11rem;
	}
	
	.bk-r img {
		width: 0.7rem;
		margin: 0 auto;
		display: block;
	}
	
	.bk-r p:nth-of-type(1) {
		font-size: 0.115rem;
		color: #646464;
		padding-left: 0.1rem;
	}
	
	.bk-r p:nth-of-type(2) {
		font-size: 0.105rem;
		color: #fff;
		background: linear-gradient(to right, #5500b3, #d100fe);
		padding: 0 0.05rem;
		margin-left: 0.1rem;
		margin-top: 0.05rem;
		margin-bottom: 0.05rem;
		width: 60%;
	}
	
	.bk-r p:nth-of-type(3) {
		font-size: 0.205rem;
		color: #f20909;
		font-weight: bold;
	}
	
	.bk-r p:nth-of-type(4) {
		font-size: 0.115rem;
		color: #bdbdbd;
	}
	
	.buy-item-title {
		height: 0.4rem;
		padding: 0.1rem;
		position: relative;
	}
	
	.buy-item-title .item-img {
		height: 82%;
		margin: 0 auto;
		display: block;
	}
	
	.buy-item-title a {
		position: absolute;
		right: 0.1rem;
		top: 0;
		line-height: 0.4rem;
		color: #999;
		font-size: 0.105rem;
	}
	
	.buy-bk a {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.buy-item-title a img {
		height: 0.13rem;
		margin-left: 0.1rem;
		margin-top: 0.13rem;
	}
	
	.thzh-ul {
		width: 100%;
	}
	
	.thzh-ul li {
		width: 50%;
		height: 1.05rem;
		margin-bottom: 0.05rem;
	}
	
	.thzh-ul li:nth-child(odd) {
		padding-left: 0.05rem;
		padding-right: 0.025rem;
	}
	
	.thzh-ul li:nth-child(even) {
		padding-left: 0.025rem;
		padding-right: 0.05rem;
	}
	
	.thzh-ul li a {
		display: inline-block;
		height: 100%;
		width: 100%;
	}
	
	.thzh-li-l,
	.thzh-li-r {
		width: 50%;
		height: 100%;
	}
	
	.thzh-li-l {
		padding-top: 0.15rem;
		padding-left: 0.1rem;
	}
	
	.thzh-li-r img {
		width: 100%;
		margin-top: 0.1rem;
	}
	
	.thzh-li-l h3 {
		font-size: 0.156rem;
		font-weight: bold;
		height: 0.2rem;
		line-height: 0.2rem;
		overflow: hidden;
	}
	
	.thzh-li-l p {
		font-size: 0.105rem;
		color: #464646;
	}
	
	.thzh-ul li:nth-of-type(1) a {
		background-color: #fff8eb;
	}
	
	.thzh-ul li:nth-of-type(2) a {
		background-color: #e9fcff;
	}
	
	.thzh-ul li:nth-of-type(3) a {
		background-color: #e6eef9;
	}
	
	.thzh-ul li:nth-of-type(4) a {
		background-color: #e2fcec;
	}
	
	.thzh-ul li:nth-of-type(1) h3 {
		color: #ff6600;
	}
	
	.thzh-ul li:nth-of-type(2) h3 {
		color: #1f8ce9;
	}
	
	.thzh-ul li:nth-of-type(3) h3 {
		color: #b250e4;
	}
	
	.thzh-ul li:nth-of-type(4) h3 {
		color: #63bf47;
	}
	
	.thzh-ul-two {
		height: 1rem;
		width: 100%;
	}
	
	.thzh-ul-two li {
		width: 25%;
		height: 100%;
	}
	
	.thzh-ul-two li p {
		font-size: 0.105rem;
		color: #202020;
	}
	
	.thzh-ul-two li span {
		display: block;
		font-size: 0.135rem;
		color: #ff5050;
	}
	
	.thzh-ul-two li img {
		width: 100%;
	}
	
	.thzh-ul-two a {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.grxh-ul {
		border-top: 0.01rem solid #eee;
		padding-bottom: 0.05rem;
		overflow: hidden;
	}
	
	.grxh-ul li {
		width: 50%;
		height: 1.05rem;
		border-bottom: 0.01rem solid #eee;
	}
	
	.grxh-ul li:nth-child(odd) {
		border-right: 0.01rem solid #eee;
	}
	
	.grxh-li-r {
		width: 40%;
		height: 100%;
	}
	
	.grxh-li-r img {
		width: 110%;
		margin-top: 0.1rem;
		margin-left: -0.1rem;
	}
	
	.grxh-li-l {
		width: 60%;
		height: 100%;
		padding-top: 0.15rem;
		padding-left: 0.1rem
	}
	
	.grxh-li-l h3 {
		font-size: 0.15rem;
		font-weight: bold;
		color: #202020;
		width: 100%;
		height: 0.2rem;
		overflow: hidden;
		line-height: 0.2rem;
	}
	
	.grxh-li-l h4 {
		font-size: 0.135rem;
		color: #ff5050;
		font-weight: bold;
		margin-top: 0.2rem;
	}
	
	.grxh-li-l p {
		font-size: 0.105rem;
		color: #b7b7b7;
	}
	
	.grxh-ul li a {
		display: block;
		width: 100%;
		height: 100%;
	}
	.hq-card {
		width: 100%;
		height: 0.9rem;
		padding: 0.05rem;
	}
	
	.hq-card img {
		height: 0.8rem;
	}
	
	.hq-card .swiper-slide {
		width: 3.4rem;
	}
	.hq-card .vux-swiper{
		height: 0.8rem !important;
	}
</style>
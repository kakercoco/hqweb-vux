<template>
  <div style="padding-bottom:0.5rem">
    <tab  active-color="#fc3" custom-bar-width="50px"  bar-active-color="#fc3" v-model="tabIndex">
      <tab-item @on-item-click="handler" selected>商品</tab-item>
      <tab-item @on-item-click="handler">详情</tab-item>
    </tab>
    <div v-show="tabIndex==0">
      <swiper dots-position="center" loop height="4rem" auto class="bg-fff">
				<swiper-item v-for="(item, index) in banner_list" :key="index" >
					<img :src="item.img" class="swiper-img">
				</swiper-item>
			</swiper>
      <div class="pl-title">
        <div class="pl-tt">
          <h3 style="width: 100%;">测试特惠组合</h3> 
          <div class="group-price c-f7c08 mt-5">
            ￥<b>59.00</b><i class="c-999">价格</i><del class="c-999">109.60</del>
          </div>
        </div>
      </div>
      <div class="bg-fff gift-wrap">
        <span>内容</span>
        <ul>
          <li>(1)、心相印三层抽纸152抽３包／提</li>
          <li>(1)、心相印三层抽纸152抽３包／提</li>
          <li>(1)、心相印三层抽纸152抽３包／提</li>
        </ul>
      </div>
      <group>
        <cell>
          <span slot="title">运费 6.0  满66包邮</span>
        </cell>
        <cell value="···"  @click.native="buy=!buy">
          <span slot="title" class="fl">送至&nbsp;</span>
          <span slot="after-title" class="ckaddress">上海市杨浦区as上海市杨浦区as</span>
        </cell>
      </group>
      <div class="pl-contt">
        <p class="fl"><img src="http://hqwell.cn/images/duihao.png" alt="">正品保障</p> 
        <p class="fl"><img src="http://hqwell.cn/images/duihao.png" alt="">七天退货</p>
      </div>
      <div class="tac plc-change" @click="tabIndex=1">点击查看图文详情</div>
      <div class="group-btn">
        <div class="limitNum">
          <span class="fl">数量</span>
          <inline-x-number :min="1" :max="99"  fillable v-model="num"></inline-x-number>
          <span class="fr">限购2件</span>
        </div>
        <p class="button tac c-fff"  >立即购买</p> 
      </div>
      <popup v-model="buy" height="auto">
          <div class="bg-fff gift-sure">
            <h4>配送至</h4> 
            <group>
              <cell>
                <x-icon type="ios-location" slot="title" class="fl" size="18"></x-icon>
                <span slot="after-title" class="ckaddress">上海市杨浦区as上海市杨浦区as</span>
                <x-icon type="android-done" slot="default"  size="18" class="c-fc3"></x-icon>
              </cell>
            </group>
            <button>选择其他地址</button>
        </div>
      </popup>
    </div>
    <div v-show="tabIndex==1">
      565
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperItem, Tab, TabItem, Group, Cell, InlineXNumber, Popup } from 'vux'
export default {
  name: 'giftBuy',
  components: {
    Swiper, SwiperItem, Tab, TabItem, Group, Cell, InlineXNumber, Popup
  },
  data () {
    return {
      banner_list: [
        {
          // 轮播图数据
          img: 'http://hq-storage01.oss-cn-shanghai.aliyuncs.com/597b236cb50be.jpg',
          title: '送你一朵fua'
        },
        {
          img: 'http://hq-storage01.oss-cn-shanghai.aliyuncs.com/5924e8363888d.jpg',
          title: '送你一次旅行'
        },
        {
          img: 'http://hq-storage01.oss-cn-shanghai.aliyuncs.com/59bf8e68b76f7.PNG',
          title: '送你一次旅行'
        }
      ],
      tabIndex: 0, // 切换tab  0为商品页， 1为详情页
      num: 1,    // 选择商品数量
      buy: false // 显示地址列表
    }
  },
  created () {
    console.log(this.$route.params)
  },
  methods: {
    handler (index) {
      console.log(index)
      this.tabIndex = index
    }
  }
}
</script>
<style lang="less">
.swiper-img{
  width: 100%;
}
.pl-price{
	height: 0.5rem;
	background: linear-gradient(to right, #a31fe2, #fe46e4);
	color: #fff;
	line-height: 0.5rem;
  padding: 0 0.1rem;
    i{
    font-size: 0.135rem;
    font-style: normal;
  }
  span{
    font-size: 0.21rem;
    margin: 0 0.03rem;
  }
}
.vux-x-icon {
  fill: #fc3;
}
.gift-title{
  height: 0.4rem;
  line-height: 0.4rem;
  padding: 0 0.1rem;
}
.gift-wrap{
  margin-top: 0.1rem;
  padding: 0.1rem;
  &>span{
    float: left;
    width: 0.4rem;
  }
  ul{
    padding-left: 0.4rem;
    li{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 600;
      font-size: 0.12rem;
    }
  }
}
.weui-cell{
  font-size: 0.125rem;
}
.vux-number-selector{
  width: 0.35rem!important;
  height: 0.25rem!important;
}
.vux-number-input{
  width: 0.35rem!important;
  height: 0.25rem!important;
  font-size: 0.14rem !important;
}
.vux-number-selector svg,.vux-number-selector svg{
  width: 0.18rem!important;
  height: 0.18rem!important;
}
.vux-number-selector svg{
  fill: #999 !important;
}
.pl-contt {
    height: 0.3rem;
    background-color: #f8f8f8;
    margin-bottom: 0.15rem;
    line-height: 0.3rem;
    padding: 0 0.1rem;
    p {
      font-size: 0.105rem;
      color: #999;
      margin: 0 0.1rem;
    }
    img {
      width: 0.1rem;
      margin-right: 0.05rem;
    }
}
.plc-change{
  margin-bottom: 0.2rem;
  font-size: 0.1rem;
}
.group-btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 35;
    .button {
      height: 0.5rem;
      font-size: 0.187rem;
      line-height: 0.5rem;
      background-color:#fc3;
      width: 40%;
      float: right;
  }
}
.limitNum{
  width: 60%;
  float: left;
  height: 0.5rem;
  background-color: #fff;
  padding:0 0.1rem;
  span{
    height: 100%;
    line-height: 0.5rem;
  }
  .vux-inline-x-number{
    margin-top: 0.12rem;
    margin-left: 0.05rem;
  }
}
.gift-sure {
    width: 100%;
    padding-top: 0.2rem;
    h4 {
      font-size: 0.18rem;
      text-align: center;
      width: 50%;
      margin: 0 auto;
    }
    button {
      height: 0.5rem;
      font-size: 0.14rem;
      line-height: 0.5rem;
      background-color: #fc3;
      width: 100%;
      border: none;
      margin-top: 1rem;
  }
}
.pl-title {
    background-color: #fff;
    margin-bottom: 0.1rem;
    padding: 0.1rem;
}
.pl-tt {
    height: 0.6rem;
    h3 {
      padding-top: 0.05rem;
      font-size: 0.156rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      width: 100%;
  }
}
.group-price {
    font-size: 0.125rem;
    color: #ffcc33;
    b {
      font-size: 0.22rem;
    }
    i {
      font-style: normal;
      margin-left: 0.2rem;
    }
}
.ckaddress{
  display: inline-block;
  width: 80%;
}
</style>

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
      <div class="pl-price">
        <i>￥</i><span>78.00</span><i>包邮</i><i class="fr">下单发礼券，馈赠亲友无忧</i>
      </div>
      <h3 class="gift-title bg-fff">大礼包1130</h3>
      <div class="bg-fff gift-wrap">
        <span>内容</span>
        <ul>
          <li>(1)、心相印三层抽纸152抽３包／提</li>
          <li>(1)、心相印三层抽纸152抽３包／提</li>
          <li>(1)、心相印三层抽纸152抽３包／提</li>
        </ul>
      </div>
      <group>
        <cell title="支付方式" value="微信支付"></cell>
        <cell title="发票" value="请选择"></cell>
        <cell>
          <span slot="title">数量 {{num}}箱</span>
          <inline-x-number :min="1" :max="99" button-style="round" fillable v-model="num"></inline-x-number>
        </cell>
      </group>
      <div class="pl-contt">
        <p class="fl"><img src="http://hqwell.cn/images/duihao.png" alt="">正品保障</p> 
        <p class="fl"><img src="http://hqwell.cn/images/duihao.png" alt="">七天退货</p>
      </div>
      <div class="tac plc-change" @click="tabIndex=1">点击查看图文详情</div>
      <div class="group-btn">
        <p class="button tac c-fff" style="background-color: rgb(193, 4, 6);" @click="buy=!buy">立即购买</p> 
      </div>
      <popup v-model="buy" height="4rem">
          <div class="bg-fff gift-sure" v-show="buy">
            <span class="fr gift-close" @click="buy=!buy">×</span> 
            <h4>请确认金额</h4> 
            <p><img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/5a1faaec08a70.png" >
            <span>大礼包</span></p> 
            <p><span class="fl">购买数量</span> <span class="fr">礼券  x{{num}}</span></p>
            <p><span class="fl">金额</span><span class="fr">￥<i>{{num*78}}</i></span></p>
            <button class="c-fff" >提交订单</button>
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
      buy: false // 显示提交订单
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
.vux-number-round .vux-number-selector-sub, .vux-number-round .vux-number-selector-plus {
    width: 25px !important;
    height: 25px !important;
    border-color: #fc3!important;
}
.vux-number-round .vux-number-selector.vux-number-disabled{
 border-color: #ececec!important;
}
.vux-number-input{
  height: 25px !important;
}
.vux-number-selector svg{
  fill:#fc3!important;
}
.vux-number-round .vux-number-selector.vux-number-disabled svg{
  fill:#ececec!important;
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
  }
}
.gift-sure {
    position: absolute;
    bottom: 0rem;
    left: 0;
    width: 100%;
    padding-top: 0.2rem;
    .gift-close {
      width: 0.25rem;
      height: 0.25rem;
      font-size: 0.15rem;
      margin-right: 0.15rem;
      border-radius: 0.25rem;
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.25rem;
    }
    h4 {
      font-size: 0.18rem;
      text-align: center;
      width: 50%;
      margin: 0 auto;
    }
    p {
      border-bottom: 1px solid #eee;
      padding: 0.1rem 0.15rem;
    }
    p:nth-of-type(1) {
      height: 1rem;
      img {
        height: 100%;
      }
      span {
        height: 100%;
        font-size: 0.15rem;
      }
    }
    p:nth-of-type(2),p:nth-of-type(3){
      height: 0.5rem;
      font-size: 0.14rem;
      line-height: 0.3rem;
    }
    p:nth-of-type(3) {
      i {
        font-size: 0.18rem;
        color: #c10406;
      }
    }
    button {
      height: 0.5rem;
      font-size: 0.187rem;
      line-height: 0.5rem;
      background-color: #c10406;
      width: 100%;
      border: none;
      margin-top: 1rem;
  }
}
</style>

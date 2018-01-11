<template>
  <div style="padding-bottom:0.5rem;padding-top:44px;">
    <div class="top">
      <router-link to="/main/index" tag="span" class="index">返回首页</router-link>
      <tab active-color="#fc3" v-model="tabCk">
        <tab-item @on-item-click="handler" selected>商品</tab-item>
        <tab-item @on-item-click="handler">详情</tab-item>
        <tab-item @on-item-click="handler">溯源</tab-item>
      </tab>
    </div>
    <!-- 商品页 -->
    <div v-show="tabCk==0">
      <swiper loop height="4rem" dots-position="center" dots-class="checked">
       <swiper-item  v-for="(item, index) in list" :key="index" >
         <img :src="item" class="swiper-img">
        </swiper-item>
      </swiper>
      <div>
        <ul class="hot-title">
          <li class="fl" style="background: none;">
            <b class="fl">￥9.20</b> 
            <p class="fl">爆款抢购<del>￥10.10</del></p>
          </li>
          <li class="fl" style="background: none;">
            <p class="tac">距结束仅剩</p> 
            <p class="tac">
              <clocker time="2018-01-31 23:59:59" format=" %H : %M : %S "></clocker>
            </p>
          </li>
        </ul>
        <div class="pl-title">
          <div class="pl-tt">
              <h3>潘婷乳液修复洗发露 750ml</h3>
          </div>
        </div>
        <group>
           <cell value="···"  @click.native="choose=!choose">
            <span slot="title" class="fl">已选&nbsp;</span>
          </cell>
          <cell>
            <p slot="title">运费 6.0  <span style="color:#ec1c00">全场满66元包邮</span>（20kg内，自提免邮费） </p>
          </cell>
          <cell value="···"  @click.native="address=!address">
            <span slot="title" class="fl">送至&nbsp;</span>
            <span slot="after-title" class="ckaddress">上海市杨浦区as上海市杨浦区as</span>
          </cell>
        </group>
        <div class="pl-contt">
          <p class="fl"><img src="http://hqwell.cn/images/duihao.png" alt="">正品保障</p> 
          <p class="fl"><img src="http://hqwell.cn/images/duihao.png" alt="">七天退货</p>
        </div>
        <div class="tac plc-change" @click="tabCk=1">点击查看图文详情</div>
        <popup v-model="address">
          <div class="bg-fff gift-sure">
            <h4>配送至</h4> 
            <group>
              <cell>
                <x-icon type="ios-location" slot="title" class="fl" size="18"></x-icon>
                <span slot="after-title" class="ckaddress">上海市杨浦区as上海市杨浦区as</span>
                <x-icon type="android-done" slot="default"  size="18" class="c-fc3"></x-icon>
              </cell>
              <cell>
                <x-icon type="ios-location" slot="title" class="fl" size="18"></x-icon>
                <span slot="after-title" class="ckaddress">上海市杨浦区as上海市杨浦区as上海市杨浦区as上海市杨浦区as</span>
                <x-icon type="android-done" slot="default"  size="18" class="c-fc3" v-show="false"></x-icon>
              </cell>
            </group>
            <button>选择其他地址</button>
          </div>
        </popup>
        <popup v-model="choose">
          <div class="choose-title">
            <img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/59b8deaa431a5.jpg" alt="">
            <div>
              <p><span>￥</span>57.00</p>
              <p>商品编号:P000080000200007</p>
            </div>
          </div>
          <div class="choos-num">
            <span>购买数量</span>
            <inline-x-number :min="1" :max="99"  fillable v-model="num" class="fr"></inline-x-number>
          </div>
          <div class="choose-btn">
            <button>加入购物车</button>
            <button>立即购买</button>
          </div>
        </popup>
        
      </div>
    </div>
    <!-- 详情页 -->
    <div class="goodsDetail" v-show="tabCk==1">
      <img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/597ea6e58dcbf.jpg" alt="">
    </div>
    <!-- 溯源页 -->
    <div v-show="tabCk==2" class="goods-mes">
      <ul>
        <h3 class="c-fff tac mb-20">·溯源信息</h3>
        <li><span class="fl tac">产品名称/型号</span><span class="fr tac">潘婷乳液修复洗发露 750ml</span></li>
        <li><span class="fl tac">主要成分含量</span><span class="fr tac">/</span></li>
        <li><span class="fl tac">生产/出产日期</span><span class="fr tac">印于包装 </span></li>
        <li><span class="fl tac">保质期</span><span class="fr tac">三年 </span></li>
        <li><span class="fl tac">生产商</span><span class="fr tac">广州宝洁有限公司</span></li>
        <li><span class="fl tac">生产商地址</span><span class="fr tac">广州市经济技术开发区滨河路一号 </span></li>
        <li><span class="fl tac">产地</span><span class="fr tac">中国大陆</span></li>
        <li><span class="fl tac">储存条件</span><span class="fr tac">阴凉、干燥</span></li>
      </ul>
      <div class="goods-from">
        <h3>·溯源信息图片</h3>
        <img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/59784d1138bba.png" alt="">
      </div>
    </div>
    <div class="choose-footer">
      <ul>
        <li>
          <p>
            <img src="../../../assets/img/erji.png" alt="">
            <span>客服</span>
          </p>
          <p>
            <img src="../../../assets/img/shop.png" alt="">
            <span>购物车</span>
            <i>1</i>
          </p>
        </li>
        <li>加入购物车</li>
        <li>购买</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Tab, TabItem, Swiper, SwiperItem, Group, Cell, InlineXNumber, Popup, Clocker } from 'vux'
export default {
  name: 'goodsDetail',
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Group,
    Cell,
    InlineXNumber,
    Popup,
    Clocker
  },
  data () {
    return {
      list: [
        'http://hq-storage01.oss-cn-shanghai.aliyuncs.com/597ea6bc441c2.jpg',
        'http://hq-storage01.oss-cn-shanghai.aliyuncs.com/597ea6bc47ed7.jpg',
        'http://hq-storage01.oss-cn-shanghai.aliyuncs.com/597ea6bc46ac0.jpg'
      ],
      address: false, // 地址列表显示与否
      choose: false, // 选择数量显示与否
      num: 1, // 选择数量
      tabCk: 0 // 选择tab项
    }
  },
  methods: {
    handler (id) {
      console.log(id)
      this.tabCk = id
    }
  }
}
</script>
<style lang="less">
.top {
  padding: 0 25%;
  background-color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  .index {
    position: absolute;
    top: 0.15rem;
    right: 0.1rem;
    font-size: 0.12rem;
    color: #999;
  }
}
.swiper-img {
  width: 100%;
}
.checked i.active {
  background-color: #fc3 !important;
}
.pl-tt {
  h3 {
    padding-top: 0.05rem;
    font-size: 0.156rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 80%;
  }
}
.hot-title {
  background: url(../../../assets/img/baokuan_bg.png) no-repeat;
  background-size: cover;
  height: 0.46rem;
  li {
    &:nth-of-type(1) {
      width: 70%;
      color: #fff;
      b {
        font-size: 0.25rem;
        line-height: 0.46rem;
        font-weight: 400;
      }
      p {
        font-size: 0.125rem;
        margin-top: 0.1rem;
        line-height: 0.15rem;
        margin-left: 0.1rem;
      }
      del {
        display: block;
        color: #ccc;
        font-size: 0.1rem;
      }
    }
    &:nth-of-type(2) {
      width: 30%;
      p {
        font-size: 0.125rem;
      }
    }
  }
}
.pl-title {
  background-color: #fff;
  margin-bottom: 0.1rem;
  padding: 0.1rem;
  position: relative;
}
.pl-tc {
  height: 0.3rem;
  line-height: 0.3rem;
  p {
    color: #999;
  }
  .pl-tcp {
    font-size: 0.2rem;
    color: #ff7c08;
    margin-right: 0.2rem;
  }
}
.weui-cell {
  font-size: 0.125rem;
  padding: 15px !important;
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
.plc-change {
  margin-bottom: 0.2rem;
  font-size: 0.1rem;
}
.gift-sure h4 {
  font-size: 0.18rem;
  text-align: center;
  width: 50%;
  margin: 0 auto;
}
.gift-sure {
  width: 100%;
  padding-top: 0.2rem;
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
.vux-x-icon {
  fill: #fc3;
}
.choose-title {
  border-bottom: 1px solid #ccc;
  position: relative;
  height: 1.2rem;
  padding-top: 0.4rem;
  img {
    top: 0rem;
    left: 0.3rem;
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 5px;
  }
  div {
    background-color: #fff;
    height: 0.8rem;
    padding-left: 1.5rem;
    padding-top: 0.1rem;
    p {
      font-size: 0.17rem;
      color: #ec1c00;
      span {
        font-size: 0.12rem;
      }
      &:nth-of-type(2) {
        font-size: 0.12rem;
        color: #a9a9a9;
      }
    }
  }
}
.vux-popup-dialog {
  background-color: transparent !important;
}
.choos-num {
  height: 0.5rem;
  background-color: #fff;
  padding: 0.1rem;
}
.choose-btn {
  height: 0.5rem;
  button {
    width: 50%;
    height: 100%;
    float: left;
    border: none;
    background-color: #333333;
    color: #fff;
    &:nth-of-type(2) {
      background-color: #fc3;
    }
  }
}
.vux-number-selector {
  width: 0.35rem !important;
  height: 0.25rem !important;
}
.vux-number-input {
  width: 0.35rem !important;
  height: 0.25rem !important;
  font-size: 0.14rem !important;
}
.vux-number-selector svg {
  fill: #999 !important;
}
.goodsDetail {
  img {
    width: 100%;
  }
}
.choose-footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 0.5rem;
  background-color: #fff;
  li {
    float: left;
    width: 33.33%;
    height: 100%;
    text-align: center;
    &:nth-of-type(1) {
      p {
        width: 50%;
        float: left;
        padding-top: 0.05rem;
        position: relative;
        i {
          position: absolute;
          top: 0;
          right: 0.15rem;
          width: 0.15rem;
          height: 0.15rem;
          display: block;
          font-size: 0.12rem;
          background-color: #ffcc33;
          color: #fff;
          border-radius: 0.1rem;
          text-align: center;
          line-height: 0.15rem;
        }
        img {
          width: 0.25rem;
          display: block;
          margin: 0 auto;
        }
        span {
          font-size: 0.1rem;
          float: left;
          width: 100%;
          text-align: center;
        }
      }
    }
    &:nth-of-type(2),
    &:nth-of-type(3) {
      color: #fff;
      line-height: 0.5rem;
    }
    &:nth-of-type(2) {
      background-color: #333;
    }
    &:nth-of-type(3) {
      background-color: #fc3;
    }
  }
}
.goods-mes {
  padding: 0 0.1rem;
  h3 {
    font-size: 0.125rem;
    width: 0.85rem;
    height: 0.28rem;
    line-height: 0.28rem;
    background: linear-gradient(to right, #1593ff, #0351b8);
    border-radius: 0.05rem;
    margin: 0.2rem 0;
  }
  li {
    font-size: 0.115rem;
    width: 100%;
    height: 0.28rem;
    span {
      height: 100%;
      display: inline-block;
      line-height: 0.28rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &:nth-child(1) {
        width: 40%;
      }
      &:nth-child(2) {
        width: 60%;
      }
    }
    &:nth-child(even) span:nth-child(1) {
      background-color: #dbdbdb;
      color: #fff;
    }
    &:nth-child(even) span:nth-child(2) {
      background-color: #1593ff;
      color: #fff;
    }
    &:nth-child(odd) span:nth-child(1) {
      background-color: #f9f9f9;
      color: #d2d2d2;
    }
    &:nth-child(odd) span:nth-child(2) {
      background-color: #aee8ff;
      color: #106b99;
    }
  }
}
.goods-from {
  h3 {
    width: 1.62rem;
    text-align: center;
    color: #fff;
  }
  img {
    width: 100%;
  }
}
</style>

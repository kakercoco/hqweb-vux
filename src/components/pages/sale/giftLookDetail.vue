<template>
  <div class="gift-get">
    <h5 class="gift-look-num">NO.100000025</h5>
    <div class="gift-get-img">
      <img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/5a1faaec08a70.png">
    </div>
    <div class="gift-get-mes">
      <div class="tac">
        <div class="gift-price">
          <span>￥</span>
          <span>78.00</span>
        </div> 
        <div class="gift-num">
          <p>NO.100000025</p> 
          <span>大礼包1130</span>
        </div>
      </div> 
      <ul>
        <li>1, 心相印三层抽纸152抽３包／提 x3</li>
        <li>2, 维达超韧软抽3包/提 150抽/包 x5</li>
        <li>3, 维达蓝色经典软抽3包/提 130抽/包 x4</li>
      </ul>
    </div>
    <p class="giftBuy-btn">
      <button>我要转赠</button> 
      <button class="fr" @click="getGift">立即领取</button>
    </p>
    <div class="gift-look-detail">
      <h3>使用说明</h3> 
      <ul>
        <li><span>1.</span>本礼券限使用一次，一经售出恕不退货; 试试</li> 
        <li><span>2.</span>礼券领用时间为2017.12.15-2018.3.15(由于大年三十到正月初七所有快递停运所以不能正常发货，希望您能谅解)，超过时间期限不领取则视为放弃领用资格; </li> 
        <li><span>3.</span>礼券可用于自己使用或者赠与他人;</li> 
        <li><span>4.</span>礼券购买成功后可至菜单栏"我的"-"礼品"中查看;</li> 
        <li><span>5.</span>点击"礼品"查看当前您已购买的礼券,"点击查看"可以查看当前礼券的详情,在详情页中可以将礼券转赠给他人也可自己使用;</li> 
        <li><span>6.</span>"礼券领用"需填写好收货信息，黄雀商城会尽快给您发货。</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'giftLookDetail',
  data () {
    return {

    }
  },
  methods: {
    getGift () {
      this.$router.push({path: '/sale/giftGet'})
    }
  }
}
</script>
<style lang="less" scoped>
.gift-get {
  min-height: 100vh;
  background: url(../../../assets/img/gift-get-bg.png);
  -webkit-background-size: contain;
  background-size: contain;
  background-repeat: repeat;
}
.gift-look-num {
  font-size: 0.125rem;
  padding: 0.15rem;
  color: #fff;
}
.gift-get-img {
  img {
    width: 2.2rem;
    height: 1.8rem;
    margin: 0 auto;
    display: block;
  }
}
.gift-get-mes {
  margin-top: 0.2rem;
  color: #feda72;
  li {
    line-height: 0.2rem;
    text-align: center;
    font-size: 0.135rem;
  }
}
.gift-price {
  display: inline-block;
  color: rgb(250, 250, 233);
  span {
    &:nth-of-type(1) {
      display: inline-block;
      font-weight: 600;
      font-size: 0.18rem;
      vertical-align: top;
      margin-top: 0.1rem;
    }
    &:nth-of-type(2) {
      font-size: 0.35rem;
    }
  }
}
.giftBuy-btn {
  padding: 0 0.3rem;
  margin-top: 0.25rem;
  button {
    width: 1.43rem;
    height: 0.38rem;
    background: linear-gradient(to right, #a98348, #fde7af);
    display: inline-block;
    border: none;
    border-radius: 0.38rem;
    color: #fff;
  }
}
.gift-look-detail {
  color: #fff;
  background-color: #c0030f;
  width: 3.5rem;
  margin-top: 0.3rem;
  padding: 0.2rem;
  border-radius: 0.1rem;
  h3 {
    font-size: 0.136rem;
    text-align: center;
    margin-bottom: 0.2rem;
  }
  li {
    font-size: 0.105rem;
    line-height: 0.2rem;
  }
}
.gift-num{
  display:inline-block;
  p{
    margin-top: 0.05rem; 
    text-align: left; 
    color: rgb(241, 225, 191);
  }
  span{
    font-size: 0.146rem; 
    color: rgb(246, 240, 199);
  }
}
</style>

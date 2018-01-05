<template>
  <div>
      <img src="../../../assets/img/giftBuy1.png" alt="" class="gifted-logo">
      <div class="giftBuy-h5">
        <h1><span>￥</span>1888</h1>
        <h3>山中珍品大礼包</h3>
        <p>共3张</p>
        <span class="giftTime">领取时间：永久有效</span>
      </div>
      <p class="giftBuy-btn tac">
				<button @click="look">查看礼品</button>
			</p>
      <div class="giftBuy-ul">
        <h3>使用说明</h3> 
        <ul>
           <li><span>1.</span>本礼券限使用一次，一经售出恕不退货;</li>
           <li><span>2.</span>礼券领用时间为2017.12.15-2018.3.15(由于大年三十到正月初七所有快递停运所以不能正常发货，希望您能谅解)，超过时间期限不领取则视为放弃领用资格; </li> 
           <li><span>3.</span>礼券可用于自己使用或者赠与他人;</li> 
           <li><span>4.</span>礼券购买成功后可至菜单栏"我的"-"礼品"中查看;</li> <li><span>5.</span>点击"礼品"查看当前您已购买的礼券,"点击查看"可以查看当前礼券的详情,在详情页中可以将礼券转赠给他人也可自己使用;</li> <li><span>6.</span>"礼券领用"需填写好收货信息，黄雀商城会尽快给您发货。</li>
        </ul>
      </div>
      <img src="../../../assets/img/giftBuy3.png" alt="" class="giftBuy-bg">
  </div>
</template>
<script>
export default {
  name: 'giftBuySuccess',
  data () {
    return {

    }
  },
  methods: {
    look () {
      this.$router.push({path: '/sale/giftLookList'})
    }
  }
}
</script>
<style lang="less" scoped>
.gifted-logo {
  width: 2.5rem;
  margin: 0.3rem auto;
  display: block;
}
.giftBuy-h5 {
  height: 1.4rem;
  width: 3.2rem;
  margin: 0 auto;
  background: url(../../../assets/img/giftBuy2.png) no-repeat;
  -webkit-background-size: contain;
  background-size: contain;
  padding: 0.15rem;
  h1 {
    font-size: 0.3rem;
    color: #fff8cf;
    background-image: -webkit-gradient(
      linear,
      0 0,
      0 bottom,
      from(#fffefc),
      to(#fff3ae)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    span {
      font-size: 0.21rem;
      margin-top: 0.05rem;
      float: left;
    }
  }
  h3 {
    font-size: 0.15rem;
    color: #fff8cf;
    background-image: -webkit-gradient(
      linear,
      0 0,
      0 bottom,
      from(#fffefc),
      to(#fff3ae)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    width: 0.58rem;
    height: 0.22rem;
    border-radius: 0.22rem;
    background-color: #bf030f;
    color: #fff;
    text-align: center;
    line-height: 0.22rem;
    margin-bottom: 0.05rem;
    float: right;
    clear: both;
  }
  .giftTime {
    float: right;
    clear: both;
    font-size: 0.1rem;
    color: #fff;
    display: block;
    margin: 0 auto;
    text-align: right;
  }
}
.giftBuy-btn {
  button {
    height: 0.38rem;
    background: linear-gradient(to right, #a98348, #fde7af);
    display: inline-block;
    border: none;
    border-radius: 0.38rem;
    color: #fff;
    width: 2rem;
    margin-top: 0.25rem;
  }
}
.giftBuy-ul{
    margin-top: 0.3rem;
    color: #323232;
    padding: 0 0.4rem;
    h3 {
        font-size: 0.136rem;
        text-align: center;
        margin-bottom: 0.2rem;
    }
    li {
        position: relative;
        padding-left: 0.1rem;
        font-weight: 500;
        font-family: inherit;
        z-index: 999;
        font-size: 0.105rem;
        line-height: 0.2rem;
        span {
          position: absolute;
          left: 0;
      }
    }
}
.giftBuy-bg{
    position: fixed;
    bottom: 0;
    right: 0;
    width: 2rem;
}
</style>

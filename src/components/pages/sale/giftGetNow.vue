<template>
    <div class="can_use">
      <div class="gift-get-title">
        <img src="../../../assets/img/gift-get-titlebg.png" class="bg">
      </div> 
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
      </div> 
      <div class="gift-get-input">
        <ul>
          <p>填写手机信息</p> 
          <li><input type="tel" placeholder="请输入手机号"></li> 
          <li>
            <span class="getCode">获取验证码</span> 
            <input type="tel" placeholder="请输入验证码" class="fl">
          </li> 

          <p style="margin-top: 0.23rem;">填写收货信息</p> 
          <li><input type="text" placeholder="请输入收货人姓名"></li> 
          <li>
            <x-address  title="" v-model="value" :list="addressData" placeholder="请输入省市区" @on-shadow-change="piker" class="gift-get-adress"></x-address>
          </li> 
          <li><input type="text" placeholder="请输入收货地址" class="gift-get-adress" ></li>
        </ul>
      </div>
      <div class="gift-get-float">
        <p class="gift-get-btn tac" @click="getIt"><button>立即领取</button></p>
      </div>
    </div>
</template>
<script>
import { XAddress, Group } from 'vux'
import address from '../../json/address'
export default {
  name: 'giftGetNow',
  components: {
    XAddress, Group
  },
  data () {
    return {
      value: [],
      showAddress: true,
      addressData: address
    }
  },
  methods: {
    piker (val, name) {
      console.log(val, name)
    },
    getIt () {
      this.$router.push({path: '/sale/giftGetSuccess'})
    }
  }
}
</script>
<style lang="less">
.vux-cell-box:before{
  border-top: none !important;
}
.vux-popup-picker-select{
  text-align: left!important;
  font-size: 0.12rem;
  height: 0.33rem;
  span{
    display: inline-block;
    height: 100%;
    line-height: 0.33rem;
  }
}
.can_use{
    min-height: 100vh;
    background: url(../../../assets/img/gift-get-bg.png);
    -webkit-background-size: contain;
    background-size: contain;
    background-repeat: repeat;
}
.gift-get-title {
    padding-top: 0.5rem;
    .bg {
      width: 2.5rem;
      display: block;
      margin: 0 auto;
  }
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
.gift-get-float {
    width: 100%;
    height: 1.6rem;
    background: url(../../../assets/img/gift-get-float.png) no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    margin-top: 0.5rem;
}
.gift-get-btn {
    z-index: 10;
    button {
      margin-top: 0.4rem;
      width: 2.5rem;
      height: 0.5rem;
      line-height: 0.5rem;
      background-color: #fcee95;
      border-radius: 0.5rem;
      border: none;
      box-shadow: 2px 5px 2px rgba(0,0,0,0.3);
      color: #ec0614;
      font-size: 0.22rem;
  }
}
.gift-get-input {
    margin-top: 0.2rem;
    ul {
      width: 3rem;
      background-color: #fff;
      border-radius:0 0.5rem;
      margin: 0 auto;
      padding: 0.3rem 0.3rem 0.5rem;
      box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
      p {
        color: #ec0713;
        font-size: 0.146rem;
     }
      li {
        height: 0.5rem;
        border-bottom: 1px dashed #ff9191;
        padding: 0.08rem 0;
        input {
          border: none;
          outline: none;
          height: 100%;
          font-size: 0.12rem;
      }
      .gift-get-adress{
        width: 100%;
      }
      .getCode {
          width: 0.67rem;
          height: 100%;
          background-color: #feda72;
          border-radius: 0.05rem;
          float: right;
          color: #fff;
          line-height: 0.34rem;
          text-align: center;
          font-size: 0.1rem;
      }
    }
  }
}
</style>

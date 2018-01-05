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
      <ul>
        <li>1, 心相印三层抽纸152抽３包／提 x3</li>
        <li>2, 维达超韧软抽3包/提 150抽/包 x5</li>
        <li>3, 维达蓝色经典软抽3包/提 130抽/包 x4</li>
      </ul>
    </div> 
      <div class="gift-get-float">
        <p class="gift-get-btn tac"><button @click="getNow">下一步</button></p>
      </div>
    </div>
</template>
<script>
export default {
  name: 'giftGet',
  data () {
    return {

    }
  },
  methods: {
    getNow () {
      this.$router.push({path: '/sale/giftGetNow'})
    }
  }
}
</script>
<style lang="less" scoped>
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
</style>

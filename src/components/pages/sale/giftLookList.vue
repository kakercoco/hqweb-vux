<template>
  <div>
    <div class="gift-list">
      <ul>
        <li class="red">
          <p class="fl gift-ewm-mes">
            <span>大礼包1130</span> <span>NO.100000025</span> 
            <span>领取时间：永久有效</span> <!---->
          </p> 
          <p class="fr gift-ewm-btn" @click="lookDetail"></p>
        </li>    
        <li class="red">
          <p class="fl gift-ewm-mes">
            <span>大礼包1130</span> <span>NO.100000025</span> 
            <span>领取时间：永久有效</span> <!---->
          </p> 
          <p class="fr gift-ewm-btn"></p>
          <img src="../../../assets/img/gift_yzs.png" alt="" class="gift-state">
        </li>    
        <li class="black">
          <p class="fl gift-ewm-mes">
            <span>大礼包1130</span> <span>NO.100000025</span> 
            <span>领取时间：永久有效</span> <!---->
          </p> 
          <p class="fr gift-ewm-btn"></p>
        </li>    
        <li class="black">
          <p class="fl gift-ewm-mes">
            <span>大礼包1130</span> <span>NO.100000025</span> 
            <span>领取时间：永久有效</span> <!---->
          </p> 
          <p class="fr gift-ewm-btn"></p>
          <img src="../../../assets/img/gift_ydh.png" alt="" class="gift-state">
        </li>    
        <li class="black">
          <p class="fl gift-ewm-mes">
            <span>大礼包1130</span> <span>NO.100000025</span> 
            <span>领取时间：永久有效</span> <!---->
          </p> 
          <p class="fr gift-ewm-btn"></p>
          <img src="../../../assets/img/gift_useless.png" alt="" class="gift-state">
        </li>    
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'giftLookList',
  data () {
    return {

    }
  },
  methods: {
    lookDetail () {
      this.$router.push({path: '/sale/giftLookDetail'})
    }
  }
}
</script>
<style lang="less" scoped>
.gift-list{
  padding: 0.2rem 0.15rem;
  li{
    position: relative;
    height: 0.88rem;
    margin-bottom: 0.1rem;
    -webkit-background-size: cover;
    background-size: cover;
    width: 100%;
    padding: 0.05rem 0 0.05rem 0.15rem;
    .gift-state{
      position: absolute;
      width: 0.5rem;
      top: 0.2rem;
      right: 0.55rem;
    }
    &.red{
      background-image: url(http://hqwell.cn/images/gift_list_bgr.png);
    }
    &.black{
      background-image: url(http://hqwell.cn/images/gift_list_bgb.png);
    }
  }
}
.gift-ewm-mes{
	width: 70%;
	height: 100%;
  margin-left: 0.1rem;
  span{
    display: block;
    color: #fff;
    text-align: left;
    &:nth-of-type(1){
      font-size: 0.156rem;
    }
    &:nth-of-type(2){
      font-size: 0.105rem;
	    margin: 0.05rem 0;
    }
  }
}
.gift-ewm-btn{
	width: 0.72rem;
	height: 100%;
}
</style>

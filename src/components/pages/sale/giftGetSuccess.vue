<template>
  <div class="wrap gift-get-success">
			<img class="gift-get-success-img" src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/5a1faaec08a70.png">
			<p>点击下方按钮，立即进入黄雀商城</p>
			<p>更多优惠等着您</p>
			<button id="btn" @click="gotoIndex">黄雀商城</button>
  </div>
</template>
<script>
export default {
  name: 'giftGetSuccess',
  data () {
    return {

    }
  },
  methods: {
    gotoIndex () {
      this.$router.push({path: '/main/index'})
    }
  }
}
</script>
<style lang="less" scoped>
.wrap{
  background: url('../../../assets/img/gift-get-success.png');
  background-size: cover;
  background-repeat: round;
  height: 100vh;
  padding-top: 1.3rem;
}
.gift-get-success-img {
    width: 2.2rem;
    height: 1.8rem;
    margin: 0 auto;
    display: block;
    margin-bottom: 0.3rem;
}
.gift-get-success{
   p {
      font-size: 0.146rem;
      color: #fcee95;
      text-align: center;
      line-height: 0.3rem;
  }
  button {
    width: 2.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    background-color: #fcee95;
    border-radius: 0.5rem;
    border: none;
    box-shadow: 2px 5px 2px rgba(0,0,0,0.3);
    color: #ec0614;
    font-size: 0.20rem;
    margin: 0.2rem auto 0;
    display: block;
}
} 
</style>

<template>
  <div>
    <img src="../../../assets/img/ordernothing.png" alt="">
    <p class="tac">空空如也，快去买买买……</p>
    <button @click="gotoIndex">去购物</button>
  </div>
</template>
<script>
export default {
  name: 'orderNone',
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
img{
  width: 1.5rem;
  height: 1.56rem;
  margin: 0.4rem auto 0;
  display: block;
}
p{
  font-size: 0.13rem;
  color: #999;
  margin-top: 0.4rem;
}
button{
  color: #333;
  background: #ffcc33;
  width: 1.77rem;
  display: inherit;
  margin: 0.18rem auto;
  height: 0.4rem;
  line-height: 0.4rem;
  border-radius: 0.05rem;
  border: none;
}
</style>

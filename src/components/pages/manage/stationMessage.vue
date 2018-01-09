<template>
 <div class="mysite mt-10">
    <img src="../../../assets/img/site.png" class="fl">
    <div class="mysitel fl ml-20">
        <h3 class="c-fc3" id="mysite">天长站</h3>
        <p id="myaddress">地址:天长市天长街道园林路广厦花园一号楼4号门店</p>
        <p id="myphone">联系电话:4008204496</p>
    </div>
</div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.mysite {
    height: 1.1rem;
    background-color: #fff;
    padding: 0.1rem;
    img {
      width: 28%;
  }
}
.mysitel {
    width: 65%;
    H3 {
      font-size: 0.177rem;
      height: 0.35rem;
      line-height: 0.35rem;
       color: #ff7c08;
    }
    p {
      font-size: 0.115rem;
      line-height: 0.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
  }
}
</style>

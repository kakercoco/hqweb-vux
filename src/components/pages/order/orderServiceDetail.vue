<template>
  <div>
    <div class="return-title">
     <span class="fr c-f7c08">待审核</span> 
     <h4 class="fw-b">申请编号 RTO2018011100003</h4> 
     <p class="c-999 mt-10">2018-01-11 10:23:24</p>
    </div>
    <div class="return-title mt-2">
      <h4 class="fw-b">订单编号 OR2018011000006</h4>
    </div>  
    <div class="return-cont">
      <h5 class="c-999 return-cont-h5">商品列表</h5>
      <ul>
          <li class="clearfix">
              <div class="rgs-item-l rgs-item-l2 fl tac"><img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/5913c6dc6d64d.jpg" class="rgs-item-l-img"></div>
              <div class="rgs-item-c rgs-item-c2 fl">
                  <h5>飘柔洗发水 500ml 去屑柔顺滋养护发</h5> <span class="mt-20 fl">数量：2</span></div>
              <div class="rgs-item-r fr"><b class="fr">￥16.15</b> <del class="fr">￥30.00</del></div>
          </li>
          <li class="clearfix">
              <div class="rgs-item-l rgs-item-l2 fl tac"><img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/59c07d3eba666.jpg" class="rgs-item-l-img"></div>
              <div class="rgs-item-c rgs-item-c2 fl">
                  <h5>夏士莲黑亮长效去屑洗发水 400ml</h5> <span class="mt-20 fl">数量：2</span></div>
              <div class="rgs-item-r fr"><b class="fr">￥13.35</b> <del class="fr">￥24.80</del></div>
          </li>
      </ul>
    </div>
    <div class="return-why"><h5>申请原因</h5> <p>商品损坏 / 污渍等</p></div>
    <div class="return-detail" style="padding: 0px;">
      <h5 style="padding: 0px 0.1rem;">问题描述</h5> 
      <div></div>
      <h5 style="padding: 0px 0.1rem;">问题图片</h5> 
      <div class="user-upimg">

      </div>
    </div>
   <div class="user-submit">
    <p class="c-999">商品退回方式:自行寄回，与专属客服沟通后寄回</p> 
    <button>取消退货</button>
   </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.return-title {
  padding: 0.1rem;
  background-color: #fff;
  span {
    font-size: 0.135rem;
    font-weight: bold;
    color: #ffcc33;
  }
  h4 {
    font-size: 0.135rem;
  }
  p {
    font-size: 0.115rem;
  }
}
.mt-2 {
  margin-top: 2px;
}
.return-cont-h5 {
  font-size: 0.115rem;
  padding: 0.05rem 0.1rem;
}
.return-cont {
  li {
    background-color: #fff;
    padding: 0.1rem;
    height: 0.9rem;
    margin-top: 0.02rem;
    overflow: hidden;
  }
}
.rgs-item-l2 {
  width: 20%;
}
.rgs-item-l-img {
  height: 0.7rem;
}
.rgs-item-c2 {
  width: 45%;
  height: 100%;
  h5 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 0.15rem;
    font-size: 0.115rem;
    font-weight: bold;
    min-height: 0.3rem;
  }
}
.rgs-item-r {
  width: 30%;
  height: 100%;
  b,
  del {
    font-size: 0.115rem;
    clear: both;
  }
}
.return-why {
  h5 {
    font-size: 0.115rem;
    padding: 0.05rem 0.1rem;
  }
  p {
    background-color: #fff;
    padding: 0.1rem;
    height: 0.5rem;
    line-height: 0.3rem;
    font-size: 0.135rem;
    overflow: hidden;
    white-space: nowrap;
  }
}
.return-detail {
  h5 {
    font-size: 0.115rem;
    margin: 0.05rem 0;
  }
  div {
    display: block;
    width: 100%;
    height: 1rem;
    font-size: 0.115rem;
    padding: 0.1rem;
    background-color: #fff;
  }
}
.user-upimg {
  width: 100%;
  height: 1rem;
  background-color: #fff;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 0.1rem;
}
.user-submit {
  padding: 0.1rem;
  p {
    font-size: 0.135rem;
  }
  button {
    margin-top: 0.3rem;
    background-color: #ffcc33;
    display: block;
    width: 100%;
    height: 0.35rem;
    border: none;
  }
}
</style>

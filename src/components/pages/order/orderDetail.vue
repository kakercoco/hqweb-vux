<template>
  <div>
    <div class="odc-dh"><b>订单号：OR2018011000006</b><span class="c-fc3 fr">待派送</span></div>
    <div class="odc-dz mt-10">
      <p><x-icon type="ios-location-outline" class="fl icon-map" size="18"></x-icon><b>xutianxing  15670520667</b></p> 
      <p class="c-999 ml-20">上海上海市杨浦区as</p>
    </div>
    <div class="odc-sp mt-10">
      <div class="odsp-title">
          商品列表
      </div>
      <ul>
          <li class="odsp-cont"><img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/5913c6dc6d64d.jpg" class="fl mr-10 odsp-img">
              <div class="odspc-c fl">
                  <h5>飘柔洗发水 500ml 去屑柔顺滋养护发</h5>
                  <p class="mt-20 c-999">数量:<span>2</span></p>
              </div>
              <div class="odspc-r fr"><b class="fr">￥16.15</b> <del class="fr c-ccc">￥30.00</del></div>
          </li>
          <li class="odsp-cont"><img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/59c07d3eba666.jpg" class="fl mr-10 odsp-img">
              <div class="odspc-c fl">
                  <h5>夏士莲黑亮长效去屑洗发水 400ml</h5>
                  <p class="mt-20 c-999">数量:<span>2</span></p>
              </div>
              <div class="odspc-r fr"><b class="fr">￥13.35</b> <del class="fr c-ccc">￥24.80</del></div>
          </li>
      </ul>
    </div>
    <div class="gkefu"><div>专属客服</div></div>
    <group>
      <cell title="支付方式" value="货到付款"></cell>
    </group>
    <group>
      <cell title="发票" value="无发票"></cell>
      <cell title="配送方式" value="快递"></cell>
      <cell title="买家留言" value="货到付款"></cell>
      <cell title="订单信息">
        <span slot="after-title" style="font-size:0.135rem;color:#999;">下单时间2018-01-10 13:32:07</span>
      </cell>
    </group>
    <div class="odc-detail mt-10">
      <p>商品总额<span class="fr ">￥109.60</span></p>
      <p>运费<span class="fr ">￥6.00</span><span class="fr  mr-10">+</span></p>
      <p>优惠<span class="fr ">￥0.00</span><span class="fr  mr-10">-</span></p>
      <p>特惠组合已优惠<span class="fr ">￥50.60</span><span class="fr  mr-10">-</span></p>
      <p>折扣总额<span class="fr ">￥0.00</span><span class="fr  mr-10">-</span></p>
    </div>
    <div class="odc-zj tar">
				实付款：<b>￥65.00</b>
    </div>
  </div>
</template>
<script>
import { Group, Cell } from 'vux'
export default {
  name: 'orderDetail',
  components: {
    Group, Cell
  },
  data () {
    return {

    }
  },
  created () {
    console.log(this.$route.params)
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.odc-dh {
    background-color: #fff;
    font-size: 0.146rem;
    height: 0.41rem;
    line-height: 0.41rem;
    padding: 0 0.1rem;
    span {
      color: #ff7c08;
    }
}
.icon-map{
  margin-top: 0.05rem;
  margin-right: 0.05rem;
  fill:#ff7c08;
}
.odc-dz {
    background-color: #fff;
    padding: 0.1rem;
    p {
      line-height: 0.25rem;
      font-size: 0.135rem;
      b {
        font-size: 0.146rem;
    }
  }
}
.odsp-title {
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: #fff;
    padding: 0 0.1rem;
    font-size: 0.135rem;
    font-weight: bold;
}
.odsp-cont {
    padding: 0.1rem;
    height: 0.91rem;
    background-color: #f8f8f8;
    margin-bottom: 0.03rem;
}
.odsp-img {
    height: 100%;
}
.odspc-c {
    width: 55%;
    height: 0.71rem;
    h5 {
      font-size: 0.125rem;
      font-weight: bold;
      line-height: 0.18rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    p {
      font-size: 0.115rem;
    }
}
.odspc-r {
    width: 15%;
    height: 0.71rem;
    font-size: 0.135rem;
}
.c-ccc{
  color: #ccc;
}
.odc-sp {
    background-color: #fff;
}
.gkefu {
    padding: 0 0.1rem;
    height: 0.4rem;
    margin-top: 0.1rem;
    div {
      line-height: 0.38rem;
      text-align: center;
      border-radius: 0.05rem;
      border: 0.01rem solid #f3f3f3;
      background: #fff;
      font-size: 0.146rem;
  }
}
.odc-detail {
    background-color: #fff;
    padding: 0.1rem;
    p {
      font-size: 0.135rem;
      line-height: 0.2rem;
      span{
        color: #ff7c08;
      }
  }
}
.odc-zj {
    height: 0.37rem;
    line-height: 0.37rem;
    background-color: #fff;
    padding: 0 0.1rem;
    font-size: 0.146rem;
    font-weight: bold;
    margin: 0.03rem 0 0.1rem 0;
    b{
      color: #ff7c08;
    }
}
</style>

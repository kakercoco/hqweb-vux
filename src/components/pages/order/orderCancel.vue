<template>
  <div>
    <scroller v-model="status" lock-x use-pullup  @on-pullup-loading="onPullUp" :pullup-config="pullConfig" ref="scroller">
      <div class="orderList">
        <ul>
          <li>
            <div class="orderlist-stat">
              <div class="logobar-logo logobar-left">订单编号:OR2018010400187</div> 
              <div class="logobar-right">
                <span class="logobar-text pull-right">交易关闭</span>
              </div>
            </div>
            <div class="orderlist-pro">
              <img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/5a1faaec08a70.png" alt="">
              <div>
                <p>大礼包1130</p>
              </div>
            </div>
            <div class="orderlist-price">
              <p>共1件商品  实付款：￥78.00</p>
              <p>2018-01-04 13:44:43</p>
            </div>
            <div class="orderlist-status">
              <button>删除订单</button>
            </div>
          </li>
          <li>
            <div class="orderlist-stat">
              <div class="logobar-logo logobar-left">订单编号:OR2018010400187</div> 
              <div class="logobar-right">
                <span class="logobar-text pull-right">交易关闭</span>
              </div>
            </div>
            <div class="orderlist-pro">
              <img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/5a1faaec08a70.png" alt="">
              <div>
                <p>大礼包1130</p>
              </div>
            </div>
            <div class="orderlist-price">
              <p>共1件商品  实付款：￥78.00</p>
              <p>2018-01-04 13:44:43</p>
            </div>
            <div class="orderlist-status">
              <button>删除订单</button>
            </div>
          </li>
        </ul>
      </div>
    </scroller>
  </div>
</template>
<script>
import { Scroller } from 'vux'
export default {
  name: 'orderCancel',
  components: {
    Scroller
  },
  data () {
    return {
      status: {
        pullupStatus: 'default'
      },
      pullConfig: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '加载完成',
        loadingContent: 'Loading...'
      }
    }
  },
  methods: {
    onPullUp () {
      setTimeout(() => {
        this.$nextTick(() => {
          this.$refs.scroller.reset()
        })
        this.$refs.scroller.donePullup()  // 设置pullup完成
        this.$refs.scroller.disablePullup() // 数据加载完成禁用pullup
      }, 2000)
    }
  }
}
</script>
<style lang="less" scoped>
.orderList {
  li{
    width: 100%;
    background: #fff;
    font-size: 0.14rem;
    margin-bottom: 0.08rem;
  }
}
.orderlist-stat {
    width: 100%;
    height: 0.4rem;
    font-size: 0.14rem;
    padding: 0.1rem 0.1rem 0;
}
.logobar-left {
    font-size: 0.15rem;
    float: left;
    color: #000;
    width: 60%;
}
.logobar-right {
    float: right;
    font-size: 0.136rem;
    color: #999;
    width: 35%;
    text-align: right;
    color: #fc3;
}
.orderlist-pro{
  height: 0.9rem;
  background: #f8f8f8;
  overflow: hidden;
  padding: 0.1rem;
  img{
    width: 0.7rem;
    float: left;
    margin-right: 0.1rem;
  }
  div{
    padding-left: 0.8rem;
    p{
      color: #333;
      line-height: 0.26rem;
      overflow: hidden;
      word-break: break-all;
      margin: 0;
      font-size: 0.146rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
    }
  }
}
.orderlist-price{
  text-align: right;
  padding: 0.1rem;
  p{
    &:nth-of-type(2){
      font-size: 0.12rem;
      color: #999;
    }
  }
}
.orderlist-status{
  text-align: right;
  border-top: 1px solid #eee;
  padding: 0.08rem 0.1rem;
  button{
    color: #333;
    width: 0.75rem;
    height: 0.27rem;
    line-height: 0.25rem;
    padding: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 0.05rem;
  }
}
</style>

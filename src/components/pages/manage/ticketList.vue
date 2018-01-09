<template>
  <div>
    <div>
      <ul>
      <li class="quan-list">
        <div class="fl quanl-l">
            <h5>
              <span>用户自己领取</span>
              <small class="bg-fc3 c-fff">天长站</small><small class="c-f7c08">·test1app</small>
            </h5>
            <b class="mt-10"></b>
            <p class="mt-5">
              <x-icon type="android-alert" size="14" class="fl icon-mask"></x-icon>
              退单时优惠券不返 
              <time>2018-01-09-2018-01-31</time>
            </p>
        </div>
        <div class="fr quanl-r tac">
            <h5 class="c-f7c08">3<small class="c-f7c08">元</small></h5> 
            <a href="javascript:void(0)" class="c-f7c08 border-1">点击领取</a>
        </div>
      </li>
    </ul>
    <p class="quan-dif tac"><span class="c-999">可使用的券</span></p>
  </div>
  <div id="unquan" style="display: none;">
			<div class="unquan"></div>
			<p class="tac c-999 unquan-p">您暂无优惠券......</p>
		</div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.quan-list {
    height: 0.88rem;
    margin: 0.1rem;
    background: url(../../../assets/img/quan.png) no-repeat center;
    -webkit-background-size: cover;
    background-size: cover;
}
.quanl-l {
    width: 69%;
    padding: 0.1rem;
    height: 0.88rem;
    h5{
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 49%;
        float: left;
        height: 0.17rem;
        line-height: 0.18rem;
        white-space: nowrap;
        font-size: 0.15rem;
      }
      small {
        padding: 0.02rem;
        margin-left: 0.1rem;
        border-radius: 0.02rem;
        background-color: #ffcc33;
        &:nth-of-type(2) {
          margin: 0;
          background-color:transparent;
          color: #fc3;
       }
      }
    }
  b {
    font-size: 0.125rem;
    display: block;
    color: #666;
    margin-top: 0.17rem;
  }
  p {
    color: #999;
    font-size: 0.10rem;
  }
}
.icon-mask{
  margin-right: 0.05rem;
  fill: #fc3;
}
.quanl-r {
    height: 0.88rem;
    width: 31%;
    padding: 0.13rem;
    h5 {
      font-size: 0.25rem;
      color: #ffcc33;
      line-height: 1;
      small {
        font-size: 0.15rem;
      }
    }
     a {
      width: 0.58rem;
      height: 0.2rem;
      line-height: 0.18rem;
      display: block;
      text-align: center;
      font-size: 0.105rem;
      margin: 0.1rem auto;
      border-radius: 0.1rem;
      color: #ffcc33;
    }
}
.quan-dif {
    border-top: 0.01rem solid #999;
    position: relative;
    margin: 0.2rem 0.1rem;
    span {
      position: absolute;
      top: -0.1rem;
      left: 35%;
      background-color: #f3f3f3;
      padding: 0 0.2rem;
      font-size: 0.105rem;
  }
}
.border-1 {
    border: 0.01rem solid #ffcc33;
}
.unquan {
    padding: 0.1rem;
    margin-top: 0.3rem;
    height: 1rem;
    background: url(../../../assets/img/quan02.png) no-repeat center;
    -webkit-background-size: cover;
    background-size: cover;
}
.unquan-p {
    font-size: 0.13rem;
}
</style>

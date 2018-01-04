<template>
  <div>
      <img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/5a41b162918d7.png" alt="" class="saleImg">
      <div class="sale-cont" >
			<ul>
				<li v-for="i in 5" :key="i">
					<a href="#">
						<img src="https://hqwell.net/images/sale-pro.png" class="sale-pro-img" />
						<div class="fr">
							<h3 class="sale-pro-title">海飞丝去屑洗发露怡神冰凉型400ml+舒肤佳海盐洗手液225ml+六神除菌香皂金盏菊125g</h3>
							<p class="sale-pro-price"><b>￥180</b><button class="fr">立即购买</button></p>
						</div>
					</a>
				</li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.saleImg {
  width: 100%;
}
.sale-cont {
  padding: 0.05rem;
  margin-top: -5px;
  li {
    width: 100%;
    height: 1.06rem;
    background-color: #fff;
    margin-bottom: 0.05rem;
    a {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0.1rem;
      div {
        width: 2.4rem;
        height: 100%;
      }
    }
  }
}
.sale-pro-img {
  height: 100%;
  float: left;
}
.sale-pro-title {
  font-size: 0.135rem;
  color: #333;
  height: 0.5rem;
  line-height: 0.17rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.sale-pro-price {
  height: 0.3rem;
  line-height: 0.3rem;
  margin-top: 0.1rem;
  b {
    color: #ff1417;
    font-size: 0.18rem;
  }
  button {
    color: #fff;
    font-size: 0.105rem;
    width: 0.85rem;
    height: 0.25rem;
    background-color: #fc149c;
    border: none;
    border-radius: 0.25rem;
  }
}
</style>

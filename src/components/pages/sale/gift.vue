<template>
  <div>
      <div class="giftBuy-list">
				<img src="http://hqwell.cn/images//gift_banner.png" />
				<img src="http://hqwell.cn/images//giftBuy_list1.png" />
				<ul>
					<li style="position: relative;">
						<ul class="giftBuy_list_child2">
							<li>威猛先生厨房重油污净(清爽柠檬)双瓶装500g/瓶 x2</li>
							<li>碧浪机洗洗衣液捆绑装2kg送1kg x1</li>
							<li>妙洁228毫升中杯加厚特惠装纸杯50只/提 x1</li>
							<li>维达蓝色经典软抽3包/提 x1</li>
							<li>佳洁士3D炫白柠檬茶爽牙膏180g/支 x1</li>
							<li>沙宣水润去屑洗发露750ml x1</li>
							<li>多芬沐浴露清透水润720ml x1</li>
							<li>酵素大米 2.5kg/盒 x1</li>
							<li>雪天加碘精制盐500g/袋 x1</li>
							<li style="color: #fbdfc8;font-weight: 600;margin-top: 0.1rem;margin-bottom: 0.03rem;">
								活动价:￥<span style="font-size: 0.18rem;">298.</span>00
							</li>
							<li>
								<img class="gift_button" src="http://hqwell.cn/images/button.png" style="float: right;width:28%" @click="giftdetail(0)" />
							</li>
						</ul>
						<img src="http://hqwell.cn/images/gift_298(1).png" />
					</li>
					<li style="position: relative;">
						<ul class="giftBuy_list_child">
							<li>灵芝袍子粉250g/瓶 x2</li>
							<li>小片林下黑山木耳500g/袋 x1</li>
							<li>榛子500g/袋 x1</li>
							<li>野山榛子500g/袋 x1</li>
							<li>蒲公英茶250g/瓶 x2</li>
							<li>林下山参 1盒</li>
							<li>鹿茸片 1盒</li>
							<li>西洋参片250g/瓶 x2</li>
							<li style="color: #fbdfc8;font-weight: 600;margin-top: 0.07rem;margin-bottom: 0.03rem;">
								活动价:￥<span style="font-size: 0.18rem;">1288.</span>00
							</li>
							<li>
								<img class="gift_button2" src="http://hqwell.cn/images/button.png" style="width:45%" @click="giftdetail(1)" />
							</li>
						</ul>
						<img src="http://hqwell.cn/images/gift_1288(1).png" />
					</li>
					<li style="position: relative;">
						<ul class="giftBuy_list_child2" style="margin-top: 0.25rem;">
							<li>林下参精装盒1根 x1</li>
							<li>长白山人参 红参 x1</li>
							<li>长白山人参 白参 x1</li>
							<li>西洋参片250g x1</li>
							<li>鹿茸一对 x1</li>
							<li style="color: #fbdfc8;font-weight: 600;margin-top: 0.4rem;margin-bottom: 0.03rem;">
								活动价:￥<span style="font-size: 0.18rem;">2888.</span>00
							</li>
							<li>
								<img class="gift_button3" src="http://hqwell.cn/images/button.png" style="float: right;width:45%" @click="giftdetail(2)" />
							</li>
						</ul>
						<img src="http://hqwell.cn/images/gift_2888(1).png" />
					</li>
				</ul>
			</div>
  </div>
</template>
<script>
export default {
  name: 'gift',
  components: {

  },
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    giftdetail (id) {
      this.$router.push({path: '/sale/giftBuy/' + id})
    }
  }
}
</script>
<style lang="less" scoped>
.giftBuy-list {
  & > img {
    width: 100%;
    margin-top: -7px;
  }
}
.giftBuy_list_child2 {
  position: absolute;
  top: 0.6rem;
  right: 0.25rem;
  font-size: 0.146rem;
  color: #f9dac2;
  li {
    list-style: none;
    color: #d7bcab;
    line-height: 0.175rem;
    font-size: 0.12rem;
    text-align: right;
  }
  & + img {
    width: 100%;
    margin-top: -7px;
  }
}
.giftBuy_list_child {
  position: absolute;
  top: 0.9rem;
  left: 0.25rem;
  font-size: 0.146rem;
  color: #f9dac2;
  li {
    list-style: none;
    color: #d7bcab;
    line-height: 0.16rem;
    font-size: 0.12rem;
  }
  & + img {
    width: 100%;
    margin-top: -7px;
  }
}
</style>

<template>
	<div>
		<div class="myabout">
			<div class="myabt-img">
				<img src="https://hqwell.net/images/about01.png">
			</div>
			<div class="myabt-cont">
				<h3>上海加缪物联网科技有限公司</h3>
				<p class="mt-20">一家专注于“<span class="c-333">物联网深度开发及运用的平台型企业，是中国第三次“消费升级 ”</span>热潮中诞生的全新F2C零售型电商，是目前国内唯一一家，在线商品<span class="c-333">全程溯源</span>的平台提供方。旗下的“<span class="c-fc3">黄雀云平台</span>”拥有<span class="c-333">独有技术和专业团队</span>，实现了商品从原料生产到消费者签收的<span class="c-333">全程防伪追溯</span>。上海加缪物联网科技有限公司通过“<span class="c-fc3">黄雀云平台</span>”，在知名品牌厂商与消费者之间搭建起一条直达的绿色通道，并倾力做到，让商家安心，消费者放心。</p>
			</div>
			<p class="abt-phone">
				<a href="tel://021-65662137" class="c-333"><img src="https://hqwell.net/images/about02.png">021-65662137</a>
			</p>
		</div>
	</div>
</template>

<script>
// import axios from '../../libs/axios.js'
import { Group, Cell } from 'vux'
export default {
  name: 'car',
  components: {
    Group,
    Cell
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.myabt-img img {
    width: 100%;
}
.myabt-cont {
	margin: 0.35rem;
}

.myabt-cont h3 {
	height: 0.4rem;
	line-height: 0.4rem;
	font-size: 0.156rem;
}

.myabt-cont p {
	font-size: 0.125rem;
	color: #999;
}
.c-fc3{
  color: #fc3;
}
.abt-phone {
	height: 0.25rem;
	line-height: 0.25rem;
	margin: 0 0.35rem;
}

.abt-phone a {
	font-size: 0.156rem;
	height: 100%;
	display: block;
}

.abt-phone img {
	float: left;
	height: 100%;
	margin-right: 0.1rem;
}
</style>
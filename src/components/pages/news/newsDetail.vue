<template>
  <div class="kb-detail">
			<img v-bind:src='data.artical_img_thums' alt="" />
			<h3 class="tac" style="font-size: 0.16rem;">{{data.article_title}}</h3>
			<p v-for="item in data.articles_detail" :key="item.id">
				<span v-if="item.type==0" >{{item.phase_content}}</span>
				<img v-if="item.type==1" style="margin: 0.1rem 0;" :src="item.phase_content"/>
			</p>
	</div>
</template>
<script>
import axios from '../../../libs/axios'
export default {
  name: 'newsDetail',
  data () {
    return {
      data: {

      }
    }
  },
  created () {
    // console.log(this.$route.params.artical_id)
    let params = this.$route.params
    axios.get('shop/v2/articles/detail', {params})
    .then(
      (data) => {
        console.log(data)
        this.data = data.data
      }
    )
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.kb-detail {
  img {
    width: 100%;
  }
  h3 {
    padding: 0 0.2rem;
    font-size: 0.16rem;
  }
  p {
    font-size: 0.13rem;
    padding: 0 0.2rem;
  }
}
</style>

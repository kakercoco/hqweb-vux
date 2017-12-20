<template>
	<div>
		<div class="sort-top fl">
			<img src="https://hqwell.net/images/logo2.png" class="fl sort-logo2" />
			<p class="fr sort-serch mr-10">
				<img src="https://hqwell.net/images/search.png" class="fl sort-serch-logo" />
				<input type="text" id="searchText" name="sort-ipt" value="" class="sort-serch-ipt" placeholder="搜索您想要的商品" />
			</p>
		</div>
		<div class="sort-cont">
			<!--一级分类-->
			<div class="sort-c-l fl">
				<ul>
					<!--默认选中第一个-->
					<li v-for='(list,index) in sortList' v-bind:class="{'on':ind == list.cat_name}" @click="changeBgc(list.cat_name,list.cat_id)" :key="index">
						<a href="javascript:void(0)">{{list.cat_name}}</a><span class="fl"></span>
					</li>
				</ul>
			</div>
			<!--二级三级分类-->
			<div class="sort-c-r fr" id="loutiId">
				<div class="sort-cr-cont" v-for='(list,index) in sortList2' v-bind:id="index" :key="index">
					<h4>{{list.cat_name}}</h4>
					<ul>
						<router-link tag='li' :to="{path:'/main/sortList/'+goods.cat_id}" v-for='(goods,index) in list.sub' class="fl tac" :key="index">
							<img v-bind:src="goods.cat_thums" />
							<span>{{goods.cat_name}}</span>
						</router-link>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from '../../libs/axios'
	export default {
	  name: 'sort',
	  data () {
	    return {
	      onFlag: false,
	      ind: '',
	      sortList: [], // 一级分类
	      sortList2: [] // 二三级分类
    }
  },
	  created () {
	    axios.get('shop/v2/category/first')
       .then(
        (data) => {
	          console.log(data)
	          this.sortList = data.data.categories
	          this.ind = data.data.categories[0].cat_name
	          let catId = data.data.categories[0].cat_id
	          let params = {
	            cat_id: catId
          }
          axios.get('shop/v2/category/list', {
            params
          })
	        .then(
          (data) => {
	            console.log(data)
	            this.sortList2 = data.data
          },
          (err) => {
	            console.log(err)
          }
	)
        },
(err) => {
	  console.log(err)
	}
)
  },
	  methods: {
// 伪造跳转锚点      获取二三级分类
	    changeBgc (name, catId) {
	      let params = {
	        'cat_id': catId
      }
	      axios.get('shop/v2/category/list', {
	        params
      })
        .then(
         (data) => {
	           this.sortList2 = data.data
	           console.log(data.data)
         },
	       (err) => {
	         console.log(err)
       }
	)
	      this.ind = name
	    },
	    sanjicat: function (catId) { // 跳转到商品列表
	// 5 要改回来得到
	      window.location.href = 'sort_search.html?cat_id=' + catId
	    }
  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.sort-top {
		height: 0.5rem;
		background-color: #fff;
		width: 100%;
		border-bottom: 2px solid #eee;
	}
	
	.sort-logo2 {
		width: 0.22rem;
		margin: 0.15rem 0.1rem;
	}
	
	.sort-logo {
		width: 0.22rem;
		height: 0.22rem;
		background: url(https://hqwell.net/images/search_block.png) no-repeat;
		margin: 0.15rem 0.1rem;
		-webkit-background-size: cover;
		background-size: cover;
	}
	
	.sort-serch {
		width: 85%;
		height: 0.31rem;
		background-color: #F3F3F3;
		border-radius: 0.3rem;
		margin-top: 0.1rem;
	}
	
	.sort-serch-logo {
		height: 0.18rem;
		margin-left: 0.1rem;
		margin-top: 0.07rem;
	}
	
	.sort-serch-ipt {
		border: none;
		outline: none;
		background-color: transparent;
		height: 0.31rem;
		line-height: 0.31rem;
		font-size: 0.13rem;
		width: 85%;
		margin-left: 0.1rem;
	}
	
	.sort-cont {
		width: 100%;
		height: 92vh;
	}
	
	.sort-c-l {
		width: 23%;
		height: 100%;
		overflow: auto;
		padding-bottom: 0.5rem;
	}
	
	.sort-c-l li {
		height: 0.47rem;
		width: 100%;
		font-size: 0.146rem;
		text-align: center;
		line-height: 0.47rem;
		border-bottom: 1px solid #fff;
		color: #999;
		font-weight: bold;
	}
	
	.sort-c-l li.on {
		background-color: #fff;
		color: #333;
	}
	
	.sort-c-l li span {
		width: 0.05rem;
		height: 0.2rem;
		background-color: #ffcc33;
		margin-top: 0.13rem;
		display: none;
	}
	
	.sort-c-l li.on span {
		display: block;
	}
	
	::-webkit-scrollbar {
		width: 0px;
		background-color: transparent;
	}
	
	.sort-c-r {
		width: 77%;
		height: 100%;
		overflow-y: auto;
		background-color: #fff;
		padding-bottom: 0.5rem;
	}
	
	.sort-cr-cont {
		padding: 0.15rem 0 0 0.05rem;
	}
	
	.sort-cr-cont h4 {
		background-color: #f3f3f3;
		font-size: 0.125rem;
		padding-left: 0.2rem;
		height: 0.25rem;
		line-height: 0.25rem;
		font-weight: bold;
	}
	
	.sort-cr-cont ul {
		margin: 0.2rem 0 0.1rem;
		overflow: hidden;
	}
	
	.sort-cr-cont li {
		width: 33.33%;
	}
	
	.sort-cr-cont li img {
		width: 0.84rem;
	}
	
	.sort-cr-cont li span {
		font-weight: bold;
		font-size: 0.125rem;
		color: #333;
	}
	
	.sort-search-title {
		height: 0.4rem;
		width: 100%;
		background-color: #fff;
	}
	
	.sort-search-title li {
		width: 25%;
		height: 0.4rem;
		line-height: 0.4rem;
		font-size: 0.1335rem;
	}
	
	.sort-search-title li img {
		height: 0.15rem;
	}
	
	.sort-search-cont {
		overflow-y: scroll;
		height: 100%;
		padding-bottom: 0.5rem;
	}
	
	.sort-search-cont .sort-search-cont-ltem {
		height: 1.05rem;
		padding: 0.05rem;
		background-color: #fff;
		margin-bottom: 0.02rem;
	}
	
	.sort-search-cont li a {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.sort-scont-pick {
		height: 100%;
		width: 24%;
		text-align: center;
	}
	
	.sort-scont-pick img {
		height: 100%;
	}
	
	.sort-scont-cont {
		width: 76%;
	}
	
	.sort-scont-cont h4 {
		font-size: 0.135rem;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-all;
		min-height: 0.3rem;
		line-height: 0.17rem;
	}
	
	.sort-scont-cont p {
		font-size: 0.14rem;
	}
	
	.sort-scont-cont span {
		font-size: 0.2rem;
	}
	
	.sort-search-cont .sort-search-cont-ltem2 {
		width: 49.7%;
		background-color: #fff;
		height: 2.1rem;
		padding: 0.05rem;
		margin-bottom: 0.02rem;
	}
	
	.sort-search-cont-ltem2:nth-of-type(2n-1) {
		margin-right: 0.6%;
	}
	
	.sort-scont-pick2 {
		width: 100%;
		height: 1.35rem;
		text-align: center;
	}
	
	.sort-scont-pick2 img {
		height: 100%;
	}
	
	.sort-scont-cont2 {
		width: 100%;
	}
	
	.sort-scont-cont2 h4 {
		font-size: 0.115rem;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-all;
		min-height: 0.3rem;
		line-height: 0.16rem;
	}
	
	.sort-scont-cont2 p {
		font-size: 0.14rem;
	}
	
	.sort-scont-cont2 span {
		font-size: 0.2rem;
	}
	
	.displayNone {
		display: none !important;
	}
	
	.sort-filter {
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		right: -100%;
		z-index: 25;
	}
	
	.sort-filter-l {
		width: 15%;
		height: 100%;
	}
	
	.sort-filter-r {
		width: 85%;
		height: 100%;
		position: relative;
	}
	
	.sort-ft-title {
		height: 0.5rem;
		line-height: 0.5rem;
		border-bottom: 1px solid #ccc;
		font-size: 0.156rem;
	}
	
	.sort-ft-cont {
		height: 85%;
		overflow: scroll;
	}
	
	.sort-ft-cont section {
		padding: 0.1rem;
	}
	
	.sort-ft-sec1 {
		width: 100%;
		height: 1rem;
		border-bottom: 1px solid #ccc;
	}
	
	.sort-ft-cont h3 {
		font-size: 0.156rem;
		height: 0.35rem;
		line-height: 0.35rem;
	}
	
	.sort-ft-sec1 input {
		outline: none;
		border: none;
		background-color: #E8E8E8;
		width: 1.2rem;
		height: 0.3rem;
		font-size: 0.125rem;
		border-radius: 0.05rem;
	}
	
	.sort-ft-sec2 li {
		width: 23%;
		height: 0.27rem;
		line-height: 0.27rem;
		border-radius: 0.05rem;
		font-size: 0.125rem;
		border: 1px solid #ccc;
		margin-right: 0.05rem;
		margin-bottom: 0.1rem;
	}
	
	.sort-ft-foot {
		height: 0.5rem;
		width: 100%;
		position: absolute;
		bottom: 0;
	}
	
	.sort-ft-foot button {
		width: 50%;
		height: 0.5rem;
		outline: none;
		font-size: 0.156rem;
	}
	
	.sort-c-l li a {
		color: #999;
	}
	
	.sort-c-l li.on a {
		background-color: #fff;
		color: #333;
	}
</style>
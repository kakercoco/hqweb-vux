<template>
  <div class="kb">
    <ul>
        <li><a href="javascript:void(0)" @click="gotoNewsDetail(15)">
          <img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/59cf30654d962.jpg" alt=""> 
          <p><b>爆</b>黄雀秋品首尔风尚<span class="fr">2017-09-30 13:49:25</span></p>
        </a></li>
        <li><a href="javascript:void(0)" @click="gotoNewsDetail(9)">
          <img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/594254f078691.jpg" alt=""> 
          <p><b>爆</b>黄雀地标商品，民俗风韵之窗<span class="fr">2017-06-15 17:35:44</span></p>
        </a></li>
        <li><a href="javascript:void(0)" @click="gotoNewsDetail(13)">
          <img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/5976f106420b0.jpg" alt=""> 
          <p><b>爆</b>黄雀商城七月下旬新品上线预告<span class="fr">2017-07-25 15:19:34</span></p>
        </a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'newsList',
  data () {
    return {

    }
  },
  methods: {
    gotoNewsDetail (id) {
      console.log(id)
      this.$router.push({path: '/news/newsDetail/' + id})
    }
  }
}
</script>
<style lang="less" scoped>
.kb{
  padding: 0.1rem;
  li {
    background-color: #fff;
    border-radius: 0.1rem;
    overflow: hidden;
    margin-bottom: 0.1rem;
    img {
        width: 100%;
    }
  }
  p {
    height: 0.45rem;
    line-height: 0.45rem;
    font-size: 0.156rem;
    padding: 0 0.1rem;
    b {
      color: red;
      margin-right: 0.2rem;
      font-size: 0.2rem;
    }
    span {
      color: #999;
    }
  }
}
</style>

<template>
	<div>
		<div id="header">欢迎来到黄雀商城</div>
		<div id="add">
			<img src="http://hqwell.cn/images/ditu2.png">
			<span id="citywrap">当前站点:</span>
			<spinner type="ios-small" ></spinner>
			<span id="site" style="display: inline-block;">杨浦新站</span>
		</div>
		<p id="chooseAdd">请选择你对应的站点</p>					
		<group>
    	<radio title="title" :options="options" v-model="value" @on-change="change"></radio>
  	</group>
	</div>
</template>

<script>
import { Radio, Group, Spinner } from 'vux'
import axios from '../../libs/axios'
export default{
  name: 'changeSite',
  components: {
    Radio, Group, Spinner
  },
  data () {
    return {
      options: [],
      value: ''
    }
  },
  created () {
    let that = this
    axios.get('shop/v2/station')
   .then(function (val) {
     let arr = []
     for (let i = 0; i < val.data.length; i++) {
       arr[i] = Object.assign({}, arr[i], {
         'key': val.data[i].station_id,
         'value': val.data[i].station_name
       })
     }
     that.options = arr
   })
  },
  methods: {
    change (val, key) {
      console.log(val + key)
    }
  }
}
</script>

<style lang="less">
#header {
    padding-top: 0.1rem;
    color: #ffcc33;
    font-size: 0.146rem;
    text-indent: 0.1rem;
}
.weui-cells_radio .weui-check:checked + .weui-icon-checked:before{
	color: #ffcc33 !important;
}
#chooseAdd {
    height: 0.2rem;
    line-height: 0.2rem;
    text-indent: 0.1rem;
    font-size: 0.146rem;
    margin: 0.05rem 0;
}
#add {
    height: 0.3rem;
    background-color: #fff;
    font-size: 0.146rem;
    text-indent: 0.1rem;
		line-height: 0.3rem;
		img{
			margin: 0.05rem 0.1rem;
			float: left;
		}
}
</style>
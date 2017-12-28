<template>
	<div>
		<group>
      <cell title="使用帮助" is-link  link="/setting/help"></cell>
    </group>
		<group>
      <cell title="意见反馈" is-link  link="/setting/feedBack"></cell>
      <cell title="关于" is-link  link="/setting/about"></cell>
    </group>
    <div class="logout">
      <button @click="ck">退出登录</button>
    </div>
	</div>
</template>

<script>
// import axios from '../../libs/axios.js'
import { Group, Cell } from 'vux'
import store from '../../../vuex/store'
export default {
  name: 'setting',
  store,
  components: {
    Group,
    Cell
  },
  data () {
    return {

    }
  },
  methods: {
    ck () {
      console.log(this.$store.state.carNumber)
    }
  }
}
</script>

<style scoped lang="less">
.logout{
  padding: 0 0.1rem;
    button{
    width: 100%;
    height: 0.45rem;
    border: none;
    background-color: #fc3;
    margin-top: 0.2rem;
  }
}
</style>
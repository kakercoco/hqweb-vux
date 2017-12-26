<template>
	<div>
		<group>
      <cell title="头像" >
        <img src="https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg" slot="child" alt="" class="user-img">
      </cell>
      <cell title="昵称" is-link :value="userName"></cell>
      <cell title="性别" is-link :value="userSex"></cell>
      <cell title="生日" is-link :value="userData"></cell>
      <cell title="等级">
        <Rater :max=5 star="❤" disabled active-color="#333" v-model="stars" :font-size=20></Rater>
      </cell>
    </group>
    <group>
         <cell title="更换手机" is-link :value="userPhone"></cell>
         <cell title="更换密码" is-link ></cell>
    </group> 
    <div class="logout">
      2121
      <button>退出登录</button>
    </div>
	</div>
</template>

<script>
// import axios from '../../libs/axios.js'
import { Group, Cell, Rater } from 'vux'
export default {
  name: 'car',
  components: {
    Group,
    Cell,
    Rater
  },
  data () {
    return {
      userName: 'kaker',
      userSex: '保密',
      userData: '1991-10-28',
      userPhone: '15670520667',
      stars: 3.7
    }
  },
  methods: {
    ck () {}
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.user-img{
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.1rem;
}
 @color:red;

.loginout{
  color: @color;
  padding: 0 0.1rem;
    button{
    width: 100%;
    height: 0.5rem;
  }
}
</style>
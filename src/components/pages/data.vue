<template>
	<div>
		<group>
      <cell title="头像" >
        <img src="https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg" slot="child" alt="" class="user-img">
      </cell>
      <cell title="昵称" is-link :value="userName" link="/setting/changeName"></cell>
      <popup-picker title="性别" :data="userSexList" v-model="userSex" @on-change="changeSex"></popup-picker>
      <datetime v-model="userData" @on-change="changeDate" title="生日" :min-year=1970 placeholder="请选择"></datetime>
      <cell title="等级">
        <Rater :max=5 star="❤" disabled active-color="#333" v-model="stars" :font-size=20></Rater>
      </cell>
    </group>
    <group>
         <cell title="更换手机" is-link :value="userPhone" link="/setting/changePhone"></cell>
         <cell title="更换密码" is-link link="/setting/changePassword"></cell>
    </group> 
    <div class="logout">
      <button>退出登录</button>
    </div>
	</div>
</template>

<script>
// import axios from '../../libs/axios.js'
import { Group, Cell, Rater, PopupPicker, Datetime } from 'vux'
export default {
  name: 'car',
  components: {
    Group,
    Cell,
    Rater,
    PopupPicker,
    Datetime
  },
  data () {
    return {
      userName: 'kaker',
      userSex: ['保密'],
      userSexList: [['男', '女', '保密']],
      userData: '',
      userPhone: '15670520667',
      stars: 3.7
    }
  },
  methods: {
    changeSex (val) {
      console.log(val)
    },
    changeDate (newVal) {
      console.log(newVal)
    }
  }
}
</script>

<style scoped lang="less">
.user-img{
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.1rem;
}
.logout{
  padding: 0 0.1rem;
    button{
    width: 100%;
    height: 0.5rem;
    border: none;
    background-color: #fff;
    margin-top: 0.2rem;
  }
}
</style>
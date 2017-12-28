<template>
	<div>
		<group>
     <x-input placeholder="请输入昵称" v-model="name" :max=15></x-input>
    </group>
    <p class="name-tip">15个字符以内</p>
    <div class="logout">
      <button>确认修改</button>
    </div>
	</div>
</template>

<script>
// import axios from '../../libs/axios.js'
import { Group, XInput } from 'vux'
export default {
  name: 'car',
  components: {
    Group,
    XInput
  },
  data () {
    return {
      name: ''
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.name-tip {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.125rem;
  padding: 0 0.1rem;
}
.logout {
  padding: 0 0.1rem;
  button {
    width: 100%;
    height: 0.4rem;
    border: none;
    background-color: #fc3;
    color: #333;
  }
}
</style>
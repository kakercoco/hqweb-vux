<template>
	<div>
    <p class="feed-top">请选择反馈问题类型</p>
    <checker v-model="myRadio" type="radio" default-item-class="radio-item" selected-item-class="radio-item-selected" radio-required>
      <checker-item value="1">购买遇到问题</checker-item>
      <checker-item value="2">功能建议</checker-item>
      <checker-item value="3">性能问题</checker-item>
      <checker-item value="4">其他</checker-item>
    </checker>
    <div class="textarea">
      <group>
        <x-textarea  v-model="textareaValue" :max=200></x-textarea>
      </group>
    </div>
    <group>
      <x-input title="手机：" v-model="phone" is-type="china-mobile"></x-input>
    </group>
    <div class="logout">
      <button>提交</button>
    </div>
	</div>
</template>

<script>
// import axios from '../../libs/axios.js'
import { Group, Checker, CheckerItem, XTextarea, XInput } from 'vux'
export default {
  name: 'car',
  components: {
    Group,
    Checker,
    CheckerItem,
    XTextarea,
    XInput
  },
  data () {
    return {
      myRadio: '0',
      textareaValue: '',
      phone: ''
    }
  },
  methods: {
  }
}
</script>

<style  lang="less">
.feed-top{
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.15rem;
    padding: 0 0.1rem;
}
.textarea{
  padding: 0.1rem;
  .weui-textarea{
    height: 1.7rem !important;
  }
}
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
.vux-checker-box{
  padding: 0 0.1rem;
}
.radio-item{
    width: 1.15rem;
    height: 0.27rem;
    line-height: 0.27rem;
    font-size: 0.125rem;
    border-radius: 0.02rem;
    background-color: #fff;
    text-align: center;
    margin-bottom: 0.1rem;
    margin-right: 0.1rem;
}
.radio-item-selected{
  background-color: #fc3;
  color: #fff;
}
</style>
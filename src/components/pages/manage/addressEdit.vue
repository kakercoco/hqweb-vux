<template>
  <div>
    <group >
      <x-input title="收&nbsp;件&nbsp;人&nbsp;：" placeholder="请填写姓名" v-model="receiverName"></x-input>
    </group>
    <group >
      <x-input title="手&nbsp;&nbsp;&nbsp;机&nbsp;&nbsp;&nbsp;：" placeholder="请填写手机号码" v-model="receiverPhone"></x-input>
    </group>
    <group >
      <x-address title="所在省市：" placeholder="请填写省市区" :list="list" v-model="receiverAddOne" value-text-align="left" class="ssq"></x-address>
    </group>
    <group >
      <x-input title="详细地址：" placeholder="请填写详细地址" v-model="receiverAddTwo"></x-input>
    </group>
    <div class="addbtn">
        <button type="button">保存</button>
        <button type="button">取消</button>
    </div>
  </div>
</template>
<script>
import { XInput, Group, XAddress, ChinaAddressV4Data } from 'vux'
export default {
  name: 'addressAdd',
  components: {
    XInput, Group, XAddress, ChinaAddressV4Data
  },
  data () {
    return {
      receiverName: '',    // 收件人名字
      receiverPhone: '',    // 收件人手机
      receiverAddOne: [],    // 收件人省市区
      receiverAddTwo: '',   // 收件人详细地址
      list: ChinaAddressV4Data
    }
  }
}
</script>
<style lang="less">
.addbtn {
    padding: 0.1rem;
    button {
      height: 0.4rem;
      background-color: #fc3;
      display: block;
      width: 100%;
      border: none;
      border-radius: 5px;
      margin-top: 0.2rem;
      &:nth-of-type(2) {
          background-color: #ccc;
      }
  }
}
.ssq{
  .vux-popup-picker-select{
      font-size: 0.125rem!important;
      margin-left: 0.16rem;
      .vux-popup-picker-placeholder.vux-cell-placeholder{
        color: #666;
      }
    }
    .weui-cell_access .weui-cell__ft:after{
      display: none;
    }
}
</style>

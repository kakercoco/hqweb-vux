<template>
  <div class="manage">
    <ul>
      <li class="mt-10">
        <div class="aman-top b-b1">
          <h4>普通发票<span class="ml-20">个人</span></h4>
          <p class="mt-10">收票人手机号:15670520667</p>
        </div> 
        <div class="aman-btm">
          <p class="fl amanbm-dg">
            <check-icon :value.sync="demo1" class="fl"></check-icon>
            <b class="ml-10" >设为默认</b>
          </p> 
          <a href="javascript:void(0)" class="fr tac c-333 aman-remove" @click="deleteOne(1)">删除</a> 
          <a href="javascript:void(0)" class="fr tac c-333 aman-edit" >编辑</a>
        </div>
      </li>
      <li class="mt-10">
        <div class="aman-top b-b1">
          <h4>普通发票<span class="ml-20">个人</span></h4>
          <p class="mt-10">收票人手机号:15670520667</p>
        </div> 
        <div class="aman-btm">
          <p class="fl amanbm-dg">
            <check-icon :value.sync="demo1" class="fl"></check-icon>
            <b class="ml-10">设为默认</b>
          </p> 
          <a href="javascript:void(0)" class="fr tac c-333 aman-remove" @click="deleteOne(2)">删除</a> 
          <a href="javascript:void(0)" class="fr tac c-333 aman-edit">编辑</a>
        </div>
      </li>
    </ul>
    <div class="addr3" @click="addInvoice"><p><span class="fl">+</span>新增发票地址</p></div>
  </div>
</template>
<script>
import { CheckIcon } from 'vux'
export default {
  name: 'invoiceList',
  components: {
    CheckIcon
  },
  data () {
    return {
      demo1: true
    }
  },
  methods: {
    deleteOne (id) {
      const _this = this // 需要注意 onCancel 和 onConfirm 的 this 指向
      this.$vux.confirm.show({
        title: '确认删除此地址?',
        // 组件除show外的属性
        onCancel () {
          console.log('已取消')
          console.log(_this)
        },
        onConfirm () {
          console.log('已删除')
          console.log(id)
        }
      })
    },
    addInvoice () {
      this.$router.push({path: '/manage/invoiceAdd'})
    }
  }
}
</script>
<style lang="less">
.vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before{
  color: #fc3!important;
}
.aman-top {
    background-color: #fff;
    height: 0.7rem;
    padding: 0.1rem;
    border-bottom: 0.01rem solid #f3f3f3;
     h4 {
      font-size: 0.146rem;
      font-weight: bold;
      span{
        margin-left: 0.2rem;
      }
    }
    p {
      font-size: 0.125rem;
      overflow: hidden;
      height: 0.2rem;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
}
.aman-btm {
    height: 0.34rem;
    background-color: #fff;
    padding: 0 0.1rem;
    line-height: 0.34rem;
    a {
      width: 0.6rem;
      height: 0.24rem;
      line-height: 0.24rem;
      border: 0.01rem solid #ccc;
      border-radius: 0.05rem;
      margin: 0.05rem;
      font-size: 0.125rem;
  }
  b {
      font-weight: normal;
      font-size: 0.125rem;
  }
}
.addr3 {
    margin: 0.1rem 0;
    background-color: #fff;
    padding: 0 0.2rem;
    height: 0.45rem;
    line-height: 0.45rem;
    font-size: 0.166rem;
      span {
      color: #ffcc33;
      font-size: 0.3rem;
      margin-right: 0.2rem;
  }
}
</style>

<template>
  <div class="invoice">
    <h4 class="Addtitle">发票类型</h4>
    <div class="mes">
			<checklist  required :options="['普通发票', '增值税发票']" v-model="checklist" :max=1 @on-change="change"></checklist>
    </div>
    <!-- 普通发票 -->
    <div v-show="checklist[0]=='普通发票'">
        <h4 class="Addtitle">发票抬头</h4>
        <div class="mes">
          <checklist  required :options="['个人', '单位']" v-model="checklist2" :max=1 @on-change="change"></checklist>
        </div>
        <!-- 个人发票 -->
        <div v-show="checklist2[0]=='个人'" class="self">
          <h4 class="Addtitle">收票人信息</h4>
          <group >
            <x-input title="收票人手机" v-model="selfPhone" is-type="china-mobile"></x-input>
          </group>
          <h4 class="Addtitle">发票内容</h4>
          <checklist  required v-model="checked" :options="['个人发票']" disabled ></checklist>
        </div>
        <!-- 单位发票 -->
        <div v-show="checklist2[0]=='单位'" class="company">
          <group >
            <x-input placeholder="请填写单位名称" v-model="companyName"></x-input>
            <x-input placeholder="请在此填写纳税人识别号" v-model="companyId"></x-input>
          </group>
          <h4 class="Addtitle">收票人信息</h4>
          <group >
            <x-input title="收票人手机" v-model="selfPhone" is-type="china-mobile"></x-input>
          </group>
          <h4 class="Addtitle">发票内容</h4>
          <checklist  required v-model="checked" :options="['个人发票']" disabled  ></checklist>
        </div>
    </div>
    <!-- 增值税发票 -->
    <div v-show="checklist[0]=='增值税发票'" class="update">
        <h4 class="Addtitle">发票抬头</h4>
        <group class="updateName">
          <x-input placeholder="请填写单位名称" v-model="companyName2"></x-input>
        </group>
        <group class="updateList">
          <x-input title="纳税人识别号" placeholder="请输入税号" v-model="companyId"></x-input>
          <x-input title="注册电话" placeholder="请输入注册电话" v-model="companyPhone2"></x-input>
          <x-input title="注册地址" placeholder="请输入单位地址" v-model="companyAdd"></x-input>
          <x-input title="开户银行" placeholder="请输入银行所在地址" v-model="companyBankAdd"></x-input>
          <x-input title="开户账号" placeholder="请输入银行账号" v-model="companyBankId"></x-input>
        </group>
        <h4 class="Addtitle" style="margin-top:0.1rem;">收票人信息</h4>
        <group class="updateDisabled">
          <x-input title="收票人手机" v-model="selfPhone"></x-input>
        </group>
        <h4 class="Addtitle" style="margin-top:0.1rem;">发票内容</h4>
        <checklist  required v-model="checked" :options="['个人发票']" disabled  class="updateDisabled"></checklist>
    </div>
    <button class="addBtn">确定</button>
  </div>
</template>
<script>
import { Checklist, XInput, Group } from 'vux'
export default {
  name: 'invoiceAdd',
  components: {
    Checklist, XInput, Group
  },
  data () {
    return {
      checklist: ['普通发票'],
      checklist2: ['个人'],
      checked: ['个人发票'],
      selfPhone: '',      // 收票人手机号
      companyName: '',    // 单位发票公司名称
      companyId: '',      // 单位发票公司纳税号
      companyName2: '',    // 增值税公司名称
      companyId2: '',    // 增值税公司纳税号
      companyPhone2: '',    // 增值税公司手机
      companyAdd: '',    // 增值税公司地址
      companyBankAdd: '',   // 增值税开户行地址
      companyBankId: ''    // 增值税银行账号
    }
  },
  methods: {
    change (val, key) {
      console.log(val)
    }
  }
}
</script>
<style lang="less">
.invoice{
  .weui-cells:before,.weui-cell:before{
    border: none!important;
  }
}
.Addtitle{
    padding-left: 0.1rem;
    height: 0.35rem;
    font-size: 0.146rem;
    margin-top: 0;
    margin-bottom: 0.01rem;
    background-color: #fff;
    color: #333;
    line-height: 0.35rem;
    font-weight: normal;
}
.mes {
    background-color: #fff;
    color: #797979;
    margin-bottom: 0.07rem;
    .chooseText {
      width: 1.3rem;
      margin-top: 0.01rem;
      display: inline-block;
      height: 0.5rem;
      line-height: 0.5rem;
  }
}
.mes{
  .weui-cell{
    width: 40%;
    float: left;
    font-size: 0.14rem;
  }
  .weui-cells{
    margin-top: 0!important;
     
  }
}
.weui-cells_checkbox .weui-check:checked + .vux-checklist-icon-checked:before{
  color: #fc3!important;
}
.self,.company {
  .weui-cells,.vux-no-group-title{
    margin-top: 0!important;
    font-size: 0.14rem;
  }
  .Addtitle{
    margin-top: 0.1rem;
  }
}
.addBtn{
    width: 95%;
    margin: 0 auto;
    height: 0.4rem;
    background-color: #ffcc33;
    color: #000;
    text-align: center;
    line-height: 0.4rem;
    border-radius: 5px;
    margin-top: 0.4rem;
    margin-bottom: 0.2rem;
    display: block;
    border: none;
}
.update{
  .updateName{
    .weui-cells{
      margin-top: 0!important;
    }
  }
  .weui-cell{
    font-size: 0.14rem;
  }
  .updateList .weui-cell:before{
    border-top: 1px solid #efefef!important;
  }
}
.updateDisabled{
  .weui-cells_checkbox,.weui-cells{
    margin-top: 0!important;
  }
}
</style>

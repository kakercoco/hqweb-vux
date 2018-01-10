<template>
  <div class="return">
    <div class="return-title">
      <h4 class="fw-b">订单编号 OR2018011000006</h4> 
      <p class="c-999 mt-10">2018-01-10 13:32:07</p>
    </div>
    <div class="return-cont">
      <h5 class="c-999 return-cont-h5">选择退货商品</h5>
      <div class="return-cont-all">
        <p class="fl">
          <check-icon :value.sync="demo1" class="fl"></check-icon>全选
        </p> 
        <p class="fr">已选择<i class="choose-num">4</i>件商品</p>
      </div>
      <ul>
        <li>
          <div class="rgs-item-l fl">
            <check-icon :value.sync="demo1" class="fl" style="margin-top:0.25rem;"></check-icon>
            <img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/5913c6dc6d64d.jpg" alt="" class="rgs-item-l-img fl">
          </div>
          <div class="rgs-item-c fl">
            <h5 class="c-999">飘柔洗发水 500ml 去屑柔顺滋养护发</h5> 
            <span class="mt-20 fl">数量2</span>
          </div>
          <div class="rgs-item-r fr">
            <b class="fr">￥16.15</b> 
            <del class="fr">￥30.00</del> 
          </div>
          <group class='fr myCompute' >
						<x-number v-model="value"  :min=1 :max=99 fillable @on-change="change"></x-number>
					</group>
        </li>
        <li>
          <div class="rgs-item-l fl">
            <check-icon :value.sync="demo1" class="fl" style="margin-top:0.25rem;"></check-icon>
            <img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/5913c6dc6d64d.jpg" alt="" class="rgs-item-l-img fl">
          </div>
          <div class="rgs-item-c fl">
            <h5 class="c-999">飘柔洗发水 500ml 去屑柔顺滋养护发</h5> 
            <span class="mt-20 fl">数量2</span>
          </div>
          <div class="rgs-item-r fr">
            <b class="fr">￥16.15</b> 
            <del class="fr">￥30.00</del> 
          </div>
          <group class='fr myCompute' >
						<x-number v-model="value"  :min=1 :max=99 fillable @on-change="change"></x-number>
					</group>
        </li>
        <li>
          <div class="rgs-item-l fl">
            <check-icon :value.sync="demo1" class="fl" style="margin-top:0.25rem;"></check-icon>
            <img src="http://hq-storage01.oss-cn-shanghai.aliyuncs.com/5913c6dc6d64d.jpg" alt="" class="rgs-item-l-img fl">
          </div>
          <div class="rgs-item-c fl">
            <h5 class="c-999">飘柔洗发水 500ml 去屑柔顺滋养护发</h5> 
            <span class="mt-20 fl">数量2</span>
          </div>
          <div class="rgs-item-r fr">
            <b class="fr">￥16.15</b> 
            <del class="fr">￥30.00</del> 
          </div>
          <group class='fr myCompute' >
						<x-number v-model="value"  :min=1 :max=99 fillable @on-change="change"></x-number>
					</group>
        </li>
      </ul>
    </div>
    <div class="return-why">
      <h5>申请原因</h5>
      <group>
        <popup-radio title="请选择原因" :options="options" v-model="option"></popup-radio>
      </group>
    </div>
    <div class="return-detail">
      <h5>问题描述</h5>
      <group>
        <x-textarea height=100 placeholder="选择其他原因时可输入" v-model="textarea" show-counter :max=100></x-textarea>
      </group>
    </div>
    <div class="user-upbtn mt-10">
      <p class="fl imgbtn">
        <span>+</span>
        <input type="file">
      </p>
      <p class="fr c-999 gimgp">
          为了更好的处理您的问题，请上传问题图片，最 多5张，每张不超过5M，支持JPG、BMP、PNG
      </p>
    </div>
    <div class="user-submit">
      <p class="c-999">商品退回方式：自行寄回，与专属客服沟通后寄回。</p> 
      <button>提交</button>
    </div>
  </div>
</template>
<script>
import { CheckIcon, Group, XNumber, PopupRadio, XTextarea } from 'vux'
export default {
  name: 'car',
  components: {
    CheckIcon,
    Group,
    XNumber,
    PopupRadio,
    XTextarea
  },
  data () {
    return {
      delete_show: true, // 编辑全部
      demo1: false,
      value: 1,
      options: ['多拍/错拍/不想要了', '商品成分与描述不符', '功能缺失或未达标准', '质量缺陷或性能故障', '颜色/型号/参数与描述不符', '商品损坏/污渍等', '卖家发错货/少发/漏发', '假冒品牌', '发票问题', '到货太慢', '其他'],
      option: '',
      textarea: ''
    }
  },
  methods: {
    ck () {
      // console.log(aa)
    },
    change (val) {
      console.log('数量发生变化' + val)
    }
  }
}
</script>
<style lang="less">
.return-title {
  padding: 0.1rem;
  background-color: #fff;
  h4 {
    font-size: 0.135rem;
  }
  p {
    font-size: 0.115rem;
  }
}
.return-cont-h5 {
  font-size: 0.115rem;
  padding: 0.05rem 0.1rem;
}
.return-cont-all {
    background-color: #fff;
    padding: 0 0.1rem;
    font-size: 0.135rem;
    height: 0.35rem;
    line-height: 0.35rem;
}
.rgs-item-l-img {
    height: 0.7rem;
}
.rgs-item-l {
    width: 30%;
}
.return-cont li {
    background-color: #fff;
    padding: 0.1rem;
    height: 0.9rem;
    margin-top: 0.02rem;
    overflow: hidden;
    position: relative;
}
.rgs-item-c {
    width: 40%;
    height: 100%;
    h5 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 0.15rem;
      font-size: 0.115rem;
      font-weight: bold;
      min-height: 0.3rem;
  }
  span{
    font-size: 0.12rem;
  }
}
.rgs-item-r {
    width: 30%;
    height: 100%;
    b,del {
    font-size: 0.115rem;
    clear: both;
  }
}
.myCompute{
  position: absolute;
  bottom: 0.1rem;
  right:0.1rem;
  .weui-cell{
    padding: 0!important;
  }
  .vux-number-selector,.vux-number-input{
    height: 25px!important;
  }
  .vux-number-selector-plus{
    margin-right: 0!important;
  }
  .vux-number-selector svg{
    fill:#fc3;
  }
}
.return{
.vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before{
    color: #fc3!important;
  }
  .weui-cells{
    font-size: 0.135rem;
  }
}
.return-why{
  h5 {
    font-size: 0.115rem;
    padding: 0.05rem 0.1rem 0;
  }
} 
.return-detail{
  h5 {
    font-size: 0.115rem;
    padding: 0.05rem 0.1rem 0;
  }
} 
.user-upbtn {
    width: 100%;
    height: 0.9rem;
    background-color: #fff;
    padding: 0.1rem;
    .imgbtn {
      position: relative;
      width: 0.7rem;
      height: 100%;
      line-height: 0.7rem;
      margin-right: 0.009rem;
      border: 1px solid #eee;
      border-radius: 3px;
      text-align: center;
      span{
        font-size: 0.5rem;
        color: #ccc;
      }
      input {
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    .gimgp {
      width: 70%;
      font-size: 0.115rem;
    }
}
.user-submit {
    padding: 0.1rem;
    p {
     font-size: 0.135rem;
    }
    button{
      display: block;
      width: 100%;
      background-color: #ffcc33;
      margin-top: 0.3rem;
      height: 0.35rem;
      border: none;
    }
}
</style>

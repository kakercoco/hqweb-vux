import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import index from '@/components/pages/main/index'
import sort from '@/components/pages/main/sort'
import car from '@/components/pages/main/car'
import self from '@/components/pages/main/self'
import sortList from '@/components/pages/main/sortList'
import produce from '@/components/pages/produce'
import login from '@/components/login'
import loginIndex from '@/components/pages/login/login'
import findPassword from '@/components/pages/login/findPassword'
import findPasswordCode from '@/components/pages/login/findPasswordCode'
import setPassword from '@/components/pages/login/setPassword'
import bindPhone from '@/components/pages/login/bindPhone'
import register from '@/components/pages/login/register'
import registerError from '@/components/pages/login/registerError'
import setting from '@/components/setting'
import data from '@/components/pages/setting/data'
import changeName from '@/components/pages/setting/changeName'
import changePhone from '@/components/pages/setting/changePhone'
import changeNewPhone from '@/components/pages/setting/changeNewPhone'
import changePassword from '@/components/pages/setting/changePassword'
import settingIndex from '@/components/pages/setting/setting'
import help from '@/components/pages/setting/help'
import feedBack from '@/components/pages/setting/feedBack'
import about from '@/components/pages/setting/about'
import changeSite from '@/components/pages/changeSite'
import sale from '@/components/sale'
import saleBanner from '@/components/pages/sale/banner'
import gift from '@/components/pages/sale/gift'
import giftBuy from '@/components/pages/sale/giftBuy'
import groupBuy from '@/components/pages/sale/groupBuy'
import giftBuySuccess from '@/components/pages/sale/giftBuySuccess'
import giftLookList from '@/components/pages/sale/giftLookList'
import giftLookDetail from '@/components/pages/sale/giftLookDetail'
import giftGet from '@/components/pages/sale/giftGet'
import giftGetNow from '@/components/pages/sale/giftGetNow'
import giftGetSuccess from '@/components/pages/sale/giftGetSuccess'
import theme from '@/components/pages/sale/theme'
import news from '@/components/news'
import newsList from '@/components/pages/news/newsList'
import newsDetail from '@/components/pages/news/newsDetail'
import manage from '@/components/manage'
import invoiceList from '@/components/pages/manage/invoiceList'
import invoiceAdd from '@/components/pages/manage/invoiceAdd'
import invoiceEdit from '@/components/pages/manage/invoiceEdit'
import stationMessage from '@/components/pages/manage/stationMessage'
import addressList from '@/components/pages/manage/addressList'
import addressEdit from '@/components/pages/manage/addressEdit'
import addressAdd from '@/components/pages/manage/addressAdd'
import ticketList from '@/components/pages/manage/ticketList'

Vue.use(Router)
let router = new Router({
  routes: [{ // 首页
    path: '/',
    redirect: '/main/index'

  }, { // main
    path: '/main',
    name: 'main',
    component: main,
    children: [{ // 首页
      path: 'index',
      name: 'index',
      component: index,
      meta: {
        title: '黄雀商城'
      }
    }, { // 分类
      path: 'sort',
      name: 'sort',
      component: sort,
      meta: {
        title: '商品分类'
      }
    }, { // 二级分类
      path: 'sortList/:cat_id',
      name: 'sortList',
      component: sortList,
      meta: {
        title: '商品分类'
      }
    }, { // 个人中心
      path: 'self',
      name: 'self',
      component: self,
      meta: {
        title: '个人中心'
      }
    }, { // 购物车
      path: 'car',
      name: 'car',
      component: car,
      meta: {
        title: '购物车'
      }
    }]
  }, { // 产品详情
    path: '/produce',
    name: 'produce',
    component: produce,
    meta: {
      title: '产品详情'
    }
  }, { // 登录页面
    path: '/login',
    name: 'login',
    component: login,
    children: [{
      path: 'login',
      name: 'loginIndex',
      component: loginIndex,
      meta: {
        title: '登录页面'
      }
    }, { // 找回密码
      path: 'findPassword',
      name: 'findPassword',
      component: findPassword,
      meta: {
        title: '找回密码'
      }
    }, {  // 手机切換密碼
      path: 'findPasswordCode',
      name: 'findPasswordCode',
      component: findPasswordCode,
      meta: {
        title: '找回密码'
      }
    }, { // 设置密码
      path: 'setPassword',
      name: 'setPassword',
      component: setPassword,
      meta: {
        title: '设置密码'
      }
    }, { // 绑定手机
      path: 'bindPhone',
      name: 'bindPhone',
      component: bindPhone,
      meta: {
        title: '绑定手机'
      }
    }, { // 注册
      path: 'register',
      name: 'register',
      component: register,
      meta: {
        title: '手机注册'
      }
    }, {  // 手机注册失败
      path: 'registerError',
      name: 'registerError',
      component: registerError,
      meta: {
        title: '手机注册失敗'
      }
    }]
  }, { // 设置中心
    path: '/setting',
    name: 'setting',
    component: setting,
    children: [{   // 我的资料
      path: 'data',
      name: 'data',
      component: data,
      meta: {
        title: '我的资料'
      }
    }, {   // 修改昵称
      path: 'changeName',
      name: 'changeName',
      component: changeName,
      meta: {
        title: '修改昵称'
      }
    }, {   // 修改手机
      path: 'changePhone',
      name: 'changePhone',
      component: changePhone,
      meta: {
        title: '手机换绑'
      }
    }, {   // 修改新手机
      path: 'changeNewPhone',
      name: 'changeNewPhone',
      component: changeNewPhone,
      meta: {
        title: '手机换绑'
      }
    }, {   // 更改密码
      path: 'changePassword',
      name: 'changePassword',
      component: changePassword,
      meta: {
        title: '更改密码'
      }
    }, {   // 设置首页
      path: 'setting',
      name: 'settingIndex',
      component: settingIndex,
      meta: {
        title: '设置'
      }
    }, {   // 帮助
      path: 'help',
      name: 'help',
      component: help,
      meta: {
        title: '使用指南'
      }
    }, {   // 意见反馈
      path: 'feedBack',
      name: 'feedBack',
      component: feedBack,
      meta: {
        title: '意见反馈'
      }
    }, {   // 关于
      path: 'about',
      name: 'about',
      component: about,
      meta: {
        title: '关于'
      }
    }]
  }, {  // 切换站点
    path: '/changeSite',
    name: 'changeSite',
    component: changeSite,
    meta: {
      title: '切换站点'
    }
  }, {  // 活动中心
    path: '/sale',
    name: 'sale',
    component: sale,
    children: [{ // banner普通活动
      path: 'banner',
      name: 'saleBanner',
      component: saleBanner,
      meta: {
        title: '特惠活动'
      }
    }, {    // banner大礼包活动
      path: 'gift',
      name: 'gift',
      component: gift,
      meta: {
        title: '黄雀大礼包'
      }
    }, {    // 大礼包详情
      path: 'giftBuy/:id',
      name: 'giftBuy',
      component: giftBuy,
      meta: {
        title: '大礼包'
      }
    }, {    // 特惠组合详情
      path: 'groupBuy/:groupId',
      name: 'groupBuy',
      component: groupBuy,
      meta: {
        title: '特惠组合'
      }
    }, {    // 购买大礼包成功
      path: 'giftBuySuccess',
      name: 'giftBuySuccess',
      component: giftBuySuccess,
      meta: {
        title: '购买成功'
      }
    }, {    // 查看大礼包列表
      path: 'giftLookList',
      name: 'giftLookList',
      component: giftLookList,
      meta: {
        title: '礼品券查看'
      }
    }, {    // 查看大礼包详情
      path: 'giftLookDetail',
      name: 'giftLookDetail',
      component: giftLookDetail,
      meta: {
        title: '查看礼品券'
      }
    }, {    // 领取大礼包第一步
      path: 'giftGet',
      name: 'giftGet',
      component: giftGet,
      meta: {
        title: '领取大礼包'
      }
    }, {    // 领取大礼包第二步
      path: 'giftGetNow',
      name: 'giftGetNow',
      component: giftGetNow,
      meta: {
        title: '领取大礼包'
      }
    }, {    // 领取大礼包成功
      path: 'giftGetSuccess',
      name: 'giftGetSuccess',
      component: giftGetSuccess,
      meta: {
        title: '领取大礼包'
      }
    }, {    // 专题活动
      path: 'theme',
      name: 'theme',
      component: theme,
      meta: {
        title: '主题活动'
      }
    }]
  }, {
    path: '/news',
    name: 'news',
    component: news,
    children: [{    // 黄雀快报列表
      path: 'newsList',
      name: 'newsList',
      component: newsList,
      meta: {
        title: '黄雀快报'
      }
    }, {    // 黄雀快报详情
      path: 'newsDetail/:artical_id',
      name: 'newsDetail',
      component: newsDetail,
      meta: {
        title: '黄雀快报'
      }
    }]
  }, {
    path: '/manage',
    name: 'manage',
    component: manage,
    children: [{    // 发票列表
      path: 'invoiceList',
      name: 'invoiceList',
      component: invoiceList,
      meta: {
        title: '发票列表'
      }
    }, {    // 发票新增
      path: 'invoiceAdd',
      name: 'invoiceAdd',
      component: invoiceAdd,
      meta: {
        title: '发票新增'
      }
    }, {    // 发票编辑
      path: 'invoiceEdit/:invoiceId',
      name: 'invoiceEdit',
      component: invoiceEdit,
      meta: {
        title: '发票编辑'
      }
    }, {    // 站点信息
      path: 'stationMessage',
      name: 'stationMessage',
      component: stationMessage,
      meta: {
        title: '站点信息'
      }
    }, {    // 收货地址管理
      path: 'addressList',
      name: 'addressList',
      component: addressList,
      meta: {
        title: '收货地址管理'
      }
    }, {    // 收货地址新增
      path: 'addressAdd',
      name: 'addressAdd',
      component: addressAdd,
      meta: {
        title: '收货地址新增'
      }
    }, {    // 收货地址编辑
      path: 'addressEdit/:addressId',
      name: 'addressEdit',
      component: addressEdit,
      meta: {
        title: '收货地址编辑'
      }
    }, {    // 优惠券列表
      path: 'ticketList',
      name: 'ticketList',
      component: ticketList,
      meta: {
        title: '优惠券'
      }
    }]
  }],
  mode: 'history'
})
// 路由不匹配时会出现页面空白
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) { // 如果未匹配到路由
    from.name ? next({
      name: from.name
    }) : next('/') // 如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next() // 如果匹配到正确跳转
  }
})
export default router

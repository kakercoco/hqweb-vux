import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import index from '@/components/pages/index'
import sort from '@/components/pages/sort'
import car from '@/components/pages/car'
import self from '@/components/pages/self'
import sortList from '@/components/pages/sortList'
import produce from '@/components/pages/produce'
import login from '@/components/login'
import loginIndex from '@/components/pages/login'
import findPassword from '@/components/pages/findPassword'
import setPassword from '@/components/pages/setPassword'
import bindPhone from '@/components/pages/bindPhone'
import register from '@/components/pages/register'

Vue.use(Router)
let router = new Router({
	routes: [{ //首页
		path: '/',
		redirect: "/main/index",

	}, { //main
		path: '/main',
		name: 'main',
		component: main,
		children: [{ //首页
			path: 'index',
			name: 'index',
			component: index,
			meta: {
				title: '黄雀商城'
			}
		}, { //分类
			path: 'sort',
			name: 'sort',
			component: sort,
			meta: {
				title: '商品分类'
			}
		}, { //二级分类
			path: 'sortList',
			name: 'sortList',
			component: sortList,
			meta: {
				title: '商品分类'
			}
		}, { //个人中心
			path: 'self',
			name: 'self',
			component: self,
			meta: {
				title: '个人中心'
			}
		}, { //购物车
			path: 'car',
			name: 'car',
			component: car,
			meta: {
				title: '购物车'
			}
		}]
	}, { //产品详情
		path: '/produce',
		name: 'produce',
		component: produce,
		meta: {
			title: '产品详情'
		}
	}, { //登录页面
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
		}, {		//找回密码
			path: 'findPassword',
			name: 'findPassword',
			component: findPassword,
			meta: {
				title: '找回密码'
			}
		}, {		//设置密码
			path: 'setPassword',
			name: 'setPassword',
			component: setPassword,
			meta: {
				title: '设置密码'
			}
		}, {		//绑定手机
			path: 'bindPhone',
			name: 'bindPhone',
			component: bindPhone,
			meta: {
				title: '绑定手机'
			}
		}, {		//注册
			path: 'register',
			name: 'register',
			component: register,
			meta: {
				title: '手机注册'
			}
		}]
	}],
	mode: 'history'
})
//路由不匹配时会出现页面空白
router.beforeEach((to, from, next) => {
	if(to.matched.length === 0) { //如果未匹配到路由
		from.name ? next({
			name: from.name
		}) : next('/'); //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
	} else {
		next(); //如果匹配到正确跳转
	}
});
export default router
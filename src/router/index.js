import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import index from '@/components/pages/index'
import sort from '@/components/pages/sort'
import car from '@/components/pages/car'
import self from '@/components/pages/self'
import sortList from '@/components/pages/sortList'

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
			path: '/main/index',
			name: 'index',
			component: index,
			meta: {
				title: '黄雀商城'
			}
		}, { //分类
			path: '/main/sort',
			name: 'sort',
			component: sort,
			meta: {
				title: '商品分类'
			}
		},{ //二级分类
			path: '/main/sortList',
			name: 'sortList',
			component: sortList,
			meta: {
				title: '商品分类'
			}
		}, { //个人中心
			path: '/main/self',
			name: 'self',
			component: self,
			meta: {
				title: '个人中心'
			}
		}, { //购物车
			path: '/main/car',
			name: 'car',
			component: car,
			meta: {
				title: '购物车'
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
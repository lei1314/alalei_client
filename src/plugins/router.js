import Vue from 'vue'
import VueRouter from 'vue-router'
// 安装插件包在Vue身上
Vue.use(VueRouter)

// import Reg from '../pages/Reg.vue'
// import Login from '../pages/Login.vue'
// import User from '../pages/User.vue'
let User = () => import( /* webpackChunkName: "UserLoginReg" */ '@/pages/User.vue')
let Login = () => import( /* webpackChunkName: "UserLoginReg" */ '@/pages/Login.vue')
let Reg = () => import( /* webpackChunkName: "UserLoginReg" */ '@/pages/Reg.vue')


// import Follow from '../pages/Follow.vue'
//函数, 调用时，返回一个import(目标组件)
// let Follow = ()=>{ return import('../pages/Follow.vue') }
let Follow = () => import( /* webpackChunkName: "follow" */ '@/pages/Follow.vue')

import NoPage from '@/pages/NoPage.vue'
// import Column from '../pages/Column.vue'

// 首页
import Home from '@/pages/Home.vue'
import Subject from '@/components/Subject.vue'
// 統計圖

import Cropuis from '@/pages/Cropuis.vue'
// 地圖
import Map from '@/pages/Map.vue'
import Map2 from '@/pages/Map2.vue'
import Map3 from '@/pages/Map3.vue'

import Detail from '@/pages/Detail.vue'
import Find from '@/pages/Find.vue'
// 路由配置
let routes = [
	// 首页
	{path: '/',redirect: '/home'
		// children: [
		// 	{path: 'subject',component: Subject}, //科目路由
		// 	{path: 'cropuis',component: Cropuis,name:'cropuis'}, // 統計圖路由
		// 	{path: 'map',component: Map,name:'map'},// 地圖
		// 	{path: 'map2',component: Map2,name:'map2'},
		// 	{path: 'map3',component: Map3,name:'map3'},
		// ]
	},
	{path: '/home',component: Home,},
	// 用户
	{path: '/user',component: User,},
	// 关注
	{path: '/follow',component: Follow},
	{path: '/find',component: (r) => {require(['../pages/Find.vue'], r)}},
	{path: '/reg',component: Reg,},
	{path: '/Detail/:_id',component: Detail,},
	{path: '/login',component: Login},
	{path: '*',component: NoPage},
// -----------------------------------------------------
	{path: '/subject',component: Subject}, //科目路由
	{path: '/cropuis',component: Cropuis}, // 統計圖路由
	{path: '/map',component: Map},// 地圖
	{path: '/map2',component: Map2},
	{path: '/map3',component: Map3},
];

//4.路由实例
let router = new VueRouter({
	// routes:[配置]
	// routes:routes
	routes,
	mode: 'history', //路由模式
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		} //返回路由跳转后的横向和纵向滚动位置
	}
})

//前置
// router.beforeEach((to, from, next) => {

//   //	to: 目标路由
//   //	from: 当前路由
//   // next() 跳转  一定要调用
//   // next(false);//走不了
//   // next(true);//走你
//   // next({path:'/detail/2',params:{},query:{}})//带点货

//   // // 守卫业务
//   if(to.path=='/login' || to.path=='/reg'){
//     //判断是不是登录了
//     //axios请求 携带 token 
//     next()
//   }else{
//     next('/login');
//   }
// })
//后置
// router.afterEach((to,from)=>{
// 	//全局后置守卫业务
// 	console.log('全局守卫 后置',to,from)

// })
export default router;

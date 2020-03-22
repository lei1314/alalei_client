import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false
//引入通用样式
import './assets/css/base.css' //相当于src

//引入字体比例控制
import './assets/js/font.js'
// 引入路由
import router from './plugins/router.js'
// 引入动画css
import 'animate.css'
//引入服务端配置模块
import server from './config/server.js';
Vue.prototype.$baseUrl = server.baseUrl; //把服务器基础地址，作为实例属性，捆绑到了vue上
//引入axios插件配置
import './plugins/axios'

//引入提交类型模块，绑定到vue实例上
import * as types from './store/types.js';
Vue.prototype.$types=types;


//全局注册 组件轮播图
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
Vue.component('swipe',Swipe)  
Vue.component('swipe-item',SwipeItem) 


// 获取本地，同步vuex
let local = window.localStorage.getItem('user');

if(local){
  store.commit('user/USER',JSON.parse(local))
}


// 引入vuex
import store from './plugins/vuex.js';
let vm = new Vue({
	store,
	render: h => h(App),
	// data: {
	// 	bNav: false,
	// 	bFoot: false,
	// 	bLoading: false
	// },

	router //注册
}).$mount('#app')

export default vm;

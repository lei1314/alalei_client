<template>
	<div class="box">
		<!-- header -->
		<div class="header">
			<span class="span">初一&nbsp;</span>
			<strong class="triangle"></strong>
			<div><span class="iconfont icon-fdj"></span></div>
			<input type="text" placeholder="搜索老师/课程">
			<a href="#"><span class="iconfont icon-ht"></span></a>
			<a href="#"><span class="iconfont icon-gwc"></span></a>
		</div>
		<!-- nav -->
		<!-- // 组件中
		<router-link to='xx/参数?a=1b=2'></..>
		<router-link :to='{name:'名字',params:{id:1},query:{a:2,b:3}}'></..> -->
		<div>
			<div class="nav">
				<router-link  to="/home" active-class="redcol">推荐</router-link>
				<router-link  to="/subject" active-class="redcol">语文</router-link>
				<router-link  to="/map" active-class="redcol">地圖</router-link>
				<router-link  to="/cropuis" active-class="redcol">图形</router-link>
				<router-link  to="/map2" active-class="redcol">编程</router-link>
				<router-link  to="/map3" active-class="redcol">大科学</router-link>
				<router-link  to="">科学</router-link>
				<router-link  to="" active-class="">素养</router-link>
				<router-link  to="" active-class="">编程</router-link>
				<router-link  to="" active-class="">历史</router-link>
				<router-link  to="" active-class="">地理</router-link>
				<router-link  to="" active-class="">生物</router-link>
				<!-- <router-view>子路由的展示区</router-view> -->
			</div>
		</div>




	</div>
</template>

<script>
	import index from '../pages/index.vue'
	import Subject from '../components/Subject.vue'
	export default {
		name: 'Header',
		props: {},
		data() {
			return {
				comp: 'index',
				list:[]
			}
		},
		components: {
			index,
			Subject
		},
		mounted() {
			
		},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	.redcol{
		/* background-color: #0000FF; */
		border-bottom: 2px solid red;
		/* border-radius: 8px; */
		font-size: 20px;
		color: red;
		
	}

	/* 	.nav {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		background: #fff;
	}

	.nav ul {
		width: 4.38rem;
		height: 0.6rem;
		margin: 0 auto;
	}

	.nav ul li {
		width: 1.46rem;
		height: 0.6rem;
		float: left;
		line-height: 0.6rem;
		text-align: center;
		font-size: 0.3rem;
	}

	.header__nav--active {
		border-bottom: 0.1rem solid #5477b2;
		color: red;
	}
	.header__nav--activee {
		border-bottom: 0.1rem solid #5477b2;
		color: green;
	} */
	.box {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		background: #fff;
	}

	/*hearer*/
	.header {
		height: .9rem;
		display: flex;
		align-items: center;
	}

	.span {
		display: block;
		font-size: .22rem;
		padding-left: .14rem;
		font-weight: 600;
		/* color: red; */
		padding-right: .1rem;
	}

	.header input {
		width: 70%;
		height: 0.5rem;
		display: block;
		border-radius: 18px;
		font-size: .1rem;
		border: 1px solid #fff;
		text-indent: .7rem;
		background-color: rgb(241, 243, 244);
	}

	.triangle {
		width: 0;
		height: 0;
		border: 5px solid transparent;
		border-top-color: black;
		margin-right: .14rem;
		margin-top: .08rem;
	}

	.header .icon-gwc {


		display: block;
		font-size: 0.34rem;
		color: #0c0f14;
		color: red;
		margin-left: .3rem;
	}

	.header .icon-fdj {
		display: block;
		font-size: 0.2rem;
		position: absolute;
		left: 1.2rem;
		top: 0.32rem;
		color: #a9acb1;
	}

	.header .icon-ht {
		display: block;
		font-size: 0.2rem;
		position: absolute;
		right: 1.3rem;
		top: 0.32rem;
		color: #a9acb1;
	}

	/*nav*/
	.nav {
		display: flex;
		/* height: 0.6rem; */
		align-items: center;
		white-space: nowrap;
		overflow-x: auto;
	}

	.nav a {
		/* font-size: 0.22rem; */
		/* color: black; */
		margin: 0 .14rem;
	}



	@font-face {
		font-family: "iconfont";
		src: url('../assets/font/iconfont.eot?t=1573267851574');
		/* IE9 */
		src: url('../assets/font/iconfont.eot?t=1573267851574#iefix') format('embedded-opentype'),
			/* IE6-IE8 */
			url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
			url('../assets/font/iconfont.woff?t=1573267851574') format('woff'),
			url('../assets/font/iconfont.ttf?t=1573267851574') format('truetype'),
			/* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
			url('../assets/font/iconfont.svg?t=1573267851574#iconfont') format('svg');
		/* iOS 4.1- */
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-sp:before {
		content: "\e78e";
	}

	.icon-fdj:before {
		content: "\e63d";
	}

	.icon-ht:before {
		content: "\e67e";
	}

	.icon-gwc:before {
		content: "\e620";
	}

	.icon-fx:before {
		content: "\e615";
	}

	.icon-wd:before {
		content: "\e61a";
	}

	.icon-caidan:before {
		content: "\e62e";
	}
</style>

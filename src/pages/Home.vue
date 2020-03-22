<template>
	<div class="Home">
		<!-- <Header /> -->
		<div class="oindex">
			<index />
			<p style="margin-bottom: 1.2rem;color: red; text-align: center; font-size: 16px;">没有更多了~~~</p>
		</div>
		<!-- <Banner :data="list" apiName="banner" />
		
		<Section/>


		<div class="banner3">
			<a href="#"><img src="../assets/img/s12.png" alt=""><span> 杨幂刘恺威宣布离婚</span></a>
		</div>
		
		<div class="home-m-l-r">
			<Olist v-for='(item,index) of home' :key="item._id" :data="item" api-name="home" />
		</div> -->
		<!-- <Footer /> -->
	</div>
</template>
<script>
	import index from './index.vue'
	import Header from '../layouts/Header.vue'
	// import Subject from '../components/Subject.vue'
	// import Banner from '../components/Banner.vue'
	// import Section from '../components/Section.vue'
	// import Olist from '../components/Olist.vue'
	import Footer from '../layouts/Footer.vue'
	export default {
		name: 'Home',
		props: {},
		data() {
			return {
				list: [],
				home: []
			}
		},
		components: {
			// Banner,
			// Olist,
			Header,
			Footer,
			// Section,
			// Subject,
			index
		},
		mounted() {
			// axios({
			// 		url: '/api/goods/banner',
			// 		params: {
			// 			_page: 1,
			// 			_limit: 5
			// 		},

			// 	}).then(

			// 		res => {
			// 			this.list = res.data.data
			// 			console.log(this.list)
			// 		}
			// 	),
			// 	// 列表
			// 	axios({
			// 		url: '/api/goods/home',
			// 		params: {
			// 			_page: 1,
			// 			_limit: 10
			// 		},
			// 	}).then(
			// 		res => {
			// 			console.log(res.data.data)
			// 			this.home = res.data.data

			// 		}

			// 	)
		},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	.oindex{
		margin-top: 1.5rem;
	}


	/* 	.home-m-l-r {
// 		margin: 0 0.1rem 0.8rem;
// 	}



// 	.banner3 {
// 		width: 100%;
// 		padding-left: 10px;
// 		margin: 10px auto 5px;
// 	}

// 	.banner3 img {
// 		display: inline-block;
// 		width: 30px;
// 		vertical-align: middle;
// 		text-indent: 10px;

// 	}

// 	.banner3 span {
// 		font-size: 20px;
// 		color: #333333;
// 		font-weight: 600;
// 		vertical-align: middle;
// 	} */
</style>

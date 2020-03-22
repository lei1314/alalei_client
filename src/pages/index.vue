<template>
	<div class="index">
		<Banner :data="$store.state.banner.banner" apiName="banner" />

		<Section />


		<div class="banner3">
			<a href="#"><img src="../assets/img/s12.png" alt=""><span> 杨幂刘恺威宣布离婚</span></a>
		</div>

		<div class="home-m-l-r">
			<Olist v-for='(item,index) of $store.state.home.home' :key="item._id" :data="item" api-name="home" />
		</div>
	</div>
</template>

<script>
	import Subject from '../components/Subject.vue'
	import Banner from '../components/Banner.vue'
	import Section from '../components/Section.vue'
	import Olist from '../components/Olist.vue'

	export default {
		// beforeRouteEnter(to,from,next){
		//   axios({
		//   		url: '/api/goods/banner',
		//   		params: {
		//   			_page: 1,
		//   			_limit: 5
		//   		},
		  
		//   	}).then(
		  
		//   		res => {
		// 			next(_this=>_this.list=res.data.data)
		//   			// this.list = res.data.data
		//   			// console.log(this.list)
		//   		}
		//   	),
		//   	// 列表
		//   	axios({
		//   		url: '/api/goods/home',
		//   		params: {
		//   			_page: 1,
		//   			_limit: 10
		//   		},
		//   	}).then(
		//   		res => {
		//   			// console.log(res.data.data)
		// 			next(_this=>_this.home=res.data.data)
		//   			// this.home = res.data.data
		  
		//   		}
		  
		//   	)
			
		// },
		
		name: 'index',
		props: {},
		data() {
			return {
				// list: [],
				// home: []
			}
		},
		components: {
			Banner,
			Olist,
			// Header,
			// Footer,
			Section,
			Subject
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
				// 列表
				// axios({
				// 	url: '/api/goods/home',
				// 	params: {
				// 		_page: 1,
				// 		_limit: 10
				// 	},
				// }).then(
				// 	res => {
				// 		console.log(res.data.data)
				// 		this.home = res.data.data

				// 	}

				// )
				this.$store.dispatch(`banner/${this.$types.BANNER}`)
				this.$store.dispatch(`home/${this.$types.HOME}`)
		},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	.home-m-l-r {
		margin: 0 0.1rem 0.8rem;
	}



	.banner3 {
		width: 100%;
		padding-left: 10px;
		margin: 10px auto 5px;
	}

	.banner3 img {
		display: inline-block;
		width: 30px;
		vertical-align: middle;
		text-indent: 10px;

	}

	.banner3 span {
		font-size: 20px;
		color: #333333;
		font-weight: 600;
		vertical-align: middle;
	}
</style>

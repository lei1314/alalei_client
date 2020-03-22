<template>
	<div class="Find">
		<div class="header">
			<div class="yi">
				<a href="#">推荐</a>
				<a href="#">关注</a>
			</div>
			<a href="#" class="ss"><img src="../assets/img/r1.png" alt=""></a>
		</div>
		<div class="ofind">
		<Ofind
			v-for="(item,index) of $store.state.find.find"
			:key="item._id"
			:data="item"
			
			api-name="find"
		
		/>
		</div>
		<!-- <Footer /> -->
	</div>
</template>

<script>
	// import Footer from '../layouts/Footer.vue'
	import Ofind from '../components/Ofind.vue'
	export default {
		name: 'Find',
		props: {},
		// data() {
		// 	return {
		// 		list:[]
		// 	}
		// },
		components: {
			// Footer,
			Ofind
		},
		mounted() {
			// axios({
			//   url:'/api/goods/find',
			//   params:{_page:1,_limit:10},
			// }).then(
			//   res=>{
			//     // this.$root.bLoading=false;
			//     this.list = res.data.data
			//   }
			// )
			this.$store.dispatch(`find/${this.$types.FIND}`)
		},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	.header {
	
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		
		width: 100%;
		height: 45px;
		background: #161618;
		
	}
	.ofind{
		margin-top: 45px;
	}
	.yi a {
		color: #666666;
		padding: 0 20px;
	}

	.ss img {
		height: 24px;
		position: absolute;
		right: 12px;
		bottom: 12px;
	}

	.box {
		flex: 1;
		overflow-y: auto;
	}

	.yi {
		width: 100%;
		height: 45px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFBE8;
		font-size: .3rem;
	}

	.vid {
		width: 100%;
	}




	.banner2 {
		height: 57px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.banner2 span {
		font-size: 12px;
		color: #666666;
	}

	.guan {
		display: block;
		width: 55px;
		height: 21px;
		line-height: 21px;
		border-radius: 10px;
		border: 2px solid #d1d1d1;
		text-align: center;
	}

	.mei {
		display: flex;
	}

	.mei span {
		margin: 10px 80px 0 5px;
	}
</style>

<template>
	<div class="box">
		<!-- <div class="Olist" @click="getDetail" v-for="(item,index) in list" :key="item.id">
			
			<video controls class="vid">
				<source :src="item.video" type="video/mp4" />
				您的浏览器版本太低，请升级浏览器！
			</video>
			<div class="banner2">
				<a href="#" class="mei">
					<img src="../assets/img/r2.png" alt="" width="35">
					<span>{{item.title}}</span>
				</a>
				<a href="#" class="guan"><span>+关注</span></a>
				<a href="#"><img src="../assets/img/r3.png" alt="" width="20"></a>
				<a href="#"><img src="../assets/img/r4.png" alt="" width="20"></a>
				<a href="#"><span>……</span></a>
			</div>

		</div> -->
		<div class="ofind">
			<Ofind
				v-for="(item,index) of $store.state.subject.subject"
				:key="item._id"
				:data="item"
				
				api-name="find"
			
			/>
		</div>
		
	</div>
</template>

<script>
	import {mapActions,mapState} from 'vuex'
	import Ofind from './Ofind.vue'
	export default {
		// beforeRouteEnter(to,from,next){
		  
		//   axios({
		//   	url: '/api/goods/find',
		//   	params: {
		//   		_page: 1,
		//   		_limit: 3
		//   	},
		//   }).then(
		//   	res => {
		//   		// this.$root.bLoading=false;
		//   		// this.list = res.data.data,
		// 		next(_this=>_this.list=res.data.data)
		//   			// console.log(this.list)
		//   	}
		//   )
		// },
		name: 'Olist',
		props: {

		},
		// data() {
		// 	return {
		// 		list: []
		// 	}
		// },
		components: {Ofind},
		mounted() {
			// axios({
			// 	url: '/api/goods/find',
			// 	params: {
			// 		_page: 1,
			// 		_limit: 3
			// 	},
			// }).then(
			// 	res => {
			// 		// this.$root.bLoading=false;
			// 		this.list = res.data.data,
			// 			console.log(this.list)
			// 	}
			// )
	
			this.$store.dispatch('subject/SUBJECT')
			
		},
		computed:mapState(['subject']),
		updated() {},
		methods: {
			getDetail() {
				console.log('跳转详情', this.apiName)
				this.$router.push(`/detail/${this.data._id}?apiName=${this.apiName}`); //编程式跳转
				// '路由跳转':'/detail/23423423443?apiname=column'
				// this.$router.push(`/detail/${this.data._id}?apiName=${this.apiName}`)
			},
			
		}
	}
</script>
<style scoped>
	.box{
		margin-top: 1.5rem;
	}
	.Olist {
		/* margin-bottom: .8rem; */
		padding: 0.1rem 0;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
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

<template>
	<!--关注 -->
	<div>
		<!-- <Header/> -->
		<div class="Follow">
			<h2>新歌推荐</h2>
			<Cell
				v-for="(item,index) of $store.state.follow.follow"
				:key="item._id"
				:data="item"
				api-name="follow"
			/>
		</div>
		<!-- <Footer/> -->
	</div>
</template>

<script>
	// import Header from '../layouts/Header.vue'
	import Cell from '../components/Cell.vue'
	// import Footer from '../layouts/Footer.vue'
	import {FOLLOW} from '../store/types.js'
	
	import {mapActions} from 'vuex'
	export default {
		name: 'Follow',
		props: {},
		// data() {
		// 	return {
		// 		list: []
		// 	}
		// },
		components: {
			Cell,
			// Header,Footer
		},
		mounted(){
		  // this.$root.bLoading=true;
		  // axios({
		  //   url:'/api/goods/follow',
		  //   params:{_page:1,_limit:10},
		  // }).then(
		  //   res=>{
		  //     // this.$root.bLoading=false;
		  //     this.list = res.data.data
		  //   }
		  // )
		  // 第一种
		  // this.$store.dispatch('FOLLOW')
		  // 第二种
		  // this.FOLLOW()
		  this[this.$types.FOLLOW]()
		},
		
		updated() {},
		// 第二种
		methods: mapActions('follow',['FOLLOW'])
	}
</script>

<style scoped>
	.Follow{
	  /* margin-top: .6rem; */
	  margin-left: 0.4rem;
	  margin-right: 0.4rem;
	}
	h2{
		text-align: center;
		font-size: 24px;
		color: red;
		background-color: #0086B3;
		margin-bottom: 10px;
		border-radius: 5px;
	}
</style>

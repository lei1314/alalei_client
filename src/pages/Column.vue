<template>
	<!-- 栏目 -->
	<div>
		<!-- <Header/> -->
		<div class="Column">
			
				<Cell
					v-for="(item,index) of list"
					:key="item._id"
					:data="item"
					:index="index"
					api-name="column"
				/>
		
		</div>
		<Footer/>
	</div>
</template>

<script>
	import Header from '../layouts/Header.vue'
	import Footer from '../layouts/Footer.vue'
	import Cell from '../components/Cell.vue'
	export default {
		name: 'Column',
		props: {},
		data() {
			return {
				list: [{
						_id: 1,
						title: 'alex1',
						des: 'ooo1'
					},
					{
						_id: 2,
						title: 'alex2',
						des: 'ooo2'
					},
					{
						_id: 3,
						title: 'alex3',
						des: 'ooo3'
					},
					{
						_id: 4,
						title: 'alex4',
						des: 'ooo4'
					}
				]
			}
		},
		components: {
			Cell,
			Header,
			Footer
		},
		mounted() {},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	.Column {
		/* margin-top: .6rem; */
		margin-left: 0.4rem;
		margin-right: 0.4rem;
	}
</style>

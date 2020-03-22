<template>
	<swipe class="my-swipe">
		<swipe-item class="slide1" v-for="(item,index) in data" :key="item._id">
			<img :src="$baseUrl+item.banner" @click="go(item._id,apiName)" alt="" />
			<div class="text-box">
				<h2>{{item.title}}</h2>
				<p>{{item.sub_title}}</p>
			</div>
		</swipe-item>

	</swipe>
</template>

<script>
	export default {
		name: 'Banner',
		props: ['data', 'apiName'],
		data() {
			return {

			}
		},
		components: {},
		mounted() {
		},
		updated() {
		},
		methods: {
			go(a, b) {
				console.log(a, b)
				// this.$router.push({name:'detail',params:{_id:item._id},query:{apiName:apiName}}) 
				this.$router.push(`detail/${a}?apiName=${b}`)

			}
		}
	}
</script>

<style scoped>
	.my-swipe {
		border-radius: .4rem;

		text-align: center;
		margin: 0 0.1rem;
		height: 2.6rem;
	}

	.my-swipe img {
		width: 100%;
		height: 2.6rem;
		display: block;
	}


	.text-box {
		width: 100%;
		padding: 0 0.3rem;
		height: 1.24rem;
		position: absolute;
		left: 0;
		bottom: 0;
		color: #fff;
		background: rgba(0, 0, 0, 0.5);
	}

	.text-box h2 {
		font-size: 0.3rem;
		font-weight: normal;
		margin-top: 0.22rem;
		line-height: 100%;
		margin-bottom: 0.22rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>

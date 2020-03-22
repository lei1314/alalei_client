<template>
	<div class="Olist" @click="getDetail">
		
			<video controls class="vid">
				<source :src="data.video" type="video/mp4" />
				您的浏览器版本太低，请升级浏览器！
			</video>
			<div class="banner2">
				<a href="#" class="mei">
					<img src="../assets/img/r2.png" alt="" width="35">
					<span>{{data.title}}</span>
				</a>
				<a href="#" class="guan"><span>+关注</span></a>
				<a href="#"><img src="../assets/img/r3.png" alt="" width="20"></a>
				<a href="#"><img src="../assets/img/r4.png" alt="" width="20"></a>
				<a href="#"><span>……</span></a>
			</div>
		
	</div>
</template>

<script>
	export default {
		name: 'Olist',
		props: {
			data: {
				type: Object,
				required: true, //必传参数
				default: function() {
					return {}
				}
			},
			apiName: {
				type: String,
				default: null
			}
		},
		data() {
			return {

			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {
			getDetail() {
				console.log('跳转详情', this.apiName)
				this.$router.push(`/detail/${this.data._id}?apiName=${this.apiName}`); //编程式跳转
				// '路由跳转':'/detail/23423423443?apiname=column'
				// this.$router.push(`/detail/${this.data._id}?apiName=${this.apiName}`)
			}
		}
	}
</script>
<style scoped>
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

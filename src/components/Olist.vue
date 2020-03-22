<template>
	<div class="Olist" @click="getDetail">
		<img  :src="data.img" alt="">
		<p>
			<span>{{data.title}}</span><br>
			<strong>{{data.sub_title}}</strong>
		</p>
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
				// console.log('跳转详情', this.apiName)
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
	.Olist p {
		float: right;
		width: 50%;
		box-sizing: border-box;
		padding: 10px;
	}
	.Olist img {
		width: 40%;
		float: left;
	}
	.Olist span {
		display: inline-block;
		font-size: 16px;
		color: orangered;
		font-weight: 600;
		text-indent: 13px;
		margin: 5px auto;
	}
	.Olist strong {
		font-size: 14px;
		font-weight: 100;
		display: inline-block;
		text-indent: 13px;
	}
</style>

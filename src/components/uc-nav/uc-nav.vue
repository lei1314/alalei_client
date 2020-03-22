<template>
	<p class="fhbtn" :style="{
			background:bgColor,
			'border-width':borderWidth+'px'
		}">
		<span @click="goback" :class=" arrow === 'gray' ? 'gray' : 'default' ">
		</span>
	</p>
</template>

<script>
	export default {
		name: 'Column',
		props: {
			bgColor: {
				type: String,
				default: '#fff'
			},
			borderWidth: {
				type: Number,
				default: 1
			},
			arrow: {
				type: String,
				default: 'default'
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
			goback() {
				// this.$router.go(-1|1)|back()
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.fhbtn {
		padding-top: 0.27rem;
	}

	.fhbtn span {
		display: block;
		width: 0.23rem;
		height: 0.25rem;
		background: url(./assets/img/history1.png) no-repeat 0 0;
		background-size: 100%;
		margin-left: 0.3rem;
	}

	.fhbtn .gray {
		background-image: url(./assets/img/history1.png)
	}

	.fhbtn .default {
		background-image: url(./assets/img/history.png)
	}


</style>

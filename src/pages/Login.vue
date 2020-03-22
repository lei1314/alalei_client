<template>
	<div>
		<div class="content">
			<UcNav arrow="gray" />
			<h1></h1>
			<div class="login-box">
				<p class="lsolid"></p>
				<div class="login">
				
					<router-link to="/login" exact-active-class="redcol">登录</router-link>
					<span></span>
					<router-link to="/reg" exact-active-class="redcol">注册</router-link>
				</div>
				<p class="rsolid"></p>
			</div>

			<div class="inputox">
				<Input :msg="'账号'" v-model.lazy="username" />
				<Input msg='密码' inputtype="password" v-model.lazy="userpass" />
			</div>
			<div class="footbox">
				<br>
				<p class="errcol">
					{{errorMess}}
				</p>
				<Button text="登 录" bgColor="red" @click='login' />
				<a href="javascript:;" class="tishi">忘记密码？</a>
				
				
			</div>
		</div>
		<!-- <Footer /> -->
	</div>
</template>

<script>
	import UcNav from '../components/uc-nav/uc-nav.vue'
	import Input from '../components/Input.vue'
	import Footer from '../layouts/Footer.vue'
	import Button from '../components/Button.vue'
	export default {
		name: 'Login',
		props: {},
		data() {
			return {
				username: "",
				userpass: "",
				errorMess:''
			}
		},
		components: {
			Button,
			Footer,
			Input,
			UcNav
		},
		mounted() {},
		updated() {},
		methods: {
			login() {
				axios({
					url: '/api/login',
					method: 'post',
					data: {
						username: this.username,
						password: this.userpass
					}
				}).then(
					res => {
						// console.log('', res.data)
						if (res.data.err === 1) {
							this.errorMess = res.data.msg
						} else {
							//种user信息
							window.localStorage.setItem('user', JSON.stringify(res.data))
							this.$store.commit('user/USER',res.data);//没有吧异步业务丢到actions里面，所以直接提交mutations
							this.username=this.password=this.errorMess='';
							//跳转之前的页面
							if (this.$route.query.p) {
								this.$router.replace(this.$route.query.p)
							} else {
								this.$router.replace('/user')
							}

						}


					}
				)
			}
			// login() {
			// 	axios.post('/api/login', {
			// 		username: this.username,
			// 		password: this.userpass
			// 	}).then(

			// 		res => {
			// 			if (res.data.err == '0') {
			// 				console.log('登录成功')
			// 				//种user信息
			// 				window.localStorage.setItem('user', JSON.stringify(res.data))
			// 				this.$router.push('/home')
			// 			} else {
			// 				console.log('登录失败', res.data)
			// 			}

			// 		}
			// 	)
			// }
		}
	}
</script>

<style scoped>
	.redcol{
		color: red;
		border-bottom: 2px sol #000066;
	}
	.errcol{
		color: red;
		text-align: center;
		font-size: .25rem;
	}
	.content {
		max-width: 6.4rem;
		margin: 0 auto;
	}

	.content .fhbtn {
		padding-top: 0.27rem;
	}

	.content .fhbtn a {
		display: block;
		width: 0.23rem;
		height: 0.25rem;
		background: url(../assets/img/history1.png) no-repeat 0 0;
		background-size: 100%;
		margin-left: 0.3rem;
	}

	.content h1 {
		width: 2.18rem;
		height: 1.35rem;
		background: url(../assets/img/my_cz.png) no-repeat 0 0;
		background-size: 100%;
		margin: 0 auto;
		margin-top: 1.22rem;
	}

	.content .login {
		width: 2.0rem;
		height: 0.38rem;
		margin: 0 auto;
		margin-top: 0.85rem;
	}

	.login a {
		width: 0.97rem;
		height: 0.38rem;
		font-size: 0.35rem;
		line-height: 0.38rem;
		float: left;
		color: #4c4f50;
		text-align: center;
	}

	.login span {
		float: left;
		height: 0.38rem;
		border-left: 1px solid #4c4f50;
	}

	.content .login-box {
		position: relative;
	}

	.content .login-box .lsolid {
		width: 1.96rem;
		height: 0.18rem;
		border-bottom: 1px solid #4c4f50;
		position: absolute;
		top: 0;
		left: 0.1rem;
	}

	.content .login-box .rsolid {
		width: 1.96rem;
		height: 0.18rem;
		border-bottom: 1px solid #4c4f50;
		position: absolute;
		top: 0;
		right: 0.1rem;
	}

	.inputox {
		width: 5.78rem;
		height: 1.92rem;
		border: 1px solid #e5e7e8;
		background: #fff;
		margin: 0 auto;
		margin-top: 0.68rem;
	}

	.content .footbox {
		width: 4.65rem;
		height: 0.65rem;
		margin: 0 auto;
	}

	.content .tishi {
		width: 1.4rem;
		font-size: 0.25rem;
		margin-top: 0.28rem;
		display: block;
	}
</style>

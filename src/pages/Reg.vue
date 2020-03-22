<template>
	<div>
		<div class="content">
			<UcNav arrow="gray" :borderWidth="0" />

			<h1 id="h1" @click="upload"></h1>
			<input type="file" id="file" style="display: none;">
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
				<Input :msg="'昵称'" v-model.lazy="nikename" />
				<Input :msg="'账号'" v-model.lazy="username" />
				<Input msg='密码' inputtype="password" v-model.lazy="userpass" />
			</div>

			<div class="footbox">
				<br>
				<p class="errcol">
					{{errorMess}}
				</p>
				<Button class="btn1" text="注 册" @click='show' />
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
		name: 'Reg',
		props: {},
		data() {
			return {
				nikename:'',
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

			upload() {
				let file = document.getElementById('file');
				file.click()
			},
			show() {
				
				let fromData = new FormData();// js类型
				fromData.append('username',this.username)
				fromData.append('nikename',this.nikename)
				fromData.append('password',this.userpass)
				let file = document.getElementById('file');
				fromData.append('icon',file.files[0])
				
				
				// axios.post('/api/reg', {
				// 	// username: this.username,
				// 	// password: this.userpass,
				// 	// icon:file.files[0]
				// })
				
				axios({
				  url:'/api/reg',
				  method:'post',
				  data:fromData
				}).then(
					res => {
						if (res.data.err == '0') {
							console.log('注册成功')
							// this.$router.push({name:'login'}) 
							console.log(res.data)
							this.$router.push('/login')
						} else {
							console.log('注册失败', res.data)
							this.errorMess=res.data.msg
						}
						// console.log('注册成功')
						// // this.$router.push({name:'login'}) 
						// this.$router.push('/login')
					}
				)
			},
			// 	goback(){
			// 		// this.$router.go(-1|1)|back()
			// 		this.$router.go(-1)
			// 	}
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
	.btn1{
		margin-top: 1rem;
	}
	/* 	.content .fhbtn {
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
 */
	.content h1 {
		width: 2.18rem;
		height: 1.35rem;
		background: url(../assets/img/say.png) no-repeat 0 0;
		background-size: 100%;
		margin: 0 auto;
		margin-top: 1rem;
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

	.content .login-btn {
		width: 4.65rem;
		height: 0.65rem;
		background: #4c4f50;
		color: #fff;
		text-align: center;
		line-height: 0.65rem;
		border-radius: 8px;
		display: block;
		margin-top: 0.62rem;
		font-size: 0.28rem;
	}

	.content .tishi {
		width: 1.4rem;
		font-size: 0.25rem;
		margin-top: 0.28rem;
		display: block;
	}
</style>

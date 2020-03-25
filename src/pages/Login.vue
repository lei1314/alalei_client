<template>
	<div>
		<div class="content">
			<UcNav arrow="gray" />
			<h1>亲，欢迎登陆</h1>
			<div class="login-box">
				没有阿雷账户？
				<router-link to="/reg" style="color: coral;">立即注册</router-link>		
			</div>
			<div class="inputox">
				<Input :msg="'账号'" v-model.lazy="username"/>
				<Input msg='密码' inputtype="password" v-model.lazy="userpass" />
			</div>
			<div class="footbox">
				<br>
				<br>
				<p class="errcol">
					{{errorMess}}
				</p>
				<Button text="登 录" bgColor="indianred" @click='login' />
				<br>
				<br>
				<a href="javascript:;" class="tishi">忘记密码？</a>	
			</div>
		</div>
	</div>
</template>

<script>
	import UcNav from '../components/uc-nav/uc-nav.vue'
	import Input from '../components/Input.vue'
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
		components: {Button,Input,UcNav},
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
						if (res.data.err === 1) {
							this.errorMess = "***"+res.data.msg
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
		}
	}
</script>

<style scoped>
	.content h1{
		margin-top: .8rem;
		margin-bottom: .3rem;
		margin-left: .5rem;
		font-weight: 100;
		font-size: .6rem;
	}
	.login-box{
		font-size: .3rem;
		color: #92979E;
		margin-left: .5rem;
		margin-bottom: 1rem;
	}
	.inputox{
		margin-left: .2rem;
	}
	.footbox{
		margin-left: .5rem;
	}
	.errcol{
		margin-left: .5rem;
		color: red;
		font-size: .3rem;
	}
</style>

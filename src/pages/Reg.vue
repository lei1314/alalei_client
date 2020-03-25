<template>
	
		<div class="content">
			<UcNav arrow="gray" :borderWidth="0" />
			<h1 id="h1" @click="upload">点击上传</h1>
			<input type="file" id="file" style="display: none;">
			<h2>亲，欢迎注册阿雷账号</h2>
			<div class="login-box">
				若有阿雷账户？
				<router-link to="/login" style="color: coral;">立即登陆</router-link>		
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
				<Button text="注 册" bgColor="indianred" @click='show' />
				<br>
				<br>
				<a href="javascript:;" class="tishi">忘记密码？</a>	
			</div>
		</div>
	
</template>

<script>
	import UcNav from '../components/uc-nav/uc-nav.vue'
	import Input from '../components/Input.vue'
	import Button from '../components/Button.vue'
	export default {
		name: 'Reg',
		data() {
			return {
				nikename:'',
				username: "",
				userpass: "",
				errorMess:''
			}
		},
		components: {Button,Input,UcNav},
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
					}
				)
			}
		}
	}
</script>

<style scoped>
	.content h1 {
		width: 1.5rem;
		height: 1.5rem;
		background-color: #99CC99;
		border-radius: 50%;
		text-align: center;
		line-height: 1.5rem;
		font-weight: 100;
		font-size: .3rem;
		margin: 0 auto;
		margin-top: .6rem;
		color: red;
	}
	.content h2{
		margin-top: .8rem;
		margin-bottom: .3rem;
		margin-left: .5rem;
		font-weight: 100;
		font-size: .4rem;
	}
	.login-box{
		font-size: .3rem;
		color: #92979E;
		margin-left: .5rem;
		margin-bottom: .5rem;
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

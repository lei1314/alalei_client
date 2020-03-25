<template>
		<div class="content">
			<div class="usernav">
				<i class="el-icon-full-screen"></i>
				<i class="el-icon-close" @click="logout"></i>
				<i class="el-icon-user-solid"></i>
			</div>
			<div class="header">
				<h2><img :src="$baseUrl + $store.state.user.user.data.icon" alt="" /></h2>
				<p>{{$store.state.user.user.data.nikename}}</p>
			</div>
			<ul class="listbox">
				<li>
					<span>{{$store.state.user.user.data.follow}}</span>
					<p>关注</p>
				</li>
				<li>
					<span>{{$store.state.user.user.data.fans}}</span>
					
					<p class="end">粉丝</p>
				</li>
				<li>
					<span>{{$store.state.user.user.data.follow}}</span>
					<p class="end">收藏</p>
				</li>
				<li>
					<span>{{$store.state.user.user.data.fans}}</span>
					<p class="end">代金券</p>
				</li>
			</ul>
			<div class="docList">
				<div class="tit"><h3>我的订单</h3><p>查看全部订单<i class="el-icon-arrow-right"></i></p></div>
				
				<ul class="list1">
					<li>
						<i class="el-icon-s-promotion"></i>
						<p>待付款</p>
					</li>
					<li>
						<i class="el-icon-s-flag"></i>
						
						<p class="end">待发货</p>
					</li>
					<li>
						<i class="el-icon-truck"></i>
						<p class="end">待收货</p>
					</li>
					<li>
						<i class="el-icon-s-comment"></i>
						<p class="end">评价</p>
					</li>
					<li>
						<i class="el-icon-s-claim"></i>
						<p class="end">退款/售后</p>
					</li>
				</ul>
			</div>
			<div class="docList">
				<div class="tit"><h3>必备工具</h3><p>查看全部工具<i class="el-icon-arrow-right"></i></p></div>
				
				<ul class="list1 list2">
					<li>
						<i class="el-icon-s-promotion"></i>
						<p>每日返现</p>
					</li>
					<li>
						<i class="el-icon-s-promotion"></i>
						
						<p class="end">领券中心</p>
					</li>
					<li>
						<i class="el-icon-s-promotion"></i>
						<p class="end">闲置换钱</p>
					</li>
					<li>
						<i class="el-icon-s-promotion"></i>
						<p class="end">客服小蜜</p>
					</li>
					<!-- <li>
						<i class="el-icon-s-promotion"></i>
						<p class="end">花呗</p>
					</li>
					<li>
						<i class="el-icon-s-promotion"></i>
						<p>菜鸟驿站</p>
					</li>
					<li>
						<i class="el-icon-s-promotion"></i>
						
						<p class="end">天猫农场</p>
					</li>
					<li>
						<i class="el-icon-s-promotion"></i>
						<p class="end">主题换肤</p>
					</li> -->
					
				</ul>
			</div>
		</div>
</template>

<script>
	import axios from 'axios';
	import store from '../plugins/vuex.js';
	export default {
		beforeRouteEnter(to, from, next) {
			axios({
				url: '/api/user',
			}).then(
				res => {
					if (res.data.err == 0) {
						next(_this => _this.user = res.data.data)
					} else {
						next('/login')
					}
				}
			)
		},
		name: 'User',
		props: {},
		data() {
			return {
				user: {}
			}
		},
		methods: {
			logout() {
				this.$toast.loading({
				  mask: true,
				  message: '即將退出...'
				});
				setTimeout(()=> {
				        //删除 本地 token
				        window.localStorage.removeItem('user')
				         this.$store.commit('user/USER',{err:1})
				        //发送注销请求
				        this.$router.push('/login')
				    }, 2000);
				
				
				// setTimeout({
					
				
				// },3000)
				
			}
		}
	}
</script>

<style scoped>
	.content{
		padding:.1rem .3rem;
		background-color: #F8F8F8;
	}
	.usernav{
		height: 0.8rem;
		font-size: .5rem;
		padding-top: .15rem;
	}
	.usernav i{
		color: #92979E;
		float: right;
		margin-left: .4rem;
	}
	.usernav i:nth-child(1){
		float: left;
		margin-left: 0rem;
	}
	.header{
		height: 1rem;
		width: 100%;
		padding: .3rem 0;
	}
	.header h2 {
		float: left;
		width: 1.02rem;
		height: 1.02rem;
		border-radius: 50%;
	}
	.header h2 img {
		width: 100%;
	}
	.header p{
		float: left;
		margin-left: .6rem;
		line-height: 1rem;font-size: .3rem;
		font-weight: 600;
	}
	.listbox{
		border-radius: .4rem;
		background-color:#fff;
		display: flex;
		text-align: center;
		justify-content: space-around;
		align-items: center;
		padding: .2rem 0 .3rem;
		font-size: .25rem;
	}
	.listbox li span{
		font-weight: 600;
		color: red;
	}
	.listbox li p{
		color: #999;
		padding-top: .1rem;
	}
	.docList{
		background-color: #FFFFFF;
	}
	.tit{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: .2rem 0;
		border-bottom: 1px solid #333;
	}
	.tit h3{
		
		font-size: .35rem;
		font-weight: 100;
	}
	.tit p{
		font-size: .25rem;
		color:#999 ;
	}
	
	.list1{
		display: flex;
		text-align: center;
		justify-content: space-around;
		padding-top: .3rem;
		font-size: .24rem;
	}
	.list1 li i{
		font-size: .6rem;
		color: palevioletred;
		padding-bottom: .15rem;
	}
	.list1 li p{
		color: #999;
	}
	.list2{
		flex-wrap: wrap;
	}
	.list2 li{
		width: 1.3rem;
		height: 1.3rem;
	}
	.list2 li i{
		color: #99A9BF;
	}
	.list2 li p{
		color: #000;
	}
</style>

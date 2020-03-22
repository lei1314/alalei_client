<template>
	<div>
		<Nav />
		<div class="detail"  v-if="detail.title">
			<div class="content">
				<div class="header clear">
					<h2><img :src="detail.detail.auth_icon" alt="" /></h2>
					<p>{{detail.detail.auth}}</p>
				</div>
				<div class="cont">
					<h3>{{detail.detail.des}}</h3>
					<div class="time">
						<p>{{detail.time | date}}<span><img src="../assets/img/zan.png" alt="" /></span></p>
					</div>
					<div class="text-box">{{detail.detail.content}}</div>
				</div>
			</div>
		</div>
		<FrameScreen v-else />
		<uc-toolbar/>
	</div>
</template>

<script>
	import Nav from '../components/uc-nav/uc-nav.vue'
	import UcToolbar from '../components/uc-toolbar.vue'
	import FrameScreen from '../components/FrameScreen.vue'
	import {mapState} from 'vuex'
	export default {
		name: 'Detail',
		props: {},
		data() {
			return {
			
			}
		},
		components: {
			FrameScreen,
			Nav,
			UcToolbar
		},
    mounted() {
   //    this.$axios({
   //      url:`/api/goods/${this.$route.query.apiName}/${this.$route.params._id}`,
   //    }).then(
   //      res=>{
			// // console.log(res.data.data.detail.auth)
			// this.detail = res.data.data.detail
			// }
   //    )
	let apiname=this.$route.query.apiName;
	let _id=this.$route.params._id;
	this.$store.dispatch(`detail/${this.$types.DETAIL}`,{apiname,_id})
	// console.log(mapState('detail',['detail']))
    },
	computed:mapState('detail',['detail']),
    updated() {},
    methods: {},
    filters:{
      date(time){
        
        let fillzero = n => n < 10 ? '0' + n : '' + n;
        
        let d=new Date();
        d.setTime(time)
        let year = d.getFullYear();
        let month = d.getMonth()+1;
        let date = d.getDate();
        let hour = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();
        return `${year}年${fillzero(month)}月${fillzero(date)}日 ${fillzero(hour)}:${fillzero(min)}:${fillzero(sec)}`
      }
    }
  }
</script>

<style scoped>
  html,body{ overflow-x: hidden; }
  .nav{width:100%; position:fixed;top:0;left:0; background:#fff; border-bottom:1px solid #e8eaec; z-index:99;}
  .nav ul{width:6.4rem;height:0.45rem; padding-top:0.15rem; margin:0 auto;}
  .nav ul li{width:0.29rem;height:0.31rem; background:url(../assets/img/history.png) no-repeat 0 0; background-size:100%; margin:0 0 0 0.38rem;}
  
  .content{max-width:6.4rem; margin:0 auto; margin-top:0.6rem; background:#f2f4f5; padding-bottom:0.85rem;}
  .content .header{ padding:0.39rem 0.28rem 0.15rem 0.28rem; height:auto; background: none}
  .header h2{ float:left; margin-right:0.18rem;}
  .header p{ float:left; margin-top:0.18rem; font-size:0.3rem;}
  
  .content .cont{ padding:0 0.38rem; color:#494d4d;}
  .cont h3{ font-size:0.4rem; line-height:0.6rem; padding-bottom:0.25rem; border-bottom:1px solid #494d4d;}
  .cont .time{height:0.24rem; line-height:0.24rem; margin:0.26rem 0; }
  .time p{ float:left;position:relative;}
  .time span{width:0.33rem;height:0.32rem; position:absolute; top:-0.02rem;right:-0.35rem;}
  .time span img{width:100%;height:100%;}
  
  .cont .text-box{ font-size:0.25rem;}
  .text-box p{ line-height:0.45rem; margin-bottom:0.1rem;}
  
</style>

<template>
  <div class="cell" @click="getDetail">
   <!-- <h2><span v-show="index=!null">{{index+1}}.</span>{{data.title}}</h2>
    <p>{{data.des}}</p> -->
	<h2><span v-show="index!=null">{{index + 1}} . </span>{{data.title}}</h2>
	<p>{{data.des}}</p>
  </div>
</template>

<script>
  export default {
    name:'Cell',
    props:{
		data:{
			type:Object,
			required:true,//必传参数
			default:function(){
				return {}
			}
		},
		index:{
			type:Number,
			default:null
		},
		apiName:{
			type:String,
			default:null
		}
	},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{
		getDetail(){
			 if(this.apiName){
				console.log('跳转详情',this.apiName)
				this.$router.push(`/detail/${this.data._id}?apiName=${this.apiName}`);//编程式跳转
				// '路由跳转':'/detail/23423423443?apiname=column'
				// this.$router.push(`/detail/${this.data._id}?apiName=${this.apiName}`)
			}
		}
	}
  }
</script>

<style scoped>
  .cell { color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
  .cell h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
  .cell p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
  .cell{clear: both;/* margin-bottom:1rem; */}
</style>

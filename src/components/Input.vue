<template>
    <div class="lifirst">
    	<input :type="inputtype" :value="value" @input="$emit('input',$event.target.value)"/>
    	<span>{{msg}}</span>
    </div>
</template>

<script>
  export default {
    name:'Input',
    props:{
		msg:{
			type:String,
			default:'标题'
		},
		inputtype:{
			type:String,
			default:'text'
		},
		value:{
			type:String,
			default:''
		}
	},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .lifirst {
  	height: 0.95rem;
  	position: relative;border-bottom: 1px solid #e5e7e8;
  }
  .lifirst input {
  	padding-left: 1.24rem;
  	width: 4.54rem;
  	height: 100%;
  	font-size: 0.4rem;
  }
  
  .lifirst span {
  	width: 1.23rem;
  	height: 0.49rem;
  	position: absolute;
  	top: 0.26rem;
  	left: 0;
  	border-right: 1px solid #676868;
  	color: #676868;
  	font-size: 0.25rem;
  	line-height: 0.49rem;
  	text-align: center;
  }
</style>

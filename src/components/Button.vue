<template>
  <div class="Button">
    <input
		class="login-btn" 
		type="button"
		:value="text"
		:style="{backgroundColor:bgColor}"
		@click="$emit('click')"
	/>
  </div>
</template>

<script>
  export default {
    name:'Button',
    props:{
		text:{
			type:String,
			default:'按钮'
		},
		bgColor:{
			type:String,
			default:'green'
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
  .login-btn{width:4.65rem;height:0.65rem; background:#4c4f50; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
</style>

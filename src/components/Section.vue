<template>
  <div class="Section">
   
    	<a href="#"><img src="/img/x1.png" alt="">同步课</a>
    	<a href="#"><img src="/img/x2.png" alt="">专题课</a>
    	<a href="#"><img src="/img/x3.png" alt="">1对1</a>
    	<a href="#"><img src="/img/x4.png" alt="">讲座</a>
  
  </div>
</template>

<script>
  export default {
    name:'Section',
    props:{},
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
  /*section*/
  .Section {
  	/* padding: .3rem 0; */
  	display: flex;
  	margin-top: .2rem;
  	justify-content: space-around;
  }
  
  .Section a {
  	display: block;
  	font-size: .18rem;
  	color: #92979e;
  	text-align: center;
  }
  
  .Section img {
  	margin: 0 auto;
  	display: block;
  	text-align: center;
  	height: .5rem;
  	padding-bottom: 0.08rem;
  }
</style>

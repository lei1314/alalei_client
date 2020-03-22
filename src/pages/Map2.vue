<template>
	<!-- 404 -->
  <div class="Map2">
   
   <div id="allmap" style="height: 300px;"></div>
   <hr>
   <br>
   <input type="text" v-model="ipt" class="ipt"><br>
   <input type="button" value="查询" @click="search" class="btn1">
   
   
	   
   </div>
  

</template>

<script>
  export default {
    name:'Map2',
    props:{},
    data(){
      return {
         ipt:''
      }
    },
    components:{},
    mounted(){
		
		// 百度地图API功能
		 //实例化BMap
			this.map = new BMap.Map("allmap");
			// 创建点坐标 
			this.point = new BMap.Point(108.8824248300,34.2239824800);
			 // 初始化地图，设置中心点坐标和地图级别 
			this.map.centerAndZoom(this.point, 20);
			// this.marker = new BMap.Marker(point);  // 创建标注
			// this.map.addOverlay(marker);               // 将标注添加到地图中
			// this.marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
			this.addMarker()
		
	},
    updated(){},
    methods:{
		addMarker(){
		  this.marker = new BMap.Marker(this.point);
		  this.map.addOverlay(this.marker)//添加覆盖物
		  this.marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
		},
		
		search(){
		  
		  // var circle = new BMap.Circle(this.point,1000,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
		  // this.map.addOverlay(circle);
		  
		  //清除覆盖物
		  this.map.clearOverlays();
		  
		  var local =  new BMap.LocalSearch(this.map, {renderOptions: {map: this.map, autoViewport: false}});  
		  local.searchNearby(this.ipt,this.point,1000);
		  
		  this.addMarker()
		  
		}
	}
  }
</script>

<style scoped>
  .Map2{
	  	margin-top: 1.5rem;
  }
  .ipt{
	 border: 1px solid red;
	 display: block;
	 height: .5rem;
	 }
	 
	 .btn1{
		 background-color: #0000EE;
		 height: .5rem;
		 width: 1rem;
	 }

</style>

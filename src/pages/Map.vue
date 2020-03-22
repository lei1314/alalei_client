<template>
	<!-- 404 -->
  <div class="Map">
   
   <!-- <div id="allmap" style="height: 300px;"></div> -->
<div id="panorama"></div>
	<div id="info"><p>拖动地图查看位置、视角变化</p></div>
	<div id="svInfoText"></div>
  </div>
</template>

<script>
  export default {
    name:'Map',
    props:{},
    data(){
      return {
         ipt:'餐厅'
      }
    },
    components:{},
    mounted(){
		
		// // 百度地图API功能
		 //实例化BMap
			// this.map = new BMap.Map("allmap");
			// // 创建点坐标 
			// this.point = new BMap.Point(116.404, 39.915);
			//  // 初始化地图，设置中心点坐标和地图级别 
			// this.map.centerAndZoom(this.point, 20);
			// this.marker = new BMap.Marker(point);  // 创建标注
			// this.map.addOverlay(marker);               // 将标注添加到地图中
			// this.marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
			// this.addMarker()
		
		
			var panorama = new BMap.Panorama('panorama');
			panorama.setPosition(new BMap.Point(34.2239824800,108.8824248300));
			panorama.addEventListener('position_changed', function(e){ //全景位置改变事件
			   panoramaCallBack(e);
			});
			panorama.addEventListener('pov_changed', function(e){ //全景视角改变事件
				panoramaCallBack(e);
			});
			function panoramaCallBack(e){ //事件回调函数
				if (e.type == 'onpov_changed') { 
					document.getElementById('svInfoText').innerHTML="全景视角为：<br/>"+"水平视角："+panorama.getPov().heading+"<br/>垂直视角："+panorama.getPov().pitch;
				}
				else if (e.type=='onposition_changed') {
					document.getElementById('svInfoText').innerHTML="全景位置点为："+panorama.getPosition().lng+","+panorama.getPosition().lat;
				}
			}
		
	},
    updated(){},
    methods:{
		// addMarker(){
		//   this.marker = new BMap.Marker(this.point);
		//   this.map.addOverlay(this.marker)//添加覆盖物
		//   this.marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
		// },
		
		// search(){
		  
		//   // var circle = new BMap.Circle(this.point,1000,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
		//   // this.map.addOverlay(circle);
		  
		//   //清除覆盖物
		//   this.map.clearOverlays();
		  
		//   var local =  new BMap.LocalSearch(this.map, {renderOptions: {map: this.map, autoViewport: false}});  
		//   local.searchNearby(this.ipt,this.point,1000);
		  
		//   this.addMarker()
		  
		// }
	}
  }
</script>

<style scoped>
  .Map{
	  	margin-top: 1.5rem;
  }
  body, html,#allmap {width: 100%;height: 100%;margin:0;font-family:"微软雅黑";font-size:14px;}
  		#panorama {width:100%; height: 500px; overflow: hidden;}
  		#svInfoText {width:100%;}
  		#info p{margin:5px 0;}
</style>

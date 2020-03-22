<template>
	<!-- 404 -->
  <div class="Map3">
   
   <div id="panorama"></div>
     <div id="result">
     </div>
   </div>
  

</template>

<script>
  export default {
    name:'Map3',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){
		  var panorama = new BMap.Panorama('panorama');
		  panorama.setPosition(new BMap.Point(116.403925,39.913903));//坐标点在天安门
		
		  var labelPosition = new BMap.Point(116.403925,39.913903);
		  var labelOptions = {
		      position: labelPosition,
		      altitude: 2
		  };//设置标注点的经纬度位置和高度
		  var label = new BMap.PanoramaLabel('天安门', labelOptions);
		  panorama.addOverlay(label);//在全景地图里添加该标注
		  panorama.setPov(label.getPov()); //修改点的视角，朝向该label
		
		  label.addEventListener('click', function() { //给标注点注册点击事件
		    panorama.setPov({  //修改点的视角
		      pitch: 10, 
		      heading: 14
		    });
		  });
		
	},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .Map3{
	  	margin-top: 1.5rem;
  }
 body, html{width: 100%;height: 100%;margin:0;font-family:"微软雅黑";}
    #panorama {width:100%; height: 500px;}
    #result {width:100%;font-size:12px;}
</style>

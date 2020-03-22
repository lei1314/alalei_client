<template>
	<!-- 曲线图 折线图 -->
	<div class="Cropuis">
		<h2 style="text-align: center;color: orangered;">空氣質量統計</h2>
		<h3 id="map" style="height:300px;"></h3>
		<br>
		 <p class="op" v-show="title">{{title}}</p>
	</div>
</template>

<script>
	//整体引入
	import echarts from 'echarts'
	import axios from 'axios';
	//按需引入

	// // 引入 ECharts 主模块
	// import echarts from 'echarts/lib/echarts';

	// // 引入柱状图
	// import 'echarts/lib/chart/bar'
	// import 'echarts/lib/component/title'
	// import 'echarts/lib/component/tooltip'

	export default {
		name: 'Cropuis',
		props: {},
		data() {
			return {
				title:'',
				option: {
					backgroundColor: '#404a59',
					color: [
						'#dd4444', '#fec42c', '#80F1BE'
					],
					legend: {
						top: 10,
						data: ['北京', '上海', '广州'],
						textStyle: {
							color: '#fff',
							fontSize: 16
						}
					},
					grid: {
						left: '10%',
						right: 150,
						top: '18%',
						bottom: '10%'
					},
					tooltip: {
						padding: 10,
						backgroundColor: '#222',
						borderColor: '#777',
						borderWidth: 1,
					},
					xAxis: {
						type: 'value',
						name: '日期',
						nameGap: 16,
						nameTextStyle: {
							color: '#fff',
							fontSize: 14
						},
						max: 31,
						splitLine: {
							show: false
						},
						axisLine: {
							lineStyle: {
								color: '#eee'
							}
						}
					},
					yAxis: {
						type: 'value',
						name: 'AQI指数',
						nameLocation: 'end',
						nameGap: 20,
						nameTextStyle: {
							color: '#fff',
							fontSize: 16
						},
						axisLine: {
							lineStyle: {
								color: '#eee'
							}
						},
						splitLine: {
							show: false
						}
					},
					visualMap: [{
							left: 'right',
							top: '10%',
							dimension: 2,
							min: 0,
							max: 250,
							itemWidth: 30,
							itemHeight: 120,
							calculable: true,
							precision: 0.1,
							text: ['圆形大小：PM2.5'],
							textGap: 30,
							textStyle: {
								color: '#fff'
							},
							inRange: {
								symbolSize: [10, 70]
							},
							outOfRange: {
								symbolSize: [10, 70],
								color: ['rgba(255,255,255,.2)']
							},
							controller: {
								inRange: {
									color: ['#c23531']
								},
								outOfRange: {
									color: ['#444']
								}
							}
						},
						{
							left: 'right',
							bottom: '5%',
							dimension: 6,
							min: 0,
							max: 50,
							itemHeight: 120,

							precision: 0.1,
							text: ['明暗：二氧化硫'],
							textGap: 30,
							textStyle: {
								color: '#fff'
							},
							inRange: {
								colorLightness: [1, 0.5]
							},
							outOfRange: {
								color: ['rgba(255,255,255,.2)']
							},
							controller: {
								inRange: {
									color: ['#c23531']
								},
								outOfRange: {
									color: ['#444']
								}
							}
						}
					],
					series: [{
							name: '北京',
							type: 'scatter',
							itemStyle: '',
							data: ''
						},
						{
							name: '上海',
							type: 'scatter',
							itemStyle: '',
							data: ''
						},
						{
							name: '广州',
							type: 'scatter',
							itemStyle: "",
							data: ''
						}
					]
				}
			}

		},
		components: {},
		mounted() {
			//实例化echarts
			let instance = echarts.init(document.getElementById('map'), ''); //第二个参数高亮



			instance.setOption(this.option) //渲染空轴

			instance.showLoading() //显示loading

			// 指定图表的配置项和数据


			axios({
				url: '/data/cropuis.json'
			}).then(
				res => {
					setTimeout(() => {
						// console.log(res.data.dataBJ)

						instance.hideLoading()


						instance.setOption({
							tooltip: {
								formatter: function(obj) {
									var value = obj.value;
									return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
										obj.seriesName + ' ' + value[0] + '日：' +
										value[7] +
										'</div>' +
										res.data.schema[1].text + '：' + value[1] + '<br>' +
										res.data.schema[2].text + '：' + value[2] + '<br>' +
										res.data.schema[3].text + '：' + value[3] + '<br>' +
										res.data.schema[4].text + '：' + value[4] + '<br>' +
										res.data.schema[5].text + '：' + value[5] + '<br>' +
										res.data.schema[6].text + '：' + value[6] + '<br>';
								}
							},
							series: [{
									name: '北京',
									type: 'scatter',
									itemStyle: res.data.itemStyle,
									data: res.data.dataBJ
								},
								{
									name: '上海',
									type: 'scatter',
									itemStyle: res.data.itemStyle,
									data: res.data.dataSH
								},
								{
									name: '广州',
									type: 'scatter',
									itemStyle: res.data.itemStyle,
									data: res.data.dataGZ
								}
							]



						})
					}, 2000)
				})

			//添加事件
			instance.on('click', (params) => {
				console.log(params.seriesName, params.data[7]);
				this.title = params.seriesName+'----'+params.data[7]
			})
		},
		updated() {},
		methods: {}
	}
</script>

<style>
	.Cropuis {
		margin-top: 1.5rem;
	}
	.op{
	
		font-size: .6rem;
		color: red;
		text-align: center;
		line-height: .6rem;
		background-color: #0086B3;
	}
</style>

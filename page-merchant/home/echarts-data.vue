<template>
	<!-- 店铺数据走势 -->
	<view class="t-hairdres-merchant-echarts-data">
		<Card>
			<view class="title">
				<text>店铺流量概念 <text class="nomorl">近7天</text></text>
			</view>
			<view class="list-type">
				<view @click="active = 0" :class="{active: active === 0}" class="item">
					<text>访问次数</text>
					<text>16.812</text>
					<text>较上7天  +30%</text>
				</view>
				<view @click="active = 1" :class="{active: active === 1}" class="item">
					<text>购买次数</text>
					<text>16.812</text>
					<text>较上7天  +30%</text>
				</view>
				<view @click="active = 2" :class="{active: active === 2}" class="item">
					<text>消费次数</text>
					<text>16.812</text>
					<text>较上7天  +30%</text>
				</view>
			</view>
			<view class="title">
				<text>访问次数走势 <text class="nomorl">近7天</text></text>
			</view>
			<view class="canvas">
				<uni-ec-canvas class="uni-ec-canvas" id="line-chart" ref="canvas" canvas-id="lazy-load-chart" :ec="ec"></uni-ec-canvas>
			</view>
		</Card>
	</view>
</template>

<script>
	import uniEcCanvas from '../components/uni-ec-canvas/uni-ec-canvas.vue'  
	import Card from '@/components/Card'
	import * as echarts from '../components/uni-ec-canvas/echarts'
	let chart = null
	export default {
		components: {
			Card,
			uniEcCanvas
		},
		data () {
			return {
				active: 0,
				ec: {
				  lazyLoad: true
				},
				option: {
				  tooltip: {
				    trigger: 'axis',
				    formatter: '{b}\r\n{c0}人',
				    axisPointer: {
				      type: 'line',
				      axis: 'x',
				      label: {
				        backgroundColor: '#000000'
				      }
				    }
				  },
				  grid: {
				    top: '10%',
					left: '10%',
				    bottom: '10%'
				  },
				  xAxis: {
				    type: 'category',
				    boundaryGap: false,
				    data: ['2-12', '2-14', '2-16', '2-18', '2-20', '2-22', '2-24'],
				    axisLine: {
				      // y轴
				      show: true
				    },
				    axisTick: {
				      // y轴刻度线
				      show: false
				    },
				    splitLine: {
				      // 网格线
				      show: false
				    }
				  },
				  yAxis: {
				    type: 'value',
				    axisLine: {
				      // y轴
				      show: true
				    },
				    axisTick: {
				      // y轴刻度线
				      show: false
				    },
				    splitLine: {
				      // 网格线
				      show: true
				    }
				  },
				  series: [{
				    name: '浏览量',
				    type: 'line',
				    smooth: true,
				    lineStyle: {
				      color: '#EF5959'
				    },
				    data: [120, 132, 101, 134, 90, 230, 210]
				  }]
				}
			}
		},
		methods: {
		  initChart(canvas, width, height, canvasDpr) {
		    console.log(canvas, width, height, canvasDpr)
		    chart = echarts.init(canvas, null, {
		      width: width,
		      height: height,
		      devicePixelRatio: canvasDpr
		    })
		    canvas.setChart(chart)
		    chart.setOption(this.option)
		    return chart
		  },
		},
		onUnload() {
		  chart = null
		},
		onLoad() {
		  this.$refs.canvas.init(this.initChart)
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-echarts-data {
		.canvas {
			height: 400rpx;
			width: 100%;
			.uni-ec-canvas{
			    width:100%;
			    height:100%;
			    display:block;
			}
		}
		.list-type {
			display: flex;
			margin:  32rpx -16rpx;
			.item {
				flex: 1;
				border-radius: 10rpx;
				background: #ffcfcf;
				margin: 0 16rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 24rpx;
				color: #FFFFFF;
				padding: 32rpx 0;
				transition: 0.3s;
				transform: scale(0.95);
				text {
					&:nth-child(2) {
						font-weight: bold;
						font-size: 36rpx;
						margin: 8rpx 0;
					}
				}
			}
			.active {
				transform: scale(1.05);
				transition: 0.3s;
				background: #fc689a;
			}
		}
		.title {
			font-size: 28rpx;
			font-weight: bold;
			
			.nomorl {
				font-size: 24rpx;
				font-weight: 500;
				margin-left: 32rpx;
			}
		}
	}
</style>

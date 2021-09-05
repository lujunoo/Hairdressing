<template>
	<!-- 活动效果 -->
	<view class="t-hairdres-merchant-effect">
		<Card>
			<view class="product">
				<image src="https://cdn.pixabay.com/photo/2021/08/01/12/58/beach-6514331_960_720.jpg" mode="aspectFill"></image>
				<view class="info">
					<text class="title">华蔻烫染【时尚烫染】施华蔻烫染直3选1</text>
					<text class="color-theme">¥185.00 <text class="oldprice">¥185.00</text></text>
					<view class="price">
						<text>所有客户<text class="color-red">- ¥25.00</text></text>
						<text>已售<text class="color-yellow">25</text></text>
					</view>
				</view>
			</view>
		</Card>
		<Card>
			<view class="content">
				<text class="string">100份</text>
				<text class="string">立减订单累计销量</text>
				<text class="string">立减订单销售量占比</text>
				<view class="scale">
					<uni-ec-canvas class="uni-ec-canvas" id="line-chart" ref="canvas" canvas-id="lazy-load-chart" :ec="ec"></uni-ec-canvas>
				</view>
				<view class="legend">
					<text>立减销量</text>
					<text>普通销量</text>
				</view>
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import uniEcCanvas from '../components/uni-ec-canvas/uni-ec-canvas.vue'
	import * as echarts from '../components/uni-ec-canvas/echarts'
	let chart = null
	export default {
		components: {
			Card,
			uniEcCanvas
		},
		data () {
			return {
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
	.t-hairdres-merchant-effect {
		font-size: 24rpx;
		line-height: 1;
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			.string {
				&:first-child {
					font-size: 36rpx;
					color: #fc6968;
					font-weight: bold;
					margin: 60rpx 0 24rpx 0;
				}
				&:nth-child(2) {
					width: 600rpx;
					text-align: center;
					padding-bottom: 32rpx;
					margin-bottom: 32rpx;
					border-bottom: solid 2rpx #eee;
				}
				&:nth-child(3) {
					margin-bottom: 50rpx;
				}
			}
			.legend {
				width: 620rpx;
				display: flex;
				justify-content: space-around;
				margin-bottom: 150rpx;
				
				text {
					position: relative;
					padding-left: 90rpx;
					&::after {
						content: '';
						width: 70rpx;
						height: 24rpx;
						background: #fcbc68;
						position: absolute;
						top: 0;
						left: 0;
					}
					&:first-child {
						&::after {
							background: #fc6968;
						}
					}
				}
			}
		}
		.scale {
			width: 300rpx;
			height: 300rpx;
			margin-bottom: 50rpx;
			border: solid 2rpx #eee;
			.uni-ec-canvas{
			    width:100%;
			    height:100%;
			    display:block;
			}
		}
		.product {
			display: flex;
			align-items: center;
			image {
				width: 170rpx;
				height: 120rpx;
				display: block;
				border-radius: 10rpx;
				margin-right: 24rpx;
			}
			.info {
				flex: 1;
				min-height: 120rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.title {
					font-weight: bold;
				}
				
				.color-theme {
					font-weight: bold;
					font-size: 28rpx;
					.oldprice {
						font-weight: 500;
						margin-left: 32rpx;
					}
				}
				.price {
					display: flex;
					justify-content: space-between;
					align-items: center;
					.color-red {
						margin-left: 24rpx;
					}
				}
			}
		}
	}
</style>

<template>
	<!-- 商家端-首页 -->
	<view class="t-hairdres-merchant-home">
		<view class="t-home-header">
			<view @click="verification" class="item">
				<text class="iconfont">&#xe60d;</text>
				<text>输码验证</text>
			</view>
			<view @click="scanCode" class="item">
				<text class="iconfont">&#xe61b;</text>
				<text>扫码验证</text>
			</view>
			<view @click="recode" class="item">
				<text class="iconfont">&#xe630;</text>
				<text>验证记录</text>
			</view>
		</view>
		<Card>
			<Title class="t-home-title" title='订单统计'/>
			<view class="list-item">
				<view class="item">
					<text>195</text>
					<text>今日</text>
				</view>
				<view class="item">
					<text>195</text>
					<text>昨日</text>
				</view>
				<view class="item">
					<text>195</text>
					<text>本月</text>
				</view>
				<view class="item">
					<text>195</text>
					<text>上月</text>
				</view>
				<view class="item">
					<text>195</text>
					<text>今年</text>
				</view>
				<view class="item">
					<text>195</text>
					<text>去年</text>
				</view>
				<view class="item">
					<text>195</text>
					<text>全部</text>
				</view>
			</view>
		</Card>
		<Card>
			<Title @onClick="incomeStatistics" class="t-home-title" showLeft title='收入统计'/>
			<view class="list-item">
				<view class="item">
					<text>195</text>
					<text>今日</text>
				</view>
				<view class="item">
					<text>195</text>
					<text>昨日</text>
				</view>
				<view class="item">
					<text>195</text>
					<text>本月</text>
				</view>
				<view class="item">
					<text>195</text>
					<text>上月</text>
				</view>
				<view class="item">
					<text>195</text>
					<text>今年</text>
				</view>
				<view class="item">
					<text>195</text>
					<text>去年</text>
				</view>
				<view class="item">
					<text>195</text>
					<text>全部</text>
				</view>
			</view>
		</Card>
		<Card>
			<Title @onClick="echartsData" class="t-home-title" showLeft title='店铺流量'/>
			<view class="list-item list-item2">
				<view class="item">
					<text>195</text>
					<text>访问次数</text>
				</view>
				<view class="item">
					<text>195</text>
					<text>购买次数</text>
				</view>
				<view class="item">
					<text>195</text>
					<text>到店消费次数</text>
				</view>
			</view>
		</Card>
		<view class="tabBar">
			<view class="item">
				<text class="iconfont">&#xe620;</text>
				<text>首页</text>
			</view>
			<view @click="toPersonal" class="item">
				<text class="iconfont">&#xe63b;</text>
				<text>我的</text>
			</view>
		</view>
		<!-- 输码验证 -->
		<Dialog ref="codeDialog" @onConfirm="orderDetail" maskClose cancelHide title="输入验码">
			<input slot="body"  class="codeDialog" type="text" value="" placeholder="请输入券码" />
		</Dialog>
		<!-- 转让后首次登录提醒 -->
		<Dialog ref="topicDialog" maskClose cancelHide @onConfirm="onConfirm" desc="为您保障你的账户正常使用，请立即前往修改商家信息及提现银行卡账号！！"></Dialog>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Title from '@/components/Title'
	import Dialog from '@/components/Dialog'
	export default {
		components: {
			Card,
			Title,
			Dialog
		},
		mounted () {
			this.$refs.topicDialog.show()
		},
		methods: {
			verification () {
				this.$refs.codeDialog.show()
			},
			recode () {
				uni.navigateTo({
					url:'./verification-record'
				})
			},
			scanCode () {
				uni.scanCode({
				    onlyFromCamera: true,
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
				    }
				});
			},
			toPersonal () {
				uni.navigateTo({
					url:'../personal/index'
				})
			},
			incomeStatistics () {
				uni.navigateTo({
					url:'./income-statistics'
				})
			},
			echartsData () {
				uni.navigateTo({
					url:'./echarts-data'
				})
			},
			orderDetail () {
				uni.navigateTo({
					url:'../../user/order/order-detail'
				})
			},
			onConfirm () {
				uni.navigateTo({
					url:'../../user/settlein/merchant'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-home {
		padding-bottom: 100rpx;
		font-size: 24rpx;
		line-height: 1;
		.codeDialog {
			border: dashed 4rpx #fc689a;
			margin: 0 40rpx;
			font-size: 24rpx;
			padding: 16rpx;
			border-radius: 10rpx;
		}
		.tabBar {
			width: 100%;
			height: 100rpx;
			position: fixed;
			bottom: 0;
			left: 0;
			background: #fff;
			display: flex;
			justify-content: space-around;
			align-items: center;
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: #666;
				.iconfont {
					font-size: 48rpx;
				}
				&:first-child {
					color: #fc6968;
					.iconfont {
						transform: scale(1.1);
					}
				}
			}
		}
		.t-home-title {
			margin-top: -32rpx;
		}
		.list-item {
			display: flex;
			flex-wrap: wrap;
			margin-bottom: -24rpx;
			.item {
				width: 25%;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-bottom: 32rpx;
				text {
					font-size: 28rpx;
					font-weight: bold;
					margin-bottom: 16rpx;
					&:last-child {
						font-weight: 500;
						margin-bottom: 0;
					}
				}
			}
		}
		.list-item2 {
			.item {
				flex: 1;
			}
		}
		.t-home-header {
			height: 260rpx;
			background: #fc689a;
			color: #fff;
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin-bottom: -120rpx;
			.item {
				display:flex;
				flex-direction: column;
				align-items: center;
				margin-bottom: 90rpx;
				.iconfont {
					font-size: 56rpx;
					margin-bottom: 16rpx;
				}
				&:last-child {
					.iconfont {
						font-weight: bold;
					}
				}
				&:first-child {
					.iconfont {
						transform: scale(1.3);
					}
				}
			}
		}
	}
</style>

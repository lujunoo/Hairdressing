<template>
	<!-- 用户中心 -->
	<view class="t-hairdres-user">
		<!-- 顶部 -->
		<view class="header" :style="{paddingTop: statusBarHeight + 'px'}">
			<text class="button" :style="{top: (statusBarHeight + 50) + 'px'}">实名认证</text>
			<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill">
			</image>
			<text class="name">用户呢称</text>
			<text class="tel">17827638993</text>
			<view class="tab-menu">
				<view @click="toRouter(0)" class="item">
					<text class="iconfont">&#xef20;</text>
					<text>订单</text>
				</view>
				<view @click="toRouter(1)" class="item">
					<text class="iconfont">&#xe646;</text>
					<text>收藏</text>
				</view>
				<view @click="toRouter(2)" class="item">
					<text class="iconfont">&#xe717;</text>
					<text>浏览</text>
				</view>
				<view @click="toRouter(3)" class="item">
					<text class="iconfont">&#xe615;</text>
					<text>消息</text>
				</view>
			</view>
		</view>
		<!-- 我的钱包 -->
		<Card>
			<view class="user-title noneBorder">
				<view class="left">
					<image src="../../../static/images/user-icon1.png" mode="aspectFill"></image>
					<text>我的钱包</text>
				</view>
				<view @click="toWallet" class="right">
					<text class="more">查看更多</text>
					<text class="iconfont">&#xe64c;</text>
				</view>
			</view>
			<view class="user-wallet">
				<view class="nalance">
					<text>余额</text>
					<text class="color-theme">¥134</text>
				</view>
				<view class="button">
					<text @click="toRecharge">充值</text>
					<text @click="toWithdraw">提现</text>
				</view>
			</view>
		</Card>
		<view class="user-desc">
			<text>生产消费</text>
			<text class="iconfont">&#xe60b;</text>
		</view>
		<Card>
			<view @click="toInvite" class="user-title">
				<view class="left">
					<image src="../../../static/images/user-icon2.png" mode="aspectFill"></image>
					<text>邀请新人</text>
				</view>
			</view>
			<view @click="toIntegral" class="user-title">
				<view class="left">
					<image src="../../../static/images/user-icon3.png" mode="aspectFill"></image>
					<text>积分收益</text>
				</view>
			</view>
		</Card>
		<view class="user-desc">
			<text>更多</text>
		</view>
		<Card>
			<view class="user-title">
				<view class="left">
					<image src="../../../static/images/user-icon4.png" mode="aspectFill"></image>
					<text>我的预约</text>
				</view>
			</view>
			<view class="user-title">
				<view class="left">
					<image src="../../../static/images/user-icon5.png" mode="aspectFill"></image>
					<text>我的发型</text>
				</view>
			</view>
			<view class="user-title">
				<view class="left">
					<image src="../../../static/images/user-icon6.png" mode="aspectFill"></image>
					<text>入驻品台</text>
				</view>
			</view>
			<view class="user-title">
				<view class="left">
					<image src="../../../static/images/user-icon7.png" mode="aspectFill"></image>
					<text>设置</text>
				</view>
			</view>
			<view class="user-title">
				<view class="left">
					<image src="../../../static/images/user-icon8.png" mode="aspectFill"></image>
					<text>联系客服 </text>
				</view>
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	export default {
		components: {
			Card
		},
		data() {
			return {
				statusBarHeight: getApp().globalData.statusBarHeight
			};
		},
		methods: {
			toWallet () {
				uni.navigateTo({
					url: '../wallet/index'
				})
			},
			toRecharge () {
				uni.navigateTo({
					url: '../wallet/recharge'
				})
			},
			toWithdraw () {
				uni.navigateTo({
					url: '../wallet/withdraw'
				})
			},
			toInvite () {
				uni.navigateTo({
					url: '../invite/index'
				})
			},
			toIntegral () {
				uni.navigateTo({
					url: '../integral/index'
				})
			},
			toRouter(index) {
				switch (index) {
					case 0:
						uni.navigateTo({
							url: '../order/order-list'
						})
						break;
					case 1:
						uni.navigateTo({
							url: '../collect/index'
						})
						break;
					case 2:
						uni.navigateTo({
							url: '../history/index'
						})
						break;
					case 3:
						uni.navigateTo({
							url: '../message/index'
						})
						break;
					default:
						break;
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user {
		.user-desc {
			font-size: 28rpx;
			font-weight: bold;
			padding: 0 32rpx;

			.iconfont {
				color: #fc689a;
				margin-left: 24rpx;
			}
		}

		.user-wallet {
			.nalance {
				font-size: 24rpx;
				text-align: center;
				padding: 24rpx 0 32rpx 0;

				.color-theme {
					font-size: 48rpx;
				}
			}

			.button {
				display: flex;
				justify-content: space-around;

				text {
					line-height: 1;
					font-size: 24rpx;
					padding: 16rpx 40rpx;
					border-radius: 10rpx;
					background: #fc689a;
					color: #FFFFFF;

					&:last-child {
						background: #ff5af5;
					}
				}
			}
		}

		.user-title {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-bottom: 24rpx;
			margin-bottom: 24rpx;
			border-bottom: solid 2rpx #eee;

			&:last-child {
				border: none;
				padding-bottom: 0;
				margin-bottom: 0;
			}

			.left {
				display: flex;
				align-items: center;

				image {
					display: block;
					width: 50rpx;
					height: 50rpx;
					margin-right: 24rpx;
				}

				text {
					font-size: 28rpx;
					font-weight: bold;
				}
			}

			.right {
				display: flex;
				align-items: center;

				.more {
					font-size: 24rpx;
					color: #999999;
				}
			}
		}

		.noneBorder {
			border: none;
			padding-bottom: 0;
			margin-bottom: 0;
		}

		.header {
			height: 450rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-image: linear-gradient(180deg,
					#fc689a 0%,
					#ffb16f 100%);
			font-size: 28rpx;
			color: #FFFFFF;
			line-height: 1;
			position: relative;

			.button {
				position: absolute;
				top: 180rpx;
				right: 32rpx;
				background: #ffbd55;
				padding: 8rpx 16rpx;
				border-radius: 8rpx;
			}

			image {
				width: 80rpx;
				height: 80rpx;
				border-radius: 80rpx;
				margin-top: 100rpx;
			}

			.name {
				font-weight: bold;
				margin: 16rpx 0;
			}

			.tab-menu {
				width: 100%;
				display: flex;
				justify-content: space-evenly;
				margin-top: 56rpx;

				.item {
					display: flex;
					flex-direction: column;
					align-items: center;

					.iconfont {
						font-size: 48rpx;
						margin-bottom: 16rpx;
					}

					&:nth-child(2) {
						.iconfont {
							transform: scale(1.1);
						}
					}

					&:nth-child(3) {
						.iconfont {
							transform: scale(1.4);
						}
					}
				}
			}
		}
	}
</style>

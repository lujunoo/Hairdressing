<template>
	<!-- 我的钱包 -->
	<view class="t-hairdres-user-wallet">
		<view class="user-wallet-header" :style="{paddingTop: statusBarHeight + 'px'}">
			<view class="titleBar">
				<text @click="goHistory" class="iconfont">&#xe6ab;</text>
				<text>我的钱包</text>
				<text class="iconfont"></text>
			</view>
			<text class="balance">¥134</text>
			<text class="balance-text">余额</text>
			<view class="button-group">
				<text @click="toRecharge">充值</text>
				<text @click="toWithdraw">提现</text>
			</view>
		</view>
		<Card class="user-wallet-card">
			<view @click="toRouter(1)" class="list-item">
				<view class="left">
					<text class="iconfont">&#xe6ba;</text>
					<text>交易记录</text>
				</view>
				<text class="iconfont">&#xe64c;</text>
			</view>
			<view @click="toRouter(2)" class="list-item">
				<view class="left">
					<text class="iconfont">&#xe61a;</text>
					<text>银行卡</text>
				</view>
				<text class="iconfont">&#xe64c;</text>
			</view>
			<view @click="toRouter(3)" class="list-item">
				<view class="left">
					<text class="iconfont">&#xe62a;</text>
					<text>设置支付密码</text>
				</view>
				<text class="iconfont">&#xe64c;</text>
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
			goHistory() {
				uni.navigateBack()
			},
			toRouter(type) {
				switch (type) {
					case 1:
						uni.navigateTo({
							url: './transaction-record'
						})
						break;
					case 2:
						uni.navigateTo({
							url: './bank-card'
						})
						break;
					case 3:
						uni.navigateTo({
							url: './setpassword'
						})
						break;
					default:
						break;
				}
			},
			toRecharge() {
				uni.navigateTo({
					url: '../wallet/recharge'
				})
			},
			toWithdraw() {
				uni.navigateTo({
					url: '../wallet/withdraw'
				})
			},
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-wallet {
		.user-wallet-card {
			transform: translateY(-180rpx);
			padding-top: 48rpx;

			.list-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #333333;
				border-bottom: solid 2rpx #eee;
				padding-bottom: 32rpx;
				margin-bottom: 32rpx;

				&:last-child {
					border: none;
					margin-bottom: 0;
				}

				.left {
					font-size: 28rpx;
					display: flex;
					align-items: center;

					.iconfont {
						color: #fc689a;
						font-size: 40rpx;
						margin-right: 24rpx;
					}
				}
			}
		}

		.user-wallet-header {
			height: 520rpx;
			background-image: linear-gradient(180deg, #ff8eb4 0%, #ff7be7 100%);

			.button-group {
				display: flex;
				justify-content: space-evenly;
				margin-top: 50rpx;

				text {
					color: #fc689a;
					font-size: 24rpx;
					line-height: 1;
					padding: 16rpx 48rpx;
					background: #FFFFFF;
					border-radius: 10rpx;

					&:last-child {
						color: #ff5af4;
					}
				}
			}

			.balance {
				text-align: center;
				font-size: 60rpx;
				color: #FFFFFF;
				display: block;
				line-height: 1;
				margin-top: 32rpx;
				margin-bottom: 24rpx;
			}

			.balance-text {
				font-size: 28rpx;
				color: #FFFFFF;
				text-align: center;
				display: block;
				line-height: 1;
			}

			.titleBar {
				display: flex;
				height: 75rpx;
				align-items: center;
				justify-content: space-between;
				color: #FFFFFF;
				font-size: 36rpx;

				.iconfont {
					display: inline-block;
					width: 75rpx;
					height: 75rpx;
					text-align: center;
					line-height: 75rpx;
					transform: rotate(180deg);
					font-size: 40rpx;
				}
			}
		}
	}
</style>

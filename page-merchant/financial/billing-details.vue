<template>
	<!-- 账单明细 -->
	<view class="t-hairdres-merchant-billing-details">
		<Card>
			<view class="list-item">
				<view class="count">
					<text class="font-weight">13128.63</text>
					<text>支付成功</text>
				</view>
				<text @click="toStatus" >查看进度<text class="iconfont">&#xe64c;</text></text>
			</view>
			<view class="list-item">
				<view class="count">
					<view class="item">
						<text>支付时间</text>
						<text>2021-03-01 15:32:57</text>
					</view>
					<view class="item">
						<text>状态</text>
						<text>支付成功</text>
					</view>
					<view class="item">
						<text>结算周期</text>
						<text>2021-03-01至2021-03-31</text>
					</view>
				</view>
			</view>
		</Card>
		<Card>
			<view @click="platform" class="list-item">
				<text>平台收入</text>
				<text>13,128.63元<text class="iconfont">&#xe64c;</text></text>
			</view>
			<view class="list-item">
				<text>退款</text>
				<text>13,128.63元</text>
			</view>
			<view class="list-item">
				<text>平台技术服务费</text>
				<text>13,128.63元</text>
			</view>
			<view class="list-item">
				<text>营销扣款</text>
				<text>13,128.63元</text>
			</view>
			<view class="list-item">
				<text>分佣费</text>
				<text>13,128.63元</text>
			</view>	
			<view class="list-item">
				<text>结算价</text>
				<text>13,128.63元</text>
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
		methods: {
			platform () {
				uni.navigateTo({
					url:'./platform-revenue'
				})
			},
			toStatus () {
				uni.navigateTo({
					url:'./status'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-billing-details {
		font-size: 24rpx;
		padding-bottom: 32rpx;
		.font-weight {
			font-size: 36rpx;
			font-weight: bold;
		}
		.list-item {
			display: flex;
			justify-content: space-between;
			border-bottom: solid 2rpx #eee;
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			.iconfont {
				display: inline-block;
				margin-left: 16rpx;
				transform: scale(1.4);
			}
			&:last-child {
				margin-bottom: 0;
				padding-bottom: 0;
				border: none;
			}
			text {
				&:last-child {
					color: #888;
				}
			}
		}
		.count {
			flex: 1;
			display: flex;
			flex-direction: column;
			.item {
				flex: 1;
				display: flex;
				margin-bottom: 24rpx;
				&:last-child {
					margin-bottom: 0;
				}
				text {
					&:first-child {
						width: 200rpx;
					}
					&:last-child {
						color: #888;
					}
				}
			}
		}
	}
</style>

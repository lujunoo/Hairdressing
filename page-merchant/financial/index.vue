<template>
	<!-- 财务管理 -->
	<view class="t-hairdres-merchant-financial">
		<Card>
			<view class="title">
				<text>结款</text>
			</view>
			<view class="count">
				<view class="item">
					<text class="color-red">13128.63</text>
					<text>账户余额(元)</text>
				</view>
			</view>
			<view class="count">
				<view class="item">
					<text class="color-yellow">13128.63</text>
					<text>账户余额(元)</text>
				</view>
				<view class="item">
					<text style="color: #ffa1a0;">13128.63</text>
					<text>账户余额(元)</text>
				</view>
			</view>
			<view class="color-red border">
				待结算：指用户购买未使用订单金额，已结算：指用户购买并使用已结算的订单金额
			</view>
			<view class="title">
				<text>结算方式</text>
				<text>统一结算</text>
			</view>
			<view class="title">
				<text>结款周期</text>
				<text>满7天可提现</text>
			</view>
			<view class="title border">
				<text>下次结款</text>
				<text>2021年03月31日</text>
			</view>
			<view class="title">
				<text>银行卡信息</text>
				<view class="card">
					<view class="bind">
						<text>中国建设银行</text>
						<text @click="toAddCard" class="color-red">换绑银行卡</text>
					</view>
					<view class="">曹兵   6222109465239958379</view>
				</view>
			</view>
		</Card>
		<Card>
			<view class="title">
				<text>近期账单</text>
			</view>
			<view @click="toDetail" v-for="(item,index) in 10" :key="index" class="list-item">
				<text>2021-03-01至2021-03-31</text>
				<text>+123,456.00<text class="iconfont">&#xe64c;</text></text>
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
			toAddCard () {
				uni.navigateTo({
					url:'../../page-user/wallet/add-card'
				})
			},
			toDetail () {
				uni.navigateTo({
					url:'./billing-details',
					complete: (data) => {
						console.log(data)
					}
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-financial {
		font-size: 24rpx;
		color: #666666;
		padding-bottom: 32rpx;
		.list-item {
			display: flex;
			justify-content: space-between;
			border-bottom: solid 2rpx #eee;
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			color: #000;
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
		}
		.count {
			display: flex;
			justify-content: center;
			margin-bottom: 24rpx;
			.item {
				flex: 1;
				text-align: center;
				display: flex;
				flex-direction: column;
				text {
					&:first-child {
						font-weight: bold;
						font-size: 36rpx;
					}
				}
			}
		}
		.border {
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
		}
		.card {
			display: flex;
			flex-direction: column;
			.bind {
				margin-bottom: 24rpx;
				display: flex;
				justify-content: space-between;
			}
		}
		.title {
			display: flex;
			margin-bottom: 32rpx;
			&:last-child {
				margin-bottom: 0;
			}
			>text {
				flex: 1;
				&:first-child{
					color: #000;
					font-size: 28rpx;
					font-weight: bold;
				}
				&:last-child {
					flex: 2;
				}
			}
			.card {
				flex: 2;
			}
		}
	}
</style>

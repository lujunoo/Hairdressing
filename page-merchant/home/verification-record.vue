<template>
	<!-- 验证记录 -->
	<view class="t-hairdres-merchant-verification-record">
		<view class="timeDate">
			<text>2021-5-30</text>
			<text class="iconfont">&#xe647;</text>
		</view>
		<Card v-for="item in 10" :key="item">
			<view>券码：5321 0235 06</view>
			<view>套餐名称：施华蔻烫染直3选1</view>
			<view>验证时间：2021-03-24 15:25:31</view>
			<view>
				<text class="oldprice">¥ 225.00</text>
				<text class="oldprice">¥ 225.00</text>
				<text class="color-red">¥ 160.00</text>
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	export default {
		components: {
			Card
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-verification-record {
		font-size: 24rpx;
		line-height: 2;
		.oldprice {
			margin-right: 24rpx;
		}
		.timeDate {
			background-color: #ffa6a6;
			border-radius: 20rpx;
			margin: 32rpx;
			color: #000;
			padding: 16rpx 32rpx;
			display: flex;
			justify-content: space-between;
			.iconfont {
				margin-top: 10rpx;
			}
		}
	}
</style>

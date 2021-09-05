<template>
	<!-- 收入统计 -->
	<view class="t-hairdres-merchant-income-statistics">
		<view class="timeDate">
			<text>开始日期</text>
			<text></text>
			<text>截止日期</text>
		</view>
		<view class="countDate">昨日收益  <text class="color-red">2030元</text></view>
		<Card>
			<view @click="toDetail" v-for="(item,index) in 10" :key="index" class="list-item">
				<view class="title">
					<text>曹兵-施华烫染直3选1【225元/189.00元/<text class="color-red">160.00元</text>】</text>
					<text class="iconfont">&#xe64c;</text>
				</view>
				<text class="desc">收入1580.00元，券数（1张）</text>
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
			toDetail () {
				uni.navigateTo({
					url: './income-statistics-detail'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-income-statistics {
		font-size: 24rpx;
		.list-item {
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			color: #666;
			.title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 24rpx;
				line-height: 1;
				color: #000;
				>text {
					display: block;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.iconfont {
					font-size: 32rpx;
					padding: 0 14rpx;
				}
			}
			&:last-child {
				border: none;
				padding-bottom: 0;
			}
		}
		.countDate {
			font-size: 28rpx;
			padding: 0 0 0rpx 32rpx;
			.color-red {
				font-weight: bold;
				margin-left: 24rpx;
			}
		}
		.timeDate {
			height: 80rpx;
			background-color: #ffb1b1;
			border-radius: 10rpx;
			margin: 32rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			
			text {
				color: #fff;
				font-size: 28rpx;
				padding: 10rpx 32rpx;
				background: #fc689a;
				border-radius: 20rpx;
				&:nth-child(2) {
					width: 60rpx;
					padding: 2rpx;
					margin: 0 70rpx;
					background: #000;
				}
			}
		}
	}
</style>

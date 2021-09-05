<template>
	<!-- 收入统计-详情 -->
	<view class="t-hairdres-merchant-income-statistics">
		<Card>
			<view @click="toDetail" v-for="(item,index) in 10" :key="index" class="list-item">
				<view class="title">
					<text>券码：5321 0235 06</text>
					<text class="color-red">160.00元</text>
				</view>
				<text class="desc">消费时间：2021-03-24 15:25:31</text>
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
					url:'./settlement'
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
				font-weight: bold;
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
	}
</style>

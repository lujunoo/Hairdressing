<template>
	<!-- 商家提现记录 -->
	<view class="t-hairdres-merchant-personal-withdrawal">
		<Card>
			<view v-for="(item,index) in 20" :key="index" class="list-item">
				<view class="item">
					<text>提现</text>
					<text>-¥2168.00</text>
				</view>
				<view class="item">
					<text>2021-03-24 15:25:31</text>
					<text>已通过</text>
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
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-personal-withdrawal {
		font-size: 24rpx;
		color: #666;
		.list-item {
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			&:last-child {
				border: none;
				margin-bottom: 0rpx;
				padding-bottom: 0;
			}
		}
		.item {
			display: flex;
			justify-content: space-between;
			&:first-child {
				margin-bottom: 24rpx;
				text {
					&:first-child {
						color: #000;
						font-weight: bold;
					}
				}
			}
		}
	}
</style>

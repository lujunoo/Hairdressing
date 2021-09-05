<template>
	<!-- 套餐详情 -->
	<view class="t-hairdres-merchant-financial-status">
		<Card>
			<view v-for="(item,index) in 3" :key="index" class="list-item">
				<text>打款指令生成</text>
				<text>2021-03-22 12:35:57</text>
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
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-financial-status {
		font-size: 24rpx;
		padding-bottom: 32rpx;
		line-height: 1;
		.list-item {
			display: flex;
			flex-direction: column;
			padding-bottom: 70rpx;
			padding-left: 32rpx;
			position: relative;
			margin-left: 24rpx;
			border-left: solid 4rpx #fc689a;
			&:last-child{
				border: none;
			}
			&::after {
				content: '';
				top: 0;
				left: -13rpx;
				position: absolute;
				width: 26rpx;
				height: 26rpx;
				border-radius: 100rpx;
				background: #fc689a;
			}
			text {
				font-size: 28rpx;
				font-weight: bold;
				&:last-child {
					font-weight: 500;
					margin-top: 24rpx;
					color: #888;
				}
			}
		}
	}
</style>

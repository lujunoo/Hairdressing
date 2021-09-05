<template>
	<!-- 计算详情 -->
	<view class="t-hairdres-merchant-settlement">
		<Card>
			<view class="list-item">
				<text>券号</text>
				<text>5612 5612 369</text>
			</view>
			<view class="list-item">
				<text>验券时间</text>
				<text>5612 5612 369</text>
			</view>
			<view class="list-item">
				<text>订单号</text>
				<text>20210325164285</text>
			</view>
			<view class="list-item">
				<text>套餐名称</text>
				<text>施华寇烫染直3选1</text>
			</view>
			<view class="list-item">
				<text>服务发型师</text>
				<text>曹兵</text>
			</view>
			<view class="list-item">
				<text>门店价</text>
				<text>¥ 135.00</text>
			</view>
			<view class="list-item">
				<text>平台套餐价</text>
				<text>¥ 135.00</text>
			</view>
			<view class="list-item">
				<text>平台技术服务费</text>
				<text>¥ 135.00</text>
			</view>
			<view class="list-item">
				<text>分销费用</text>
				<text>¥ 135.00</text>
			</view>
			<view class="list-item">
				<text>结算价</text>
				<text>¥ 135.00</text>
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
	.t-hairdres-merchant-settlement {
		font-size: 24rpx;
		line-height: 1;
		.list-item {
			margin-bottom: 32rpx;
			display: flex;
			&:last-child {
				margin-bottom: 0;
			}
			text {
				flex: 1;
			}
		}
	}
</style>

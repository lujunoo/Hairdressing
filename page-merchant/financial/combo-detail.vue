<template>
	<!-- 套餐详情 -->
	<view class="t-hairdres-merchant-combo-detail">
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
				<text>5612 5612 369</text>
			</view>
			<view class="list-item">
				<text>套餐名称</text>
				<text>施华寇烫染直3选1施华寇烫染直3选1施华寇烫染直3选1</text>
			</view>
			<view class="list-item">
				<text>门店价</text>
				<text>5612 5612 369</text>
			</view>
			<view class="list-item">
				<text>平台套餐价</text>
				<text>5612 5612 369</text>
			</view>
			<view class="list-item">
				<text>平台技术服务费</text>
				<text>5612 5612 369</text>
			</view>
			<view class="list-item">
				<text>营销费用</text>
				<text>5612 5612 369</text>
			</view>
			<view class="list-item">
				<text>分佣费</text>
				<text>5612 5612 369</text>
			</view>
			<view class="list-item">
				<text>结算价</text>
				<text>5612 5612 369</text>
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
	.t-hairdres-merchant-combo-detail {
		font-size: 24rpx;
		padding-bottom: 32rpx;
		.list-item {
			display: flex;
			margin-bottom: 32rpx;
			&:last-child {
				margin-bottom: 0;
				border: none;
			}
			text {
				flex: 1;
				&:last-child {
					flex: 2;
					color: #888;
				}
			}
		}
	}
</style>

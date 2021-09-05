<template>
	<!-- 人才招聘 -->
	<view class="t-hairdres-merchant-talent-recruitment">
		<Card v-for="(item,index) in 10" :key="index" class="talent-list">
			<view @click="toDetail" class="">
				<view class="list-item">
					<text class="font-weight">首席发型设计师</text>
					<text class="color-red">招聘中</text>
				</view>
				<view class="list-item">
					<text>工作地点：贵州·遵义</text>
					<text>月薪：<text class="color-red">¥6000-8000</text></text>
				</view>
				<view class="button-group">
					<text>删除</text>
					<text>修改</text>
					<text class="color-yellow">关闭</text>
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
		},
		methods: {
			toDetail () {
				uni.navigateTo({
					url:'./add-talent'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-talent-recruitment {
		font-size: 28rpx;
		color: #555;
		.talent-list {
			.list-item {
				display: flex;
				justify-content: space-between;
				margin-bottom: 24rpx;
			}
		}
		.font-weight {
			font-size: 28rpx;
			font-weight: bold;
		}
		.button-group {
			border-top: solid 2rpx #eee;
			padding-top: 24rpx;
			color: #fc6968;
			display: flex;
			justify-content: flex-end;
			text {
				border: solid 2rpx #fc6968;
				line-height: 1;
				margin-left: 32rpx;
				padding: 12rpx 24rpx;
				border-radius: 20rpx;
				&:first-child {
					opacity: 0.5;
				}
			}
			.color-yellow {
				border: solid 2rpx #ffbe4d;
			}
		}
	}
</style>

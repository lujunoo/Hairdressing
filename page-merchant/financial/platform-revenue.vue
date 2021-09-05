<template>
	<!-- 平台收入 -->
	<view class="t-hairdres-merchant-platform-revenue">
		<Card>
			<view @click="toDetail" v-for="(item,index) in 10" :key="index" class="list-item">
				<view class="item">
					<text>iHair Do：施华寇烫染直3选1</text>
					<text class="iconfont">&#xe64c;</text>
				</view>
				<view  class="item">收入1234.00元，券数（2张）</view>
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
					url:'./combo'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-platform-revenue {
		font-size: 24rpx;
		padding-bottom: 32rpx;
		.list-item {
			display: flex;
			flex-direction: column;
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			&:last-child {
				margin-bottom: 0;
				padding-bottom: 0;
				border: none;
			}
			.item {
				display: flex;
				justify-content: space-between;
				.iconfont {
					display: inline-block;
					color: #888;
					transform: scale(1.3);
				}
				&:first-child {
					font-weight: bold;
					margin-bottom: 16rpx;
				}
				&:last-child {
					color: #888;
				}
			}
		}
	}
</style>

<template>
	<!-- 活动策划 -->
	<view class="t-hairdres-merchant-event-planning">
		<view @click="detail" v-for="(item,index) in 10" :key="index" class="lits-item">
			<text class="name">立减</text>
			<text class="title">订单立减</text>
			<text>快速涨人气 拉动新客户</text>
		</view>
	</view>
</template>

<script>
	import fixedFooter from '@/components/fixedFooter'
	export default {
		components: {
			fixedFooter
		},
		methods: {
			detail () {
				uni.navigateTo({
					url:'./activity-detail'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-event-planning {
		font-size: 24rpx;
		color: #fff;
		
		.t-hairdres-button {
			width: 580rpx;
		}

		.lits-item {
			background: #ffa8a8;
			border-radius: 10rpx;
			padding: 32rpx 32rpx 32rpx 110rpx;
			margin: 32rpx;
			position: relative;

			.title {
				font-size: 32rpx;
				display: block;
				margin-bottom: 24rpx;
			}

			.name {
				position: absolute;
				top: 0;
				left: 32rpx;
				width: 40rpx;
				min-height: 50rpx;
				color: #fff;
				text-align: center;
				line-height: 1;
				padding: 8rpx 0;
				box-shadow: 2rpx 2rpx 0rpx 2rpx #7d7d7d;
				background-image: linear-gradient(0deg,
						#ff4241 0%,
						#e84fff 100%);
			}
		}
	}
</style>

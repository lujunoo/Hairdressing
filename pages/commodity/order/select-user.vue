<template>
	<!-- 选择发型师 -->
	<view class="t-hairdres-select-user">
		<Card class="select-user-item" v-for="(item,index) in 10" :key="index" >
			<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
			<view class="content">
				<view class="info">
					<text><text class="name">托尼</text>创始人</text>
					<text>评分<text class="color-theme">5.0</text>分</text>
					<text>服务人次<text class="color-red">985</text></text>
				</view>
				<view class="info">
					<text>从业16年</text>
					<text>好评：<text class="color-yellow">1000</text>次</text>
					<text>回头客<text class="color-purple">800</text></text>
				</view>
			</view>
			<view class="button">预约</view>
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
	.t-hairdres-select-user {
		.select-user-item {
			margin: 24rpx 32rpx;
			display: flex;
			justify-content: space-between;
			position: relative;
			padding-bottom: 100rpx;
			.button {
				position: absolute;
				bottom: 32rpx;
				right: 32rpx;
				width: 122rpx;
				height: 50rpx;
				background-image: linear-gradient(90deg, 
					#fc689a 0%, 
					#ff9bfe 100%);
				border-radius: 20rpx;
				color: #FFFFFF;
				font-size: 24rpx;
				text-align: center;
				line-height: 50rpx;
			}
			
			image {
				width: 150rpx;
				height: 150rpx;
				background-color: #f00055;
				border-radius: 10rpx;
				margin-right: 32rpx;
			}
			.content {
				flex: 1;
				display: flex;
				font-size: 24rpx;
				
				.info {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					
					.name {
						font-size: 28rpx;
						font-weight: bold;
						margin-right: 16rpx;
					}
				}
			}
		}
	}
</style>

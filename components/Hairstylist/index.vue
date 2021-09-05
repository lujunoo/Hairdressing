<template>
	<!-- 发型师信息 -->
	<view @click="toDetail" class="t-hairdres-hairstylist">
		<view class="t-hairdres-header">
			<image src="https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg" mode="aspectFill"></image>
		</view>
		<view class="t-hairdres-content">
			<view class="title">
				<text>托尼老师</text>
				<text><text class="theme">5.5</text>分</text>
			</view>
			<view class="price">
				<view class="left">
					<text>剪发:</text>
					<text class="theme">￥234.23</text>
					<text class="oldprice" >￥334.23</text>
				</view>
				<text class="right">已售:234</text>
			</view>
			<view class="fuwu">
				<text>服务人次<text class="red">454</text></text>
				<text>|</text>
				<text>回头客<text class="purple">323</text></text>
				<text>|</text>
				<text><text class="yellow">3454</text>条好评</text>
			</view>
			<view class="shop">
				<text>店铺：养发堂</text>
				<text>800m</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			toDetail () {
				this.$emit('onCilck')
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-hairstylist {
		margin: 24rpx 32rpx 0 32rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		overflow: hidden;
		padding: 24rpx 32rpx;
		
		.theme {
			color: #F95AC0;
		}
		
		.yellow {
			color: #FFB400;
		}
		
		.red {
			color: #FF6464;
		}
		
		.purple {
			color: #D964FF;
		}
		
		.t-hairdres-header {
			width: 170rpx;
			height: 190rpx;
			border-radius: 10rpx;
			overflow: hidden;
			float: left;
			margin-right: 40rpx;
			
			image {
				width: 100%;
				height: 100%;
			}
		}
		
		.t-hairdres-content {
			margin-left: 210rpx;
			
			.title {
				font-size: 28rpx;
				line-height: 28rpx;
				margin-bottom: 24rpx;
				color: #333333;
				display: flex;
				justify-content: space-between;
				
				text {
					&:last-child {
						font-size: 24rpx;
					}
				}
			}
			
			.price {
				font-size: 24rpx;
				line-height: 24rpx;
				color: #333333;
				margin-bottom: 30rpx;
				display: flex;
				justify-content: space-between;
				
				.left {
					text {
						&:nth-child(2){
							font-weight: bold;
							color: #F95AC0;
						}
						&:last-child{
							color: #999999;
							font-size: 24rpx;
							margin-left: 16rpx;
						}
					}
				}
			}
			
			.fuwu {
				font-size: 24rpx;
				color: #333333;
				line-height: 24rpx;
				display: flex;
				margin-bottom: 30rpx;
				justify-content: space-between;
			}
			
			.shop {
				display: flex;
				justify-content: space-between;
				font-size: 28rpx;
				color: #333333;
			}
		}
		
	}
</style>

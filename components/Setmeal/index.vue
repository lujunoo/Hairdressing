<!-- 商品信息 -->
<template>
	<view @click="toDetail()" class="t-hairdres-setmeal">
		<view class="t-hairdres-header">
			<image src="https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg" mode="aspectFill"></image>
		</view>
		<view class="content">
			<text class="title">{{data.shop_name}}</text>
			<view class="count">
				<text><text :class="{ theme: color }">5.0</text>分</text>
				<text>|</text>
				<text><text :class="{ yellow: color }">234</text>条好评</text>
				<text>|</text>
				<text>服务人次<text :class="{ red: color }">3453</text></text>
			</view>
			<view class="address">
				<text>江北区</text>
				<text :class="{ yellow: color }">800m</text>
			</view>
			<text class="desc">施华蔻烫染直三选一</text>
			<view class="selling-price">
				<view class="price">
					<text>￥234.23</text>
					<text class="oldprice">￥563.23</text>
				</view>
				<text>已售125</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Setmeal',
		props: {
			color: {
				type: Boolean,
				default: true
			},
			data: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		methods: {
			toDetail () {
				this.$emit('onClick')
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-setmeal {
		background: #FFFFFF;
		margin: 24rpx 32rpx 0 32rpx;
		border-radius: 10rpx;
		padding: 24rpx;
		
		.theme {
			color: #F95AC0;
		}
		
		.yellow {
			color: #FFB400;
		}
		
		.red {
			color: #FF6464;
		}
		
		.content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			
			.title {
				font-size: 28rpx;
				line-height: 28rpx;
				margin-bottom: 24rpx;
				color: #333333;
				font-weight: bold;
				display: block;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}
			
			.count {
				line-height: 24rpx;
				display: flex;
				justify-content: space-between;
				font-size: 24rpx;
				color: #333333;
			}
			
			.address {
				line-height: 24rpx;
				font-size: 24rpx;
				color: #333333;
				margin-top: 20rpx;
				
				text {
					margin-right: 32rpx;
				}
			}
			
			.desc {
				line-height: 24rpx;
				font-size: 24rpx;
				color: #333333;
				margin: 32rpx 0 24rpx 0;
			}
			
			.selling-price {
				display: flex;
				justify-content: space-between;
				font-size: 24rpx;
				color: #333333;
				
				.price {
					font-size: 28rpx;
					color: #f95abf;
					font-weight: bold;
					position: relative;
					
					text {
						&:last-child {
							font-size: 24rpx;
							color: #999999;
							font-weight: 500;
							margin-left: 16rpx;
						}
					}
				}
			}
		}
		
		.t-hairdres-header {
			width: 225rpx;
			height: 225rpx;
			border-radius: 10rpx;
			overflow: hidden;
			margin-right: 40rpx;
			float: left;
			
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>

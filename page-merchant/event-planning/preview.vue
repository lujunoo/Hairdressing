<template>
	<!-- 限制条件 -->
	<view class="t-hairdres-merchant-preview">
		<Card>
			<view class="list-item">
				<text class="font-weight">立减商品</text>
			</view>
			<view class="prodcut">
				<image src="https://cdn.pixabay.com/photo/2021/08/01/12/58/beach-6514331_960_720.jpg" mode="aspectFill"></image>
				<view class="content">
					<text>施华蔻烫染直【时尚烫染】施华蔻烫染直3选1</text>
					<view class="price">
						<text>¥185.00 <text class="oldprice">¥185.00</text></text>
						<text>已售<text class="color-yellow">25</text></text>
					</view>
				</view>
			</view>
		</Card>
		<Card>
			<view class="list-item">
				<text class="font-weight">优惠信息</text>
				<view class="label-item">
					<text>适用人群</text>
					<text>所有人</text>
				</view>
				<view class="label-item">
					<text>下单立减金额</text>
					<text>¥ 20.00</text>
				</view>
				<view class="label-item">
					<text>新客立减金额</text>
					<text>¥ 20.00</text>
				</view>
				<view class="label-item">
					<text>每日最大促销量</text>
					<text>100份</text>
				</view>
				<text class="font-weight">使用条件</text>
				<view class="label-item">
					<text>立减开始时间</text>
					<text>2021-03-31 18:00</text>
				</view>
				<view class="label-item">
					<text>立即截止时间</text>
					<text>2021-05-31 18:00</text>
				</view>
				<view class="label-item">
					<text>每人每日限购数量</text>
					<text>无限制</text>
				</view>
				<view class="label-item">
					<text>每人总限购数量</text>
					<text>无限制</text>
				</view>
				<view class="label-item">
					<text>可用周次</text>
					<text>无限制</text>
				</view>
			</view>
			<view class="t-hairdres-button">
				发布活动
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
		data () {
			return {}
		},
		methods: {}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-preview {
		font-size: 24rpx;
		line-height: 1;
		color: #555;
		.font-weight {
			font-weight: bold;
			font-size: 28rpx;
			color: #000;
			display: block;
			margin-bottom: 32rpx;
		}
		.label-item {
			margin-bottom: 32rpx;
			display: flex;
			text {
				flex: 1.4;
				&:last-child {
					flex: 2;
				}
			}
			
		}
		.t-hairdres-button {
			margin-top: 90rpx;
		}
		.prodcut {
			display: flex;
			image {
				width: 170rpx;
				height: 120rpx;
				border-radius: 10rpx;
				margin-right: 32rpx;
			}
			.content {
				height: 120rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.price {
					display: flex;
					justify-content: space-between;
					text {
						&:first-child {
							font-size: 28rpx;
							font-weight: bold;
							color: #fc6968;
							.oldprice {
								margin-left: 24rpx;
								font-weight: 500;
								color: #aaa;
							}
						}
						&:last-child {
							font-weight: 500;
						}
					}
				}
			}
		}
	}
</style>

<template>
	<!-- 预约订单详情 -->
	<view class="t-hairdres-user-reserve-order-detail">
		<Card>
			<view class="commodity">
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				<view class="info">
					<text>施华蔻烫染直【时尚烫染】施华蔻烫染直3选1</text>
					<text>产品介绍产品介绍产品介绍产品介施华蔻烫染直施华蔻烫染直</text>
					<text class="color-theme">¥185.00</text>
				</view>
			</view>
			<view class="sublabel">
				<text class="iconfont">&#xe622;</text>
				<text>随时退</text>
				<text>过期退</text>
			</view>
			<view class="package">
				<Title class="subtitle2" title="套餐内容"></Title>
				<text class="subtitle">施华蔻烫染直3选1</text>
				<view class="list-item">
					<view v-for="(item,index) in 3" :key="index" class="label-item">
						<image v-if="index === 0" src="@/static/images/home-icon10.png" mode="scaleToFill"></image>
						<image v-if="index === 1" src="@/static/images/home-icon9.png" mode="scaleToFill"></image>
						<image v-if="index === 2" src="@/static/images/home-icon8.png" mode="scaleToFill"></image>
						<view>
							<text>洗吹</text>
							<text>资深设计师</text>
							<text>洗发水产品用施华冠</text>
						</view>
						<text>
							<text>1次</text>
						</text>
						<text>
							<text>99元</text>
						</text>
					</view>
				</view>
				<view class="price2">
					<view>
						<text>总价</text>
						<text>¥297.00</text>
					</view>
					<view>
						<text>总价</text>
						<text>¥297.00</text>
					</view>
					<view>
						<text>新客立减</text>
						<text>¥297.00</text>
					</view>
					<view>
						<text>立即下单支付</text>
						<text class="color-red">¥297.00</text>
					</view>
				</view>
			</view>
		</Card>
		<Card>
			<view class="coupon-code">
				<view class="sub-title">
					<text>券码信息</text>
					<text>待消费</text>
				</view>
				<text>可使用：(1张)</text>
				<text>有效期至：2021-08-31</text>
				<view class="code">
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				</view>
				<view class="status">
					券号：
					<text class="color-theme">3118 5656 50</text>
					<text class="color-yellow">复制券码</text>
				</view>
				<text class="button">退款</text>
			</view>
		</Card>
		<!-- 订单信息 -->
		<view class="orderinfo">
			<Card>
				<text>订单信息</text>
				<text>订单号码：202132248599856</text>
				<text>手机号码：188****8888</text>
				<text>下单时间：2021-03-22 13:55:28</text>
				<text>数量：1</text>
				<text>订单总价： ¥ 185.00</text>
				<text>优惠促销： - ¥ 25.00</text>
				<text>实际应付款： <text class="color-red">¥ 160.00</text></text>
			</Card>
		</view>
		<Card>
			<view class="desc">
				<text>温馨提示</text>
				<text>请购买后即时到店消费，如不能到店，请提前与商家进行沟通处理，进行退款等相关事宜。</text>
			</view>
		</Card>
		<fixedFooter hideLeft>
			<view @click="toEvaluation" slot="right" class="button-group">
				<text>去评价</text>
			</view>
		</fixedFooter>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Title from '@/components/Title'
	import fixedFooter from '@/components/fixedFooter'
	export default {
		components: {
			Card,
			Title,
			fixedFooter
		},
		methods: {
			toEvaluation () {
				uni.navigateTo({
					url:'../order/order-evaluation'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-reserve-order-detail {
		padding-bottom: 100rpx;
		.coupon-code {
			font-size: 24rpx;
			>text {
				display: block;
				line-height: 1;
				margin-bottom: 24rpx;
			}
			.status {
				display: flex;
				justify-content: center;
				.color-yellow {
					margin-left: 24rpx;
				}
			}
			.button {
				width: 140rpx;
				height: 50rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 50rpx;
				font-size: 24rpx;
				background-color: #ffb1b1;
				border-radius: 20rpx;
				margin: 32rpx auto 0 auto;
			}
			.code {
				width: 176rpx;
				height: 176rpx;
				padding: 16rpx;
				border-radius: 10rpx;
				overflow: hidden;
				margin: 32rpx auto;
				border: solid 4rpx #333;
				image {
					width: 100%;
					height: 100%;
					display: block;
				}
			}
			.sub-title {
				display: flex;
				margin-bottom: 32rpx;
				justify-content: space-between;
				text {
					font-size: 24rpx;
					color: #000;
					font-weight: bold;
					font-size: 28rpx;
					&:last-child {
						font-weight: 500;
						font-size: 24rpx;
						color: #fc689a;
					}
				}
			}
		}
		.button-group {
			width: 686rpx;
			display: flex;
			padding: 0 32rpx;
			text {
				flex: 1;
				height: 70rpx;
				border-radius: 30rpx;
				background: #fc689a;
				text-align: center;
				line-height: 70rpx;
				color: #FFFFFF;
				margin: 0 60rpx;
			}
			.gray {
				background: #ffb5ce;
			}
		}
		.desc {
			line-height: 1;
			font-size: 28rpx;
			text {
				display: block;
				margin-bottom: 24rpx;
				&:last-child {
					margin-bottom: 0;
					font-size: 24rpx;
					color: #666;
					line-height: 1.6;
				}
			}
		}
		.orderinfo {
			font-size: 24rpx;
			text {
				display: block;
				line-height: 1;
				margin-bottom: 32rpx;
				color: #666;
				&:first-child {
					color: #000;
					font-weight: bold;
					font-size: 28rpx;
				}
				.color-red {
					display: inline-block;
					color: #ff0000;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		.package {
			margin-top: 24rpx;
			.subtitle2 {
				font-size: 28rpx;
			}
			.price2 {
				font-size: 24rpx;
				line-height: 1;
				view {
					display: flex;
					margin-bottom: 32rpx;
					text {
						&:last-child {
							color: #666;
							margin-left: 24rpx;
						}
					}
					&:last-child {
						margin-bottom: 0;
					}
					.color-red {
						font-weight: bold;
						color: #ff0000 !important;
					}
				}
			}
			.list-item {
				border-bottom: solid 2rpx #eee;
				margin-bottom: 32rpx;
				.label-item {
					display: flex;
					justify-content: space-between;
					align-items: flex-start;
					font-size: 24rpx;
					margin-bottom: 16rpx;
					view {
						display: flex;
						flex-direction: column;
						line-height: 1;
						text {
							margin-bottom: 16rpx;
							color: #999999;
							&:first-child {
								color: #333333;
							}
						}
					}
					>text {
						flex: 1;
						&:nth-child(3){
							text-align: right;
						}
						&:nth-child(4){
							text-align: right;
						}
					}
					image {
						margin-right: 24rpx;
						width: 27rpx;
						height: 30rpx;
					}
				}
			}
			.subtitle {
				padding-left: 16rpx;
				border-left: solid 6rpx #fc689a;
				line-height: 1;
				display: block;
				font-size: 24rpx;
				margin-bottom: 32rpx;
				font-weight: bold;
			}
		}
		.sublabel {
			font-size: 24rpx;
			color: #666;
			margin-top: 32rpx;
			
			text {
				display: inline-block;
				margin-right: 16rpx;
			}
		}
		.commodity {
			display: flex;
			.info {
				flex: 1;
				margin-left: 24rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				max-width: 400rpx;
				font-size: 24rpx;
				line-height: 1;
				color: #666;
				text {
					display: block;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					&:first-child {
						color: #333;
						font-size: 28rpx;
						font-weight: bold;
					}
				}
			}
			image {
				width: 200rpx;
				height: 140rpx;
				border-radius: 10rpx;
			}
		}
	}
</style>

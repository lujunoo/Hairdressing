<template>
	<!-- 商家详情-套餐详情 -->
	<view class="t-hairdres-shop-package">
		<banner height="350" :images="bannerList"/>
		<!-- 店铺信息 -->
		<view class="shop-info">
			<view class="title">
				<text>施华蔻烫染直3选1施华蔻烫染直3选1【时尚烫染】施华蔻烫染直3选1</text>
				<text class="iconfont">&#xe60a;</text>
			</view>
			<view class="price">
				<text><text class="color-theme">¥185.00</text><text class="oldprice">¥225.00</text></text>
				<text>已售<text class="color-yellow">345</text></text>
			</view>
			<view class="label">
				<text v-for="(item,index) in 3" :key="index">新客立减25元</text>
			</view>
			<view class="desc">
				<text class="iconfont">&#xe622;</text>
				<text>随时退 过期退</text>
			</view>
		</view>
		<!-- 套餐内容 -->
		<view class="content">
			<card>
				<Title class="card-title" title="套餐内容"></Title>
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
						<text>平台套餐价</text>
						<text>¥297.00</text>
					</view>
					<view>
						<text>新客立减</text>
						<text class="color-yellow">¥297.00</text>
					</view>
					<view>
						<text>立即下单支付</text>
						<text class="color-red">¥160.00</text>
					</view>
				</view>
				<Title class="card-title" title="补充说明"></Title>
				<view class="desc">
					补充说明补充说明补充说明补充说明补充说明补充说明补充说明补充说明补充说明补充说明补充说明补充说明。
				</view>
			</card>
		</view>
		<!-- 购买须知 -->
		<view class="purchase-notes">
			<card>
				<Title class="card-title" title="购买须知"></Title>
				<view class="notes-item">
					<text>有效期限</text>
					<text>购买后30天内有效</text>
				</view>
				<view class="notes-item">
					<text>适用人数</text>
					<text>本套餐仅限一人使用</text>
				</view>
				<view class="notes-item">
					<text>预约信息</text>
					<text>如遇理发黄金期，请在下单前电话咨询是否能预约</text>
				</view>
				<view class="notes-item">
					<text>温馨提示</text>
					<text>如下单后不能及时到店消费，请及时联系商家进行取消预约处理</text>
				</view>
				<view class="notes-item">
					<text>价格说明</text>
					<text>价格说明价格说明价格说明价格说明价格说明价格说明价格说明价格说明价格说明</text>
				</view>
			</card>
		</view>
		<!-- 店铺入口 -->
		<ShopEntrance/>
		<!-- 用户评价 -->
		<Evaluation :data-list="[0]" hideTitle />
		<!-- 按钮 -->
		<view class="bottom-button">
			<text>实际应金额：<text class="color-theme">¥160.00</text></text>
			<text @click="toOrder" class="btn">立即下单</text>
		</view>
	</view>
</template>

<script>
	import Pricelist from '@/components/Pricelist'
	import card from '@/components/Card'
	import banner from '@/components/Banner'
	import Title from '@/components/Title'
	import Evaluation from '@/components/Evaluation'
	import ShopEntrance from '@/components/ShopEntrance'
	export default {
		components:{
			banner,
			card,
			Title,
			ShopEntrance,
			Evaluation
		},
		data () {
			return {
				bannerList: [
					'https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg'
				]
			}
		},
		methods: {
			toOrder () {
				uni.navigateTo({
					url: '../../page-commodity/order/orders-create'
				})
			},
			toEvaluation () {
				uni.navigateTo({
					url: './leaderboard-evaluation'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-shop-package {
		padding-bottom: 100rpx;
		.card-title {
			margin-top: -32rpx;
		}
		.purchase-notes {
			.notes-item {
				margin-bottom: 24rpx;
				text {
					font-size: 24rpx;
					display: block;
					line-height: 1.5;
					color: #666;
					&:first-child {
						color: #333333;
						font-weight: bold;
						font-size: 28rpx;
						margin-bottom: 16rpx;
					}
				}
			}
		}
		.content {
			.desc {
				margin-top: -16rpx;
				font-size: 24rpx;
			}
			.price2 {
				font-size: 24rpx;
				line-height: 1;
				margin-bottom: 100rpx;
				
				view {
					display: flex;
					margin-bottom: 32rpx;
					text {
						flex: 1;
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
		.bottom-button {
			width: 100%;
			position: fixed;
			bottom: 0;
			left: 0;
			height: 100rpx;
			background: #FFFFFF;
			display: flex;
			justify-content: space-around;
			line-height: 100rpx;
			font-size: 24rpx;
			align-items: center;
			
			.btn {
				width: 220rpx;
				height: 60rpx;
				background-color: #fc689a;
				border-radius: 25rpx;
				line-height: 60rpx;
				text-align: center;
				color: #FFFFFF;
			}
		}
		.shop-info {
			background: #FFFFFF;
			padding: 32rpx;
			font-size: 24rpx;
			.desc {
				font-size: 24rpx;
				color: #999999;
				
				.iconfont {
					margin-right: 16rpx;
					vertical-align: middle;
					font-size: 32rpx;
				}
			}
			.label {
				margin-bottom: 32rpx;
				text {
					color: #FFFFFF;
					display: inline-block;
					line-height: 1;
					font-size: 24rpx;
					background: #ffb400;
					margin-right: 16rpx;
					padding: 8rpx 12rpx;
					border-radius: 6rpx;
				}
			}
			.price {
				display: flex;
				justify-content: space-between;
				font-size: #666666;
				line-height: 1;
				align-items: center;
				padding: 32rpx 0;
				.color-theme {
					font-size: 28rpx;
					font-weight: bold;
				}
				.oldprice {
					margin-left: 32rpx;
					&:last-child {
						position: relative;
						&::after {
							content: '';
							width: 100%;
							height: 2rpx;
							background: #666666;
							position: absolute;
							top: 50%;
							left: 0;
						}
					}
				}
			}
			.title {
				display: flex;
				justify-content: space-between;
				font-size: 28rpx;
				font-weight: bold;
				align-items: flex-start;
				
				.iconfont {
					transform: translateY(5rpx);
					margin-left: 24rpx;
					font-size: 32rpx;
				}
			}
			
		}
	}
</style>

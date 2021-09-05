<template>
	<!-- 确认预约订单支付信息 -->
	<view class="t-hairdres-order-reservation">
		<Card>
			<view class="list-item">
				<text class="title">预约发型师</text>
				<view class="user">
					<text>曹兵</text>
					<text class="color-yellow">修改<text class="iconfont">&#xe64c;</text></text>
				</view>
			</view>
			<view class="list-item">
				<text class="title">预约时间</text>
				<text>2021-04-10 10:30</text>
			</view>
			<view class="list-item">
				<text class="title">预约人</text>
				<text>王先生    18878638978</text>
			</view>
			<view class="list-item list-item2">
				<text class="title">预约项目</text>
				<view class="project-item" >
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
					<view class="content">
						<view class="info">
							施华蔻烫染直3选1施华蔻烫染直3选1施华蔻烫染直3选1
						</view>
						<view class="info">
							<text class="color-theme">￥1000<text class="oldprice">￥1000</text></text>
							<text>已售<text class="color-yellow">800</text></text>
						</view>
					</view>
				</view>
				<view class="project-time">操作用时预计：<text class="color-red">3.5小时</text></view>
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
			<view class="list-item">
				<text class="title">备注</text>
				<text>预约的这个时间，可能会提前到达</text>
			</view>
			<view class="list-item">
				<text class="title">商家地址</text>
				<text>重庆市江北区建新北路38号3幢25-15</text>
			</view>
			<view class="list-item">
				<text class="title">商家电话</text>
				<text>18888888888</text>
			</view>
		</Card>
		<Card>
			<view class="list-item list-item2">
				<text class="title">购买须知</text>
			</view>
			<view class="list-item list-item2">
				<text class="title2">温馨提示</text>
				<text>如下单后不能及时到店消费，请及时联系商家进行取消预约处理</text>
			</view>
			<view class="list-item list-item2">
				<text class="title2">价格说明</text>
				<text>价格说明价格说明价格说明价格说明价格说明价格说明价格说明价格说明价格说明</text>
			</view>
		</Card>
		<Card>
			<view class="checked">
				<text class="title">选择支付方式</text>
				<view @click="active = 1" class="checked-item">
					<view class="left">
						<text v-if="active === 1" class="iconfont iconfont2">&#xe661;</text>
						<text v-else class="iconfont iconfont1">&#xe618;</text>
						<text class="iconfont iconfont3">&#xe605;</text>
						<text>余额支付</text>
					</view>
					<text>可用余额：<text class="color-yellow">368.53元</text></text>
				</view>
				<view @click="active = 2" class="checked-item">
					<view class="left">
						<text v-if="active === 2" class="iconfont iconfont2">&#xe661;</text>
						<text v-else class="iconfont iconfont1">&#xe618;</text>
						<text class="iconfont iconfont4">&#xe665;</text>
						<text>微信支付</text>
					</view>
				</view>
			</view>
		</Card>
		<view @click="checked = !checked" class="clause">
			<text v-if="checked" class="iconfont">&#xe692;</text>
			<text v-else class="iconfont iconfont2">&#xe63a;</text>
			<text>我已阅读并同意 <text @click="toClause" class="color-theme">《比赛规则与奖励》</text></text>
		</view>
		<view class="t-hairdres-button">
			提交作品
		</view>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	export default {
		components: {
			Card
		},
		data () {
			return {
				active: 1,
				checked:true
			}
		},
		methods: {
			toClause () {
				uni.navigateTo({
					url:'./clause'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-order-reservation {
		font-size: 24rpx;
		.t-hairdres-button {
			margin: 0 125rpx 50rpx 125rpx;
		}
		.clause {
			text-align: center;
			margin-bottom: 40rpx;
			.iconfont {
				color: #fc689a;
				font-size: 28rpx;
				margin-right: 16rpx;
			}
			.iconfont2 {
				color: #666;
			}
		}
		.title {
			font-size: 28rpx;
			font-weight: bold;
			width: 190rpx;
			display: block;
		}
		.checked {
			.title {
				margin-bottom: 32rpx;
			}
			.checked-item {
				display: flex;
				justify-content: space-between;
				font-size: 24rpx;
				margin-bottom: 32rpx;
				.left {
					display: flex;
					align-items: center;
					position: relative;
				}
				&:last-child {
					margin-bottom: 0;
				}
				.iconfont1 {
					font-size: 40rpx;
				}
				.iconfont2 {
					color: #fc689a;
					font-size: 36rpx;
					margin: 2rpx;
				}
				.iconfont3 {
					color: #333333;
					font-size: 38rpx;
					margin: 0 30rpx 0 26rpx;
				}
				.iconfont4 {
					font-size: 48rpx;
					color: #09bb07;
					margin: 0 24rpx;
				}
			}
		}
		.title2 {
			font-weight: bold;
			margin-bottom: 16rpx;
		}
		.list-item {
			display: flex;
			margin-bottom: 32rpx;
			.user {
				line-height: 60rpx;
				flex: 1;
				height: 60rpx;
				height: 60rpx;
				background-color: #fff3e2;
				border-radius: 10rpx;
				display: flex;
				justify-content: space-between;
				padding: 0 24rpx;
			}
			
		}
		.price2 {
			font-size: 24rpx;
			line-height: 1;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			
			view {
				display: flex;
				margin-bottom: 32rpx;
				text {
					flex: 1;
				}
			}
		}
		.list-item2 {
			flex-direction: column;
		}
		.project-time {
			margin-top: 24rpx;
		}
		.project-item {
			display: flex;
			justify-content: space-between;
			position: relative;
			align-items: center;
			background: #ffe4ed;
			padding: 24rpx;
			border-radius: 10rpx;
			margin-top: 24rpx;
			
			.iconfont {
				color: #fc689a;
				font-size: 40rpx;
			}
			.iconfont2 {
				color: #aaa;
				transform: scale(1.08);
			}
			image {
				width: 170rpx;
				height: 120rpx;
				background-color: #f00055;
				border-radius: 10rpx;
				margin-right: 24rpx;
			}
			.content {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				font-size: 24rpx;
				min-height: 120rpx;
				
				.info {
					display: flex;
					justify-content: space-between;
					color: #333333;
					.color-theme {
						font-size: 28rpx;
						text {
							margin-left: 16rpx;
							font-size: 24rpx;
						}
					}
				}
			}
		}
	}
</style>

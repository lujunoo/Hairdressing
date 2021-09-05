<template>
	<!-- 订单预约 -->
	<view class="t-hairdres-order-appointment">
		<Card>
			<view class="form-data">
				<view class="form-item">
					<text class="label">预约到店</text>
					<view class="desc">
						预约前后可联系商家沟通，如不能按时到店消费及时告知商家,如不能按时到店消费及时告知商家
					</view>
				</view>
				<view class="form-item">
					<text class="label">预约发型师</text>
					<view @click="toUserList" class="form-input">
						<!-- <text>曹兵</text> -->
						<text class="placeholder">请选择发布区域</text>
						<view class="select">
							<text>请选择</text>
							<text class="iconfont">&#xe64c;</text>
						</view>
					</view>
				</view>
				<view class="form-item">
					<text class="label">预约项目</text>
					<view class="desc desc-project">
						<text class="iconfont color-theme">&#xe64e;</text>工作时间是标准时间，根据难度和拥挤程度的多少，会有不同的情况，如有前面没及时忙完的，需要等位。
						<view class="project-list">
							<view class="list-item" >
								<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
								<view class="content">
									<view class="info">
										<text class="title">施华蔻烫染直3选1施华蔻烫染直3选1施华蔻烫染直3选1</text>
									</view>
									<view class="info">
										<text class="color-theme">￥1000<text class="oldprice">￥1000</text></text>
										<text>已售<text class="color-yellow">800</text></text>
									</view>
								</view>
							</view>
							<view class="project-time">操作用时预计：<text class="color-red">3.5小时</text></view>
						</view>
						<text @click="toProject" class="button">+ 预约项目</text>
					</view>
				</view>
				<view class="form-item">
					<text class="label">预约时间</text>
					<view @click="toTime" class="form-input">
						<!-- <text>曹兵</text> -->
						<text class="placeholder">请选择预约时间</text>
						<view class="select">
							<text>请选择</text>
							<text class="iconfont">&#xe64c;</text>
						</view>
					</view>
				</view>
				<view class="form-item">
					<text class="label">下单人信息</text>
					<view @click="toOrderInfo" class="form-input">
						<!-- <text>曹兵</text> -->
						<text class="placeholder">下单人信息</text>
						<view class="select">
							<text>去填写</text>
							<text class="iconfont">&#xe64c;</text>
						</view>
					</view>
				</view>
				<view class="form-item">
					<text class="label">备注</text>
					<view class="input">
						<textarea maxlength="1000" value="" placeholder="您想对发型师或商家说的话" />
					</view>
				</view>
				<view class="form-item">
					<text class="label">订单支付</text>
					<view class="price">
						<text class="iconfont">&#xe661;</text>
						<text class="iconfont iconfont2">&#xe605;</text>
						<text>支付订单全额</text>
					</view>
				</view>
				
			</view>
		</Card>
		<fixedFooter @onSubmit="onSubmit"  submitText="确定订单">
			<text slot="left">应支付金额：<text class="color-theme">¥0.00</text></text>
		</fixedFooter>
	</view>
</template>

<script>
	import fixedFooter from '@/components/fixedFooter'
	import Card from '@/components/Card'
	export default {
		components:{
			fixedFooter,
			Card
		},
		methods: {
			onSubmit () {
				uni.navigateTo({
					url:'./reservation-info'
				})
			},
			toOrderInfo () {
				uni.navigateTo({
					url:'./create-user-info'
				})
			},
			toTime () {
				uni.navigateTo({
					url:'./select-time'
				})
			},
			toProject () {
				uni.navigateTo({
					url:'./select-user-project'
				})
			},
			toUserList () {
				uni.navigateTo({
					url:'./select-user'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-order-appointment {
		padding-bottom: 100rpx;
		.desc {
			font-size: 24rpx;
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			margin-top: 24rpx;
		}
		.price {
			padding-top: 16rpx;
			display: flex;
			align-items: center;
			font-size: 24rpx;
			.iconfont {
				margin-right: 24rpx;
				font-size: 26rpx;
				color: #fc689a;
			}
			.iconfont2 {
				font-size: 32rpx;
				color: #333;
				margin-right: 10rpx;
			}
		}
		.desc-project {
			border: none;
			.project-list {
				margin-top: 32rpx;
				.project-time {
					display: block;
					margin-top: 16rpx;
				}
				.list-item {
					display: flex;
					justify-content: space-between;
					position: relative;
					align-items: center;
					background: #ffe4ed;
					padding: 24rpx;
					border-radius: 10rpx;
					
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
							color: #666;
							.title {
								color: #333333;
								font-size: 28rpx;
								line-height: 1.3;
							}
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
			.button {
				display: block;
				margin: auto;
				width: 260rpx;
				height: 80rpx;
				border-radius: 20rpx;
				border: solid 6rpx #fc689a;
				font-size: 28rpx;
				text-align: center;
				line-height: 80rpx;
				color: #fc689a;
				font-weight: bold;
				margin-top: 40rpx;
				margin-bottom: -16rpx;
			}
		}
	}
</style>

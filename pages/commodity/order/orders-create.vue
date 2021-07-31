<template>
	<!-- 套餐详情-生成订单 -->
	<view class="t-hairdres-order-create">
		<!-- 套餐内容 -->
		<view class="content commodity">
			<card>
				<view class="top">
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="scaleToFill"></image>
					<view class="right">
						<view class="title">
							<text>施华蔻烫染直3选1施华蔻烫染直3选1【时尚烫染】施华蔻烫染直3选1</text>
							<text class="iconfont">&#xe64c;</text>
						</view>
						<text>产品介绍产品介绍产品介绍产品介绍...</text>
						<view class="price">
							<text><text class="color-theme">¥185.00</text><text class="oldprice">¥225.00</text></text>
						</view>
					</view>
				</view>
				<view class="desc">
					<text class="iconfont">&#xe622;</text>
					<text>随时退 过期退</text>
				</view>
				<Title class="card-title" title="套餐内容"></Title>
				<text class="subtitle">施华蔻烫染直3选1</text>
				<view class="list-item">
					<view v-for="(item,index) in 3" :key="index" class="label-item">
						<image v-if="index === 0" src="../../../static/images/home-icon10.png" mode="scaleToFill"></image>
						<image v-if="index === 1" src="../../../static/images/home-icon9.png" mode="scaleToFill"></image>
						<image v-if="index === 2" src="../../../static/images/home-icon8.png" mode="scaleToFill"></image>
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
			</card>
		</view>
		<!-- 下单人信息 -->
		<card class="card-userinfo">
			<Title class="card-title" title="下单人信息"></Title>
			<view class="user">
				<text>李晓晓</text>
				<text>17389870234</text>
			</view>
			<Title class="card-title" title="选择支付方式"></Title>
			<view class="checked">
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
		</card>
		<!-- 按钮 -->
		<fixedFooter @onSubmit='createOrder' submitText="立即支付">
			<text slot="left">实际应金额：<text class="color-theme">¥160.00</text></text>
		</fixedFooter>
		<!-- 弹窗 -->
		<Dialog title="输入支付密码" ref="dialog">
			<view class="body" slot="body">
				<text v-for="item in 6" :key="item" :class="{active: password.length > (item - 1)}"></text>
				<input type="number" maxlength="6" class="password" v-model="password" />
			</view>
			<view class="footer" slot="footer">
				忘记支付密码？<text class="color-theme">修改密码</text>
			</view>
		</Dialog>
	</view>
</template>

<script>
	import card from '@/components/Card'
	import Title from '@/components/Title'
	import Dialog from '@/components/Dialog'
	import fixedFooter from '@/components/fixedFooter'
	export default {
		components:{
			card,
			Title,
			Dialog,
			fixedFooter
		},
		data () {
			return {
				active: 1,
				password: ''
			}
		},
		watch: {
			password (data) {
				if (data.length === 6) {
					this.$refs.dialog.close()
					uni.showLoading({
						title: '正在提交',
						mask: true
					})
					setTimeout(() => {
						uni.hideLoading()
						this.password = ''
					},1000)
				}
			}
		},
		methods: {
			createOrder () {
				this.$refs.dialog.show()
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-order-create {
		padding-bottom: 100rpx;
		
		.footer {
			padding: 40rpx;
			font-size: 24rpx;
		}
		
		.body {
			display: flex;
			justify-content: space-between;
			padding: 0 40rpx;
			position: relative;
			.password {
				width: 85%;
				height: 60rpx;
				position: absolute;
				opacity: 0;
			}
			text {
				display: flex;
				width: 50rpx;
				height: 50rpx;
				border-radius: 4rpx;
				border: solid 2rpx #a0a0a0;
				display: flex;
				justify-content: center;
			}
			.active {
				position: relative;
				&::after {
					content: '';
					width: 20rpx;
					height: 20rpx;
					border-radius: 100rpx;
					background: #333333;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-50%);
				}
			}
		}
		.card-title {
			margin-top: -32rpx;
		}
		.card-userinfo {
			.checked {
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
			.user {
				display: flex;
				border-bottom: solid 2rpx #eee;
				padding-bottom: 32rpx;
				margin-bottom: 32rpx;
				text {
					flex: 1;
					font-size: 24rpx;
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
		.commodity {
			font-size: 24rpx;
			.top {
				display: flex;
				image {
					width: 200rpx;
					height: 140rpx;
					display: block;
					margin-right: 24rpx;
					border-radius: 10rpx;
				}
				.right {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}
			}
			.desc {
				font-size: 24rpx;
				color: #999999;
				margin: 24rpx 0 56rpx 0;
				
				.iconfont {
					margin-right: 16rpx;
					vertical-align: middle;
					font-size: 32rpx;
				}
			}
			.price {
				display: flex;
				justify-content: space-between;
				font-size: #666666;
				line-height: 1;
				align-items: center;
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
				text {
					&:first-child {
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
						overflow: hidden;
					}
				}
				
				.iconfont {
					transform: translateY(5rpx);
					margin-left: 24rpx;
					font-size: 32rpx;
				}
			}
			
		}
	}
</style>

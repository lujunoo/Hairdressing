<template>
	<!-- 商家端-个人中心 -->
	<view class="t-hairdres-merchant-home">
		<view class="t-home-header">
			<view class="count">38,289.95元</view>
			<view class="all">总收入</view>
			<view class="withdraw">
				<text>已提现<text class="price">1134.45元</text></text>
				<text @click="toWithdrawal">去提现<text class="iconfont">&#xe64c;</text></text>
				<text @click="toWithdrawalDetail" class="detail">提现明细</text>
			</view>
		</view>
		<Card>
			<Title class="t-home-title" title='项目交易'/>
			<view class="list-item">
				<view @click="orderList" class="item">
					<image src="@/static/images/merchant-icon1.png" mode="aspectFill"></image>
					<text>订单管理</text>
				</view>
				<view @click="evaluation" class="item">
					<image src="@/static/images/merchant-icon2.png" mode="aspectFill"></image>
					<text>评价管理</text>
				</view>
				<view @click="commodity" class="item">
					<image src="@/static/images/merchant-icon3.png" mode="aspectFill"></image>
					<text>商品管理</text>
				</view>
				<view @click="financial" class="item">
					<image src="@/static/images/merchant-icon4.png" mode="aspectFill"></image>
					<text>财务管理</text>
				</view>
				<view @click="reserve" class="item">
					<image src="@/static/images/merchant-icon5.png" mode="aspectFill"></image>
					<text>预约管理</text>
				</view>
			</view>
		</Card>
		<Card>
			<Title class="t-home-title" title='美化店铺'/>
			<view class="list-item">
				<view @click="storeManagement" class="item">
					<image src="@/static/images/merchant-icon6.png" mode="aspectFill"></image>
					<text>门店管理</text>
				</view>
				<view @click="userList" class="item">
					<image src="@/static/images/merchant-icon7.png" mode="aspectFill"></image>
					<text>发型师管理</text>
				</view>
				<view @click="brandDesc" class="item">
					<image src="@/static/images/merchant-icon8.png" mode="aspectFill"></image>
					<text>品牌管理</text>
				</view>
				<view @click="myCreation" class="item">
					<image src="@/static/images/merchant-icon9.png" mode="aspectFill"></image>
					<text>作品秀</text>
				</view>
				<view @click="honorList" class="item">
					<image src="@/static/images/merchant-icon10.png" mode="aspectFill"></image>
					<text>荣誉墙</text>
				</view>
				<view @click="talent" class="item">
					<image src="@/static/images/merchant-icon11.png" mode="aspectFill"></image>
					<text>人才招聘</text>
				</view>
			</view>
		</Card>
		<Card>
			<Title class="t-home-title" title='其他工具'/>
			<view class="list-item list-item2">
				<view @click="eventPlanning" class="item">
					<image src="@/static/images/merchant-icon12.png" mode="aspectFill"></image>
					<text>活动策划</text>
				</view>
				<view @click="customer" class="item">
					<image src="@/static/images/merchant-icon13.png" mode="aspectFill"></image>
					<text>顾客档案</text>
				</view>
				<view @click="transfer" class="item">
					<image src="@/static/images/merchant-icon14.png" mode="aspectFill"></image>
					<text>店铺转让</text>
				</view>
				<view @click="password" class="item">
					<image src="@/static/images/merchant-icon15.png" mode="aspectFill"></image>
					<text>修改密码</text>
				</view>
			</view>
		</Card>
		<view class="tabBar">
			<view class="item">
				<text @click="toHome" class="iconfont">&#xe620;</text>
				<text>首页</text>
			</view>
			<view class="item">
				<text class="iconfont">&#xe63b;</text>
				<text>我的</text>
			</view>
		</view>
		<!-- 输码验证 -->
		<Dialog ref="codeDialog" @onConfirm="orderDetail" maskClose cancelHide title="输入验码">
			<input slot="body"  class="codeDialog" type="text" value="" placeholder="请输入券码" />
		</Dialog>
		<!-- 转让后首次登录提醒 -->
		<Dialog ref="topicDialog" maskClose cancelHide @onConfirm="onConfirm" desc="为您保障你的账户正常使用，请立即前往修改商家信息及提现银行卡账号！！"></Dialog>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Title from '@/components/Title'
	import Dialog from '@/components/Dialog'
	export default {
		components: {
			Card,
			Title,
			Dialog
		},
		methods: {
			toHome () {
				uni.navigateTo({
					url: '../home/home'
				})
			},
			toWithdrawalDetail () {
				uni.navigateTo({
					url: './withdrawal/withdrawal'
				})
			},
			toWithdrawal () {
				uni.navigateTo({
					url: '../../page-user/wallet/withdraw'
				})
			},
			orderList () {
				uni.navigateTo({
					url: './order/index'
				})
			},
			evaluation (){
				uni.navigateTo({
					url: './evaluation'
				})
			},
			commodity () {
				uni.navigateTo({
					url: '../commodity/index'
				})
			},
			reserve () {
				uni.navigateTo({
					url: '../reserve/reserve'
				})
			},
			storeManagement () {
				uni.navigateTo({
					url: '../store-management/index'
				})
			},
			myCreation () {
				uni.navigateTo({
					url: '../../page-hairstylist/my-creation/my-creation'
				})
			},
			userList () {
				uni.navigateTo({
					url: '../user-management/index'
				})
			},
			honorList () {
				uni.navigateTo({
					url: '../../page-hairstylist/personal/honor-list'
				})
			},
			brandDesc () {
				uni.navigateTo({
					url: '../brand-introduction/index'
				})
			},
			talent () {
				uni.navigateTo({
					url: '../talent-recruitment/index'
				})
			},
			eventPlanning () {
				uni.navigateTo({
					url: '../event-planning/index'
				})
			},
			financial () {
				uni.navigateTo({
					url: '../financial/index'
				})
			},
			customer () {
				uni.navigateTo({
					url: '../../page-hairstylist/customer-profile/customer-profile'
				})
			},
			transfer () {
				uni.navigateTo({
					url: '../transfer/index'
				})
			},
			password () {
				uni.navigateTo({
					url: '../change-password/index'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-home {
		padding-bottom: 100rpx;
		font-size: 24rpx;
		line-height: 1;
		.codeDialog {
			border: dashed 4rpx #fc689a;
			margin: 0 40rpx;
			font-size: 24rpx;
			padding: 16rpx;
			border-radius: 10rpx;
		}
		.tabBar {
			width: 100%;
			height: 100rpx;
			position: fixed;
			bottom: 0;
			left: 0;
			background: #fff;
			display: flex;
			justify-content: space-around;
			align-items: center;
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: #666;
				.iconfont {
					font-size: 48rpx;
				}
				&:last-child {
					color: #fc6968;
					.iconfont {
						transform: scale(1.1);
					}
				}
			}
		}
		.t-home-title {
			margin-top: -32rpx;
		}
		.list-item {
			display: flex;
			flex-wrap: wrap;
			margin-bottom: -24rpx;
			.item {
				width: 33.3%;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-bottom: 32rpx;
				image {
					width: 60rpx;
					height: 60rpx;
					display: block;
					margin-bottom: 24rpx;
				}
				text {
					font-size: 28rpx;
					margin-bottom: 16rpx;
				}
			}
		}
		.list-item2 {
			.item {
				flex: 1;
			}
		}
		.t-home-header {
			height: 320rpx;
			background-image: linear-gradient(0deg, #ffb26e 0%, #fc689a 100%);
			color: #fff;
			margin-bottom: -140rpx;
			text-align: center;
			.count {
				font-size: 36rpx;
				font-weight: bold;
				padding-top: 32rpx;
				margin-bottom: 16rpx;
			}
			.withdraw {
				margin-top: 32rpx;
				display: flex;
				justify-content: space-around;
				.price {
					font-size: 28rpx;
					font-weight: bold;
					margin-left: 24rpx;
				}
				.detail {
					color: #fff600;
				}
			}
		}
	}
</style>

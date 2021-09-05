<template>
	<!-- 用户订单列表 -->
	<view class="t-hairdres-user-order">
		<TabBar @onClick="getTabIndex" isFlex :tabList="tabList"/>
		<Card v-for="(item,index) in 10" :key="index">
			<view @click="toShopInfo(item)" class="shop-info">
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				<view class="name">
					<text>店铺名称</text>
					<text>施华蔻【时尚烫染】施华蔻施华蔻【时尚烫染】施华蔻</text>
				</view>
				<text class="iconfont">&#xe64c;</text>
				<text class="color-theme">待付款</text>
			</view>
			<view @click="toDetail(item)" class="commodity">
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				<view class="info">
					<text>有效日期至：<text class="color-yellow">2021-6-23</text></text>
					<text>数量：<text class="color-red">1</text></text>
					<text>总价：<text class="color-theme">¥188.00</text></text>
				</view>
			</view>
			<view class="bottom">
				<text>订单号：202132248599856</text>
				<text v-if="tabIndex ===3" @click="toEvaluation" class="button">去评价</text>
				<text v-if="tabIndex ===4" @click="toOrderStatus" class="button">退款中</text>
				<text class="button">{{buttonText}}</text>
			</view>
		</Card>
		<PullDownRefresh/>
	</view>
</template>

<script>
	import TabBar from '@/components/TabBar'
	import Card from '@/components/Card'
	import PullDownRefresh from '@/components/PullDownRefresh'
	export default {
		components: {
			TabBar,
			Card,
			PullDownRefresh
		},
		data () {
			return {
				tabIndex: 0,
				buttonText: '待付款',
				tabList:['全部', '待付款', '待使用', '待评价', '退款/售后']
			}
		},
		methods: {
			getTabIndex (index) {
				this.tabIndex = index
				this.buttonText = this.tabList[index]
			},
			toEvaluation () {
				uni.navigateTo({
					url: './order-evaluation'
				})
			},
			toOrderStatus () {
				uni.navigateTo({
					url: './order-refund-status'
				})
			},
			toShopInfo () {
				uni.navigateTo({
					url:"../../merchant/leaderboard/leaderboard-detail"
				})
			},
			toDetail () {
				uni.navigateTo({
					url: './order-detail'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-order {
		font-size: 24rpx;
		.commodity {
			display: flex;
			image {
				width: 200rpx;
				height: 140rpx;
				border-radius: 10rpx;
			}
			.info {
				flex: 1;
				margin-left: 24rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				color: #666666;
			}
		}
		.bottom {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 32rpx;
			margin-bottom: -12rpx;
			color: #666;
			.button {
				padding: 16rpx 32rpx;
				color: #fc6868;
				border:solid 2rpx #fc6868;
				line-height: 1;
				display: block;
				transform: translateY(-20rpx);
			}
		}
		.shop-info {
			padding-bottom: 24rpx;
			display: flex;
			align-items: center;
			border-bottom: solid 2rpx #eee;
			margin-bottom: 24rpx;
			
			image {
				margin-right: 16rpx;
				width: 50rpx;
				height: 50rpx;
				border-radius: 10rpx;
			}
			.color-theme {
				margin-left: 16rpx;
			}
			.iconfont {
				font-size: 32rpx;
				transform: translate(-8rpx,3rpx);
			}
			.name {
				flex: 1;
				align-items: center;
				font-size: 28rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
</style>

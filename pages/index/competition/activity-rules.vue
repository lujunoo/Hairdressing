<template>
	<!-- 比赛规则 -->
	<view class="t-hairdres-competition">
		<!-- banner -->
		<banner :images="bannerList" />
		<!-- 数据统计 -->
		<view class="datacount">
			<view class="datacount-item">
				<text>23423</text>
				<text>参赛者</text>
			</view>
			<view class="datacount-item">
				<text>23423</text>
				<text>投票数</text>
			</view>
			<view class="datacount-item">
				<text>23423</text>
				<text>访问量</text>
			</view>
		</view>
		<!-- 倒计时 -->
		<view class="countdown">
			<view class="title">
				<image src="@/static/images/home-icon4.png" mode="aspectFill"></image>
				<text>投票于25天8小时25分30秒后结束</text>
			</view>
		</view>
		<!-- 比赛规则 -->
		<view class="rule">
			<view class="title1">比赛规则与奖励</view>
			<view class="title2">作品名称</view>
			<view class="desc">
				发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介。
			</view>
			<view class="title2">作品时间</view>
			<view class="desc">2021-5-27  12:08:45</view>
			<view class="title2">大赛流程</view>
			<view class="desc">
				发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介。
			</view>
			<view class="title2">奖励设置</view>
			<view class="desc">
				发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介。
			</view>
		</view>
		<!-- tabBar -->
		<view class="tabBar">
			<text @click="toHome">全部参赛</text>
			<text>活动规则</text>
			<text @click="toLeaderboard">当前排名</text>
			<text @click="participate">我要参赛</text>
		</view>
	</view>
</template>

<script>
	import Banner from '../../../components/Banner'
	export default {
		components: {
			Banner
		},
		data() {
			return {
				bannerList: [
					'https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg'
				]
			};
		},
		methods: {
			toUserInfo (data) {
				uni.navigateTo({
					url:"./competition-userInfo"
				})
			},
			toHome () {
				uni.navigateTo({
					url:'./competition'
				})
			},
			toLeaderboard () {
				uni.navigateTo({
					url: './leaderboard-user'
				})
			},
			participate () {
				uni.navigateTo({
					url:'./participate'
				})
			}
		}
	}
</script>
<style>
	page {
		background: #ffcee4;
	}
</style>
<style scoped lang="less">
	.t-hairdres-competition {
		
		.tabBar {
			position: fixed;
			bottom: 0;
			left: 0;
			height: 100rpx;
			width: 100%;
			background: #FDB685;
			display: flex;
			justify-content: space-between;
			
			text {
				flex: 1;
				text-align: center;
				line-height: 100rpx;
				color: #FFFFFF;
				font-size: 28rpx;
				
				&:nth-child(2) {
					background: #F95ABF;
				}
			}
		}
		
		.rule {
			border-radius: 8rpx;
			background: #FFFFFF;
			padding: 32rpx;
			margin: 0 32rpx 32rpx 32rpx;
			.title1 {
				padding: 0 32rpx 32rpx 32rpx;
				font-size: 28rpx;
				font-weight: bold;
				margin: 0 -32rpx 32rpx -32rpx;
				border-bottom: solid 2rpx #E5E5E5;
			}
			.title2 {
				font-weight: bold;
				font-size: 28rpx;
				margin-bottom: 32rpx;
			}
			.desc {
				font-size: 24rpx;
				margin-bottom: 50rpx;
			}
		}
		
		.countdown {
			margin: 32rpx 75rpx;

			.title {
				background: #FF0000;
				height: 60rpx;
				border-radius: 100rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #FFFFFF;
				font-size: 24rpx;

				image {
					width: 28rpx;
					height: 28rpx;
					margin-right: 16rpx;
				}
			}
		}

		.datacount {
			height: 150rpx;
			background: #FFB95C;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.datacount-item {
				flex: 1;
				text-align: center;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size: 24rpx;
				color: #FFFFFF;
				padding-top: 8rpx;

				text {
					display: block;
					font-size: 32rpx;
					font-weight: bold;
					line-height: 32rpx;
					margin-bottom: 16rpx;

					&:last-child {
						font-size: 28rpx;
						line-height: 28rpx;
						font-weight: 500;
					}
				}

				&:nth-child(2) {
					border-left: solid 1px #FFFFFF;
					border-right: solid 1px #FFFFFF;
				}
			}
		}
	}
</style>

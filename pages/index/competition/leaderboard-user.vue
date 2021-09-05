<template>
	<!-- 发型师排行榜 -->
	<view class="t-hairdres-competition" :style="{paddingBottom:`${safeDistance + 100}rpx`}">
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
		<view class="userlist">
			<view class="title">
				<text>~</text>
				<image src="@/static/images/home-icon7.png" mode="aspectFill"></image>
				<text>排行榜</text>
				<text>~</text>
			</view>
			<view v-for="(item,index) in 20" :key="index" class="user">
				<view class="info">
					<text v-if="index < 3" class="iconfont">&#xe698;</text>
					<text v-else class="number">{{index + 1}}</text>
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="scaleToFill"></image>
					<text>托尼</text>
				</view>
				<view class="count">
					223423票
				</view>
			</view>
			<!-- 加载状态 -->
			<PullDownRefresh/>
		</view>
		<!-- tabBar -->
		<view class="tabBar" :style="{paddingBottom:`${safeDistance}rpx`}">
			<text @click="toHome">全部参赛</text>
			<text @click="toRule">活动规则</text>
			<text>当前排名</text>
			<text @click="participate">我要参赛</text>
		</view>
	</view>
</template>

<script>
	import Banner from '../../../components/Banner'
	import PullDownRefresh from '../../../components/PullDownRefresh'
	export default {
		components: {
			Banner,
			PullDownRefresh
		},
		data() {
			return {
				safeDistance: 0,
				bannerList: [
					'https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg'
				]
			};
		},
		onLoad() {
			this.safeDistance = getApp().globalData.safeDistance
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
			toRule () {
				uni.navigateTo({
					url: './activity-rules'
				})
			},
			participate () {
				uni.navigateTo({
					url: './participate'
				})
			},
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
				
				&:nth-child(3) {
					background: #F95ABF;
				}
			}
		}
		
		
		.userlist {
			border-radius: 8rpx;
			background: #FFFFFF;
			padding: 32rpx;
			margin: 0 32rpx 32rpx 32rpx;
			
			.user {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 24rpx;
				padding: 12rpx 0;
				
				.info {
					display: flex;
					align-items: center;
				}
				
				.number {
					width: 40rpx;
					height: 40rpx;
					text-align: center;
					line-height: 40rpx;
					border-radius: 40rpx;
					background: #f7a0c7;
					color: #FFFFFF;
					font-size: 24rpx;
					font-weight: bold;
				}
				
				.iconfont {
					font-family: icon-hairdressing;
					width: 40rpx;
					height: 40rpx;
					font-size: 40rpx;
					color: #f0b627;
					position: relative;
					
					&::after {
						content: '1';
						text-align: center;
						font-weight: bold;
						color: #FFFFFF;
						font-size: 24rpx;
						top: 8rpx;
						left: 15rpx;
						position: absolute;
					}
				}
				
				&:nth-child(3) {
					.iconfont {
						color: #fc689a;
						&::after {
							content: '2';
						}
					}
				}
				
				&:nth-child(4) {
					.iconfont {
						color: #f383fa;
						&::after {
							content: '3';
						}
					}
				}
				
				image {
					width: 50rpx;
					height: 50rpx;
					border-radius: 50rpx;
					margin: 0 24rpx;
				}
			}
			
			.title {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: 38rpx;
				
				text {
					font-size: 28rpx;
					font-weight: bold;
					color: #F95ABF;
					
					&:nth-child(1) {
						margin-right: 16rpx;
					}
					&:nth-child(4) {
						margin-left: 16rpx;
					}
				}
				
				image {
					width: 32rpx;
					height: 32rpx;
					margin-right: 8rpx;
				}
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

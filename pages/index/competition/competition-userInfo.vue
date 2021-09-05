<template>
	<!-- 比赛-发型师详情 -->
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
		<!-- 用户数据 -->
		<view class="userDate">
			<view class="dateItem">
				<text>234</text>
				<text>排名</text>
			</view>
			<view class="dateItem">
				<text>234</text>
				<text>当前票数</text>
			</view>
			<view class="dateItem">
				<text>234</text>
				<text>浏览量</text>
			</view>
		</view>
		<!-- 用户banner -->
		<view class="userInfo">
			<banner height="387" :images="bannerList" />
			<view class="info">
				<view>
					<view>
						<text>曹兵</text>
						<text>创始人</text>
					</view>
					<view class="btn">他的主页</view>
				</view>
				<view>
					<text>从业：16年</text>
					<text>入驻：1年</text>
				</view>
				<view>
					<text>评分：5分</text>
					<text>好评：1000次</text>
				</view>
				<view>
					<text>服务：2000人次</text>
					<text>回头客800位</text>
				</view>
			</view>
		</view>
		<!-- 回头客 -->
		<view class="repeat-customers">
			<view class="title">回头客详情</view>
			<view class="tabBar">
				<text class="active">洗吹</text>
				<text>剪发</text>
				<text>染发</text>
				<text>烫发</text>
			</view>
			<view class="desc">
				<text class="subtitle">洗吹：</text>
				<view class="list">
					<text class="item">回头客1次：<text>345</text>位</text>
					<text class="item">回头客2次：<text>345</text>位</text>
					<text class="item">回头客3次：<text>345</text>位</text>
				</view>
			</view>
			<view class="Introduction">
				<view class="Introduction-item">
					<text>擅长：</text>
					<text>染发、剪发、烫发、护理</text>
				</view>
				<view class="Introduction-item">
					<text>简介：</text>
					<text>发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介发型师个人简介。</text>
				</view>
			</view>
		</view>
		<!-- 投票 -->
		<view class="vote" :style="{paddingBottom:`${safeDistance}rpx`}">
			<!-- <text>{{safeDistance}}已经投票</text> -->
			<text>{{safeDistance}}我要投票</text>
		</view>
		<!-- 分享给好友 -->
		<view class="share">
			<text>&#xe665;</text>
			<text>分享给好友</text>
		</view>
	</view>
</template>

<script>
	import Banner from '../../../components/Banner'
	import Search from '../../../components/Search'
	import PullDownRefresh from '../../../components/PullDownRefresh'
	export default {
		components: {
			Banner,
			Search,
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
	}
</script>
<style>
	page {
		background: #ffcee4;
	}
</style>
<style scoped lang="less">
	.t-hairdres-competition {
		.vote {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			background: #FFFFFF;
			height: 100rpx;
			
			text {
				margin: 10rpx 125rpx;
				background: #FC689A;
				color: #FFFFFF;
				display: block;
				font-size: 24rpx;
				font-weight: bold;
				text-align: center;
				line-height: 80rpx;
				border-radius: 100rpx;
			}
		}
		
		.repeat-customers {
			margin: 32rpx;
			border-radius: 10rpx;
			background: #ffffff;
			padding: 32rpx;
			
			.Introduction {
				.Introduction-item {
					margin-top: 50rpx;
					display: flex;
					
					text {
						flex: 6.5;
						font-size: 24rpx;
						&:first-child {
							flex: 1;
							font-weight: bold;
						}
					}
				}
			}
			
			.desc {
				margin-bottom: 20rpx;
				padding: 32rpx 0 50rpx 0;
				border-bottom: solid 2rpx #E5E5E5;
				font-size: 24rpx;
				display: flex;
				justify-content: start;
				
				.subtitle {
					width: 100rpx;
				}
				
				.list {
					display: flex;
					flex-direction: column;
					
					.item {
						line-height: 24rpx;
						margin-bottom: 24rpx;
						
						text {
							color: #FF9000;
						}
					}
				}
			}
			
			.title {
				font-size: 28rpx;
				font-weight: bold;
				color: #033333;
			}
			
			.tabBar {
				display: flex;
				justify-content: space-around;
				margin: 32rpx 0;
				
				text {
					padding: 8rpx 24rpx;
				}
				
				.active {
					color: #F95ABF;
					font-weight: bold;
					border-bottom: solid 4rpx #F95ABF;
				}
			}
		}
		
		.userInfo {
			margin: 0 32rpx;
			border-radius: 10rpx;
			overflow: hidden;
			
			.info {
				padding:32rpx 32rpx 0 32rpx;
				background: #FFFFFF;
				
				view {
					display: flex;
					justify-content: space-around;
					text-align: left;
					
					text {
						flex: 1;
						font-size: 24rpx;
						line-height: 24rpx;
						margin-bottom: 32rpx;
					}
					
					.btn {
						width: 126rpx;
						height: 50rpx;
						color: #FC689A;
						border: 4rpx solid #FC689A;
						font-size: 24rpx;
						line-height: 50rpx;
						border-radius: 10rpx;
					}
					
					&:first-child {
						justify-content: space-between;
						
						view {
							&:first-child {
								display: flex;
								flex-direction: column;
								
								text {
									&:first-child {
										margin-bottom: 20rpx;
										font-size: 28rpx;
										font-weight: bold;
									}
								}
							}
						}
					}
				}
			}
		}
		
		.userDate {
			padding:  0 32rpx;
			display: flex;
			justify-content: space-between;
			margin-bottom: 32rpx;
			
			.dateItem {
				width: 174rpx;
				height: 114rpx;
				background: #FFF0B5;
				border-radius: 10rpx;
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				color: #666666;
				font-size: 24rpx;
				
				&:nth-child(2){
					background: #FFC2C2;
				}
				
				&:last-child {
					background: #D3FFC2;
				}
				
				text {
					line-height: 24rpx;
					
					&:first-child {
						font-size: 32rpx;
						line-height: 32rpx;
						margin-bottom: 16rpx;
						color: #FF0000;
						font-weight: bold;
					}
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

		.share {
			width: 100rpx;
			height: 100rpx;
			background: #FFF760;
			opacity: 0.88;
			border-radius: 10rpx;
			position: fixed;
			right: 10rpx;
			top: 520rpx;
			z-index: 100;
			
			text {
				display: block;
				text-align: center;
				font-family: icon-hairdressing;
				
				&:first-child {
					font-size: 60rpx;
					color: #09bb07;
				}
				
				&:last-child {
					font-size: 18rpx;
					color: #333333;
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

<template>
	<!-- 比赛-作品详情 -->
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
				<image src="../../../static/images/home-icon4.png" mode="aspectFill"></image>
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
			<!-- 封面 -->
			<image class="cover" src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
			<!-- 小图片 -->
			<view class="cover-list">
				<scroll-view :scroll-x="true">
					<view v-for="(item,index) in 10" :key="index" class="image">
						<image :class="{ active: active === index }" @click="active = index" src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill" ></image>
					</view>
				</scroll-view>
			</view>
			<!-- 标题 -->
			<view class="title">作品名称</view>
			<view class="desc">
				作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称作品名称
			</view>
			<!-- 作者 -->
			<view class="author">
				<view class="left">
					<text>参赛者：</text>
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="scaleToFill"></image>
					<text>托尼</text>
				</view>
				<text>2021-5-27  12:08:45</text>
			</view>
		</view>
		<!-- 投票 -->
		<view class="vote" :style="{paddingBottom:`${safeDistance}rpx`}">
			<!-- <text>{{safeDistance}}已经投票</text> -->
			<text>我要投票</text>
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
				active: 0,
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
		
		.userInfo {
			margin: 0 32rpx 32rpx 32rpx;
			border-radius: 10rpx;
			overflow: hidden;
			background: #FFFFFF;
			
			.author {
				padding: 0 32rpx 32rpx 32rpx;
				display: flex;
				align-items: center;
				font-size: 24rpx;
				justify-content: space-between;
				
				.left {
					display: flex;
					align-items: center;
					
					image {
						width: 50rpx;
						height: 50rpx;
						border-radius: 50rpx;
						margin-right: 8rpx;
					}
				}
			}
			
			.title {
				color: #333333;
				font-size: 28rpx;
				font-weight: bold;
				padding: 0 32rpx 32rpx 32rpx;
			}
			
			.desc {
				font-size: 24rpx;
				padding: 0 32rpx 32rpx 32rpx;
			}
			
			.cover {
				width: 100%;
				height: 387rpx;
				display: block;
			}
			.cover-list {
				padding: 32rpx ;
				height: 122rpx;
			}
			
			scroll-view {
				width: 100%;
				height: 122rpx;
				white-space: nowrap;
				
				.image {
					width: 160rpx;
					height: 122rpx;
					display: inline-block;
					margin-right: 10rpx;
				
					image {
						width: 100%;
						height: 100%;
						border-radius: 8rpx;
						transition: 0.4s;
						transform: scale(0.85);
					}
					
					.active {
						transform: scale(1);
						transition: 0.4s;
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

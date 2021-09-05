<template>
	<!-- 比赛 -->
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
		<!-- 搜索 -->
		<view class="search">
			<Search placeholder="请输入参赛发型师名字搜索" color="#ffffff"/>
		</view>
		<!-- 分享给好友 -->
		<view class="share">
			<text>&#xe665;</text>
			<text>分享给好友</text>
		</view>
		<!-- 瀑布流 -->
		<view class="waterfallsflow">
			<view @click="toUserInfo(item)" v-for="(item,index) in userList" :key="index" class="item">
				<image :src="item.src" mode="aspectFill"></image>
				<view class="userInfo">
					<view class="count">
						<view class="left">
							<image src="@/static/images/home-icon5.png" mode="aspectFill"></image>
							<text>托尼</text>
						</view>
						<view class="right">
							<image src="@/static/images/home-icon6.png" mode="aspectFill"></image>
							<text>145965</text>
						</view>
					</view>
					<view class="btn">投票</view>
				</view>
			</view>
		</view>
		<!-- 加载状态 -->
		<PullDownRefresh/>
		<!-- tabBar -->
		<view class="tabBar">
			<text>全部参赛</text>
			<text @click="toRule">活动规则</text>
			<text @click="toLeaderboard">当前排名</text>
			<text @click="participate">我要参赛</text>
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
				userList: [
					{
						title: '卢大爷',
						number: 234,
						id: '1',
						src: 'https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_960_720.jpg'
					},
					{
						title: '卢大爷',
						number: 234,
						id: '2',
						src: 'https://cdn.pixabay.com/photo/2020/06/21/09/52/abendstimmung-5324159_960_720.jpg'
					},
					{
						title: '卢大爷',
						number: 234,
						id: '3',
						src: 'https://cdn.pixabay.com/photo/2021/06/29/06/14/water-drops-6373296_960_720.jpg'
					},
					{
						title: '卢大爷',
						number: 234,
						id: '4',
						src: 'https://cdn.pixabay.com/photo/2019/02/20/17/00/nubble-4009534_960_720.jpg'
					},{
						title: '卢大爷',
						number: 234,
						id: '5',
						src: 'https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_960_720.jpg'
					},
					{
						title: '卢大爷',
						number: 234,
						id: '6',
						src: 'https://cdn.pixabay.com/photo/2020/06/21/09/52/abendstimmung-5324159_960_720.jpg'
					},
					{
						title: '卢大爷',
						number: 234,
						id: '7',
						src: 'https://cdn.pixabay.com/photo/2021/06/29/06/14/water-drops-6373296_960_720.jpg'
					},{
						title: '卢大爷',
						number: 234,
						id: '8',
						src: 'https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg'
					}
				],
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
			toRule () {
				uni.navigateTo({
					url: './activity-rules'
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
			z-index: 2;
			
			text {
				flex: 1;
				text-align: center;
				line-height: 100rpx;
				color: #FFFFFF;
				font-size: 28rpx;
				
				&:nth-child(1) {
					background: #F95ABF;
				}
			}
		}
		.waterfallsflow {
			padding: 24rpx 16rpx;
			display: flex;
			flex-wrap: wrap;
			
			.item {
				width: calc(50% - 32rpx);
				margin: 0 16rpx;
				height: 420rpx;
				overflow: hidden;
				margin-bottom: 32rpx;
				border-radius: 8rpx;
				position: relative;
				
				image {
					width: 100%;
					height: 100%;
					position: relative;
					z-index: 1;
				}
				
				.userInfo {
					position: absolute;
					bottom: 0;
					left: 0;
					z-index: 2;
					width: 100%;
					background: #FFFFFF;
					
					.count {
						display: flex;
						justify-content: space-between;
						flex-direction: row;
						padding: 16rpx 32rpx;
						
						text {
							margin-left: 16rpx;
							font-size: 24rpx;
							color: #333333;
						}
						
						image {
							width: 20rpx;
							height: 24rpx;
						}
						
						.right {
							image {
								width: 29rpx;
							}
						}
					}
					
					.btn {
						height: 60rpx;
						color: #FFFFFF;
						background: #f95abf;
						text-align: center;
						line-height: 60rpx;
						font-size: 24rpx;
					}
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
		
		.search {
			margin: 0 32rpx;
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

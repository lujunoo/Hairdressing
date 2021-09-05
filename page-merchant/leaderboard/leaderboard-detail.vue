<template>
	<!-- 商家详情 -->
	<view class="t-hairdres-shop-detail">
		<banner height="350" :images="bannerList"/>
		<!-- 店铺信息 -->
		<view class="shop-info">
			<view class="shop-headr">
				<view class="cover">
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="scaleToFill"></image>
				</view>
				<view class="desc">
					<view class="title">
						<text>稿定沙龙</text>
						<view class="icon">
							<text class="iconfont">&#xe646;</text>
							<!-- <text class="iconfont">&#xe62b;</text> -->
							<text class="iconfont">&#xe60a;</text>
						</view>
					</view>
					<view class="count">
						<text><text>5.0</text>分</text>
						<text><text>345</text>条好评</text>
						<text>服务人次<text>456</text></text>
					</view>
					<view class="bottom">
						<text>营业时间：10:00-8:00</text>
						<text>营业中</text>
					</view>
				</view>
			</view>
			<view class="address">
				<view class="info">
					<text class="iconfont">&#xe654;</text>
					<view class="text">
						<text>重庆市江北区建新北路38号3幢世纪英皇南塔25-15</text>
						<text>距离您800m</text>
					</view>
				</view>
				<text class="iconfont iphone">&#xe6a9;</text>
			</view>
		</view>
		<!-- 在线预约 -->
		<view @click="toDetail" class="button">在线预约</view>
		<!-- 发型师 -->
		<view class="hairstylist">
			<card>
				<Title class="card-title" @onClick="toHairstylist" title="发型师" showLeft />
				<view class="list">
					<view @click="toHairstylistDetail" v-for="(item,index) in 3" :key="index" class="item">
						<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="scaleToFill"></image>
						<view class="name">托尼老师</view>
						<view class="good">好评<text class="color-yellow">456</text></view>
						<view>回头客<text  class="color-red">456</text></view>
					</view>
				</view>
			</card>
		</view>
		<!-- 价目表 -->
		<Pricelist/>
		<!-- 用户评价 -->
		<Evaluation :data-list="[0]" hideTitle />
		<!-- 问大家 -->
		<Problem/>
		<!-- 品牌介绍 -->
		<view class="brand">
			<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
			<view class="title">
				IHAIR DO
			</view>
			<view class="desc">
				品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍介绍品牌介绍介绍品牌介绍品牌品牌介绍品牌品牌介绍品牌品牌介绍品牌品牌介绍品牌品牌介绍品牌品牌介绍品牌品牌介绍品牌品牌介绍品。
			</view>
		</view>
		<!-- 门店环境 -->
		<view class="environment">
			<card>
				<Title  class="card-title"  title="门店环境" :showred="false" />
				<PictureCollection/>
			</card>
		</view>
		<!-- 荣誉墙 -->
		<Honor hideTitle />
		<!-- 招聘 -->
		<view class="recruitment">
			<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
			<view class="list">
				<text class="title">招聘</text>
				<view @click="toRecruitment" v-for="(item,index) in 4" :key="index" class="item">
					<text>首席发型设计师</text>
					<text>月薪：<text class="color-red">¥8000+提成</text></text>
				</view>
			</view>
		</view>
		<!-- 作品 -->
		<WaterfallsFlow :list="fallsFlow"/>
	</view>
</template>

<script>
	import Pricelist from '@/components/Pricelist'
	import card from '@/components/Card'
	import banner from '@/components/Banner'
	import Title from '@/components/Title'
	import Evaluation from '@/components/Evaluation'
	import Problem from '../components/Problem'
	import PictureCollection from '@/components/PictureCollection'
	import Honor from '@/components/Honor'
	import WaterfallsFlow from '@/components/WaterfallsFlow'
	export default {
		components:{
			banner,
			card,
			Title,
			Pricelist,
			Evaluation,
			Problem,
			PictureCollection,
			Honor,
			WaterfallsFlow
		},
		data () {
			return {
				bannerList: [
					'https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg'
				],
				fallsFlow:[
					'https://cdn.pixabay.com/photo/2021/07/02/03/19/panpipe-6380762_960_720.jpg',
					'https://cdn.pixabay.com/photo/2021/07/21/04/35/woman-6482214_960_720.jpg',
					'https://cdn.pixabay.com/photo/2021/07/05/11/23/palmtrees-6388901_960_720.jpg',
					'https://cdn.pixabay.com/photo/2021/07/15/08/44/town-6467851_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_960_720.jpg',
					'https://cdn.pixabay.com/photo/2021/07/02/03/19/panpipe-6380762_960_720.jpg',
					'https://cdn.pixabay.com/photo/2021/07/21/04/35/woman-6482214_960_720.jpg',
					'https://cdn.pixabay.com/photo/2021/07/05/11/23/palmtrees-6388901_960_720.jpg',
					'https://cdn.pixabay.com/photo/2021/07/15/08/44/town-6467851_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_960_720.jpg',
				]
			}
		},
		methods: {
			toDetail () {
				uni.navigateTo({
					url: '../../page-commodity/order/order-appointment'
				})
			},
			toHairstylist () {
				uni.navigateTo({
					url: './leaderboard-hairstylist'
				})
			},
			toHairstylistDetail () {
				uni.navigateTo({
					url: './leaderboard-hairstylist-detail'
				})
			},
			toRecruitment () {
				uni.navigateTo({
					url: './recruitment'
				})
			},
			toEvaluation() {
				uni.navigateTo({
					url: './leaderboard-evaluation'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-shop-detail {
		.card-title {
			margin-top: -32rpx;
		}
		.loading-more {
			display: block;
			padding: 16rpx 0 8rpx 0;
			text-align: center;
			font-size: 28rpx;
			color: #999999;
			
			.iconfont {
				margin-left: 8rpx;
			}
		}
		.recruitment {
			position: relative;
			margin: 32rpx;
			border-radius: 10rpx;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
				display: block;
				position: absolute;
				top: 0;
				left: 0;
			}
			.list {
				position: relative;
				z-index: 2;
				background: rgba(255,255,255, 0.6);
				
				.item {
					padding: 0 32rpx;
					display: flex;
					justify-content: space-between;
					font-size: 24rpx;
					font-weight: bold;
					padding-bottom: 32rpx;
				}
			}
			.title {
				font-size: 28rpx;
				font-weight: bold;
				display: block;
				padding: 30rpx 30rpx 95rpx 30rpx;
			}
		}
		
		.brand {
			margin: 32rpx;
			background: #FFFFFF;
			border-radius: 10rpx;
			overflow: hidden;
			font-size: 24rpx;
			
			image {
				display: block;
				width: 100%;
				height: 450rpx;
			}
			.title {
				font-size: 28rpx;
				font-weight: bold;
				margin: 32rpx;
			}
			
			.desc {
				margin: -16rpx 32rpx 32rpx 32rpx;
			}
		}
		.hairstylist {
			.list {
				display: flex;
				justify-content: space-between;
				margin:  0 -8rpx;
				
				.item {
					flex: 1;
					margin: 0 8rpx;
					color: #999999;
					font-size: 24rpx;
					line-height: 36rpx;
					border-radius: 10rpx;
					border: solid 2rpx #ff8eb4;
					padding-bottom: 16rpx;
					overflow: hidden;
					
					image {
						width: 100%;
						display: block;
						height: 146rpx;
						margin-bottom: 16rpx;
					}
					view {
						padding-left: 16rpx;
					}
					.name {
						font-weight: bold;
						font-size: 28rpx;
						margin-bottom: 8rpx;
						color: #333333;
					}
				}
			}
		}
		.button {
			font-size: 28rpx;
			font-weight: bold;
			height: 80rpx;
			text-align: center;
			color: #FFFFFF;
			margin: 32rpx;
			line-height: 80rpx;
			background-image: linear-gradient(90deg, 
				#fc689a 0%, 
				#ffc0f2 100%);
			border-radius: 20rpx;
		}
		
		.shop-info {
			background: #FFFFFF;
			padding: 32rpx;
			
			.address {
				margin-top: 32rpx;
				display: flex;
				justify-content: space-between;
				
				.info {
					border-right: solid 2rpx #eee;
					padding-right: 44rpx;
					display: flex;
					
					.iconfont {
						margin-left: 16rpx;
						color: #fc689a;
						font-size: 40rpx;
					}
					
					.text {
						display: flex;
						justify-content: space-between;
						flex-direction: column;
						font-size: 24rpx;
						
						text {
							&:last-child {
								color: #666666;
							}
						}
					}
				}
				
				.iphone {
					color: #ffb400;
					font-size: 60rpx;
					padding: 32rpx 20rpx 32rpx 44rpx;
				}
			}
			
			.shop-headr {
				border-bottom: solid 2rpx #eeeeee;
				display: flex;
				justify-content: space-between;
				padding-bottom: 32rpx;
				.cover {
					width: 150rpx;
					height: 150rpx;
					border-radius: 10rpx;
					overflow: hidden;
					margin-right: 32rpx;
					
					image {
						display: block;
						width: 100%;
						height: 100%;
					}
				}
				.desc {
					flex: 1;
					display: flex;
					justify-content: space-between;
					flex-direction: column;
					
					.title {
						line-height: 1;
						font-size: 28rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;
						
						.icon {
							text {
								font-size: 32rpx;
								margin-left: 32rpx;
								
								&:first-child {
									font-size: 40rpx;
								}
							}
						}
					}
					
					.bottom {
						display: flex;
						justify-content: space-between;
						
						text {
							font-size: 24rpx;
							&:last-child {
								color: #f95ac0;
							}
						}
					}
					
					.count {
						font-size: 24rpx;
						text {
							height: 24rpx;
							line-height: 24rpx;
							display: inline-block;
							padding-right: 24rpx;
							margin-right: 24rpx;
							border-right: solid 2rpx #333333;
							
							text {
								padding: 0;
								margin: 0;
								border: none;
							}
							&:first-child {
								text {
									color: #f95ac0;
								}
							}
							&:nth-child(2) {
								text {
									color: #ffb400;
								}
							}
							&:last-child {
								border: none;
								text {
									color: #ff6464;
								}
							}
						}
					}
				}
			}
		}
	}
</style>

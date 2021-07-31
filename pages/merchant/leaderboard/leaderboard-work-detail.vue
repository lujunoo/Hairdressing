<template>
	<!-- 商家-作品详情 -->
	<view class="t-hairdres-shop-detail">
		<banner height="350" :images="bannerList"/>
		<!-- 店铺信息 -->
		<view class="shop-info">
			<view class="shop-headr">
				<view class="desc">
					<view class="title">
						<text>作品名称作品名称作品名称</text>
						<view class="icon">
							<text class="iconfont">&#xe6b3;</text>
							<!-- <text class="iconfont">&#xeb52;</text> -->
							<text class="iconfont">&#xe60a;</text>
							<text @click="complaint" class="iconfont">&#xe748;</text>
						</view>
					</view>
					<view class="count">
						作品描述作品描述作品描述作品描述作品描述作品描述作品描述描述描述描述描述描述描述
					</view>
					<view class="bottom">
						<text>发布时间：2021-3-19</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 使用项目 -->
		<view class="user-project">
			<card>
				<Title  class="card-title"  title="使用项目"/>
				<view @click="toPackage" v-for="(item,index) in 2" :key="index" class="list-item">
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="scaleToFill"></image>
					<view class="desc">
						<view class="title">【时尚烫染】施华蔻烫染直3选1【时尚烫染】施华蔻烫染直3选1</view>
						<view class="count">
							<text class="price">
								<text class="color-theme">¥185.00</text>
								<text>¥185.00</text>
							</text>
							<text>
								<text>已售</text>
								<text class="color-yellow">25</text>
							</text>
						</view>
						<view class="button">
							<text>新客立减25元</text>
							<text class="btn">下单</text>
						</view>
					</view>
				</view>
			</card>
		</view>
		<!-- 店铺入口 -->
		<ShopEntrance/>
		<!-- 价目表 -->
		<Pricelist/>
		<!-- 用户评价 -->
		<view class="evaluation">
			<card>
				<Title  class="card-title"  title="用户评价" showLeft />
				<Evaluation/>
			</card>
		</view>
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
		<view class="honor">
			<Title @onClick="toHonor"  class="card-title"  showLeft title="荣誉证书"/>
			<Honor />
		</view>
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
		<view class="waterfallsFlow">
			<card>
				<Title  class="card-title" title="作品"></Title>
				<WaterfallsFlow @onClick="toWorkDetail" :list="fallsFlow"/>
				<!-- 查看更多 -->
				<text class="loading-more">查看更多作品<text class="iconfont">&#xe63d;</text></text>
			</card>
		</view>
	</view>
</template>

<script>
	import Pricelist from '@/components/Pricelist'
	import card from '@/components/Card'
	import banner from '@/components/Banner'
	import Title from '@/components/Title'
	import Evaluation from '@/components/Evaluation'
	import Problem from '@/components/Problem'
	import PictureCollection from '@/components/PictureCollection'
	import Honor from '@/components/Honor'
	import WaterfallsFlow from '@/components/WaterfallsFlow'
	import ShopEntrance from '@/components/ShopEntrance'
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
			WaterfallsFlow,
			ShopEntrance
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
			toPackage () {
				uni.navigateTo({
					url: './leaderboard-detail-package'
				})
			},
			toHairstylist () {
				uni.navigateTo({
					url: './leaderboard-hairstylist'
				})
			},
			toHonor () {
				uni.navigateTo({
					url: './leaderboard-honor'
				})
			},
			toRecruitment () {
				uni.navigateTo({
					url: './recruitment'
				})
			},
			toWorkDetail () {
				uni.navigateTo({
					url: './leaderboard-work-detail'
				})
			},
			complaint () {
				uni.navigateTo({
					url: './leaderboard-report'
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
		
		.honor {
			.card-title {
				background: #FFFFFF;
				padding-left: 32rpx;
				padding-right: 32rpx;
				margin: 32rpx 32rpx -56rpx 32rpx;
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
		.user-project {
			.list-item {
				padding:32rpx 0;
				border-bottom: solid 2rpx #eee;
				display: flex;
				justify-content: space-between;
				
				&:last-child {
					border: none;
					padding-bottom: 0;
				}
				
				&:nth-child(2) {
					margin-top: -32rpx;
				}
				
				image {
					display: block;
					width: 200rpx;
					height: 140rpx;
					border-radius: 10rpx;
					margin-right: 24rpx;
				}
				.desc {
					flex: 1;
					max-width: 420rpx;
					display: flex;
					justify-content: space-between;
					flex-direction: column;
					
					.button {
						display: flex;
						justify-content: space-between;
						font-size: 24rpx;
						color: #FFFFFF;
						align-items: center;
						
						text {
							padding: 6rpx 8rpx;
							line-height: 1;
							background: #ffb400;
							border-radius: 6rpx;
						}
						.btn {
							background: #fc6868;
							padding: 12rpx 16rpx;
						}
					}
					
					.count {
						font-size: 24rpx;
						display: flex;
						justify-content: space-between;
						
						.price {
							.color-theme {
								font-size: 28rpx;
								font-weight: bold;
							}
							text {
								&:last-child {
									color: #999999;
									margin-left: 32rpx;
									position: relative;
									
									&::after {
										content: '';
										width: 100%;
										height: 2rpx;
										background: #999999;
										position:absolute;
										top: 48%;
										left: 0;
									}
								}
							}
						}
					}
					
					.title {
						width: 100%;
						font-size: 28rpx;
						display: block;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
			}
		}
		.shop-info {
			background: #FFFFFF;
			padding: 32rpx;
			.shop-headr {
				display: flex;
				justify-content: space-between;
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
						font-weight: bold;
						
						.icon {
							text {
								font-size: 30rpx;
								margin-left: 32rpx;
								
								&:first-child {
									font-size: 40rpx;
								}
							}
						}
					}
					
					.bottom {
						font-size: 24rpx;
					}
					
					.count {
						font-size: 24rpx;
						margin: 24rpx 0;
					}
				}
			}
		}
	}
</style>

<template>
	<!-- 发型师详情 -->
	<view class="t-hairdres-hairstylist-detail">
		<!-- 顶部 -->
		<view class="headr">
			<Banner height="350" :images="bannerList"/>
			<view class="user-info">
				<view class="item">
					<text class="name">曹兵</text>
					<view class="tubiao">
						<text class="iconfont">&#xe646;</text>
						<text class="iconfont">&#xe60a;</text>
						<text @click="createUserCard">生成名片</text>
					</view>
				</view>
				<view class="item">
					<text>创始人</text>
				</view>
				<view class="item">
					<text>从业16年</text>
					<text>入驻：1年</text>
				</view>
				<view class="item">
					<text>评分<text class="color-theme">5.0</text>分</text>
					<text>好评：<text class="color-yellow">1000次</text></text>
				</view>
				<view class="item">
					<text>服务人次<text class="color-red">985</text></text>
					<text>回头客<text class="color-purple">800</text></text>
				</view>
			</view>
		</view>
		<!-- 回头客 -->
		<Card>
			<view class="repeat-customers">
				<view class="title">回头客详情</view>
				<TabBar isFlex :tabList="tabList"/>
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
		</Card>
		<!-- 店铺入口 -->
		<ShopEntrance/>
		<!-- 价目表 -->
		<Pricelist/>
		<!-- 用户评价 -->
		<view class="evaluation">
			<card>
				<Title @onClick="toEvaluation" class="card-title"  title="用户评价" showLeft />
				<Evaluation/>
			</card>
		</view>
		<!-- 荣誉墙 -->
		<view class="honor">
			<Title @onClick="toHonor"  class="card-title"  showLeft title="荣誉证书"/>
			<Honor />
		</view>
		<!-- 作品 -->
		<view class="waterfallsFlow">
			<card>
				<Title  class="card-title" title="作品"></Title>
				<WaterfallsFlow  :list="fallsFlow"/>
				<!-- 查看更多 -->
				<text class="loading-more">查看更多作品<text class="iconfont">&#xe63d;</text></text>
			</card>
		</view>
		<!-- 生成名片 -->
		<Dialog maskClose hideHeader hideFooter ref="Dialog">
			<view slot='body' class="hairstylistDialog">
				<Banner height="240" :images="bannerList"/>
				<view class="list-item">
					<text class="name">曹兵</text>
				</view>
				<view class="list-item">
					<text>创始人</text>
				</view>
				<view class="list-item">
					<text>从业16年</text>
					<text>入驻：1年</text>
				</view>
				<view class="list-item">
					<text>评分<text class="color-theme">5.0</text>分</text>
					<text>好评：<text class="color-yellow">1000次</text></text>
				</view>
				<view class="list-item">
					<text>服务人次<text class="color-red">985</text></text>
					<text>回头客<text class="color-purple">800</text></text>
				</view>
				<view class="list-item">
					<view><text class="name">擅长：</text>剪发、染发、烫发、护理</view>
				</view>
				<view class="list-item">
					<view><text class="name">简介：</text>发型师个人简介发型师个人简介发型师个人简介</view>
				</view>
				<view class="list-item">
					<view class="user-price">
						<text>洗吹：<text class="color-theme">268元</text></text>
						<text>曹兵烫发：<text class="color-theme">368元</text></text>
						<text>曹兵烫发+染发：<text class="color-theme">668元</text></text>
					</view>
					<view class="code">
						<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
						<text>扫码注册下载</text>
					</view>
				</view>
				<view class="list-item">
					<view class="shopInfo">
						<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
						<view>
							<text>养发堂</text>
							<text>地址：重庆市江北区建新北路38号附100号</text>
						</view>
					</view>
				</view>
			</view>
		</Dialog>
	</view>
</template>

<script>
	import Banner from '@/components/Banner'
	import Dialog from '@/components/Dialog'
	import Card from '@/components/Card'
	import Title from '@/components/Title'
	import TabBar from '@/components/TabBar'
	import ShopEntrance from '@/components/ShopEntrance'
	import Pricelist from '@/components/Pricelist'
	import Evaluation from '@/components/Evaluation'
	import Honor from '@/components/Honor'
	import WaterfallsFlow from '@/components/WaterfallsFlow'
	export default {
		components:{
			Card,
			Banner,
			TabBar,
			ShopEntrance,
			Pricelist,
			Evaluation,
			Title,
			Honor,
			WaterfallsFlow,
			Dialog
		},
		data () {
			return {
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
				],
				tabList:['洗吹', '剪发', '染发', '烫发'],
				bannerList: [
					'https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg'
				],
			}
		},
		methods: {
			createUserCard () {
				this.$refs.Dialog.show()
			},
			toEvaluation () {
				uni.navigateTo({
					url: './leaderboard-evaluation'
				})
			},
			toHonor () {
				uni.navigateTo({
					url: './leaderboard-honor'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-hairstylist-detail {
		.card-title {
			margin-top: -32rpx;
		}
		.hairstylistDialog {
			width: 524rpx;
			.list-item {
				font-size: 24rpx;
				display: flex;
				justify-content: space-between;
				padding: 24rpx 32rpx 0 32rpx;
				.shopInfo {
					display: flex;
					align-items: center;
					margin-bottom: 32rpx;
					image {
						display: block;
						width: 50rpx;
						height: 50rpx;
						background-color: #fc689a;
						border-radius: 10rpx;
					}
					view {
						flex: 1;
						margin-left: 16rpx;
						text {
							font-size: 18rpx;
							display: block;
							
							&:first-child {
								font-size: 24rpx;
								font-weight: bold;
							}
						}
					}
				}
				.code {
					width: 135rpx;
					height: 135rpx;
					image {
						display: block;
						width: 100%;
						height: 100%;
						margin-bottom: 8rpx;
					}
					text {
						display: block;
						text-align: center;
						font-size: 18rpx;
						color: #666666;
					}
				}
				.user-price {
					flex: 1;
					display: flex;
					flex-direction: column;
					text {
						margin-bottom: 16rpx;
					}
				}
				.name {
					font-weight: bold;
					font-size: 28rpx;
				}
			}
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
		.honor {
			.card-title {
				background: #FFFFFF;
				padding-left: 32rpx;
				padding-right: 32rpx;
				margin: 32rpx 32rpx -56rpx 32rpx;
			}
		}
		.repeat-customers {
			.Introduction {
				.Introduction-item {
					margin-top: 24rpx;
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
				padding: 32rpx 0 24rpx 0;
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
		}
		
		.headr {
			background: #FFFFFF;
			margin-bottom: 32rpx;
			.user-info {
				padding: 32rpx;
				font-size: 24rpx;
				.item {
					display: flex;
					margin-bottom: 24rpx;
					&:last-child {
						margin-bottom: 0;
					}
					.tubiao {
						text {
							font-size: 32rpx;
							margin-left: 32rpx;
							&:first-child {
								display: inline-block;
								transform: scale(1.3);
							}
							
							&:last-child {
								border-radius: 10rpx;
								padding: 8rpx 16rpx;
								display: inline-block;
								color: #FFFFFF;
								font-size: 24rpx;
								background: #ffbd55;
								line-height: 1;
							}
						}
					}
					.name {
						font-size: 28rpx;
						font-weight: bold;
					}
					text {
						flex: 1;
					}
				}
			}
		}
	}
</style>

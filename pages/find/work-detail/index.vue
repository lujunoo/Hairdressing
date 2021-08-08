<template>
	<!-- 发现-作品详情 -->
	<view class="t-hairdres-find-detail">
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
							<!-- <text class="btn">下单</text> -->
						</view>
					</view>
				</view>
			</card>
		</view>
		<!-- 回头客详情 -->
		<view class="repeat-customer">
			<card>
				<view class="repeat-item">
					<view class="userInfo">
						<view class="head">
							<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
							<view class="text">
								<text>曹兵</text>
								<text>创始人</text>
							</view>
						</view>
						<text @click="createUserCard" class="create-card">生成名片</text>
					</view>
				</view>
				<view class="repeat-item">
					<view>从业16年</view>
					<view>入驻：1年</view>
				</view>
				<view class="repeat-item">
					<view>评分5.0分</view>
					<view>好评：1000次</view>
				</view>
				<view class="repeat-item">
					<view>服务人次985 </view>
					<view> 回头客800 </view>
				</view>
				<!-- 回头客 -->
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
		<!-- 荣誉墙 -->
		<view class="honor">
			<Title @onClick="toHonor"  class="card-title"  showLeft title="荣誉证书"/>
			<Honor />
		</view>
		<!-- 作品 -->
		<view class="waterfallsFlow">
			<card>
				<Title  class="card-title" title="其他作品"></Title>
				<WaterfallsFlow @onClick="toWorkDetail" :list="fallsFlow"/>
				<!-- 查看更多 -->
				<text class="loading-more">查看更多作品<text class="iconfont">&#xe63d;</text></text>
			</card>
		</view>
		<!-- 生成名片 -->
		<Dialog maskClose hideHeader hideFooter ref="Dialog">
			<view slot='body' class="hairstylistDialog">
				<banner height="240" :images="bannerList"/>
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
	import Pricelist from '@/components/Pricelist'
	import card from '@/components/Card'
	import TabBar from '@/components/TabBar'
	import banner from '@/components/Banner'
	import Title from '@/components/Title'
	import Evaluation from '@/components/Evaluation'
	import Honor from '@/components/Honor'
	import WaterfallsFlow from '@/components/WaterfallsFlow'
	import ShopEntrance from '@/components/ShopEntrance'
	import Dialog from '@/components/Dialog'
	export default {
		components:{
			banner,
			card,
			Title,
			TabBar,
			Pricelist,
			Evaluation,
			Honor,
			WaterfallsFlow,
			ShopEntrance,
			Dialog
		},
		data () {
			return {
				tabList:['洗吹', '剪发', '染发', '烫发'],
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
					url: '../../merchant/leaderboard/leaderboard-report'
				})
			},
			createUserCard () {
				this.$refs.Dialog.show()
			},
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-find-detail {
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
		
		.repeat-customer {
			font-size: 24rpx;
			line-height: 1;
			.repeat-customers {
				margin-top: 32rpx;
				padding-top: 32rpx;
				border-top: solid 2rpx #eee;
				.Introduction {
					.Introduction-item {
						margin-top: 24rpx;
						display: flex;
						line-height: 1.5;
						
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
			.repeat-item {
				display: flex;
				margin-bottom: 32rpx;
				.userInfo {
					display: flex;
					justify-content: space-between;
					.head {
						display: flex;
						align-items: center;
						text {
							display: block;
							margin-left: 16rpx;
							font-size: 28rpx;
							font-weight: bold;
							&:last-child {
								font-size: 24rpx;
								font-weight: 500;
								margin-top: 20rpx;
							}
						}
					}
					image {
						width: 70rpx;
						height: 70rpx;
						background-color: #fc68e9;
						border-radius: 5rpx;
					}
					.create-card {
						height: 32rpx;
						color: #FFFFFF;
						padding: 10rpx 16rpx 4rpx 16rpx;
						line-height: 1;
						border-radius: 10rpx;
						background: #ffbd55;
					}
				}
				view {
					flex: 1;
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

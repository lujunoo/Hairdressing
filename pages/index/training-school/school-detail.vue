<template>
	<!-- 学校详情 -->
	<view class="t-hairdres-school-detail">
		<view class="header">
			<!-- banner -->
			<view class="banner">
				<Banner :images="bannerList"/>
			</view>
			<!-- title -->
			<Title class="card-title" title="学校介绍"/>
			<!-- 简介 -->
			<view class="desc">
				学校介绍学校介绍，学校介绍学校介，绍学校介绍学校介绍学校介绍学校介绍学，校介绍学校介绍学，校介绍学校介绍，学校介绍学校介绍学，校介绍学校介，绍学校介绍学校介绍，学校介绍学校介绍学校。
			</view>
			<!-- 地址 -->
			<view class="address">
				<text class="iconfont">&#xe654;</text>
				<view class="distance">
					<text>重庆市江北区建新北路38号3幢世纪英皇南塔25-15</text>
					<text>距离您800m</text>
				</view>
			</view>
		</view>
		<!-- 学校环境 -->
		<Card class="environment">
			<Title  class="card-title"  title="学校环境"/>
			<Collection/>
		</Card>
		<!-- 培训老师  -->
		<Card class="trainer">
			<Title  class="card-title"  @onClick="toTtrainer" showLeft title="培训老师"/>
			<view @click="toTtrainerDetail"  v-for="(item,index) in 3" :key="index" class="item">
				<view class="cover">
					<image src="https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg" mode="aspectFill"></image>
				</view>
				<view class="info">
					<text>老师姓名</text>
					<text>老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师。</text>
				</view>
			</view>
		</Card>
		<!-- 培训课程 -->
		<Card class="courses">
			<Title class="card-title"  title="培训课程"/>
			<TabBar :tabList="tabList"></TabBar>
			<!-- 列表 -->
			<view class="list">
				<view @click="toProject" v-for="(item,index) in 4" :key="index" class="list-item">
					<view class="cover">
						<image src="https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg" mode="scaleToFill"></image>
					</view>
					<view class="info">
						<text>经典剪发</text>
						<text>¥8888<text>¥12900</text></text>
					</view>
				</view>
			</view>
			<!-- 加载状态 -->
			<pull-down-refresh />
		</Card>
	</view>
</template>
<script>
	import Banner from '@/components/Banner'
	import Title from '@/components/Title'
	import Collection from '@/components/PictureCollection'
	import TabBar from '@/components/TabBar'
	import Card from '@/components/Card'
	import PullDownRefresh from '@/components/PullDownRefresh'
	export default {
		components:{
			Banner,
			Title,
			Collection,
			Card,
			TabBar,
			PullDownRefresh
		},
		data () {
			return {
				tabList: ['推荐', '洗吹', '烫发', '染发', '剪发', '护理', '染发', '剪发', '护理'],
				bannerList: [
					'https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg'
				],
			}
		},
		methods: {
			toTtrainer () {
				uni.navigateTo({
					url: './school-teachers'
				})
			},
			toTtrainerDetail () {
				uni.navigateTo({
					url: './school-teachers-detail'
				})
			},
			toProject () {
				uni.navigateTo({
					url: './school-teachers-project-detail'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-school-detail {
		.card-title {
			margin-bottom: -24rpx;
		}
		.header {
			padding: 24rpx 32rpx 0 32rpx;
			background: #FFFFFF;
		}
		
		.courses {
			margin: 32rpx;
			padding-top: 0;
			
			.title {
				margin-bottom: -24rpx;
			}
			
			.list {
				padding-top: 32rpx;
				display: flex;
				flex-wrap: wrap;
				.list-item {
					width: calc(50% - 20rpx);
					height: 420rpx;
					overflow: hidden;
					border-radius: 10rpx;
					border: solid 3rpx #fc699a;
					margin-bottom: 32rpx;
					position: relative;
					
					&:nth-child(2n) {
						margin-left: 16rpx;
					}
					&:nth-child(2n+1) {
						margin-right: 16rpx;
					}
					
					.info {
						width: calc(100% - 30rpx);
						padding: 24rpx 16rpx;
						background: #FFFFFF;
						position: absolute;
						bottom: 0;
						left: 0;
						display: flex;
						flex-direction: column;
						
						text {
							font-size: 24rpx;
							line-height: 24rpx;
							
							&:last-child {
								font-weight: bold;
								color: #ff0000;
								margin-top: 24rpx;
								
								text {
									font-weight: 500;
									color: #666666;
									margin-left: 32rpx;
									position: relative;
									&::after {
										content: "";
										width: 100%;
										height: 2rpx;
										background: #666;
										position: absolute;
										top: 50%;
										left: 0;
									}
								}
							}
						}
					}
					.cover {
						width: 100%;
						height: 300rpx;
						overflow: hidden;
						
						image {
							width: 100%;
							height: 100%;
							display: block;
						}
					}
				}
			}
		}
		
		.trainer {
			margin: 32rpx;
			padding-top: 0;
			
			.item {
				padding: 24rpx 0;
				border-bottom: solid 2rpx #e5e5e5;
				display: flex;
				
				&:last-child {
					border: none;
					padding-bottom: 0;
				}
				
				.info {
					flex: 1;
					display: flex;
					flex-direction: column;
					
					text {
						font-size: 24rpx;
						
						&:first-child {
							line-height: 28rpx;
							font-size: 28rpx;
							font-weight: bold;
							margin-bottom: 24rpx;
						}
					}
				}
				
				.cover {
					width: 200rpx;
					height: 200rpx;
					border-radius: 10rpx;
					overflow: hidden;
					margin-right: 32rpx;
					
					image {
						width: 100%;
						height: 100%;
						display: block;
					}
				}
			}
		}
		
		.environment {
			margin: 32rpx;
			padding-top: 0;
			.card-title {
				margin-bottom: 0rpx;
			}
		}
		
		.address {
			padding: 32rpx 0;
			border-top: solid 1px #e5e5e5;
			margin-top: 32rpx;
			display: flex;
			
			.iconfont {
				font-family: icon-hairdressing;
				color: #fc689a;
				display: block;
				margin:  4rpx 12rpx 0 0;
			}
			
			.distance {
				font-size: 28rpx;
				display: flex;
				flex-direction: column;
				
				text {
					&:last-child {
						margin-top: 16rpx;
						font-size: 24rpx;
						color: #666666;
					}
				}
			}
		}
		.banner {
			border-radius: 24rpx;
			overflow: hidden;
		}
		.title {
			padding: 32rpx 0;
			font-size: 32rpx;
			display: flex;
			
			text {
				display: block;
				position: relative;
				
				&::after {
					content: "";
					width: 10rpx;
					height: 15rpx;
					background-color: #fc689a;
					border-radius: 3rpx;
					position: absolute;
					bottom: 8rpx;
					right: -20rpx;
				}
			}
		}
		.desc {
			display: block;
			font-size: 24rpx;
			margin-top: 16rpx;
		}
	}
</style>

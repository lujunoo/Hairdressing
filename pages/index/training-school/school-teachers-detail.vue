<template>
	<!-- 教师详情 -->
	<view class="t-hairdres-school-teachers-detail">
		<Card class="card">
			<Banner height="330" class="banner" :images="bannerList"/>
			<Title title="老师姓名"></Title>
			<view class="desc">
				         老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍。         老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍。         老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍。
			</view>
		</Card>
		<!-- 套餐列表 -->
		<view class="setmeal">
			<Card v-for="(item,index) in 4" :key="index">
				<view class="item" >
					<view @click="toDetail" class="cover">
						<image src="https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg" mode="scaleToFill"></image>
					</view>
					<view  @click="toDetail" class="info">
						<text>经典剪发</text>
						<view class="price">
							<text>¥8888<text>¥12900</text></text>
							<text>已售35</text>
						</view>
					</view>
				</view>
			</Card>
		</view>
	</view>
</template>
<script>
	import Banner from '@/components/Banner'
	import Title from '@/components/Title'
	import Collection from '@/components/PictureCollection'
	import TabBar from '@/components/TabBar'
	import Card from '@/components/Card'
	export default {
		components:{
			Banner,
			Title,
			Collection,
			Card,
			TabBar
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
			toDetail () {
				uni.navigateTo({
					url: './school-teachers-project-detail'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-school-teachers-detail {
		.setmeal {
			margin-top: 32rpx;
			.item {
				margin-bottom: 32rpx;
				display: flex;
				
				.cover {
					width: 140rpx;
					height: 140rpx;
					border-radius: 10rpx;
					margin-right: 32rpx;
					overflow: hidden;
					
					image {
						display: block;
						width: 100%;
						height: 100%;
					}
				}
				
				.info {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					
					text {
						font-size: 24rpx;
					}
					
					.price {
						display: flex;
						justify-content: space-between;
						text {
							&:first-child {
								color: #ff0000;
								
								text {
									color: #999;
									position: relative;
									margin-left: 32rpx;
									
									&::after {
										content: "";
										width: 100%;
										height: 2rpx;
										background: #999;
										position: absolute;
										top: 50%;
										left: 0;
									}
								}
							}
						}
					}
				}
			}
		}
		
		.card {
			padding: 32rpx;
		}
		
		.desc {
			font-size: 24rpx;
			line-height: 1.8;
			margin-top: -16rpx;
		}
		
		.banner {
			border-radius: 10rpx;
			overflow: hidden;
		}
	}
</style>

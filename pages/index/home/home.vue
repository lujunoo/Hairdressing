<!-- 首页 -->
<template>
	<view class="t-hairdres-index-home">
		<!-- 搜索组件 -->
		<view class="t-home-search">
			<searchBox color="#ffd9e6">
				<view @click="getLocation" class="address">重庆&nbsp;江北<text class="drupdown">&#xe731;</text></view>
			</searchBox>
		</view>
		<!-- banner -->
		<banner :images="bannerList"/>
		<!-- 菜单 -->
		<view class="t-home-menu">
			<view class="leaderboard">
				<text @click="toRouter(1)">美发店排行</text>
				<text @click="toRouter(2)">发型师排行</text>
			</view>
			<view class="classification">
				<view class="class-item">
					<image @click="toRouter(5)" src="@/static/images/home-icon3.png" mode="aspectFill"></image>
					<text>论坛</text>
				</view>
				<view @click="toRouter(3)" class="class-item">
					<image src="@/static/images/home-icon2.png" mode="aspectFill"></image>
					<text>比赛</text>
				</view>
				<view @click="toRouter(4)" class="class-item">
					<image src="@/static/images/home-icon1.png" mode="aspectFill"></image>
					<text>学校</text>
				</view>
			</view>
		</view>
		<!-- tabBar -->
		<tabBar :tabList="tabList"/>
		<!-- 套餐列表 -->
		<setmeal v-for="(item, index) in 10" :key="index"/>
		<!-- 加载状态 -->
		<pull-down-refresh :status="loading"/>
	</view>
</template>

<script>
	import searchBox from '@/components/Search'
	import Banner from '@/components/Banner'
	import TabBar from '@/components/TabBar'
	import Setmeal from '@/components/Setmeal'
	import PullDownRefresh from '@/components/PullDownRefresh'
	export default {
		components: {
			searchBox,
			Banner,
			TabBar,
			Setmeal,
			PullDownRefresh
		},
		data() {
			return {
				loading: 0,
				bannerList: [
					'https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg'
				],
				tabList: ['推荐', '洗吹', '烫发', '染发', '剪发', '护理', '染发', '剪发', '护理']
			};
		},
		onReachBottom () {
			this.loadingData()
		},
		methods: {
			loadingData () {
				if (this.loading === 1) {
					return false
				}
				this.loading = 1
				setTimeout(() => {
					this.loading = 0
				}, 1000)
			},
			getLocation () {
				uni.getLocation({
					geocode: true,
					success(data) {
						console.log(data)
					}
				})
			},
			toRouter (name) {
				if (name === 1) {
					uni.switchTab({
						url: '../../merchant/leaderboard/leaderboard'
					})
				}
				if (name === 2) {
					uni.navigateTo({
						url:'../hairRanking/hairRanking'
					})
				}
				if (name === 3) {
					uni.navigateTo({
						url:'../competition/competition'
					})
				}
				if (name === 4) {
					uni.navigateTo({
						url:'../training-school/training-school'
					})
				}
				if (name === 5) {
					uni.navigateTo({
						url:'../platform/platform'
					})
				}
			}
		}
	}
</script>

<style scoped lang="less">
.t-hairdres-index-home {
	.t-home-setmeal {
		padding-bottom: 24rpx;
	}

	.t-home-menu {
		padding: 32rpx;
		
		.classification {
			display: flex;
			justify-content: space-between;
			
			.class-item {
				width: 218rpx;
				height: 126rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				background-image: linear-gradient(90deg, 
						#ffe2fa 0%, 
						#edeffe 100%);
				border-radius: 30rpx;
				
				text {
					font-size: 32rpx;
					display: block;
					margin-left: 16rpx;
					color: #f98699;
				}
				
				image {
					width: 40rpx;
					height: 32rpx;
				}
				
				&:nth-child(2n) {
					background-image: linear-gradient(90deg, 
							#fae4d7 0%, 
							#f9f9e7 100%);
					text {
						color: #ffb28f;
					}
				}
				
				&:last-child {
					background-image: linear-gradient(90deg, 
							#d9e9ff 0%, 
							#e6fbf2 100%);
					text {
						color: #40dfdd;
					}
				}
			}
		}
		
		.leaderboard {
			display: flex;
			justify-content: space-between;
			margin-bottom: 32rpx;

			text {
				width: 334rpx;
				height: 100rpx;
				display: block;
				font-size: 32rpx;
				color: #FFFFFF;
				background: #f789b0;
				border-radius: 30rpx;
				line-height: 100rpx;
				text-align: center;
				
				&:last-child {
					background: #aceeff;
				}
			}
		}
	}
	
	.t-home-search {
		padding: 24rpx 32rpx;
		background: #FFFFFF;
		
		.address {
			line-height: 65rpx;
			color: #333333;
			font-size: 32rpx;
			margin-right: 32rpx;
			display: flex;
			align-items: center;
			
			.drupdown {
				transform: translateY(4rpx);
				font-size: 40rpx;
				font-family: icon-hairdressing;
			}
		}
	}
}
</style>

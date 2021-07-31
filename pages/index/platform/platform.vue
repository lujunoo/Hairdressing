<template>
	<!-- 论坛 -->
	<view class="t-hairdres-platform">
		<!-- banner -->
		<banner height="350" :images="bannerList"/>
		<!-- 菜单 -->
		<view class="menu">
			<view @click="toCustomer(1)" class="item">
				<image src="https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg" mode="aspectFill"></image>
				<text>顾客专区</text>
			</view>
			<view @click="toCustomer(2)" class="item">
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				<text>行业专区</text>
			</view>
		</view>
		<!-- 热门话题 -->
		<view class="hot-title">
			<text class="iconfont">&#xe638;</text>
			<text>热门话题</text>
		</view>
		<view class="hot-topic">
			<view v-for="(item,index) in 5" :key="index" class="item">
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				<view class="info">
					<text class="name">#烫染发技术讨论烫染发技术讨论烫染发技术讨论#</text>
					<view class="count">
						<text>2385人参加</text>
						<text>385条动态</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 列表 -->
		<view class="date-list">
			<!-- tab -->
			<tabBar isFlex :tabList="tabList"/>
			<!-- 文章列表 -->
			<view v-for="(item,index) in 5" :key="index" class="discuss">
				<Discuss/>
			</view>
			<PullDownRefresh/>
		</view>
		<!-- 悬浮按钮 -->
		<view class="fied-btn">
			<view @click="toCreat" class="btn">
				<text class="iconfont">&#xe630;</text>
				<text>发帖</text>
			</view>
			<view @click="toUser" class="btn">
				<text class="iconfont iconfont2">&#xe61e;</text>
				<text>我的</text>
			</view>
		</view>
	</view>
</template>

<script>
	import banner from '@/components/Banner'
	import tabBar from '@/components/TabBar'
	import Discuss from '@/components/Discuss'
	import PullDownRefresh from '@/components/PullDownRefresh'
	export default {
		components:{
			banner,
			tabBar,
			Discuss,
			PullDownRefresh
		},
		data() {
			return {
				tabList: ['最新', '推荐', '热门'],
				bannerList: [
					'https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg'
				],
			};
		},
		methods: {
			toCustomer (type) {
				uni.navigateTo({
					url: `./platform-customerArea?type=${type}`
				})
			},
			toCreat () {
				uni.navigateTo({
					url: './creat-article'
				})
			},
			toUser () {
				uni.navigateTo({
					url: './platform-userInfo'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.t-hairdres-platform {
	.fied-btn {
		position: fixed;
		bottom:  100rpx;
		right: 10rpx;
		display: flex;
		flex-direction: column;
		
		.btn {
			text-align: center;
			width: 100rpx;
			height: 100rpx;
			border-radius: 100rpx;
			margin-bottom: 16rpx;
			opacity: 0.6;
			background: linear-gradient(0deg, #FC689A 0%, #FF9EDE 100%);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text {
				font-size: 24rpx;
				color: #FFFFFF;
			}
			.iconfont{
				font-size: 32rpx;
			}
			.iconfont2 {
				transform: scale(1.4);
			}
		}
	}
	.date-list {
		background: #fffeff;
		padding: 32rpx 0 32rpx 0;
		
		.discuss {
			margin: 32rpx 32rpx 0 32rpx;
		}
	}
	
	.hot-topic {
		display: flex;
		flex-wrap: wrap;
		padding: 0 32rpx;
		.item {
			width: 50%;
			margin-bottom: 32rpx;
			display: flex;
			
			.info{
				max-width: 270rpx;
				display: flex;
				flex-direction: column;
				
				.name {
					line-height: 1;
					font-size: 28rpx;
					margin-bottom: 10rpx;
					display: block;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
				
				.count {
					font-size: 22rpx;
					line-height: 1;
					display: flex;
					justify-content: space-between;
					
					text {
						flex: 1;
					}
				}
			}
			
			image {
				width: 60rpx;
				height: 60rpx;
				display: block;
				margin-right: 16rpx;
			}
		}
	}
	
	.hot-title {
		padding: 16rpx 32rpx 32rpx 32rpx;
		
		.iconfont {
			color: #fc689a;
			font-family: icon-hairdressing;
			margin-right: 8rpx;
		}
		text {
			font-weight: bold;
			font-size: 32rpx;
		}
	}
	
	.menu {
		padding: 32rpx;
		display: flex;
		justify-content: space-between;
		
		.item {
			width: 320rpx;
			height: 170rpx;
			border-radius: 10rpx;
			overflow: hidden;
			position: relative;
			
			image {
				width: 100%;
				height: 100%;
				display: block;
			}
			
			text {
				display: block;
				font-size: 32rpx;
				font-weight: bold;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: rgba(0,0,0,0.35);
				color: #FFFFFF;
				text-align: center;
				line-height: 170rpx;
			}
		}
	}
}
</style>

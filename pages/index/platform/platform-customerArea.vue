<template>
	<!-- 顾客专区 -->
	<view class="t-hairdres-platform-customer">
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
				type: 1,
				tabList: ['最新', '推荐', '热门'],
				bannerList: [
					'https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg'
				],
			};
		},
		onLoad (option) {
			this.type = option.type
			uni.setNavigationBarTitle({
				title: `${this.type ===  '1' ? '顾客专区' : '行业专区'}`
			})
			console.log(option)
		}
	}
</script>

<style lang="less" scoped>
.t-hairdres-platform-customer {
	.date-list {
		background: #fffeff;
		padding: 0rpx 0 32rpx 0;
		
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

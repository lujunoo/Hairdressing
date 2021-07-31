<template>
	<!-- 发型师排行榜 -->
	<view class="t-hairdres-leaderboard" :style="{ paddingBottom: `${safeDistance}px` }">
		<!-- tabBar -->
		<view class="t-hairdres-tabBar">
			<text :class="{ active: active === 1 }" @click="active = 1">同城</text>
			<text :class="{ active: active === 2 }" @click="active = 2">全国</text>
		</view>
		<!-- 搜索 -->
		<view class="search">
			<search-box color="rgba(252, 104, 154, 0.3)" placeholder="输入商家名称搜索" />
		</view>
		<!-- 筛选条件 -->
		<view class="filter">
			<filter :filter="filter"/>
		</view>
		<!-- 商品列表 -->
		<view class="Setmeal">
			<Hairstylist v-for="(item,index) in 10" :key="index" />
		</view>
		<!-- 加载状态 -->
		<pull-down-refresh/>
	</view>
</template>

<script>
	import SearchBox from '@/components/Search'
	import Filter from '@/components/Filter'
	import Hairstylist from '@/components/Hairstylist'
	import PullDownRefresh from '@/components/PullDownRefresh'
	export default {
		components:{
			SearchBox,
			Filter,
			Hairstylist,
			PullDownRefresh
		},
		data() {
			return {
				active: 1,
				safeDistance: 0,
				filter: [
					{
						title: '附近',
						children:[
							{
								title: "<500m",
								value: 0,
							},
							{
								title: ">1km",
								value: 1,
							},
							{
								title: ">3km",
								value: 2,
							},
							{
								title: ">5km",
								value: 3,
							}
						]
					},
					{
						title: '智能排序',
						children:[
							{
								title: "销量优先",
								value: 0,
							},
							{
								title: "距离优先",
								value: 1,
							},
							{
								title: "热度优先",
								value: 2,
							}
						]
					},
					{
						title: '时间筛选',
						children:[
							{
								title: "时间1",
								value: 0,
							},
							{
								title: "时间2",
								value: 1,
							},
							{
								title: "时间3",
								value: 2,
							}
						]
					}
				]
			};
		},
		onLoad() {
			this.safeDistance = getApp().globalData.safeDistance
		},
		onShow() {
		}
	}
</script>

<style scoped lang="less">
.t-hairdres-leaderboard {
	.filter {
		background: #FFFFFF;
	}
	
	.search {
		padding: 24rpx 32rpx;
		background: #FFFFFF;
	}
	
	.t-hairdres-tabBar {
		display: flex;
		justify-content: space-around;
		background: #FFFFFF;
		position: sticky;
		top: 0;
		z-index: 100;
		
		text {
			font-size: 32rpx;
			color: #666666;
			padding: 24rpx 0;
			flex: 1;
			text-align: center;
		}
		
		.active {
			color: #FC689A;
			position: relative;
			
			&::after {
				content: "";
				width: 30rpx;
				height: 8rpx;
				border-radius: 10rpx;
				background: #FC689A;
				position: absolute;
				bottom: 10rpx;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}
}
</style>

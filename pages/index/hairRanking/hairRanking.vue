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
			<TabFilter @onResult="onResult" :titleList="filter">
				<view class="filter-list">
					<view class="left">
						<text @click="checkedItem(index, 1)" :class="{ active: filterChildActive[0] === index}" v-for="(item,index) in filterChild[filterActice]" :key="index">{{item.title}}</text>
					</view>
					<view v-if="getChildList.length > 0" class="right">
						<text @click="checkedItem(index2, 2)" :class="{ active: filterChildActive[0] === index2}" v-for="(item2,index2) in getChildList" :key="index2">{{item2}}</text>
					</view>
				</view>
			</TabFilter>
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
	import TabFilter from '@/components/Filter'
	import Hairstylist from '@/components/Hairstylist'
	import PullDownRefresh from '@/components/PullDownRefresh'
	export default {
		components:{
			SearchBox,
			TabFilter,
			Hairstylist,
			PullDownRefresh
		},
		computed: {
			getChildList () {
				const object = this.filterChild[this.filterActice][this.filterChildActive[1]]
				console.log(object)
				if (object && Object.keys(object).indexOf('children') !== -1) {
					return object.children
				}
				return []
			}
		},
		data() {
			return {
				active: 1,
				safeDistance: 0,
				filter: ['附近', '智能排序', '时间筛选'],
				filterActice: 0,
				filterChild: [
					[	
						{
							title: '默认',
						},
						{
							title: '重庆',
							children: ['江北','渝北','渝中区','南岸区']
						},
						{
							title: '四川',
							children: ['成都','广安','南充','宜宾']
						},
						{
							title: '贵州',
							children: ['遵义','贵阳','同仁','六盘水']
						},
						{
							title: '云南',
							children: ['昆明']
						}
					],
					[
						{
							title: '默认',
						},
						{
							title: '离我最近',
						},
						{
							title: '好评最多',
						},
						{
							title: '销量最高',
						},
						{
							title: '回头客最高',
						}
					],
					[
						{
							title: '默认',
						},
						{
							title: '昨天',
						},
						{
							title: '近7天',
						},
						{
							title: '本月',
						},
						{
							title: '上月',
						},
						{
							title: '去年',
						}
					]
				],
				filterChildActive: [0, 0]
			}
		},
		onLoad() {
			this.safeDistance = getApp().globalData.safeDistance
		},
		onShow() {
		},
		methods: {
			checkedItem (index, index2) {
				this.filterChildActive = [index, index2]
				console.log(this.filterChildActive)
			},
			onResult ({ data, index }) {
				this.filterActice = index
				this.filterChildActive = ['', '']
				console.log(data, index)
			}
		}
	}
</script>

<style scoped lang="less">
.t-hairdres-leaderboard {
	.filter {
		background: #FFFFFF;
		.filter-list {
			padding: 32rpx;
			display: flex;
			padding-left: 100rpx;
			.left {
				padding-right: 100rpx;
			}
			text {
				font-size: 24rpx;
				display: block;
				line-height: 1;
				margin-bottom: 32rpx;
				&:last-child {
					margin-bottom: 0;
				}
			}
			.active {
				color: #fc689a;
			}
		}
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

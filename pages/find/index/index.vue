<template>
	<!-- 发现页面 -->
	<view class="t-hairdres-find">
		<TabBar isFlex :tabList="tabList" />
		<TabFilter :titleList="filter">
			<view class="find-filter">
				<text v-for="(item,index) in 8" :key="index">幽兰色</text>
			</view>
		</TabFilter>
		<Card>
			<WaterfallsFlow isEmit @onClick="toWorkDetail" :list="fallsFlow"/>
			<PullDownRefresh/>
		</Card>
	</view>
</template>

<script>
	import TabBar from '@/components/TabBar'
	import TabFilter from '@/components/Filter'
	import Card from '@/components/Card'
	import WaterfallsFlow from '@/components/WaterfallsFlow'
	import PullDownRefresh from '@/components/PullDownRefresh'
	export default {
		components: {
			TabBar,
			TabFilter,
			Card,
			WaterfallsFlow,
			PullDownRefresh
		},
		data() {
			return {
				filter: ['颜色', '短发', '中发','长发'],
				tabList:['女士','男士'],
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
			};
		},
		methods: {
			toWorkDetail (data) {
				uni.navigateTo({
					url: '../work-detail/index'
				})
			}
		},
		
	}
</script>

<style scoped lang="less">
.t-hairdres-find {
	.find-filter {
		padding: 32rpx 32rpx 16rpx 32rpx;
		text {
			font-size: 24rpx;
			color: #ff8eb4;
			border: solid 2rpx #ff8eb4;
			border-radius: 10rpx;
			line-height: 1;
			display: inline-block;
			padding: 16rpx 24rpx;
			margin: 0 16rpx 16rpx 0;
		}
	}
}
</style>

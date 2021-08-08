<template>
	<!-- 瀑布流 -->
	<view class="t-hairdres-waterfallsflow">
		<view @click="toDetail(item)" v-if="index % 2=== 0" class="item" v-for="(item,index) in list" :key="index" >
			<image :src="item" mode="widthFix"></image>
		</view>
		<view @click="toDetail(item)"  v-if="index % 2!== 0" class="item" v-for="(item,index) in list" :key="index" >
			<image :src="item" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: '',
		props: {
			list: {
				type: Array,
				default: () => {
					return []
				}
			},
			isEmit: {
				type: Boolean,
				default: false
			},
			dislocation: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			toDetail (item) {
				if (this.isEmit) {
					this.$emit('onClick', item)
				} else {
					uni.navigateTo({
						url:'../../merchant/leaderboard/leaderboard-work-detail'
					})
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-waterfallsflow {
		column-count: 2;
		column-gap: 24rpx;
		
		.item {
			margin-bottom: 24rpx;
			border-radius: 16rpx;
			position: relative;
			overflow: hidden;
			
			image {
				width: 100%;
				display: block;
			}
		}
	}
</style>

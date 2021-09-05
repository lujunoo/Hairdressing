<template>
	<!-- 瀑布流 -->
	<Card>
		<Title v-if="!hideTitle" title="作品"></Title>
		<view class="t-hairdres-waterfallsflow">
			<view @click="toDetail(item)" v-if="index % 2=== 0" class="item" v-for="(item,index) in list" :key="index" >
				<image :src="item" mode="widthFix"></image>
			</view>
			<view @click="toDetail(item)"  v-if="index % 2!== 0" class="item" v-for="(item,index) in list" :key="index" >
				<image :src="item" mode="widthFix"></image>
			</view>
		</view>
	</Card>
</template>

<script>
	import Card from '@/components/Card'
	import Title from '@/components/Title'
	export default {
		components: {
			Card,
			Title
		},
		name: '',
		props: {
			hideTitle: {
				type:Boolean,
				default: false
			},
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
					this.$emit('onCilck', item)
					return
				}
				uni.navigateTo({
					url:'../../../leaderboard-work-detail'
				})
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

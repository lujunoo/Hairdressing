<template>
	<!-- 培训老师  -->
	<view class="t-hairdres-school-teachers">
		<Card v-for="(item,index) in 10" :key="index" class="trainer">
			<view @click="toDetail" class="item">
				<view class="cover">
					<image src="https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg" mode="aspectFill"></image>
				</view>
				<view class="info">
					<text>老师姓名</text>
					<text>老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师。</text>
				</view>
			</view>
		</Card>
		<!-- 加载状态 -->
		<pull-down-refresh/>
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
			toDetail () {
				uni.navigateTo({
					url:'./school-teachers-detail'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-school-teachers {
		.trainer {
			margin: 32rpx;
			
			.item {
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
	
	}
</style>

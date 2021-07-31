<template>
	<!-- 培训学校 -->
	<view class="t-hairdres-training-school">
		<!-- 学校列表 -->
		<view class="school-list">
			<view @click="toDetail" class="list-item" v-for="(item,index) in 20" :key="index">
				<view class="cover">
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				</view>
				<view class="content">
					<text class="title">iHair Do 美发培训学院美发培训学院美发培训学院</text>
					<text class="address">重庆市江北区建新北路38号3栋世纪英南皇塔25-17重庆市江北区建新北路38号3栋世纪英南皇塔25-17</text>
					<text class="distance">距您<text>87.5km</text></text>
				</view>
			</view>
		</view>
		<!-- 加载状态 -->
		<pull-down-refresh/>
	</view>
</template>

<script>
	import PullDownRefresh from '@/components/PullDownRefresh'
	export default {
		components: {
			PullDownRefresh
		},
		data() {
			return {
				
			};
		},
		methods: {
			toDetail () {
				uni.navigateTo({
					url:'./school-detail'
				})
			}
		}
	}
</script>

<style scoped lang="less">
.t-hairdres-training-school {
	.school-list {
		padding-top: 24rpx;
		.list-item {
			margin: 0 32rpx 24rpx 32rpx;
			background: #FFFFFF;
			border-radius: 8rpx;
			padding: 32rpx 24rpx;
			display: flex;
			
			.cover {
				width: 220rpx;
				height: 173rpx;
				border-radius: 8rpx;
				overflow: hidden;
				
				image {
					width: 100%;
					height: 100%;
					display: block;
				}
			}
			
			.content {
				flex: 1;
				margin-left: 32rpx;
				max-width: 390rpx;
				
				.title {
					font-size: 28rpx;
					overflow: hidden;
					display: block;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				
				.address {
					font-size: 24rpx;
					line-height: 32rpx;
					display: block;
					padding-top: 16rpx;
					text-overflow: -o-ellipsis-lastline;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    display: -webkit-box;
				    -webkit-line-clamp: 2;
				    line-clamp: 2;
				  -webkit-box-orient: vertical;
				}
				
				.distance {
					font-size: 24rpx;
					
					text {
						color: #fc689a;
					}
				}
			}
		}
	}
}
</style>

<template>
	<!-- 店铺入口 -->
	<view @click="toDetail" class="t-hairdres-shopentrance">
		<Card>
			<view class="shop-info">
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				<view class="right">
					<view class="title">
						<text>养发堂</text>
						<text>进店</text>
					</view>
					<Score score="5"/>
					<text class="address">地址：重庆市江北区建新北路38号附100号</text>
				</view>
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Score from '@/components/Score'
	export default {
		components:{
			Card,
			Score
		},
		methods: {
			toDetail () {
				uni.navigateTo({
					url:'../../../leaderboard-detail'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-shopentrance {
		.shop-info {
			display: flex;
			justify-content: space-between;
			
			image {
				width: 200rpx;
				height: 200rpx;
				display: block;
				border-radius: 10rpx;
				margin-right: 32rpx;
			}
			.right {
				flex: 1;
				justify-content: space-between;
				flex-direction: column;
				display: flex;
				.address {
					margin-top: 24rpx;
					display: block;
					font-size: 24rpx;
					line-height: 1.5;
				}
				.title {
					font-size: 28rpx;
					font-weight: bold;
					display: flex;
					justify-content: space-between;
					text {
						&:last-child {
							width: 120rpx;
							height: 50rpx;
							background-color: #fc689a;
							border-radius: 5rpx;
							color: #FFFFFF;
							font-size: 24rpx;
							text-align: center;
							line-height: 50rpx;
							font-weight: 500;
						}
					}
				}
			}
		}
	}
</style>

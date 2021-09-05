<template>
	<!-- 发型师列表 -->
	<view class="t-hairdres-hairstylist">
		<Card  v-for="(item,index) in 10" :key="index" >
			<view @click="toDetail" class="card-item">
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				<view class="desc">
					<text class="name">托尼老师</text>
					<view class="conut">
						<text>好评<text class="color-yellow">856</text></text>
						<text>回头客<text>856</text></text>
					</view>
				</view>
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	export default {
		components:{
			Card
		},
		methods: {
			toDetail () {
				uni.navigateTo({
					url: './leaderboard-hairstylist-detail'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-hairstylist {
		.card-item {
			display: flex;
			
			.desc {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				
				.name {
					font-size: 28rpx;
					font-weight: bold;
					line-height: 1;
					margin-bottom: 32rpx;
				}
				.conut {
					font-size: 24rpx;
					display: flex;
					
					>text {
						line-height: 1;
						height: 24rpx;
						margin-right: 32rpx;
						padding-right: 32rpx;
						border-right: solid 2rpx #333333;
						
						&:last-child {
							border: none;
							
							text {
								color: #d964ff;
							}
						}
					}
				}
			}
			
			image {
				width: 150rpx;
				height: 150rpx;
				background-color: #f00055;
				border-radius: 10rpx;
				margin-right: 32rpx;
			}
		}
	}
</style>

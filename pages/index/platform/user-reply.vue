<template>
	<!-- 用户的回帖 -->
	<view class="t-hairdres-user-send">
		<view @click="toDetail" v-for="(item,index) in 20" :key="index" class="item">
			<Card>
				<view class="title">
					<text>一个发型师的业绩，很大程度取决于你的沟通能力，沟通一个发型师的业绩，很大程度取决于你的沟通能力，沟通</text>
					<text class="iconfont">&#xe606;</text>
				</view>
				<!-- 链接 -->
				<view class="link">
					<text>想去染个头发，现在是灰色波浪卷，什么颜色想去染个头发，现在是灰色波浪卷，什么颜色</text>
					<text>顾客专区</text>
				</view>
				<view class="time">
					<text>来自  行业专区</text>
					<text>2021-5-28</text>
				</view>
			</Card>
		</view>
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
					url: './platform-detail'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-send {
		.item {
			.link {
				height: 100rpx;
				background-color: #ffd9d3;
				margin-bottom: 32rpx;
				font-size: 24rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 10rpx 24rpx;
				color: #666666;
				
				text {
					&:first-child {
						max-width: 480rpx;
						display: block;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					&:last-child {
						width: 80rpx;
						height: 70rpx;
						background-color: #ff4200;
						border-radius: 3rpx;
						color: #FFFFFF;
						font-size: 28rpx;
						display: block;
						line-height: 34rpx;
						text-align: center;
						padding: 10rpx 0rpx;
					}
				}
			}
			
			.title {
				display: flex;
				align-items: center;
				
				text {
					&:first-child {
						line-height: 1;
						font-size: 24rpx;
						display: block;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin-bottom: 40rpx;
					}
				}
				.iconfont {
					margin-bottom: 40rpx;
					font-size: 28rpx;
					color: #fc689a;
				}
			}
			
			.time {
				display: flex;
				color: #666;
				justify-content: space-between;
				font-size: 24rpx;
			}
		}
	}
</style>

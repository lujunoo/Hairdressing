<template>
	<!-- 用户的发帖 -->
	<view class="t-hairdres-user-send">
		<view @click="toDetail" v-for="(item,index) in 20" :key="index" class="item">
			<Card>
				<view class="title">
					<text>一个发型师的业绩，很大程度取决于你的沟通能力，沟通一个发型师的业绩，很大程度取决于你的沟通能力，沟通</text>
					<text class="iconfont">&#xe606;</text>
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
					&:last-child {
						margin-bottom: 40rpx;
						font-size: 28rpx;
						color: #fc689a;
					}
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

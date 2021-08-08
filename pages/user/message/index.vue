<template>
	<!-- 消息通知 -->
	<view class="t-hairdres-user-message">
		<TabBar @onClick="getActive" isFlex background="rgba(0,0,0,0)" :tabList="tabList" />
		<text class="clear">清空消息</text>
		<Card class="user-message-card" v-for="(item,index) in 10" :key="index">
			<text v-if="active===0" class="iconfont">&#xe609;</text>
			<text v-else class="iconfont">&#xe63c;</text>
			<view @click="toDetail" class="info">
				<view class="title">
					<text>订单支付提醒</text>
					<text>2021-5-23-12  12:23:12</text>
				</view>
				<text>您有一笔订单未支付，点击前往支付</text>
			</view>
		</Card>
	</view>
</template>

<script>
	import TabBar from '@/components/TabBar'
	import Card from '@/components/Card'
	export default {
		components: {
			TabBar,
			Card
		},
		data () {
			return {
				active: 0,
				tabList: ['消息通知','促销活动']
			}
		},
		methods: {
			toDetail () {
				uni.navigateTo({
					url:'./detail'
				})
			},
			getActive (index) {
				this.active = index
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-message {
		.user-message-card {
			display: flex;
			align-items: center;
			.iconfont {
				font-size: 40rpx;
				color: #fc689a;
			}
			.info {
				flex: 1;
				margin-left: 16rpx;
				font-size: 24rpx;
				color: #666;
				.title {
					margin-bottom: 24rpx;
					display: flex;
					justify-content: space-between;
					text {
						&:first-child {
							font-size: 28rpx;
							color: #333333;
						}
					}
				}
			}
		}
		.clear {
			color: #FFFFFF;
			background: #ffbd55;
			font-size: 24rpx;
			line-height: 1;
			padding: 8rpx 16rpx;
			border-radius: 10rpx;
			margin: 32rpx 0 0 0;
			margin-left: 50%;
			display: inline-block;
			transform: translateX(-50%);
			
		}
	}
</style>

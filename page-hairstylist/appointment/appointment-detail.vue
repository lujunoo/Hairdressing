<template>
	<!-- 当日预约 -->
	<view class="t-hairdres-appointment">
		<Card>
			<view class="table">
				<view class="left">
					<text class="timer">时间</text>
					<text v-for="(item,index) in 24" :key="index">{{item + 8}}:00</text>
				</view>
				<view class="right">
					<view class="title-date">
						<text class="iconfont">&#xe64c;</text>
						<text>2021年5月</text>
						<text class="iconfont">&#xe64c;</text>
					</view>
					<view @click="todetail" class="right-item" :class="{ block1: index % 5 ===0, block2: index % 3 ===0 }" v-for="(item,index) in 24" :key="item">王先生  曹兵理发</view>
				</view>
			</view>
			<view class="desc">
				<text class="subtitle">预约提示</text>
				<text class="desc-item"><text class="block1"></text>不能再预约</text>
				<text class="desc-item"><text class="block2"></text>可预约，有可能需要等待</text>
				<text class="desc-item"><text class="block3"></text>可约，正常情况不需要等待</text>
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	export default {
		components: {
			Card
		},
		data () {
			return {}
		},
		methods: {
			todetail () {
				uni.navigateTo({
					url:'./add-appointment'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-appointment {
		.title {
			text-align: center;
			font-size: 28rpx;
			font-weight: bold;
		}
		.block1,
		.block2,
		.block3{
			display: inline-block;
			background: #fc689a;
			border: none;
			color: #FFFFFF;
		}
		.block2 {
			background: #ffb400;
		}
		.desc {
			margin-bottom: 100rpx;
			line-height: 1;
			.block1,
			.block2,
			.block3{
				width: 50rpx;
				height: 20rpx;
				margin-right: 16rpx;
			}
			.block3 {
				width: 46rpx;
				height: 18rpx;
				border: solid 2rpx #aaa;
				background: #fff;
			}
			.desc-item {
				display: block;
				font-size: 24rpx;
				display: block;
				color: #888;
				margin-bottom: 24rpx;
				position: relative;
			}
			.subtitle {
				color: #333333;
				padding-left: 0rpx;
				padding-top: 32rpx;
				margin-bottom: 32rpx;
				display: block;
				font-size: 28rpx;
			}
		}
		.table {
			font-size: 24rpx;
			display: flex;
			border: solid 2rpx #eee;
			.left {
				border-right: solid 2rpx #eee;
				text-align: center;
				width: 150rpx;
				.timer {
					height: 120rpx;
					border-top:0;
					font-weight: bold;
					line-height: 120rpx;
				}
				text {
					display: block;
					height: 40rpx;
					line-height: 40rpx;
					border-top: solid 2rpx #eee;
				}
			}
			.right {
				flex: 1;
				.right-item {
					text-align: center;
					display: block;
					height: 40rpx;
					line-height: 40rpx;
					border-top: solid 2rpx #eee;
				}
			}
		}
		.title-date {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 120rpx;
			padding: 0 32rpx;
			
			.iconfont {
				width: 40rpx;
				height: 40rpx;
				background-color: #f7a0c7;
				border-radius: 100rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 40rpx;
			}
			text {
				&:first-child {
					transform: rotate(180deg);
				}
				&:nth-child(2) {
					line-height: 1;
					padding: 18rpx 42rpx;
					font-size: 28rpx;
					color: #FFFFFF;
					background-color: #f7a0c7;
					border-radius: 20rpx;
				}
			}
		}
	}
</style>

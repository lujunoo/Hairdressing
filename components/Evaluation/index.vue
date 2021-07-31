<template>
	<!-- 评论组件 -->
	<view @click="toDetail" class="t-hairdres-evaluation">
		<!-- header -->
		<view @click.stop="toUser" class="header">
			<view class="author">
				<view class="cover">
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				</view>
				<view class="user">
					<text>风中捉影</text>
					<score score="4.3" />
				</view>
			</view>
			<text class="time">2021-03-25  15:23:43</text>
		</view>
		<view class="type">
			<text>消费项目：洗剪吹超值套餐</text>
			<text>发型师：曹兵</text>
		</view>
		<!-- 内容 -->
		<view class="content">
			想去染个头发，现在是灰色波浪卷，不知道选择什么颜色比较好，大家有推荐的吗？欢迎一起讨论。想去染个头发，现在是灰色波浪卷，不知道选择什么颜色比较好，大家有推荐的吗？欢迎一起讨论。
		</view>
		<!-- 标签 -->
		<view class="label">
			<text v-for="(item,index) in 3" :key="index">服务热情</text>
		</view>
		<!-- 图片 -->
		<view class="image">
			<image v-for="(item,index) in 3" :key="index" src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
		</view>
		<!-- 套餐链接 -->
		<view v-if="linkInfo.link" class="link">
			<view class="list-item" >
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				<view class="content2">
					<view class="info">
						<text class="title">施华蔻烫染直3选1施华蔻烫染直3选1施华蔻烫染直3选1</text>
					</view>
					<view class="info">
						<text class="color-theme">￥1000<text class="oldprice">￥1000</text></text>
						<text>已售<text class="color-yellow">800</text></text>
					</view>
				</view>
			</view>
		</view>
		<!-- 评论 -->
		<view v-if="voice.length > 0" class="voice">
			<view v-for="(item,index) in 4" :key="index" class="item">
				<text class="name">蓝色天空：</text>
				<text>个人觉得棕色配波浪卷还不错个人觉得棕色配波浪卷还不错个人觉得棕色配波浪卷还不错</text>
			</view>
		</view>
		<!-- 数据统计 -->
		<view class="data-count">
			<view class="item">
				<text>浏览 678</text>
			</view>
			<view class="item">
				<text class="iconfont">&#xe600;</text>
				<text>点赞 678</text>
			</view>
			<view class="item">
				<text class="iconfont">&#xe67e;</text>
				<text>评论 134</text>
			</view>
		</view>
	</view>
</template>

<script>
	import score from '@/components/Score'
	export default {
		props: {
			linkInfo: {
				type: Object,
				default: () => {
					return {}
				}
			},
			voice: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		components:{
			score
		},
		data () {
			return {}
		},
		methods: {
			toUser () {
				uni.navigateTo({
					url: '../../merchant/leaderboard/leaderboard-user-evaluation'
				})
			},
			toDetail () {
				uni.navigateTo({
					url: '../../merchant/leaderboard/leaderboard-evaluation-detail'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-evaluation {
		.voice {
			margin-bottom: 32rpx;
			
			.item {
				margin-bottom: 16rpx;
				font-size: 24rpx;
				line-height: 2;
				
				.name {
					color: #fc689a;
				}
			}
		}
		.link {
			.list-item {
				display: flex;
				justify-content: space-between;
				position: relative;
				align-items: center;
				background: #ffe4ed;
				padding: 24rpx;
				border-radius: 10rpx;
				margin-bottom: 32rpx;
				image {
					width: 170rpx;
					height: 120rpx;
					background-color: #f00055;
					border-radius: 10rpx;
					margin-right: 24rpx;
				}
				.content2 {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					font-size: 24rpx;
					min-height: 120rpx;
					
					.info {
						display: flex;
						justify-content: space-between;
						color: #666;
						.title {
							color: #333333;
							font-size: 28rpx;
							line-height: 1.3;
						}
						.color-theme {
							font-size: 28rpx;
							text {
								margin-left: 16rpx;
								font-size: 24rpx;
							}
						}
					}
				}
			}
		}
		.data-count {
			display: flex;
			justify-content: space-between;
			
			.item {
				font-size: 24rpx;
				display: flex;
				align-items: center;
				
				.iconfont {
					font-weight: bold;
					font-size: 32rpx;
					font-family: icon-hairdressing;
					display: block;
					margin-right: 16rpx;
					margin-bottom: -6rpx;
				}
				
				&:last-child {
					.iconfont {
						margin-bottom: -2rpx;
						font-size: 28rpx;
					}
				}
			}
		}
		
		.content {
			font-size: 28rpx;
			margin-bottom: 32rpx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 3;
			overflow: hidden;
		}
		
		.image {
			display: flex;
			margin: 0 -8rpx 24rpx -8rpx;
			image {
				flex: 1;
				display: block;
				width: 100%;
				height: 200rpx;
				margin: 8rpx;
			}
		}
		
		.type {
			display: flex;
			justify-content: space-between;
			font-size: 24rpx;
			margin-bottom: 32rpx;
			color: #666666;
			margin-top: -16rpx;
		}
		
		.label {
			margin-bottom: 32rpx;
			display: flex;
			flex-wrap: wrap;
			
			text {
				font-size: 24rpx;
				line-height: 1;
				color: #fff;
				margin-right: 16rpx;
				background: #ffc0c0;
				padding: 10rpx 24rpx;
				border-radius: 50rpx;
			}
		}
		
		.header {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			margin-bottom: 32rpx;
			.time {
				color: #666;
				font-size: 24rpx;
			}
			.author {
				display: flex;
				align-items: center;
				
				.user {
					display: flex;
					flex-direction: column;
					font-size: 24rpx;
					line-height: 1;
					
					text {
						&:first-child {
							font-size: 28rpx;
							font-weight: bold;
							margin-bottom: 16rpx;
						}
					}
				}
				
				.cover {
					margin-right: 16rpx;
					border-radius: 100rpx;
					width: 60rpx;
					height: 60rpx;
					overflow: hidden;
					
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

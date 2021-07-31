<template>
	<!-- 用户评论、论坛、文章组件 -->
	<view class="t-hairdres-discuss">
		<!-- header -->
		<view class="header">
			<view @click.stop="toUser" class="author">
				<view class="cover">
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				</view>
				<view class="user">
					<text>风中捉影</text>
					<text>2021-03-25</text>
				</view>
			</view>
			<text v-if="showAttention" class="btn">关注</text>
		</view>
		<!-- 标签 -->
		<view class="label">
			<text v-for="(item,index) in 4" :key="index">#烫染发技术讨论#</text>
		</view>
		<!-- 内容 -->
		<view class="content">
			想去染个头发，现在是灰色波浪卷，不知道选择什么颜色比较好，大家有推荐的吗？欢迎一起讨论。
		</view>
		<!-- 外部链接 -->
		<view v-if="showLink" class="link">
			<text>想去染个头发，现在是灰色波浪卷，什么颜色想去染个头发，现在是灰色波浪卷，什么颜色</text>
			<text>顾客专区</text>
		</view>
		<!-- 数据统计 -->
		<view v-if="showfooter" class="data-count">
			<!-- 点赞头像 -->
			<view v-if="showGreatCount" class="greatlist">
				<text class="iconfont">&#xe600;</text>
				<!-- <text class="iconfont iconfont2">&#xe604;</text> -->
				<view class="img-list">
					<image v-for="(item,index) in 3" :key="index" src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				</view>
				<text class="number">23人</text>
			</view>
			<view v-if="showGreat" class="item">
				<text class="iconfont">&#xe600;</text>
				<text>点赞 678</text>
			</view>
			<view class="item">
				<text class="iconfont">&#xe67e;</text>
				<text>评论 134</text>
			</view>
			<view class="item">
				<text class="iconfont">&#xe60a;</text>
				<text>分享 37</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			showfooter: {
				type: Boolean,
				default: true,
			},
			showGreat: {
				type: Boolean,
				default: false,
			},
			showGreatCount: {
				type: Boolean,
				default: true,
			},
			showAttention: {
				type: Boolean,
				default: true,
			},
			showLink: {
				type: Boolean,
				default: false,
			}
		},
		methods: {
			toUser () {
				uni.navigateTo({
					url: '../../index/platform/platform-userInfo'
				})
			},
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-discuss {
		background: #FFFFFF;
		
		.greatlist {
			flex: 1;
			display: flex;
			align-items: center;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			
			.img-list {
				display: flex;
				image {
					border: 2rpx solid #FFFFFF;
					margin-left: -14rpx;
					border-radius: 100rpx;
					display: block;
					width: 40rpx;
					height: 40rpx;
				}
			}
			
			.number {
				font-size: 24rpx;
				margin-left: 8rpx;
			}
			
			.iconfont {
				font-size: 32rpx;
				margin-right: 16rpx;
			}
			.iconfont2 {
				color: #fc689a;
			}
		}
		
		.data-count {
			display: flex;
			justify-content: space-between;
			
			.item {
				font-size: 24rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				
				.iconfont {
					font-weight: bold;
					font-size: 28rpx;
					font-family: icon-hairdressing;
					display: block;
					margin-right: 16rpx;
					margin-bottom: -6rpx;
				}
				
				&:first-child {
					.iconfont {
						margin-bottom: -2rpx;
						font-size: 32rpx;
					}
				}
			}
		}
		
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
		
		.content {
			font-size: 28rpx;
			margin-bottom: 32rpx;
		}
		
		.label {
			margin-bottom: 32rpx;
			display: flex;
			flex-wrap: wrap;
			
			text {
				line-height: 1.5;
				display: block;
				font-size: 24rpx;
				color: #ff8400;
				margin-left: 16rpx;
			}
		}
		
		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 32rpx;
			.btn {
				width: 90rpx;
				height: 40rpx;
				background-color: #fc689a;
				border-radius: 10rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 40rpx;
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
							margin-bottom: 20rpx;
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

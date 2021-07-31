<template>
	<!-- 评论、论坛、文章组件 -->
	<view @click="todetail" class="t-hairdres-discuss">
		<!-- header -->
		<view  class="header">
			<view @click.stop="toUser" class="author">
				<view class="cover">
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				</view>
				<view class="user">
					<text>风中捉影</text>
					<text>2021-03-25</text>
				</view>
			</view>
			<text class="btn">关注</text>
		</view>
		<!-- 标签 -->
		<view class="label">
			<text v-for="(item,index) in 4" :key="index">#烫染发技术讨论#</text>
		</view>
		<!-- 内容 -->
		<view class="content">
			想去染个头发，现在是灰色波浪卷，不知道选择什么颜色比较好，大家有推荐的吗？欢迎一起讨论。
		</view>
		<!-- 评论 -->
		<view class="voice">
			<view v-for="(item,index) in 4" :key="index" class="item">
				<text class="name">蓝色天空：</text>
				<text>个人觉得棕色配波浪卷还不错个人觉得棕色配波浪卷还不错个人觉得棕色配波浪卷还不错</text>
			</view>
			<text class="more">查看更多</text>
		</view>
		<!-- 数据统计 -->
		<view class="data-count">
			<view class="item">
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
		data () {
			return {}
		},
		methods: {
			toUser () {
				uni.navigateTo({
					url: '../../index/platform/platform-userInfo'
				})
			},
			todetail () {
				uni.navigateTo({
					url: '../../index/platform/platform-detail'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-discuss {
		border-radius: 10rpx;
		background: #FFFFFF;
		box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
		padding: 32rpx;
		
		.data-count {
			display: flex;
			justify-content: space-between;
			
			.item {
				font-size: 24rpx;
				display: flex;
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
		
		.voice {
			padding: 32rpx 0 ;
			border-top: solid 1px #eeeeee;
			border-bottom: solid 2rpx #eeeeee;
			margin-bottom: 32rpx;
			
			.more {
				color: #fc689a;
				font-size: 24rpx;
			}
			
			.item {
				margin-bottom: 16rpx;
				font-size: 24rpx;
				
				.name {
					color: #ff867d;
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

<template>
	<!-- 用户主页 -->
	<view class="t-hairdres-platform-user">
		<!-- 用户信息 -->
		<view class="userinfo">
			<image class="bg" src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
			<view class="content">
				<view class="header">
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
					<text class="iconfont">&#xe61d;</text>
				</view>
				<text class="name">蓝色天空</text>
				<text class="name2">重庆江北区  I  1年零3个月</text>
				<view class="count">
					<text @click="toFans" >粉丝<text>78</text></text>
					<text @click="toFans" >关注<text>78</text></text>
				</view>
				<text class="btn">Ta的主页</text>
			</view>
		</view>
		<!-- tabBar -->
		<view class="usertab">
			<view @click="toSend" class="item">
				<text>10</text>
				<text>帖子</text>
			</view>
			<view @click="toTopic" class="item">
				<text>10</text>
				<text>话题动态</text>
			</view>
			<view @click="toreply" class="item">
				<text>10</text>
				<text>回帖</text>
			</view>
		</view>
		<!-- 数据列表 -->
		<view class="data-list">
			<Title title="全部动态" desc="筛选查看" class="list-title" showLeft />
			<view v-for="(item,index) in 10" :key="index" class="list-discuss">
				<UserDiscuss showLink showGreat :showGreatCount="false"/>
			</view>
		</view>
		
		<PullDownRefresh/>
	</view>
</template>

<script>
	import PullDownRefresh from '@/components/PullDownRefresh'
	import UserDiscuss from '@/components/UserDiscuss'
	import Title from '@/components/Title'
	export default {
		components:{
			UserDiscuss,
			PullDownRefresh,
			Title
		},
		date () {
			return {
				placeholder: '回复：卢大爷'
			}
		},
		methods: {
			toFans () {
				uni.navigateTo({
					url: './user-fans'
				})
			},
			toSend () {
				uni.navigateTo({
					url:'./user-send'
				})
			},
			toTopic () {
				uni.navigateTo({
					url: './user-topic'
				})
			},
			toreply () {
				uni.navigateTo({
					url: './user-reply'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.t-hairdres-platform-user {
	.data-list {
		margin-top: 32rpx;
		background: #FFFFFF;
		
		.list-discuss {
			margin: 0 32rpx 32rpx 32rpx;
			border-radius: 10rpx;
			background: #FFFFFF;
			box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
			padding: 32rpx;
		}
		
		.list-title {
			margin: 32rpx  32rpx 0;
		}
	}
	
	.usertab {
		height: 150rpx;
		background: #f95abf;
		display: flex;
		
		.item {
			flex: 1;
			color: #FFFFFF;
			font-size: 28rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			line-height: 1;
			margin: 32rpx 0;
			
			&:nth-child(2) {
				border-right: solid 2rpx #FFFFFF;
				border-left: solid 2rpx #FFFFFF;
			}
			
			text {
				&:first-child {
					font-size: 32rpx;
					font-weight: bold;
					margin-bottom: 16rpx;
				}
			}
		}
	}
	
	.userinfo {
		height: 350rpx;
		position: relative;
		.content {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background: rgba(0,0,0,0.5);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: #FFFFFF;
			
			.count {
				display: flex;
				justify-content: center;
				font-size: 24rpx;
				
				text {
					margin: 32rpx 60rpx 0 60rpx ;
					text {
						color: #ff0000;
						margin: 0
					}
				}
			}
			
			.name2,.name {
				display: block;
				font-size: 24rpx;
				line-height: 24rpx;
				margin-top: 32rpx;
			}
			.name {
				font-size: 28rpx;
				font-weight: bold;
			}
			
			.header {
				width: 100rpx;
				height: 100rpx;
				border-radius: 100rpx;
				box-shadow: 0px 0px 6px 0px #000000;
				position: relative;
				
				.iconfont {
					color: #fc699a;
					position: absolute;
					bottom: -20rpx;
					left: 50%;
					font-size: 40rpx;
					transform: translateX(-50%);
				}
				
				image {
					display: block;
					width: 100%;
					height: 100%;
					border-radius: 100rpx;
				}
			}
			
			.btn {
				color: #FFFFFF;
				right: 32rpx;
				top: 32rpx;
				position: absolute;
				line-height: 40rpx;
				text-align: center;
				font-size: 24rpx;
				width: 116rpx;
				height: 40rpx;
				background-color: #fc699a;
				border-radius: 10rpx;
			}
		}
		.bg {
			width: 100%;
			height: 100%;
			display: block;
			position: absolute;
			top: 0;
			left: 0;
		}
	}
}
</style>

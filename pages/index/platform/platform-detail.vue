<template>
	<!-- 文章内容 -->
	<view class="t-hairdres-platform-detail">
		<!-- 用户帖子 -->
		<view class="user-content">
			<UserDiscuss :showGreatCount="true"/>
		</view>
		<!-- 警告 -->
		<view class="warning">
			<text class="iconfont">&#xeb2e;</text>
			<text class="info">本帖为热心网友分享发布，如有意义，或发生侵权，可点击此处 <text>去举报</text></text>
		</view>
		<!-- 热门评论 -->
		<view class="hot-discuss">
			<view class="title">热门评论</view>
			<UserDiscuss class="user-discuss" :showAttention="false" :showGreatCount="true"/>
		</view>
		<!-- 全部评论 -->
		<view class="all-discuss">
			<view class="title">全部评论</view>
			<UserDiscuss class="user-discuss"  :showAttention="false"  :showGreatCount="true"/>
		</view>
		<PullDownRefresh/>
		<!-- 发言 -->
		<view class="sendmsg">
			<input class="input" type="text" :placeholder="placeholder" value="" />
			<text>评论</text>
		</view>
	</view>
</template>

<script>
	import PullDownRefresh from '@/components/PullDownRefresh'
	import UserDiscuss from '@/components/UserDiscuss'
	export default {
		components:{
			UserDiscuss,
			PullDownRefresh
		},
		date () {
			placeholder: '回复：卢大爷'
		}
	}
</script>

<style lang="less" scoped>
.t-hairdres-platform-detail {
	padding-bottom: 100rpx;
	
	.sendmsg {
		position: fixed;
		bottom: 0;
		left: 0;
		width: calc(100% - 48rpx);
		height: 100rpx;
		border-top: solid 2rpx #eeeeee;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 0 24rpx;
		justify-content: space-between;
		
		.input {
			width: 460rpx;
			height: 60rpx;
			background-color: #ffffff;
			border-radius: 10rpx;
			border: solid 2rpx #bfbfbf;
			font-size: 28rpx;
			padding: 0 20rpx;
		}
		
		text {
			font-size: 24rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 60rpx;
			width: 180rpx;
			height: 60rpx;
			background-color: #fc689a;
			border-radius: 30rpx;
		}
	}
	
	.all-discuss {
		background: #FFFFFF;
		margin: 32rpx 32rpx 0 32rpx;
		border-radius: 10rpx;
		padding: 32rpx;
		.title {
			font-size: 32rpx;
			font-weight: bold;
			margin-bottom: 32rpx;
		}
	}
	.hot-discuss {
		background: #FFFFFF;
		margin: 32rpx 32rpx 0 32rpx;
		border-radius: 10rpx;
		padding: 32rpx;
		.title {
			font-size: 32rpx;
			font-weight: bold;
			color: #ff867d;
			margin-bottom: 32rpx;
		}
		.user-discuss {
			
		}
	}
	
	.user-content{
		padding: 32rpx;
		background: #FFFFFF;
		margin-bottom: 32rpx;
	}
	
	.warning {
		background: #FFFFFF;
		padding:24rpx 32rpx;
		display: flex;
		.info {
			font-size: 24rpx;
			vertical-align: middle;
			text {
				color: #d81e06;
			}
		}
		.iconfont {
			font-size: 48rpx;
			color: #d81e06;
			display: inline-block;
			vertical-align: middle;
			margin-right: 16rpx;
		}
	}
}
</style>

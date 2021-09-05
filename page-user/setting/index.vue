<template>
	<!-- 设置 -->
	<view class="t-hairdres-user-setting">
		<Card>
			<view @click="toRouter(0)" class="list-item">
				<text>个人信息</text>
				<view class="right">
					<text class="iconfont">&#xe64c;</text>
				</view>
			</view>
			<view class="list-item">
				<text>绑定微信</text>
				<view class="right">
					<text class="string">微信昵称</text>
					<text class="iconfont">&#xe64c;</text>
				</view>
			</view>
			<view @click="toRouter(2)" class="list-item">
				<text>绑定手机号</text>
				<view class="right">
					<text class="string">手机号码</text>
					<text class="iconfont">&#xe64c;</text>
				</view>
			</view>
			<view @click="toRouter(3)" class="list-item">
				<text>帮助中心</text>
				<view class="right">
					<text class="iconfont">&#xe64c;</text>
				</view>
			</view>
			<view @click="toRouter(4)" class="list-item">
				<text>关于我们</text>
				<view class="right">
					<text class="iconfont">&#xe64c;</text>
				</view>
			</view>
			<view @click="toRouter(5)" class="list-item">
				<text>用户协议</text>
				<view class="right">
					<text class="iconfont">&#xe64c;</text>
				</view>
			</view>
			<view @click="toRouter(6)" class="list-item">
				<text>隐私协议</text>
				<view class="right">
					<text class="iconfont">&#xe64c;</text>
				</view>
			</view>
			<view @click="toRouter(7)" class="list-item">
				<text>平台规则</text>
				<view class="right">
					<text class="iconfont">&#xe64c;</text>
				</view>
			</view>
			<view @click="toRouter(8)" class="list-item">
				<text>重置密码</text>
				<view class="right">
					<text class="iconfont">&#xe64c;</text>
				</view>
			</view>
			<view class="list-item">
				<text>意见、申诉与投诉</text>
				<view class="right">
					<text class="iconfont">&#xe64c;</text>
				</view>
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
		data() {
			return {}
		},
		methods: {
			toRouter(type) {
				switch (type) {
					case 0:
						uni.navigateTo({
							url: './user-info'
						})
						break;
					case 2:
						uni.navigateTo({
							url: './bind-phone'
						})
						break;
					case 3:
						uni.navigateTo({
							url: './help-center'
						})
						break;
					case 4:
						uni.navigateTo({
							url: './about-us'
						})
						break;
					case 5:
						uni.navigateTo({
							url: './user-agreement'
						})
						break;
					case 6:
						uni.navigateTo({
							url: './privacy-agreement'
						})
						break;
					case 7:
						uni.navigateTo({
							url: './platform-rules'
						})
						break;
					case 8:
						uni.navigateTo({
							url: '../wallet/setpassword'
						})
						break;
					default:
						break;
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-setting {
		.list-item {
			display: flex;
			font-size: 28rpx;
			align-items: center;
			justify-content: space-between;
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;

			&:last-child {
				margin-bottom: 0;
				border: none;
				padding-bottom: 16rpx;
			}

			.right {
				.string {
					font-size: 24rpx;
					color: #999999;
				}
			}

			.iconfont {
				margin-left: 16rpx;
			}
		}
	}
</style>

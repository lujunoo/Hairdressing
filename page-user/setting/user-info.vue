<template>
	<!-- 设置-用户信息 -->
	<view class="t-hairdres-user-setting-user-info">
		<Card>
			<view class="list-item">
				<text>头像</text>
				<image @click="selectImage" :src="userSrc" mode="aspectFill"></image>
			</view>
			<view class="list-item">
				<text>昵称</text>
				<input type="text" value="卢大爷" />
			</view>
			<view class="list-item">
				<text>性别</text>
				<view class="right">
					<view @click="sex = 1" class="label">
						<text v-if="sex === 1" class="iconfont iconfont2">&#xe661;</text>
						<text v-else class="iconfont">&#xe618;</text>
						<text class="string">男</text>
					</view>
					<view @click="sex = 0" class="label">
						<text v-if="sex === 0" class="iconfont iconfont2">&#xe661;</text>
						<text v-else class="iconfont">&#xe618;</text>
						<text class="string">女</text>
					</view>
				</view>
			</view>
			<view class="list-item">
				<text>实名认证</text>
				<view @click="toVerified" class="right">					
					<text class="iconfont iconfon3">&#xe603;</text>
					<text>未实名认证</text>
					<text class="iconfont">&#xe64c;</text>
				</view>
			</view>
		</Card>
		<view class="t-hairdres-button">
			确定修改
		</view>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	export default {
		components:{
			Card
		},
		data () {
			return {
				sex: 0,
				userSrc: 'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg'
			}
		},
		methods: {
			selectImage () {
				uni.chooseImage({
					count: 1,
					success: (data) => {
						this.userSrc = data.tempFilePaths[0]
						console.log(data)
					}
				})
			},
			toVerified () {
				uni.navigateTo({
					url: './verified'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-setting-user-info {
		.t-hairdres-button {
			margin: 100rpx 90rpx;
		}
		.list-item {
			display: flex;
			font-size: 28rpx;
			align-items: center;
			justify-content: space-between;
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			&:last-child{
				margin-bottom: 0;
				border: none;
				padding-bottom: 16rpx;
			}
			.label {
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin-left: 80rpx;
				text {
					&:last-child {
						margin-left: 24rpx;
					}
				}
			}
			.right {
				display: flex;
				align-items: center;
				.string {
					font-size: 24rpx;
					color: #999999;
				}
			}
			image {
				width: 60rpx;
				height: 60rpx;
				display: block;
				border-radius: 100rpx;
			}
			input {
				font-size: 28rpx;
				text-align: right;
			}
			.iconfont {
				margin-left: 16rpx;
			}
			.iconfont2 {
				color: #fc689a;
			}
			.iconfon3 {
				color: red;
				margin-right: 16rpx;
			}
		}
	}
</style>

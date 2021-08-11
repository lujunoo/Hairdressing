<template>
	<!-- 绑定手机 -->
	<view class="t-hairdres-user-setting-bind-phone">
		<Card>
			<view class="form--item">
				<text>当前手机号</text>
				<view class="input">
					<input type="text" value="" placeholder="预留手机号" />
					<text class="btn">获取验证码</text>
				</view>
			</view>
			<view class="form--item">
				<text>验证手机号</text>
				<view class="input">
					<input type="text" value="" placeholder="验证手机号" />
				</view>
			</view>
			<view class="form--item">
				<text>换绑新号码</text>
				<view class="input">
					<input type="text" value="" placeholder="换绑新号码" />
				</view>
			</view>
			<view class="form--item">
				<text>验证新号码</text>
				<view class="input">
					<input type="text" value="" placeholder="验证新号码" />
				</view>
			</view>
			<view class="t-hairdres-button">确定更改</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	export default {
		components:{
			Card
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-setting-bind-phone {
		.t-hairdres-button {
			margin: 95rpx;
		}
		.title {
			display: block;
			padding: 32rpx;
			font-size: 28rpx;
			font-weight: bold;
			margin-bottom: -32rpx;
		}
		.form--item {
			display: flex;
			justify-content: space-between;
			margin-bottom: 32rpx;
			font-size: 24rpx;
			align-items: center;
			.input {
				width: 430rpx;
				height: 70rpx;
				background-color: #fff3e2;
				border-radius: 10rpx;
				display: flex;
				align-items: center;
				padding: 0 24rpx;
				justify-content: space-between;
				input {
					font-size: 24rpx;
				}
				.btn {
					line-height: 1;
					background: #fc689a;
					color: #fff;
					padding: 9rpx 20rpx;
					border-radius: 100rpx;
				}
			}
			&:last-child {
				margin-bottom: 0;
			}
		}
	}
</style>

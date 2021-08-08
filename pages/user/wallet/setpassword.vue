<template>
	<!-- 设置支付密码 -->
	<view class="t-hairdres-user-setpassword">
		<Card>
			<view class="form--item">
				<text>当前手机号</text>
				<view class="input">
					<input type="text" value="" placeholder="当前手机号" />
				</view>
			</view>
			<view class="form--item">
				<text>验证手机号</text>
				<view class="input">
					<input type="text" value="" placeholder="验证手机号" />
					<text class="btn">获取验证码</text>
				</view>
			</view>
			<view class="form--item">
				<text>设置支付密码</text>
				<view class="input">
					<input type="text" value="" placeholder="请设置6位数字支付密码" />
				</view>
			</view>
			<view class="form--item">
				<text>确定支付密码</text>
				<view class="input">
					<input type="text" value="" placeholder="请确定设置的支付密码" />
				</view>
			</view>
			<view class="t-hairdres-button">确定设置</view>
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
	.t-hairdres-user-setpassword {
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
				width: 410rpx;
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

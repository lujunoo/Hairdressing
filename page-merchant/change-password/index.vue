<template>
	<!-- 修改密码 -->
	<view class="t-hairdres-merchant-change-password">
		<Card>
			<view class="list-item">
				<text class="label">店铺账号</text>
				<view class="input">
					<input type="text" value="" placeholder="请输入内容" />
				</view>
			</view>
			<view class="list-item">
				<text class="label">验证码</text>
				<view class="input">
					<input type="text" value="" placeholder="请输入内容" />
					<text class="color-red">获取验证码</text>
				</view>
			</view>
			<view class="list-item">
				<text class="label">输入旧密码</text>
				<view class="input">
					<input type="text" value="" placeholder="请输入内容" />
				</view>
			</view>
			<view class="list-item">
				<text class="label">设置新密码</text>
				<view class="input">
					<input type="text" value="" placeholder="请输入内容" />
				</view>
			</view>
			<view class="list-item">
				<text class="label">确认新密码</text>
				<view class="input">
					<input type="text" value="" placeholder="请输入内容" />
				</view>
			</view>
			<view class="t-hairdres-button">
				确定修改
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	export default {
		components: {
			Card
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-change-password {
		font-size: 24rpx;
		line-height: 1;
		.t-hairdres-button {
			margin-top: 100rpx;
		}
		.list-item {
			display: flex;
			margin-bottom: 32rpx;
			padding-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			.label {
				width: 180rpx;
				font-weight: bold;
			}
			.input {
				flex: 1;
				display: flex;
				justify-content: space-between;
				input {
					flex: 1;
					font-size: 24rpx;
				}
			}
		}
	}
</style>

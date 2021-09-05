<template>
	<view class="t-hairdres-merchant-login">
		<image class="bg" src="https://cdn.pixabay.com/photo/2020/07/28/11/50/girl-5444835_960_720.jpg" mode="aspectFill"></image>
		<view class="content">
			<image src="@/static/images/logo.png" mode="aspectFill"></image>
			<text class="name">ihair do爱做头发</text>
			<view class="form-input">
				<input type="text" value="" placeholder="请输入手机号" />
				<input type="text" value="" placeholder="请输入密码" />
			</view>
			<view class="t-hairdres-button">登录</view>
			<view class="desc">忘记密码？</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="less">
	.t-hairdres-merchant-login {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		.t-hairdres-button {
			width: 500rpx;
		}
		.desc {
			width: 500rpx;
			font-size: 24rpx;
			color: #fff;
			text-align: right;
		}
		.content {
			width: 100%;
			height: 100%;
			background: rgba(0,0,0,0.5);
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.name {
				color: #f95ac0;
				font-size: 28rpx;
				font-weight: bold;
				display: block;
				line-height: 1;
				margin-top: 32rpx;
			}
			.form-input {
				padding: 80rpx 0;
				input {
					width: 500rpx;
					padding: 40rpx 0 24rpx 0;
					border-bottom: solid 2rpx #eee;
					color: #eee;
					font-size: 24rpx;
				}
			}
			image {
				width: 200rpx;
				height: 200rpx;
			}
		}
		.bg {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
		}
	}
</style>

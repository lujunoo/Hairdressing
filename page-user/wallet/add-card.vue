<template>
	<!-- 添加银行卡 -->
	<view class="t-hairdres-user-add-card">
		<text class="title">请认真填写以下信息</text>
		<Card>
			<view class="form--item">
				<text>开户人姓名：</text>
				<view class="input">
					<input type="text" value="" placeholder="开户人真实姓名" />
				</view>
			</view>
			<view class="form--item">
				<text>身份证号码：</text>
				<view class="input">
					<input type="text" value="" placeholder="二代身份证18位身份证号码" />
				</view>
			</view>
			<view class="form--item">
				<text>开户银行：</text>
				<view class="input">
					<input type="text" value="" placeholder="请选择开户银行" />
					<text class="iconfont">&#xe63d;</text>
				</view>
			</view>
			<view class="form--item">
				<text>支行信息：</text>
				<view class="input">
					<input type="text" value="" placeholder="请填写开户行所在支行" />
				</view>
			</view>
			<view class="form--item">
				<text>银行卡号：</text>
				<view class="input">
					<input type="text" value="" placeholder="请填写银行卡卡号" />
				</view>
			</view>
			<view class="form--item">
				<text>预留手机号：</text>
				<view class="input">
					<input type="text" value="" placeholder="预留手机号" />
					<text class="btn">获取验证码</text>
				</view>
			</view>
			<view class="form--item">
				<text>输入验证码：</text>
				<view class="input">
					<input type="text" value="" placeholder="输入验证码" />
				</view>
			</view>
			<view class="form--item">
				<text>设置默认银行卡：</text>
				<switch color="#fc689a"/>
			</view>
			<view class="t-hairdres-button">确定添加</view>
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
	.t-hairdres-user-add-card {
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

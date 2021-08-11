<template>
	<!-- 实名认证 -->
	<view class="t-hairdres-user-verified">
		<Card>
			<view class="list-item">
				<text class="title">请认真填写以下信息</text>
				<text class="color-theme">注：资料一经认证不可更改</text>
			</view>
			<view class="list-item">
				<text class="title">真实姓名</text>
				<input type="text" value="" />
			</view>
			<view class="list-item">
				<text class="title">身份证号码</text>
				<input type="text" value="" />
			</view>
			<view class="list-item">
				<text class="title">上传证件</text>
				<text class="desc">一个身份证件只能绑定一个账号</text>
				<view class="card-image">
					<Upload :maxLength="1" width="300" height="170" :imageData="['https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg']" title='身份证正面（人像页）' />
					<Upload :maxLength="1" width="300" height="170" :imageData="[]" title='身份证反面（国徽页）'/>
				</view>
				<text class="desc">本人手持身份证件正面照）</text>
				<Upload :maxLength="1" width="300" height="170" :imageData="[]" title="手持证件照"/>
			</view>
			<text class="t-hairdres-button">提交认证</text>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Upload from '@/components/Upload'
	export default {
		components:{
			Card,
			Upload
		},
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-verified {
		.list-item {
			font-size: 24rpx;
			color: #666;
			margin-bottom: 32rpx;
			.card-image {
				display: flex;
				justify-content: space-between;
				margin-bottom: 24rpx;
			}
			.desc {
				margin-bottom: 24rpx;
			}
			.title {
				font-weight: bold;
				font-size: 28rpx;
				color: #333333;
				margin-bottom: 16rpx;
			}
			input {
				height: 70rpx;
				font-size: 28rpx;
				background-color: #ffffff;
				border-radius: 20rpx;
				border: dashed 4rpx #dcdcdc;
			}
			text {
				display: block;
			}
		}
	}
</style>

<template>
	<!-- 添加荣誉 -->
	<view class="t-hairdres-user-creat-honor">
		<Card>
			<view class="list-item">
				<text class="title">荣誉名称</text>
				<input type="text" placeholder="请填写荣誉名称" value="" />
			</view>
			<view class="list-item">
				<text class="title">荣誉介绍</text>
				<textarea value="" placeholder="请填写荣誉介绍" />
			</view>
			<view class="list-item">
				<text class="title">上传图片</text>
				<Upload class="list-item-upload"/>
			</view>
			<view class="t-hairdres-button">
				确定添加
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Upload from '@/components/Upload'
	export default {
		components: {
			Card,
			Upload
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-creat-honor {
		font-size:24rpx;
		.title {
			font-weight: bold;
			font-size: 28rpx;
		}
		.list-item-upload {
			margin-top: 24rpx;
		}
		input,textarea {
			padding: 16rpx;
			font-size: 24rpx;
			background-color: #fff3e2;
			border-radius: 10rpx;
			border: dashed 4rpx #f95abf;
			margin: 24rpx 0;
		}
		textarea {
			width: calc(100% - 32rpx);
			min-height: 200rpx;
		}
	}
</style>

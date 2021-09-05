<template>
	<!-- 添加荣誉 -->
	<view class="t-hairdres-user-personal-add-honor">
		<Card>
			<view class="list-item">
				<text class="label">荣誉名称</text>
				<input type="text" value="" placeholder="填写荣誉名称" />
			</view>
			<view class="list-item">
				<text class="label">荣誉描述</text>
				<textarea value="" placeholder="荣誉描述" />
			</view>
			<view class="list-item">
				<text class="label">荣誉照片</text>
				<Upload width="300" height="170" />
			</view>
		</Card>
		<view class="t-hairdres-button">
			确定添加
		</view>
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
	.t-hairdres-user-personal-add-honor {
		font-size: 24rpx;
		.t-hairdres-button {
			width: 480rpx;
			margin: auto;
		}
		.list-item {
			border-bottom: solid 2rpx #eee;
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			&:last-child {
				border: none;
				margin-bottom: 0;
				padding-bottom: 0;
			}
			.label {
				font-weight: bold;
				display: block;
				margin-bottom: 24rpx;
			}
			input {
				font-size: 24rpx;
			}
			textarea {
				width: calc(100% - 32rpx);
				height: 200rpx;
				padding: 16rpx;
				font-size: 24rpx;
				background-color: #fff3e2;
				border-radius: 10rpx;
			}
		}
	}
</style>

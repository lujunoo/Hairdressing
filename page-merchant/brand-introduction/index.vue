<template>
	<!-- 品牌介绍 -->
	<view class="t-hairdres-merchant-brand-introduction">
		<Card>
			<view class="title">门店环境（最多9张）</view>
			<view class="desc">请上传门店环境照片，图片比例16:9，小于10M</view>
			<Upload width="195" height="140" />
		</Card>
		<Card>
			<view class="title">门店环境（最多9张）</view>
			<textarea v-model="content" :maxlength="300" value="" placeholder="情输入简介" />
			<view class="length-text">{{content.length}}/300字</view>
			<view class="t-hairdres-button">
				确定修改
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
		},
		data () {
			return {
				content:''
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-brand-introduction {
		font-size: 24rpx;
		.title {
			font-size: 28rpx;
			font-weight: bold;
			margin-bottom: 24rpx;
		}
		.desc {
			color: #999;
			margin-bottom: 32rpx;
		}
		.length-text {
			text-align: right;
			font-size: 20rpx;
		}
		textarea {
			font-size: 24rpx;
			padding: 16rpx;
			width: calc(100% - 32rpx);
			height: 200rpx;
			background-color: #fff3e2;
			border-radius: 10rpx;
			border: dashed 4rpx #fc689a;
		}
		.t-hairdres-button {
			margin-top: 100rpx;
		}
	}
</style>

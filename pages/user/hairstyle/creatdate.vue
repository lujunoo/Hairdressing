<template>
	<!-- 添加发型 -->
	<view class="t-hairdres-user-hairstyle-creatdate">
		<Card>
			<Title title="发型记录说明"/>
			<textarea v-model="content" maxlength="50" value="" placeholder="请填写发型记录说明" />
			<text>{{content.length}}/50字</text>
			<Title title="发型图片"/>
			<Upload/>
			<view class="t-hairdres-button">
				确认添加
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Title from '@/components/Title'
	import Upload from '@/components/Upload'
	export default {
		components: {
			Card,
			Title,
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
	.t-hairdres-user-hairstyle-creatdate {
		font-size: 24rpx;
		textarea {
			width: calc(100% - 32rpx);
			display: block;
			height: 200rpx;
			background-color: #fff3e2;
			border-radius: 10rpx;
			border: dashed 4rpx #f95abf;
			font-size: 24rpx;
			padding: 16rpx;
		}
	}
</style>

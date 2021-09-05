<template>
	<!-- 添加消费记录 -->
	<view class="t-hairdres-user-customer-profile-add-record">
		<Card>
			<Title class="profile-add-record" title="消费记录说明"/>
			<textarea v-model="content" maxlength="50" value="" placeholder="请填写消费记录说明" />
			<text>{{content.length}}/300字</text>
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
	.t-hairdres-user-customer-profile-add-record {
		font-size: 24rpx;
		.profile-add-record {
			margin-top: -32rpx;
		}
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

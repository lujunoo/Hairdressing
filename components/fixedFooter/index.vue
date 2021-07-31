<template>
	<!-- 固定底部 -->
	<view class="t-hairdres-fixedFooter">
		<view v-if="!hideLeft" class="left">
			<slot name="left">测试文字</slot>
		</view>
		<view class="right">
			<slot name="right">
				<text @click="onSubmit" class="submit">{{submitText}}</text>
			</slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			hideLeft: {
				type: Boolean,
				default: false
			},
			submitText: {
				type: String,
				default: '确定'
			}
		},
		methods: {
			onSubmit () {
				this.$emit('onSubmit')
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-fixedFooter {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		height: 100rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: space-around;
		line-height: 100rpx;
		font-size: 24rpx;
		align-items: center;
		
		.right {
			.submit {
				display: block;
				width: 220rpx;
				height: 60rpx;
				background-color: #fc689a;
				border-radius: 25rpx;
				line-height: 60rpx;
				text-align: center;
				color: #FFFFFF;
			}
		}
	}
</style>

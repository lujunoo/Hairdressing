<template>
	<!-- 输入支付密码 -->
	<view class="t-hairdres-pay-password">
		<Dialog maskClose title="输入支付密码" ref="dialog">
			<view class="body" slot="body">
				<text v-for="item in 6" :key="item" :class="{active: password.length > (item - 1)}"></text>
				<input type="number" maxlength="6" class="password" v-model="password" />
			</view>
			<view class="footer" slot="footer">
				忘记支付密码？<text class="color-theme">修改密码</text>
			</view>
		</Dialog>
	</view>
</template>

<script>
	import Dialog from '@/components/Dialog'
	export default {
		components: {
			Dialog
		},
		data () {
			return {
				active: 1,
				password: ''
			}
		},
		watch: {
			password (data) {
				if (data.length === 6) {
					this.$refs.dialog.close()
					uni.showLoading({
						title: '正在提交',
						mask: true
					})
					this.$emit('result',this.password)
					setTimeout(() => {
						uni.hideLoading()
						this.password = ''
					},1000)
				}
			}
		},
		methods: {
			toPay () {
				this.$refs.dialog.show()
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-pay-password {
		.footer {
			padding: 40rpx;
			font-size: 24rpx;
		}
		.body {
			display: flex;
			justify-content: space-between;
			padding: 0 40rpx;
			position: relative;
			.password {
				width: 85%;
				height: 60rpx;
				position: absolute;
				opacity: 0;
			}
			text {
				display: flex;
				width: 50rpx;
				height: 50rpx;
				border-radius: 4rpx;
				border: solid 2rpx #a0a0a0;
				display: flex;
				justify-content: center;
			}
			.active {
				position: relative;
				&::after {
					content: '';
					width: 20rpx;
					height: 20rpx;
					border-radius: 100rpx;
					background: #333333;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-50%);
				}
			}
		}
	}
</style>

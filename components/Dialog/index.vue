<template>
	<!-- 弹窗组件 -->
	<view v-if="visble" class="t-hairdres-dialog">
		<view @click="maskHide" class="mask"></view>
		<view class="t-dialog-body">
			<view v-if="!hideHeader" class="header">
				<slot name="header">
					<view class="title">
						{{title}}
					</view>
				</slot>
			</view>
			<view class="body">
				<slot name="body">
					<view class="desc">
						{{desc}}
					</view>
				</slot>
			</view>
			<view v-if="!hideFooter" class="footer">
				<slot name="footer">
					<view class="footer-button">
						<text @click="cancel" class='button'>{{cancelText}}</text>
						<text @click="confirm" class='button submit'>{{okText}}</text>
					</view>
				</slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			title: {
				type: String,
				default: '温馨提示'
			},
			okText:{
				type: String,
				default: '确定'
			},
			cancelText: {
				type:String,
				default: '取消'
			},
			desc: {
				type: String,
				default: '本次下架前已售出待验券订单不受下架影响，请按原有内容接待！'
			},
			hideHeader: {
				type: Boolean,
				default: false
			},
			hideFooter: {
				type: Boolean,
				default: false
			},
			maskClose: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				visble: false
			};
		},
		methods: {
			maskHide () {
				if (this.maskClose) {
					this.close()
				}
			},
			cancel () {
				this.close()
				this.$emit('onCancel')
			},
			confirm () {
				this.$emit('onConfirm')
			},
			show () {
				this.visble = true
			},
			close () {
				this.visble = false
			}
		}
	}
</script>

<style scoped lang="less">
.t-hairdres-dialog {
	width: 100%;
	height: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 999;
	.mask {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.4);
	}
	.t-dialog-body {
		width: auto;
		height: auto;
		min-height: 330rpx;
		min-width: 500rpx;
		border-radius: 10rpx;
		background: #FFFFFF;
		position: absolute;
		overflow: hidden;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.header {
			.title {
				font-size: 28rpx;
				font-weight: bold;
				padding: 40rpx 24rpx;
				text-align: center;
			}
		}
		.desc {
			font-size: 24rpx;
			padding: 0 40rpx;
		}
		.footer {
			.footer-button {
				display: flex;
				justify-content: space-around;
				padding: 40rpx 32rpx;
				
				.button {
					flex: 1;
					display: block;
					font-size: 24rpx;
					color: #FFFFFF;
					height: 60rpx;
					border: none;
					line-height: 60rpx;
					background: #FFBABA;
					border-radius: 100rpx;
					text-align: center;
					margin:0 24rpx;
				}
				
				.submit {
					background: #FC689A;
				}
			}
		}
	}
}
</style>

<!-- 刷新状态 -->
<template>
	<view class="t-hairdres-pulldownrefresh">
		<text>{{getStatus}}</text>
	</view>
</template>

<script>
	export default {
		name: "PullDownRefresh",
		props: {
			status: {
				type: Number,
				default: 0
			}
		},
		computed:{
			getStatus () {
				if (this.status === 0) {
					return '上滑查看更多'
				}
				if (this.status === 1) {
					return '正在加载中...'
				}
				if (this.status === 2) {
					return '加载失败...'
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-pulldownrefresh {
		padding: 32rpx 0;
		text-align: center;
		
		text {
			font-size: 24rpx;
			color: #666666;
		}
	}
</style>

<template>
	<!-- 预约时间日历操作页头 -->
	<view class="t-hairdres-calendar-header">
		<text @click="subtract" class="iconfont">&#xe64c;</text>
		<text>{{year}}年{{month}}月</text>
		<text @click="add" class="iconfont">&#xe64c;</text>
	</view>
</template>

<script>
	// import moment from "moment";
	export default {
		data () {
			return {
				year: '', //moment().format('YYYY'),
				month: '', // moment().format('MM'),
				increment:0
			}
		},
		methods: {
			subtract () {
				this.increment -= 1
				// this.month = moment().subtract(this.increment, 'M').format('MM')
			},
			add () {
				this.increment += 1
				// this.month = moment().add(this.increment, 'M').format('MM')
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-calendar-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		.iconfont {
			width: 40rpx;
			height: 40rpx;
			background-color: #f7a0c7;
			border-radius: 100rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 40rpx;
		}
		text {
			&:first-child {
				transform: rotate(180deg);
			}
			&:nth-child(2) {
				line-height: 1;
				padding: 18rpx 42rpx;
				font-size: 28rpx;
				color: #FFFFFF;
				background-color: #f7a0c7;
				border-radius: 20rpx;
			}
		}
	}
</style>

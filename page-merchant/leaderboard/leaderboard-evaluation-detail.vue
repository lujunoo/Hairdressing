<template>
	<!-- 评价详情 -->
	<view class="t-hairdres-leaderboard-evaluation-detail">
		<Evaluation :data-list="[0]" :voice='voice' :linkInfo="linkInfo"/>
		<fixedFooter hideLeft>
			<view slot="right" class="fixedFooter-input">
				<input type="text" value="" placeholder="填写内容" />
				<text class="button">评论</text>
			</view>
		</fixedFooter>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Evaluation from '@/components/Evaluation'
	import fixedFooter from '@/components/fixedFooter'
	export default {
		components: {
			Card,
			fixedFooter,
			Evaluation
		},
		data () {
			return {
				active:1,
				linkInfo: {
					link: 1
				},
				voice: [1]
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-leaderboard-evaluation-detail {
		padding-bottom: 100rpx;
		.fixedFooter-input {
			width: 702rpx;
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 24rpx;
			
			input {
				flex: 1;
				border: solid 2rpx #eee;
				font-size: 24rpx;
				height: 60rpx;
				padding: 0 24rpx;
				border-radius: 10rpx;
			}
			.button {
				width: 180rpx;
				height: 60rpx;
				background-color: #fc689a;
				border-radius: 30rpx;
				color: #FFFFFF;
				text-align: center;
				font-size: 24rpx;
				margin-left: 32rpx;
				line-height: 60rpx;
			}
		}
	}
</style>

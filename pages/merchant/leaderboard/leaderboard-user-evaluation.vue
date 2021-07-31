<template>
	<!-- 用户的所有评价 -->
	<view class="t-hairdres-leaderboard-user-evaluation">
		<Card>
			<view v-for="(item,index) in 10" :key="index" class="leaderboard-evaluation-item">
				<Evaluation/>
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Score from '@/components/Score'
	import Evaluation from '@/components/Evaluation'
	export default {
		components: {
			Card,
			Score,
			Evaluation
		},
		data () {
			return {
				active:1
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-leaderboard-user-evaluation {
		.leaderboard-evaluation-item {
			border-bottom: solid 2rpx #ddd;
			margin-bottom: 32rpx;
			padding-bottom: 32rpx;
			&:last-child {
				margin: 0;
				padding: 0;
				border: none;
			}
		}
	}
</style>

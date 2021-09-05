<template>
	<!-- 问答大家 -->
	<view class="t-hairdres-problem">
		<Card>
			<Title @onClick="toList" class="card-title" showLeft title="问大家"/>
			<view @click="toDetail" v-for="(item,index) in 3" :key="index" class="list-item">
				<view class="desc">
					<text class="icon">问</text>
					<text class="text">这家美发店的发型师技术怎么样这家美发店的发型师技术怎么样这家美发店的发型师技术怎么样？</text>
				</view>
				<text class="color-theme">3个回答</text>
			</view>
		</Card>
	</view>
</template>

<script>
	import Title from '@/components/Title'
	import Card from '@/components/Card'
	export default {
		components:{
			Title,
			Card
		},
		methods: {
			toList () {
				uni.navigateTo({
					url: '../../../leaderboard-detail-questions-answers',
					complete: (data) => {
						console.log(data)
					}
				})
			},
			toDetail () {
				uni.navigateTo({
					url: '../../../leaderboard-answers-detail'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-problem {
		.card-title {
			margin: -32rpx 0;
		}
		.list-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 24rpx;
			font-size: 24rpx;
			
			.desc {
				display: flex;
				align-items: center;
			}
			
			.text {
				display: block;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
				max-width: 490rpx;
			}
			
			.icon {
				width: 32rpx;
				height: 32rpx;
				color: #FFFFFF;
				display: inline-block;
				text-align: center;
				margin-right: 8rpx;
				line-height: 32rpx;
				background-color: #fc689a;
				border-radius: 5rpx;
			}
		}
		.problem-title {
			margin: -32rpx;
		}
	}
</style>

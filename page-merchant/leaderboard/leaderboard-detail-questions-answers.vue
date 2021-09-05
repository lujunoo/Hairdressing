<template>
	<!-- 商家详情-问答 -->
	<view class="t-hairdres-leaderboard-questions">
		<Card>
			<view @click="toDetail" v-for="(item,index) in 10" :key="index" class="list-item">
				<view class="question">
					<text>问</text>
					<text>这家美发店的发型师技术怎么样这家美发店的发型师技术怎么样？</text>
				</view>
				<view class="question">
					<text>答</text>
					<text>技术还不错，我一直都是在这里剪的，每次都是找的同一个发型师，效果很好！技术还不错，我一直都是在这里剪的，每次都是找的同一个发型师，效果很好！？</text>
				</view>
				<text class="all">全部回答>></text>
			</view>
		</Card>
		<fixedFooter hideLeft>
			<view slot="right" class="fixedFooter-input">
				<input type="text" value="" placeholder="提问:" />
				<text class="button">发布</text>
			</view>
		</fixedFooter>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import fixedFooter from '@/components/fixedFooter'
	export default {
		components:{
			Card,
			fixedFooter,
		},
		methods: {
			toDetail () {
				uni.navigateTo({
					url: './leaderboard-answers-detail'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-leaderboard-questions {
		padding-bottom: 100rpx;
		.list-item {
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			&:last-child{
				margin: 0;
				border: none;
				padding: 0;
			}
			.all {
				font-size: 24rpx;
				color:#fc689a;
				margin-left: 48rpx;
			}
			.question {
				margin-bottom: 24rpx;
				display: flex;
				align-items: flex-start;
				text {
					&:first-child {
						padding: 8rpx 6rpx;
						display: block;
						line-height: 1;
						text-align: center;
						font-size: 24rpx;
						color: #FFFFFF;
						background-color: #fc689a;
						border-radius: 5rpx;
						margin-right: 24rpx;
					}
					&:last-child {
						font-size: 24rpx;
						font-weight: bold;
					}
				}
				&:nth-child(2) {
					text {
						&:first-child {
							background: #ffbd55;
						}
						&:last-child {
							font-weight: 500;
						}
					}
				}
			}
		}
		
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

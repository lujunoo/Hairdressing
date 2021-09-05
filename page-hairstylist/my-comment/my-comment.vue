<template>
	<!-- 评论管理 -->
	<view class="t-hairdres-user-my-comment">
		<Card class="my-comment-score" >
			<text class="name">总评分：</text>
			<Score score="4" showGray class="my-comment-score-number"/>
		</Card>
		<Card>
			<text :class="{ active: active === index }" @click="active = index" v-for="(item,index) in 8" :key="index" class="list-label">晒图(23)</text>
		</Card>
		<Card>
			<view v-for="(item,index) in 4" :key="index" class="comment-evaluation">
				<Evaluation isLink>
					<text class="color-red" @click="toDetail" style="font-size: 24rpx;">交易信息</text>
				</Evaluation>
				<view class="button-group">
					<text @click="toReport" >举报</text>
					<text>回复</text>
				</view>
			</view>
		</Card>
		<Dialog ref="codeDialog" maskClose hideFooter title="交易信息">
			<view slot="body" class="order-info">
				<text>业务类型：订单立减</text>
				<text>券码：5656 5656 561</text>
				<text>项目名称：洗剪吹超值套餐</text>
				<text>服务发型师：曹兵</text>
				<text>验证时间：2021-03-24 18:45:36</text>
				<view class="price">
					<text>订单金额：</text>
					<view class="child-price">
						<text>门店售价：¥ 225.00</text>
						<text>门店售价：¥ 185.00</text>
						<text>实际支付：<text class="color-red">¥ 160.00</text></text>
					</view>
				</view>
			</view>
		</Dialog>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Score from '@/components/Score'
	import Evaluation from '@/components/Evaluation'
	import Dialog from '@/components/Dialog'
	export default {
		components: {
			Card,
			Score,
			Evaluation,
			Dialog
		},
		data () {
			return {
				active: 0,
				replyShow:false
			}
		},
		methods: {
			toReport () {
				uni.navigateTo({
					url: '../../merchant/leaderboard/leaderboard-report'
				})
			},
			toDetail () {
				this.$refs.codeDialog.show()
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-my-comment {
		.order-info {
			padding: 0rpx 32rpx 40rpx 56rpx;
			text {
				display: block;
				font-size: 24rpx;
				line-height: 1;
				margin-bottom: 32rpx;
			}
			.price {
				display: flex;
				color: #666;
				.color-red {
					display: initial;
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
		.comment-evaluation {
			border-bottom: solid 2rpx #eee;
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			.button-group {
				text-align: right;
				margin-top: 32rpx;
				
				text {
					font-size: 24rpx;
					display: inline-block;
					line-height: 1;
					margin-left: 32rpx;
					border: 2rpx solid #ffa8a8;
					color: #ffa8a8;
					padding: 12rpx 40rpx;
					border-radius: 50rpx;
					
					&:last-child {
						color: #db6bff;
						border-color: #db6bff;
					}
				}
			}
		}
		.list-label {
			font-size: 28rpx;
			color: #ffbd55;
			display: inline-block;
			line-height: 1;
			padding: 8rpx 12rpx;
			border-radius: 12rpx;
			border: solid 2rpx #ffbd55;
			margin: 16rpx 12rpx;
		}
		.my-comment-score {
			display: flex;
			align-items: center;
			.my-comment-score-number {
				transform: scale(1.3);
				margin-left: 30rpx;
				margin-top: -12rpx;
			}
			.name {
				display: block;
				line-height: 1;
				font-size: 28rpx;
				font-weight: bold;
			}
		}
	}
</style>

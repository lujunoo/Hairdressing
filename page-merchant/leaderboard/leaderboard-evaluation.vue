<template>
	<!-- 店铺评价列表 -->
	<view class="t-hairdres-leaderboard-evaluation">
		<!-- 封面 -->
		<view class="cover">
			<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
			<view class="content">
				<text class="score">5.0分</text>
				<view class="level">
					<Score class="level-score" showGray score="5" text="20人"/>
					<Score class="level-score" showGray score="4" text="20人"/>
					<Score class="level-score" showGray score="3" text="20人"/>
					<Score class="level-score" showGray score="2" text="20人"/>
					<Score class="level-score" showGray score="1" text="20人"/>
				</view>
			</view>
		</view>
		<!-- 标签 -->
		<Card>
			<view class="label-list">
				<text :class="{active: active === index}" @click="active = index" v-for="(item,index) in 5" :key="index">技术很好(23)</text>
			</view>
		</Card>
		<!-- 评价 -->
		<Evaluation/>
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
	.t-hairdres-leaderboard-evaluation {
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
		.label-list {
			margin-bottom: -24rpx;
			text {
				font-size: 24rpx;
				color: #ffbd55;
				border:solid 2rpx #ffbd55;
				border-radius: 20rpx;
				display: inline-block;
				margin: 0 24rpx 24rpx 0;
				line-height: 1;
				padding: 16rpx 24rpx;
			}
			.active {
				background: #ffbd55;
				color: #FFFFFF;
			}
		}
		.cover {
			position: relative;
			height: 300rpx;
			image {
				width: 100%;
				height: 100%;
				position: absolute;
				z-index: 0;
			}
			.content {
				font-size: 24rpx;
				color: #FFFFFF;
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				height: 100%;
				position: relative;
				z-index: 1;
				background: rgba(0,0,0,0.4);
				.score {
					width: 120rpx;
					height: 120rpx;
					background-color: #fc689a;
					border-radius: 150rpx;
					text-align: center;
					line-height: 120rpx;
					font-size: 32rpx;
					font-weight: bold;
				}
				.level {
					.level-score {
						transform: scale(1.3);
						margin-bottom: 10rpx;
					}
					/deep/.score {
						font-size: 10rpx;
						color: #FFFFFF !important;
					}
				}
			}
		}
	}
</style>

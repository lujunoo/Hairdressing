<template>
	<!-- 浏览历史 -->
	<view class="t-hairdres-user-history">
		<text class="clear">清空记录</text>
		<view @click="toDetail" v-for="(item,index) in 4" :key="index+'index1'" class="list-item">
			<text class="item">3月22日</text>
			<Card v-for="(item,index2) in 4" :key="index2+'index2'" class="user-history-card">
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg"
					mode="aspectFill" />
				<view class="content">
					<text>施华蔻烫染直3选1【时尚烫染】施华蔻烫染直v施华蔻烫染直施华蔻烫染直施华蔻烫染直3选1</text>
					<text class="color-theme">¥185.00<text class="oldprice">¥185.00</text></text>
					<text>已售<text class="color-yellow">25</text></text>
				</view>
			</Card>
		</view>
	</view>
</template>
<script>
	import Card from "@/components/Card";
	export default {
		components: {
			Card
		},
		methods: {
			toDetail () {
				uni.navigateTo({
					url:'../../merchant/leaderboard/leaderboard-detail-package'
				})
			}
		}
	};
</script>
<style lang="less" scoped>
	.t-hairdres-user-history {
		.clear {
			color: #fff;
			font-size: 24rpx;
			line-height: 1;
			display: inline-block;
			padding: 12rpx 16rpx;
			background: #ffbd55;
			border-radius: 10rpx;
			float: right;
			margin: 32rpx;
		}
		.item {
			padding: 0 32rpx;
			font-size: 28rpx;
		}

		.list-item {
			clear: both;

			.user-history-card {
				display: flex;
				
				.content {
					flex: 1;
					font-size: 24rpx;
					justify-content: space-between;
					display: flex;
					flex-direction: column;
					>text {
						&:first-child {
						  text-overflow: -o-ellipsis-lastline;
						  overflow: hidden;
						  text-overflow: ellipsis;
						  display: -webkit-box;
						  -webkit-line-clamp: 2;
						  line-clamp: 2;
						  -webkit-box-orient: vertical;
						}
					}
					.oldprice {
						margin-left: 24rpx;
					}
				}

				image {
					width: 200rpx;
					height: 140rpx;
					border-radius: 10rpx;
					margin-right: 24rpx;
				}
			}
		}
	}
</style>

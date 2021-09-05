<template>
	<!-- 积分受收益 -->
	<view class="t-hairdres-user-integral">
		<Card class="user-integral-header">
			<view class="item">
				<text>17237</text>
				<text>总积分</text>
			</view>
			<view class="item">
				<text>17237</text>
				<text>总积分</text>
			</view>
			<text @click="toWithdraw" class="button">提现</text>
		</Card>
		<Card>
			<view class="user-integral-list">
				<TabBar @onClick="getActve" isFlex :tabList="tabList"/>
				<view v-if="active !== 2" @click="toUserList" class="color-theme">成员：31人</view>
			</view>
			<view v-for="(item,index) in 30" :key="item" class="lits-item">
				<text>今日</text>
				<text>付款笔数：{{index * index}}</text>
				<text>收益：{{index * index}}</text>
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import TabBar from '@/components/TabBar'
	export default {
		components:{
			Card,
			TabBar
		},
		data () {
			return {
				tabList:['直接','间接','自己消费'],
				active: 0,
			}
		},
		methods: {
			toUserList () {
				uni.navigateTo({
					url: './user-lits'
				})
			},
			toWithdraw () {
				uni.navigateTo({
					url: './withdraw'
				})
			},
			getActve (index) {
				this.active = index
			}
		}
		
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-integral {
		font-size: 24rpx;
		.lits-item {
			display: flex;
			justify-content: space-between;
			text {
				flex: 1;
				line-height: 1;
				margin-bottom: 24rpx;
				&:nth-child(2) {
					flex: 2;
				}
			}
		}
		.user-integral-list {
			margin: 0 -32rpx;
			overflow: hidden;
			margin-bottom: 32rpx;
			padding-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			.color-theme {
				margin: 32rpx;
				margin-bottom: 0;
			}
		}
		.user-integral-header {
			background-image: linear-gradient(90deg, #ffd1e0 0%, #ffb1f1 100%);
			display: flex;
			justify-content: space-evenly;
			position: relative;
			padding-bottom: 80rpx;
			.button {
				bottom: 40rpx;
				right: 32rpx;
				position: absolute;
				background: #FFFFFF;
				color: #fc689a;
				line-height: 1;
				padding: 16rpx 24rpx;
				border-radius: 50rpx;
			}
			.item {
				color: #FFFFFF;
				display: flex;
				align-items: center;
				flex-direction: column;
				text {
					&:first-child {
						font-size: 48rpx;
					}
				}
			}
		}
	}
</style>

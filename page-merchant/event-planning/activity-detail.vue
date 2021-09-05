<template>
	<!-- 活动详情 -->
	<view class="t-hairdres-merchant-activity-detail">
		<TabBar @onClick="getActive" isFlex background="rgba(0,0,0,0)" :tabList="tabList" />
		<Card v-for="(item,index) in 10" :key="index" >
			<view class="list-item">
				<view class="info">
					<image src="https://cdn.pixabay.com/photo/2021/08/01/12/58/beach-6514331_960_720.jpg" mode="aspectFill"></image>
					<view class="left">
						<text class="title">【时尚烫染】施华蔻烫染直3选1</text>
						<view class="column">
							<text class="price">¥185.00<text class="oldprice">¥185.00</text></text>
							<text>所有用户立减10元</text>
						</view>
						<view class="column">
							<text class="color-red">活动已结束</text>
							<text>已售58份</text>
						</view>
					</view>
				</view>
				<view class="button-group">
					<text v-if="active !== 1">累计浏览量 325</text>
					<view class="left">
						<text v-if="active === 0" class="button">结束活动</text>
						<text v-if="active === 0" @click="detail" class="button">查看结果</text>
						<text v-if="active === 1" class="button">取消活动</text>
						<text v-if="active === 1" @click="toPriview" class="button">预览活动</text>
						<text v-if="active === 2" class="button">删除活动</text>
						<text v-if="active === 2" class="button">重启活动</text>
						<text v-if="active === 2" @click="detail" class="button">查看效果</text>
					</view>
				</view>
			</view>
		</Card>
		<fixedFooter hideLeft >
			<view slot="right" @click="toAddData" class="t-hairdres-button">
				发布活动
			</view>
		</fixedFooter>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import fixedFooter from '@/components/fixedFooter'
	import TabBar from '@/components/TabBar'
	export default {
		components: {
			Card,
			fixedFooter,
			TabBar
		},
		data () {
			return {
				active: 0,
				tabList:['进行中','未开始','已结束']
			}
		},
		methods: {
			toAddData () {
				uni.navigateTo({
					url:'./add-activity'
				})
			},
			getActive (index) {
				this.active = index 
			},
			toPriview () {
				uni.navigateTo({
					url:'./preview'
				})
			},
			detail () {
				uni.navigateTo({
					url:'./effect'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-activity-detail {
		padding-bottom: 100rpx;
		font-size: 24rpx;
		line-height: 1;
		.t-hairdres-button {
			width: 580rpx;
		}
		.list-item {
			.button-group {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left {
					flex: 1;
					display: flex;
					justify-content: flex-end;
				}
				.button {
					border-radius: 22rpx;
					padding: 12rpx 16rpx;
					color: #ffaaaa;
					border: solid 2rpx #ffaaaa;
					margin-left: 24rpx;
					&:last-child {
						color: #fc6968;
						border-color: #fc6968;
					}
				}
			}
			.info {
				padding-bottom: 32rpx;
				margin-bottom: 32rpx;
				border-bottom: solid 2rpx #eee;
				display: flex;
				align-items: center;
				image {
					width: 170rpx;
					height: 120rpx;
					border-radius: 10rpx;
					margin-right: 32rpx;
				}
				.left {
					flex: 1;
					min-height: 120rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					color: #666;
					.title {
						font-weight: bold;
						color: #000;
					}
					.price {
						color: #fc6968;
						font-size: 28rpx;
						font-weight: bold;
						.oldprice {
							font-weight: 500;
							font-size: 24rpx;
							margin-left: 24rpx;
						}
					}
					
					.column {
						display: flex;
						justify-content: space-between;
					}
				}
			}
		}
	}
</style>

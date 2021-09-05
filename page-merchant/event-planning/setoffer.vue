<template>
	<!-- 设置优惠 -->
	<view class="t-hairdres-merchant-setoffer">
		<Card>
			<view class="list-item">
				<text class="font-weight">请设置优惠内容</text>
			</view>
			<view class="list-item">
				<text>实际的促销成本由商家承担，随相关订单验券后结算时扣减</text>
			</view>
		</Card>
		<Card>
			<view class="list-item">
				<text class="font-weight">所有客户的优惠</text>
				<switch class="switch" color='#fc689a' checked />
			</view>
			<view class="list-item">
				<text>立减金额</text>
				<text>20元</text>
			</view>
			<view class="list-item border">
				<text></text>
				<text>售卖价：¥185.00，促销价：¥160.00</text>
			</view>
			<view class="list-item border">
				<text>每日最大促销量</text>
				<text>100份</text>
			</view>
			<view class="list-item">
				<text class="font-weight">品牌新客户的优惠</text>
				<switch class="switch" @change="newUser = !newUser" color='#fc689a' checked />
			</view>
			<view v-if="newUser" class="">
				<view class="list-item">
					<text class="color-red">不与其他优惠同享</text>
				</view>
				<view class="list-item">
					<text>立减金额</text>
					<text>20元</text>
				</view>
				<view class="list-item border">
					<text></text>
					<text>售卖价：¥185.00，促销价：¥160.00</text>
				</view>
				<view class="list-item border">
					<text>每日最大促销量</text>
					<text>100份</text>
				</view>
			</view>
		</Card>
		<fixedFooter hideLeft >
			<view slot="right" class="button-group">
				<text @click="back">上一步</text>
				<text @click="toStep" >下一步</text>
			</view>
		</fixedFooter>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import fixedFooter from '@/components/fixedFooter'
	export default {
		components: {
			Card,
			fixedFooter
		},
		data () {
			return {
				newUser: true
			}
		},
		methods: {
			toStep () {
				uni.navigateTo({
					url:'./constrains'
				})
			},
			back (){
				uni.navigateBack()
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-setoffer {
		padding-bottom: 100rpx;
		font-size: 24rpx;
		line-height: 1;
		color: #555;
		.list-item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 32rpx;
			&:last-child {
				margin-bottom: 0;
			}
			.font-weight {
				color: #000;
				font-size: 28rpx;
				font-weight: bold;
			}
		}
		.border {
			border-bottom: solid 2rpx #eee;
			padding-bottom: 32rpx;
		}
		.button-group {
			width: 750rpx;
			text-align: right;
			text {
				display: inline-block;
				width: 180rpx;
				height: 60rpx;
				background-color: #fc689a;
				color: #fff;
				margin: 0 32rpx;
				line-height: 60rpx;
				text-align: center;
				border-radius: 50rpx;
				&:first-child {
					background: #ffc5c5;
				}
			}
		}
	}
</style>

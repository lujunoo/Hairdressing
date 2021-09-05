<template>
	<!-- 限制条件 -->
	<view class="t-hairdres-merchant-constrains">
		<Card>
			<view class="list-item">
				<text class="font-weight">请设置使用条件</text>
			</view>
			<view class="list-item">
				<text>设置享受活动优惠的条件</text>
			</view>
		</Card>
		<Card>
			<view class="list-item">
				<text class="font-weight">立减开始时间</text>
				<LabelChecked :labels="startTime" />
			</view>
			<view class="list-item">
				<text class="font-weight">立减结束时间</text>
				<LabelChecked :labels="endTime" />
			</view>
			<view class="list-item">
				<text class="color-red">
					以1个月为周期生效，每个周期结束后系统将自动设置立减，您可以随时手动结束
				</text>
			</view>
			<view class="list-item">
				<text class="font-weight">每人每日限购数量（选填）</text>
				<LabelChecked :labels="dayQuantity" />
			</view>
			<view class="list-item">
				<text class="font-weight">每人限购数量（选填）</text>
				<LabelChecked :labels="userQuantity" />
			</view>
			<view class="list-item">
				<text class="color-red">
					每人限购总数量不得大于订单每人限购总数量
				</text>
			</view>
			<view class="list-item">
				<text class="font-weight">优惠可用周次</text>
				<LabelChecked @result="result" :ischecked="false" :labels="week" />
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
	import LabelChecked from '../components/Label-checked'
	export default {
		components: {
			Card,
			fixedFooter,
			LabelChecked
		},
		data () {
			return {
				startTime:['发布后生效','固定时间'],
				endTime:['无限制','固定时间'],
				dayQuantity:['无限制','自动义'],
				userQuantity:['无限制','自动义'],
				week:['无限制','周一','周二','周三','周四','周五','周六','周日'],
			}
		},
		methods: {
			result (data) {
				console.log(data)
			},
			toStep () {
				uni.navigateTo({
					url:'./preview'
				})
			},
			back (){
				uni.navigateBack()
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-constrains {
		padding-bottom: 100rpx;
		font-size: 24rpx;
		line-height: 1;
		color: #555;
		.list-item {
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
		.color-red {
			line-height: 1.8;
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

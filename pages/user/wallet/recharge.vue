<template>
	<!-- 充值 -->
	<view class="t-hairdres-user-recharge">
		<Card>
			<view class="title">充值金额</view>
			<view class="amount">
				<text :class="{active: active === index}" @click="active = index" v-for="(item,index) in list" :key="index">¥{{item}}</text>
			</view>
			<view class="title">选择充值方式</view>
			<view class="card-type">
				<view @click="type = 0" class="type-item">
					<text v-if="type === 0" class="iconfont iconfont2">&#xe661;</text>
					<text v-else class="iconfont">&#xe618;</text>
					<text class="iconfont weixin">&#xe665;</text>
					<view class="right">
						<text>微信零钱</text>
					</view>
				</view>
				<view @click="type = 1" class="type-item">
					<text v-if="type === 1" class="iconfont iconfont2">&#xe661;</text>
					<text v-else class="iconfont">&#xe618;</text>
					<image src="../../../static/images/card-icon1.png" mode="aspectFill"></image>
					<view class="right">
						<view class="name">
							<text>建设银行</text>
							<text class="iconfont">&#xe64c;</text>
						</view>
						<text>3453 **** **** 3453</text>
					</view>
				</view>
			</view>
			<view @click="toPay" class="t-hairdres-button">
				确认充值
			</view>
			<view class="title">充值说明</view>
			<text class="desc">1、充值说明充值说明充值说明充值说明充值说明</text>
			<text class="desc">1、充值说明充值说明充值说明充值说明充值说明</text>
			<text class="desc">1、充值说明充值说明充值说明充值说明充值说明</text>
			<text class="desc">1、充值说明充值说明充值说明充值说明充值说明</text>
			<text class="desc">1、充值说明充值说明充值说明充值说明充值说明</text>
			<text class="desc">1、充值说明充值说明充值说明充值说明充值说明</text>
		</Card>
		<PayPassword @result="getResult" ref="PayPassword"></PayPassword>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import PayPassword from '@/components/PayPassword'
	export default {
		components:{
			Card,
			PayPassword
		},
		data () {
			return {
				list:['20', '200', '50','300', '100','500'],
				active: 0,
				type: 0,
			}
		},
		methods: {
			toPay () {
				this.$refs.PayPassword.toPay()
			},
			getResult(data) {
				console.log(data)
			}
		}
		
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-recharge {
		.t-hairdres-button {
			margin: 50rpx 95rpx;
		}
		.desc {
			display: block;
			line-height: 1.8;
			font-size: 24rpx;
			padding-left: 8rpx;
		}
		.card-type {
			image {
				width: 40rpx;
				height: 40rpx;
				margin-right: 24rpx;
			}
			.type-item {
				display: flex;
				align-items: center;
				margin-bottom: 24rpx;
				.right {
					font-size: 24rpx;
					.name {
						display: flex;
						align-items: center;
						margin-bottom: 16rpx;
					}
					.iconfont {
						font-size: 28rpx;
					}
				}
				.iconfont {
					margin-right: 24rpx;
					font-size: 32rpx;
				}
				.iconfont2 {
					color: #fc689a;
				}
				.weixin{
					color: #09bb07;
					width: 40rpx;
					height: 40rpx;
					display: inline-block;
					transform: scale(1.4) translateY(5rpx);
					margin-right: 24rpx;
				}
			}
		}
		.amount {
			column-count: 3;
			column-gap: 24rpx;
			text {
				height: 110rpx;
				text-align: center;
				line-height: 110rpx;
				margin-bottom: 24rpx;
				display: block;
				background-color: #e5e5e5;
				border-radius: 10rpx;
				font-size: 28rpx;
			}
			.active {
				color: #FFFFFF;
				background: #fc689a;
			}
		}
		.title {
			font-size: 28rpx;
			font-weight: bold;
			margin-bottom: 32rpx;
		}
	}
</style>

<template>
	<!-- 我的预约 -->
	<view class="t-hairdres-user-reserve">
		<Card v-for="(item,index) in 10" :key="index" >
			<view class="title">
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				<text>iHair Do爱做头发</text>
			</view>
			<view @click="toDetail" class="text-info">
				<text>预约发型师：曹兵</text>
				<text>预约时间：2021-03-31 10:30</text>
				<text>预约项目：施华蔻烫染直3选1</text>
				<text>已支付订单金额：¥ 160.00</text>
				<text>商家地址：重庆市江北区建新北路38号附100号 <text class="iconfont">&#xe787;</text> </text>
				<text>商家电话：18888888888<text class="iconfont">&#xe744;</text></text>
			</view>
			<view class="button-group">
				<text @click="editTime" >修改时间</text>
				<text class="cancel">取消预约</text>
				<text class="active">我已到店</text>
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	export default {
		components: {
			Card
		},
		methods: {
			toDetail (){
				uni.navigateTo({
					url:'./order-detail'
				})
			},
			editTime () {
				uni.navigateTo({
					url:'../../commodity/order/select-time'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-reserve {
		font-size: 24rpx;
		.button-group {
			text-align: right;
			text {
				border: solid 2rpx #fc689a;
				line-height: 1;
				display: inline-block;
				padding: 16rpx 24rpx;
				border-radius: 10rpx;
				margin-left: 24rpx;
				color: #fc689a;
			}
			.active {
				border: solid 2rpx #fc689a;
				background-color: #fc689a;
				color: #FFFFFF;
				border-radius: 5px;
			}
			.cancel {
				border: solid 2rpx #ffb1b1;
				color: #ffb1b1;
			}
		}
		.text-info {
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			>text {
				display: block;
				line-height: 1;
				color: #666;
				margin-bottom: 24rpx;
				display: flex;
				text {
					color: #fc689a;
					display: inline-block;
					margin-left: 16rpx;
					transform: scale(1.5);
				}
				&:nth-child(5) {
					color: #000;
				}
				&:last-child {
					color: #000;
					margin-bottom: 0;
					text {
						transform: scale(1.2);
					}
				}
			}
		}
		.title {
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			display: flex;
			align-items: center;
			font-size: 28rpx;
			font-weight: bold;
			image {
				width: 50rpx;
				height: 50rpx;
				border-radius: 10rpx;
				margin-right: 24rpx;
			}
		}
	}
</style>

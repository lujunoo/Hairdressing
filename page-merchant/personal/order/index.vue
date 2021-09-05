<template>
	<!-- 商家订单 -->
	<view class="t-hairdres-merchant-personal-order">
		<Search class="personal-order-search" />
		<tabBar @onClick="getActive" isFlex background="rgba(0,0,0,0)" :tabList="tabList"/>
		<Card v-for="(item,index) in 10" :key="index">
			<view class="title">
				<text>iHari Do：施华蔻烫染直3选1</text>
				<text :class="{'color-red': active === 1}" >{{tabList[active]}}</text>
			</view>
			<view class="info">
				<text>订单数量：1</text>
				<text>券码：456456456451</text>
				<text>顾客手机号：188****8888</text>
			</view>
			<view class="order">
				<text>订单编号：202103246584</text>
				<text>下单时间：2021-03-24 17:45:36</text>
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Search from '@/components/Search'
	import tabBar from '@/components/TabBar'
	export default {
		components:{
			Card,
			Search,
			tabBar
		},
		data () {
			return {
				tabList: ['全部','待使用', '已使用','以退款'],
				active:0
			}
		},
		methods: {
			getActive (index) {
				this.active = index
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-personal-order {
		font-size: 24rpx;
		line-height: 1;
		.title {
			padding-bottom: 24rpx;
			margin-bottom: 24rpx;
			border-bottom: solid 2rpx #eee;
			display: flex;
			justify-content: space-between;
			text {
				&:first-child {
					font-size: 28rpx;
					font-weight: bold;
				}
				&:last-child {
					color: #666;
					font-size: 28rpx;
				}
			}
		}
		.info {
			padding-bottom: 24rpx;
			margin-bottom: 24rpx;
			border-bottom: solid 2rpx #eee;
			text {
				display: block;
				margin-bottom: 16rpx;
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		.order {
			text {
				display: block;
				&:first-child {
					margin-bottom: 16rpx;
				}
			}
		}
		.personal-order-search {
			width: calc(100% - 64rpx);
			margin: 32rpx;
		}
	}
</style>

<template>
	<!-- 积分提现记录 -->
	<view class="t-hairdres-user-transaction-record">
		<Card>
			<view v-for="(item,index) in 20" :key="item" class="lits-item">
				<text class="iconfont">&#xe6a4;</text>
				<view class="center">
					<text>积分提现</text>
					<text>提现至微信零钱，金额：¥ 200.00</text>
					<text>2021-03-22 18:26:35</text>
				</view>
				<text class="price">¥ 200.00</text>
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	export default {
		components: {
			Card
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-transaction-record {
		.lits-item {
			 padding-bottom: 24rpx;
			 margin-bottom: 24rpx;
			 border-bottom: solid 2rpx #eee;
			 font-size: 24rpx;
			 display: flex;
			 justify-content: space-between;
			 align-items: center;
			 .iconfont {
				 color: #fc689a;
				 font-size: 40rpx;
				 margin-right: 24rpx;
			 }
			 .price {
				 font-size: 28rpx;
				 font-weight: bold;
				 color: #ff0000;
			 }
			 .center {
				 flex: 1;
				 text {
					 display: block;
					 line-height: 1.6;
					 color: #666;
					 &:first-child {
						 font-weight: bold;
						 color: #000;
					 }
				 }
			 }
		}
	}
</style>

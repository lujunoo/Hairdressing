<template>
	<!-- 交易记录 -->
	<view class="t-hairdres-user-transaction-record">
		<TabBar @onClick="getActive" isFlex background="rgba(0,0,0,0)" :tabList="tabList" />
		<Card>
			<view v-for="(item,index) in 20" :key="item" class="lits-item">
				<text class="iconfont">&#xe605;</text>
				<view class="center">
					<text>{{tabList[active]}}</text>
					<text v-if="active !== 1">购买施华蔻烫染直3选1*1</text>
					<text>2021-03-22 18:26:35</text>
				</view>
				<text class="price">-¥28</text>
			</view>
		</Card>
	</view>
</template>

<script>
	import TabBar from '@/components/TabBar'
	import Card from '@/components/Card'
	export default {
		components: {
			TabBar,
			Card
		},
		data () {
			return {
				tabList: ['消费记录', '充值记录', '提现记录'],
				active:0,
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

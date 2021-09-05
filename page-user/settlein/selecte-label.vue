<template>
	<!-- 选择头衔 -->
	<view class="t-hairdres-user-selecte-label">
		<Card>
			<text :class="{active: active === index}" @click="active = index" class="label" v-for="(item,index) in 20" :key="index">发型师助理</text>
			<text class="add">+添加</text>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	export default {
		components: {
			Card
		},
		data () {
			return {
				active: 0
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-selecte-label {
		.add {
			font-size: 24rpx;
			color: #fc689a;
			line-height: 50rpx;
			display: block;
			width: 98rpx;
			height: 50rpx;
			border-radius: 10rpx;
			text-align: center;
			border: solid 1px #fc689a;
		}
		.label {
			padding: 16rpx 24rpx;
			display: inline-block;
			border-radius: 10rpx;
			font-size: 24rpx;
			line-height: 1;
			color: #555;
			background: #e5e5e5;
			margin-right: 16rpx;
			margin-bottom: 16rpx;
		}
		.active {
			background:#fc689a ;
			color: #FFFFFF;
		}
	}
</style>

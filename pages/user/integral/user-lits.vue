<template>
	<!-- 积分收益成员 -->
	<view class="t-hairdres-user-integral-user-list">
		<TabBar background="rgba(0,0,0,0)" isFlex :tabList="tabList"/>
		<Card>
			<view v-for="(item,index) in 6" :key="index" class="list-item">
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				<text>呢称呢称</text>
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import TabBar from '@/components/TabBar'
	export default {
		components: {
			Card,
			TabBar
		},
		data () {
			return {
				tabList:['直接成员（28）','间接成员（6）'],
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-integral-user-list {
		.list-item {
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			display: flex;
			align-items: center;
			&:last-child {
				margin-bottom: 0;
				border: none;
				padding-bottom: 0;
			}
			image {
				width: 60rpx;
				height: 60rpx;
				margin-right: 32rpx;
				border-radius: 100rpx;
			}
			text {
				font-weight: bold;
				font-size: 28rpx;
			}
		}
	}
</style>

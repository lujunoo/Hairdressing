<template>
	<!-- 顾客档案 -->
	<view class="t-hairdres-user-customer-profile">
		<!-- 搜索 -->
		<view class="customer-profile-search">
			<Search/>
			<text @click="createData" class="button">+添加</text>
		</view>
		<Card>
			<view @click="createData" v-for="(item,index) in 10" :key="index" class="list-item">
				<view class="left">
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
					<view class="name">
						<text>王小二</text>
						<text>学生/消费：5次</text>
					</view>
				</view>
				<view class="right">
					<text>2021-05-31</text>
					<text>查看</text>
				</view>
			</view>
		</Card>
	</view>
</template>

<script>
	import Search from '@/components/Search'
	import Card from '@/components/Card'
	export default {
		components: {
			Search,
			Card
		},
		data() {
			return {
				
			}
		},
		methods: {
			createData () {
				uni.navigateTo({
					url:'./add-customer-profile'
				})
			}
		}
	}
</script>

<style scoped lang="less">
.t-hairdres-user-customer-profile {
	.list-item {
		margin-bottom: 32rpx;
		padding-bottom: 32rpx;
		border-bottom: solid 2rpx #eee;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
		.right {
			text-align: right;
			text {
				display: block;
				&:last-child {
					color: #fc689a;
				}
			}
		}
		.left {
			display: flex;
			align-items: center;
			image {
				width: 60rpx;
				height: 60rpx;
				border-radius: 100rpx;
			}
			.name {
				margin-left: 24rpx;
				text {
					display: block;
					&:first-child {
						font-weight: bold;
					}
				}
			}
		}
	}
	.customer-profile-search {
		padding: 32rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.button {
			width: 150rpx;
			font-size: 24rpx;
			display: block;
			line-height: 1;
			margin-left: 190rpx;
			padding: 16rpx 40rpx;
			border-radius: 20rpx;
			border: solid 2rpx #fc689a;
			color: #fc689a;
		}
	}
}
</style>

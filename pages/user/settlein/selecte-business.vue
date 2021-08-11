<template>
	<!-- 选择入驻商家 -->
	<view class="t-hairdres-user-selecte-business">
		<Search class="search-box"/>
		<Card>
			<view v-for="(item,index) in 10" :key="index" class="list-item">
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				<view class="content">
					<text>养发堂（汇川店）</text>
					<text>地址：重庆市江北区建新北路38号附100号</text>
				</view>
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Search from '@/components/Search'
	export default {
		components: {
			Card,
			Search
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-selecte-business {
		.list-item {
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			display: flex;
			align-items: center;
			&:last-child {
				margin-bottom: 0;
				padding-bottom: 16rpx;
				border: none;
			}
			image {
				display: block;
				width: 70rpx;
				height: 70rpx;
				border-radius: 10rpx;
			}
			.content {
				font-size: 24rpx;
				flex: 1;
				min-height: 65rpx;
				display: flex;
				line-height: 1;
				margin-left: 24rpx;
				justify-content: space-between;
				flex-direction: column;
				text {
					&:first-child {
						font-weight: bold;
					}
				}
			}
		}
		.search-box {
			width: calc(100% - 64rpx);
			margin: 32rpx;
		}
	}
</style>

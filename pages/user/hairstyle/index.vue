<template>
	<!-- 我的发型 -->
	<view class="t-hairdres-user-hairstyle">
		<TabBar @onClick="getAcitve" background="rgba(0,0,0,0)" isFlex :tabList="tabList" />
		<Card v-if="active === 0">
			<view v-for="(item,index) in 10" :key="index" class="list-item">
				<text class="time">2021-5-30  13:23:45</text>
				<text>发型记录发型记录发型记录发型记录发型记录发型记录发型记录发型记录发型记录。</text>
				<view class="images">
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				</view>
				<view class="button-group">
					<text>删除</text>
					<text @click="addData">修改</text>
				</view>
			</view>
		</Card>
		<Card class="image-list" v-if="active === 1 || active === 2">
			<image class="image-item" v-for="(item,index) in 10" :key="index" src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
		</Card>
		<fixedFooter hideLeft>
			<view slot="right" class="add-card-data">
				<text @click="addData" ><text v-if="active === 0" class="iconfont">&#xe621;</text>{{active === 0 ? '添加发型记录' : '上传照片'}}</text>
			</view>
		</fixedFooter>
	</view>
</template>

<script>
	import TabBar from '@/components/TabBar'
	import Card from '@/components/Card'
	import fixedFooter from '@/components/fixedFooter'
	export default {
		components: {
			TabBar,
			Card,
			fixedFooter
		},
		data () {
			return {
				tabList:['日常发型记录','我喜欢的','我不喜欢的'],
				active:0
			}
		},
		methods: {
			getAcitve (index) {
				this.active = index
			},
			addData () {
				uni.navigateTo({
					url:'./creatdate'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-hairstyle {
		padding-bottom: 100rpx;
		.image-list {
			display: flex;
			flex-wrap: wrap;
			padding: 24rpx 8rpx 24rpx 16rpx;
			.image-item {
				display: block;
				width: calc(50% - 24rpx);
				height: 360rpx;
				border-radius: 15rpx;
				margin: 10rpx;
			}
		}
		.add-card-data {
			width: 686rpx;
			display: flex;
			padding: 0 32rpx;
			text {
				flex: 1;
				height: 70rpx;
				border-radius: 50rpx;
				background: #fc689a;
				text-align: center;
				line-height: 70rpx;
				color: #FFFFFF;
				margin: 0 60rpx;
				.iconfont {
					margin: 10rpx;
				}
			}
		}
		.list-item {
			font-size: 24rpx;
			display: block;
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			&:last-child {
				margin-bottom: 0;
				border: none;
			}
			.button-group {
				text-align:right;
				text {
					color: #ffb1b1;
					border: solid 2rpx #ffb1b1;
					display: inline-block;
					line-height: 1;
					border-radius: 10rpx;
					margin-left: 24rpx;
					padding: 16rpx 40rpx;
					&:last-child {
						background-color: #ef4a51;
						border-color: #ef4a51;
						color: #fff;
					}
				}
			}
			.time {
				display: block;
				text-align: right;
				margin-bottom: 24rpx;
			}
			.images {
				display: flex;
				margin: 24rpx -12rpx;
				justify-content: space-between;
				image {
					border-radius: 10rpx;
					width: 100%;
					height: 200rpx;
					margin: 0 12rpx;
					display: block;
				}
			}
		}
	}
</style>

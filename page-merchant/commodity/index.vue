<template>
	<!-- 商品管理 -->
	<view class="t-hairdres-merchant-commodity">
		<view class="commodity-header">
			<view class="search-box">
				<Search class="search-input"/>
				<view @click="createData" class="button">
					<text class="iconfont">&#xe621;</text>
					<text>添加商品</text>
				</view>
			</view>
			<TabBar isFlex :tabList="tabList"></TabBar>
			<view class="header-label">
				<text @click="active = 0" :class="{ active: active === 0}">全部</text>
				<text @click="active = 1" :class="{ active: active === 1}">待确认</text>
				<text @click="active = 2" :class="{ active: active === 2}">审核不通过</text>
				<text @click="active = 3" :class="{ active: active === 3}">审核中</text>
				<text @click="active = 4" :class="{ active: active === 4}">审核通过</text>
			</view>
		</view>
		<Card v-for="(item,index) in 10" :key='index'>
			<view class="list-item">
				<view class="title">
					<text class="color-red">已上架</text>
					<text class="color-yellow">审核通过</text>
				</view>
				<view class="content">
					<image src="https://cdn.pixabay.com/photo/2021/06/06/12/23/landscape-6315249_960_720.jpg" mode="aspectFill"></image>
					<view class="right">
						<text>商品名称商品名称</text>
						<text class="color-red">¥ 185.00</text>
						<text>
							<text class="price">门店售价 ¥ 297.00</text>
							<text>销量：12</text>
						</text>
						<text>上架时间：2021-5-23</text>
					</view>
				</view>
				<view class="button-group">
					<text @click="history">历史操作记录</text>
					<text @click="offShelf">下架商品</text>
					<text @click="editData">编辑</text>
				</view>
			</view>
		</Card>
		<Dialog ref="Dialog1" okText="确定下架" desc="本次下架前已售出待验券订单不受下架影响，请按原有内容接待！"></Dialog>
		<Dialog ref="Dialog2" desc="本次编辑前已售出待验券订单不受变更影响，请按原有内容接待！"></Dialog>
		<Dialog ref="history" maskClose hideFooter title="历史操作记录">
			<view slot="body" class="history-body">
				<view v-for="(item,index) in 30" :key="index" class="dialog-item">
					<text>审核通过</text>
					<text>2021-03-25 11:25:36</text>
				</view>
			</view>
		</Dialog>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Search from '@/components/Search'
	import TabBar from '@/components/TabBar'
	import Dialog from '@/components/Dialog'
	export default {
		components: {
			Card,
			Search,
			TabBar,
			Dialog
		},
		data () {
			return {
				active: 0,
				tabList: ['全部','已上架(34)','未上架(34)','已下架(34)']
			}
		},
		methods: {
			offShelf () {
				this.$refs.Dialog1.show()
			},
			editData () {
				this.$refs.Dialog2.show()
			},
			history () {
				this.$refs.history.show()
			},
			createData () {
				uni.navigateTo({
					url:'./add-commodity'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-commodity {
		font-size: 24rpx;
		line-height: 1;
		.history-body {
			padding: 32rpx;
			.dialog-item {
				color: #666;
				margin-bottom: 32rpx;
				text {
					display: block;
					padding-left: 24rpx;
					&:first-child {
						margin-bottom: 16rpx;
						position: relative;
						&::after {
							content: "";
							width: 10rpx;
							height: 10rpx;
							border-radius: 10rpx;
							background: #fc6968;
							position: absolute;
							top: 10rpx;
							left: 0;
						}
					}
				}
			}
		}
		.list-item {
			.title {
				padding-bottom: 32rpx;
				margin-bottom: 32rpx;
				border-bottom: solid 2rpx #eee;
				text {
					font-size: 28rpx;
					margin-right: 60rpx;
				}
			}
			.content {
				display: flex;
				image {
					width: 200rpx;
					height: 140rpx;
					background-color: #a4224d;
					border-radius: 10rpx;
				}
				.right {
					flex: 1;
					margin-left: 32rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					color: #666666;
					>text {
						&:first-child {
							font-weight: bold;
						}
						.price {
							margin-right: 32rpx;
						}
					}
				}
			}
			.button-group {
				display: flex;
				justify-content: space-between;
				margin-top: 32rpx;
				
				text {
					color: #fc6968;
					border: solid 2rpx #fc6968;
					border-radius: 20rpx;
					padding: 12rpx 36rpx;
					opacity: 0.6;
					&:last-child {
						opacity: 1;
					}
				}
			}
		}
		.commodity-header {
			background: #fff;
			padding: 32rpx;
		}
		.header-label {
			margin-top: 32rpx;
			text {
				display: inline-block;
				color: #666666;
				border: solid 2rpx #666666;
				border-radius: 100rpx;
				padding: 6rpx 16rpx;
				margin-right: 16rpx;
			}
			.active {
				background: #fc689a;
				border: solid 2rpx #fc689a;
				color: #fff;
			}
		}
		.search-box {
			display: flex;
			.search-input {
				flex: 1;
			}
			.button {
				width: 150rpx;
				text-align: center;
				color: #fc6968;
				height: 56rpx;
				line-height: 56rpx;
				border: solid 4rpx #fc6968;
				border-radius: 20rpx;
				margin-left: 180rpx;
			}
		}
	}
</style>

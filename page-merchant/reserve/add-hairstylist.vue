<template>
	<!-- 添加可以预约发型师 -->
	<view class="t-hairdres-merchant-reserve-add-hairstylist">
		<Card>
			<view class="title">
				选择发型师
			</view>
			<view class="hairstylist-list">
				<view @click="addUser(index)" :class="{active: hairstylist.indexOf(index) !==-1}" v-for="(item,index) in 8" :key="index" class="item">
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
					<text>曹兵</text>
				</view>
			</view>
		</Card>
		<Card>
			<view class="title">
				选择可预约项目（可多选）
			</view>
			<view class="project-list">
				<view @click="selectItem(item)" v-for="(item,index) in 10" :key="index" class="list-item" >
					<text v-if="activeList.indexOf(item) !== -1" class="iconfont">&#xe692;</text>
					<text v-else class="iconfont iconfont2">&#xe63a;</text>
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
					<view class="content">
						<view class="info">
							<text class="subtitle">施华蔻烫染直3选1施华蔻烫染直3选1施华蔻烫染直3选1</text>
						</view>
						<view class="info">
							<text class="color-theme">￥1000<text class="oldprice">￥1000</text></text>
							<text>已售<text class="color-yellow">800</text></text>
						</view>
					</view>
				</view>
			</view>
		</Card>
		<fixedFooter hideLeft>
			<view  @click="toCreate" slot='right' class="t-hairdres-button">
				确定添加
			</view>
		</fixedFooter>
	</view>
</template>

<script>
	import fixedFooter from '@/components/fixedFooter'
	import Card from '@/components/Card'
	export default {
		components: {
			Card,
			fixedFooter
		},
		data () {
			return {
				hairstylist:[0],
				activeList:[0]
			}
		},
		methods: {
			addUser (index) {
				if (this.hairstylist.indexOf(index) !== -1) {
					this.hairstylist.splice(this.hairstylist.indexOf(index), 1)
				} else {
					this.hairstylist.push(index)
				}
			},
			selectItem (item) {
				if (this.activeList.indexOf(item) === -1) {
					this.activeList.push(item)
				} else {
					this.activeList.splice(this.activeList.indexOf(item), 1)
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-reserve-add-hairstylist {
		font-size: 24rpx;
		padding-bottom: 100rpx;
		.title {
			font-size: 28rpx;
			font-weight: bold;
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
		}
		.t-hairdres-button {
			width: 580rpx;
		}
		.hairstylist-list {
			display: flex;
			flex-wrap: wrap;
			margin: 0 -8rpx;
			.item {
				width: calc(33% - 39rpx);
				margin: 8rpx;
				height: 250rpx;
				padding: 10rpx;
				border-radius: 10rpx;
				border: solid 6rpx #bfbfbf;
				overflow: hidden;
				margin-bottom: 24rpx;
				text-align: center;
				text {
					margin-top: 18rpx;
					display: block;
				}
				
				image {
					border-radius: 10rpx;
					width: 100%;
					height: 190rpx;
					display: block;
				}
			}
			.active {
				border-color: #fc689a;
				text {
					color: #fc689a;
				}
			}
		}
		.project-list {
			.list-item {
				display: flex;
				justify-content: space-between;
				position: relative;
				align-items: center;
				margin-bottom: 24rpx;
				padding-bottom: 24rpx;
				border-bottom: solid 2rpx #eee;
				&:last-child {
					margin-bottom: 0;
					border: none;
				}
				.iconfont {
					color: #fc689a;
					font-size: 40rpx;
				}
				.iconfont2 {
					color: #aaa;
					transform: scale(1.08);
				}
				image {
					width: 170rpx;
					height: 120rpx;
					background-color: #f00055;
					border-radius: 10rpx;
					margin-right: 24rpx;
					margin-left: 16rpx;
				}
				.content {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					font-size: 24rpx;
					min-height: 120rpx;
					
					.info {
						display: flex;
						justify-content: space-between;
						color: #666;
						.subtitle {
							max-width: 375rpx;
							color: #333333;
							font-size: 28rpx;
							text-overflow: ellipsis;
							white-space: nowrap;
							overflow: hidden;
						}
						.color-theme {
							font-size: 28rpx;
							text {
								margin-left: 16rpx;
								font-size: 24rpx;
							}
						}
					}
				}
			}
		}
	}
</style>

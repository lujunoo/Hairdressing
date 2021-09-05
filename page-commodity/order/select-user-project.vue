<template>
	<!-- 根据发型师-选择项目 -->
	<view class="t-hairdres-select-user-project">
		<view class="select-user-search">
			<Search/>
			<view class="desc">
				请选择您预约要做的项目，以下是该发型师可预约的项目，可多选
			</view>
		</view>
		<Card class="select-user-item" v-for="(item,index) in 10" :key="index" >
			<view @click="selectItem(item)" class="list-item" >
				<text v-if="activeList.indexOf(item) !== -1" class="iconfont">&#xe692;</text>
				<text v-else class="iconfont iconfont2">&#xe63a;</text>
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				<view class="content">
					<view class="info">
						<text class="title">施华蔻烫染直3选1施华蔻烫染直3选1施华蔻烫染直3选1</text>
					</view>
					<view class="info">
						<text class="color-theme">￥1000<text class="oldprice">￥1000</text></text>
						<text>已售<text class="color-yellow">800</text></text>
					</view>
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
			Card,
			Search
		},
		data () {
			return {
				activeList:[]
			}
		},
		methods: {
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
	.t-hairdres-select-user-project {
		.select-user-search {
			padding: 32rpx;
			background: #FFFFFF;
			
			.desc {
				padding: 32rpx 16rpx 0 16rpx;
				color: #555555;
				font-size: 24rpx;
			}
		}
		.select-user-item {
			.list-item {
				display: flex;
				justify-content: space-between;
				position: relative;
				align-items: center;
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
						.title {
							color: #333333;
							font-size: 28rpx;
							line-height: 1.3;
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

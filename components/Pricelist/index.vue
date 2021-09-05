<template>
	<!-- 价目表 -->
	<view class="t-hairdres-pricelist">
		<Card>
			<Title class="card-title" title="价目表"/>
			<TabBar isFlex :tabList="tabList" />
			<view @click="toDetail(item)" v-for="(item,index) in getLength" :key="index" class="list-item">
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="scaleToFill"></image>
				<view class="desc">
					<view class="title">【时尚烫染】施华蔻烫染直3选1【时尚烫染】施华蔻烫染直3选1</view>
					<view class="count">
						<text class="price">
							<text class="color-theme">¥185.00</text>
							<text>¥185.00</text>
						</text>
						<text>
							<text>已售</text>
							<text class="color-yellow">25</text>
						</text>
					</view>
					<view class="button">
						<text>新客立减25元</text>
						<text class="btn">下单</text>
					</view>
				</view>
			</view>
			<view v-if="datalist.length > 3" @click="isOpen = !isOpen" class="more">
				<text>{{isOpen ? '收起' : `更多${datalist.length - 3}个优惠`}}</text>
				<text :class="{active: isOpen}" class="iconfont">&#xe63d;</text>
			</view>
		</Card>
	</view>
</template>

<script>
	import Title from '@/components/Title'
	import Card from '@/components/Card'
	import TabBar from '@/components/TabBar'
	export default {
		props: {
			datalist:{
				type: Array,
				default:() => {
					return [1,2,3,4]
				}
			}
		},
		components: {
			Title,
			Card,
			TabBar
		},
		computed: {
			getLength(){
				if (this.isOpen) {
					return this.datalist.length
				} else {
					if (this.datalist.length > 3) {
							return 3
					} else {
						return datalist.length
					}
				}
			}
		},
		data () {
			return {
				isOpen: false, //是否展开菜单
				tabList:['热售', '洗吹', '烫发', '染发', '剪发']
			}
		},
		methods: {
			toDetail (item) {
				uni.navigateTo({
					url:'../../../leaderboard-detail-package',
					complete: (res) => {
						console.log(res)
					}
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-pricelist {
		.card-title {
			margin-top: -32rpx;
			margin-bottom: -16rpx;
		}
		.more {
			margin-top: 32rpx;
			color: #999999;
			font-size: 24rpx;
			text-align: center;
			
			.iconfont {
				margin-left: 16rpx;
				transition: 0.3s;
				transform: rotate(0deg);
				display: inline-block;
			}
			
			.active {
				transition: 0.3s;
				transform: rotate(180deg);
			}
		}
		
		.list-item {
			padding:32rpx 0;
			border-bottom: solid 2rpx #eee;
			display: flex;
			justify-content: space-between;
			
			&:last-child {
				border: none;
				padding-bottom: 0;
			}
			
			image {
				display: block;
				width: 200rpx;
				height: 140rpx;
				border-radius: 10rpx;
				margin-right: 24rpx;
			}
			.desc {
				flex: 1;
				max-width: 420rpx;
				display: flex;
				justify-content: space-between;
				flex-direction: column;
				
				.button {
					display: flex;
					justify-content: space-between;
					font-size: 24rpx;
					color: #FFFFFF;
					align-items: center;
					
					text {
						padding: 6rpx 8rpx;
						line-height: 1;
						background: #ffb400;
						border-radius: 6rpx;
					}
					.btn {
						background: #fc6868;
						padding: 12rpx 16rpx;
					}
				}
				
				.count {
					font-size: 24rpx;
					display: flex;
					justify-content: space-between;
					
					.price {
						.color-theme {
							font-size: 28rpx;
							font-weight: bold;
						}
						text {
							&:last-child {
								color: #999999;
								margin-left: 32rpx;
								position: relative;
								
								&::after {
									content: '';
									width: 100%;
									height: 2rpx;
									background: #999999;
									position:absolute;
									top: 48%;
									left: 0;
								}
							}
						}
					}
				}
				
				.title {
					width: 100%;
					font-size: 28rpx;
					display: block;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
	}
</style>

<template>
	<!-- 价目表 -->
	<view class="t-hairdres-user-personal-price-list">
		<TabBar isFlex :tabList="tabList" />
		<Card v-for="(item,index) in 4" :key="index">
			<view class="list-item">
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
						<text class="iconfont">&#xe606;</text>
					</view>
				</view>
			</view>
		</Card>
		<fixedFooter hideLeft>
			<view @click="toDetail" slot="right" class="t-hairdres-button">
				<text class="iconfont">&#xe621;</text>
				<text>添加项目</text>
			</view>
		</fixedFooter>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import TabBar from '@/components/TabBar'
	import fixedFooter from '@/components/fixedFooter'
	export default {
		components: {
			Card,
			TabBar,
			fixedFooter
		},
		data () {
			return {
				tabList: ['洗吹', '烫发', '染发', '剪发', '养护']
			}
		},
		methods: {
			toDetail () {
				uni.navigateTo({
					url: '../../commodity/order/select-user-project'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-personal-price-list {
		padding-bottom: 100rpx;
		.t-hairdres-button {
			width: 480rpx;
		}
		.list-item {
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
					.iconfont {
						font-size: 32rpx;
						color: #fc6868;
						background: none;
					}
					
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

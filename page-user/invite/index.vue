<template>
	<!-- 邀请新人 -->
	<view class="t-hairdres-user-invite">
		<Card class="user-invite-card">
			<image class="logo" src="@/static/images/user-bg.png" mode="widthFix"></image>
			<text class="tipc">您的邀请码</text>
			<text class="number" >KWX998 <text class="color-red">复制</text></text>
			<view class="code">
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
			</view>
			<view class="button-group">
				<text @click="showCard">发型师名片</text>
				<text>分享给好友</text>
			</view>
			<text class="desc">本活动规则及解释权在中国法律允许最大范围内归本平台所有归本平台所有</text>
		</Card>
		<!-- 生成名片 -->
		<Dialog maskClose hideHeader hideFooter ref="Dialog">
			<view slot='body' class="hairstylistDialog">
				<Banner height="240" :images="bannerList"/>
				<view class="list-item">
					<text class="name">曹兵</text>
				</view>
				<view class="list-item">
					<text>创始人</text>
				</view>
				<view class="list-item">
					<text>从业16年</text>
					<text>入驻：1年</text>
				</view>
				<view class="list-item">
					<text>评分<text class="color-theme">5.0</text>分</text>
					<text>好评：<text class="color-yellow">1000次</text></text>
				</view>
				<view class="list-item">
					<text>服务人次<text class="color-red">985</text></text>
					<text>回头客<text class="color-purple">800</text></text>
				</view>
				<view class="list-item">
					<view><text class="name">擅长：</text>剪发、染发、烫发、护理</view>
				</view>
				<view class="list-item">
					<view><text class="name">简介：</text>发型师个人简介发型师个人简介发型师个人简介</view>
				</view>
				<view class="list-item">
					<view class="user-price">
						<text>洗吹：<text class="color-theme">268元</text></text>
						<text>曹兵烫发：<text class="color-theme">368元</text></text>
						<text>曹兵烫发+染发：<text class="color-theme">668元</text></text>
					</view>
					<view class="code">
						<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
						<text>扫码注册下载</text>
					</view>
				</view>
				<view class="list-item">
					<view class="shopInfo">
						<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
						<view>
							<text>养发堂</text>
							<text>地址：重庆市江北区建新北路38号附100号</text>
						</view>
					</view>
				</view>
			</view>
		</Dialog>
	</view>
</template>

<script>
	import Dialog from '@/components/Dialog'
	import Banner from '@/components/Banner'
	import Card from '@/components/Card'
	export default {
		components: {
			Card,
			Dialog,
			Banner
		},
		data () {
			return {
				bannerList: [
					'https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg'
				],
			}
		},
		methods: {
			showCard () {
				this.$refs.Dialog.show()
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-invite {
		height: 1094rpx;
		.hairstylistDialog {
			width: 524rpx;
			.list-item {
				font-size: 24rpx;
				display: flex;
				justify-content: space-between;
				padding: 24rpx 32rpx 0 32rpx;
				.shopInfo {
					display: flex;
					align-items: center;
					margin-bottom: 32rpx;
					image {
						display: block;
						width: 50rpx;
						height: 50rpx;
						background-color: #fc689a;
						border-radius: 10rpx;
					}
					view {
						flex: 1;
						margin-left: 16rpx;
						text {
							font-size: 18rpx;
							display: block;
							
							&:first-child {
								font-size: 24rpx;
								font-weight: bold;
							}
						}
					}
				}
				.code {
					width: 135rpx;
					height: 135rpx;
					image {
						display: block;
						width: 100%;
						height: 100%;
						margin-bottom: 8rpx;
					}
					text {
						display: block;
						text-align: center;
						font-size: 18rpx;
						color: #666666;
					}
				}
				.user-price {
					flex: 1;
					display: flex;
					flex-direction: column;
					text {
						margin-bottom: 16rpx;
					}
				}
				.name {
					font-weight: bold;
					font-size: 28rpx;
				}
			}
		}
		
		.desc {
			font-size: 28rpx;
			display: block;
			margin-top: 88rpx;
		}
		.button-group {
			display: flex;
			justify-content: space-evenly;
			margin-top: 40rpx;
			text {
				padding: 24rpx 40rpx;
				line-height: 1;
				color: #ff7ae7;
				background: #FFFFFF;
				border-radius: 50rpx;
				display: block;
				&:last-child {
					color: #ff8839;
				}
			}
		}
		.user-invite-card {
			height: 100%;
			background-image: linear-gradient(0deg, #ff7ae7 0%, #ff8eb4 100%);
			padding: 60rpx;
			font-size: 24rpx;
			text-align: center;
			color: #fff;
			.code {
				background-color: #ffffff;
				border-radius: 10rpx;
				padding: 24rpx;
				margin: 32rpx auto;
				display: inline-block;
				image {
					width: 200rpx;
					height: 200rpx;
					display: block;
				}
			}
			.logo {
				width: 100%;
				height: 100%;
				display: block;
			}
			.tipc {
				display: block;
				margin-top: 32rpx;
			}
			.number {
				display: block;
				margin-top: 32rpx;
			}
		}
	}
</style>

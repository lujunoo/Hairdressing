<template>
	<!-- 发型师管理 -->
	<view class="t-hairdres-merchant-user-management">
		<TabBar @onClick="getActive" isFlex background="rgba(0,0,0,0)" :tabList="tabList" />
		<Card v-for="(item,index) in 10" :key="index" class="user-lits-item">
			<view @click="toDetail" class="content">
				<image src="https://cdn.pixabay.com/photo/2021/08/01/12/58/beach-6514331_960_720.jpg" mode="aspectFill">
				</image>
				<view class="right">
					<view class="title">
						<text>发型师名字</text>
						<text class="color-red">{{getStatus}}</text>
					</view>
					<text>职位：设计总监</text>
					<text>手机号码：188 8888 8888</text>
				</view>
			</view>
			<view class="btn-group">
				<text class="delete">删除</text>
				<text v-if="active === 0">修改</text>
				<text v-if="active === 1">通过</text>
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
		data() {
			return {
				active: 0,
				tabList: ['审核通过(234)', '待审核(23)', '审核不通过(3245)']
			}
		},
		computed: {
			getStatus() {
				switch (this.active) {
					case 0:
						return '审核通过'
						break;
					case 1:
						return '待审核'
						break;
					case 2:
						return '审核不通过'
						break;
					default:
						break;
				}
			}
		},
		methods: {
			getActive(index) {
				this.active = index
			},
			toDetail () {
				uni.navigateTo({
					url:'../../user/settlein/hairstylist'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-user-management {
		font-size: 24rpx;

		.user-lits-item {
			.btn-group {
				display: flex;
				justify-content: flex-end;

				text {
					color: #ff4e4e;
					border: solid 2rpx #ff4e4e;
					margin-left: 24rpx;
					line-height: 1;
					display: block;
					border-radius: 20rpx;
					padding: 12rpx 24rpx;

					&:first-child {
						opacity: 0.5;
					}
				}
			}

			.content {
				display: flex;
				align-items: center;
				margin-bottom: 32rpx;

				image {
					width: 150rpx;
					height: 150rpx;
					border-radius: 10rpx;
					margin-right: 24rpx;
				}

				.right {
					height: 150rpx;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.title {
						display: flex;
						justify-content: space-between;
						align-items: center;

						text {
							&:first-child {
								font-size: 28rpx;
								font-weight: bold;
							}
						}
					}
				}
			}
		}
	}
</style>

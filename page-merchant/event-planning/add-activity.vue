<template>
	<!-- 添加活动 -->
	<view class="t-hairdres-merchant-add-activity">
		<Card>
			<view class="desc">
				<text>请选择商品参与活动</text>
				请选择一款商品参与本次活动
			</view>
			<view @click="setActive(index)" v-for="(item,index) in 10" :key="index" class="list-item">
				<image src="https://cdn.pixabay.com/photo/2021/08/01/12/58/beach-6514331_960_720.jpg" mode="aspectFill"></image>
				<view class="content">
					<text>施华蔻烫染【时尚烫染】施华蔻烫染直施华蔻烫染直3选1</text>
					<text class="color-theme" >¥185.00 <text class="oldprice">¥185.00</text></text>
				</view>
				<text v-if="active.indexOf(index) !== -1" class="iconfont iconfont2 checked">&#xe622;</text>
				<text v-else class="iconfont checked">&#xe618;</text>
			</view>
		</Card>
		<fixedFooter hideLeft >
			<view slot="right" class="button-group">
				<text @click="back">取消</text>
				<text @click="toStep" >下一步</text>
			</view>
		</fixedFooter>
		<!-- 实名认证 -->
		<Dialog ref="dialog" desc="当前选择的商品正在参与立减优惠，如需发布该商品的新立减活动，请结束该商品参与的活动后重新发布！！"></Dialog>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import fixedFooter from '@/components/fixedFooter'
	import Dialog from '@/components/Dialog'
	export default {
		components: {
			Card,
			fixedFooter,
			Dialog
		},
		data () {
			return {
				active:[0]
			}
		},
		methods: {
			setActive (index) {
				if (this.active.includes(index)) {
					this.active.splice(this.active.indexOf(index), 1)
				} else {
					this.$refs.dialog.show()
					this.active.push(index)
				}
			},
			toStep () {
				uni.navigateTo({
					url:'./setoffer'
				})
			},
			back (){
				uni.navigateBack()
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-add-activity {
		padding-bottom: 100rpx;
		font-size: 24rpx;
		.list-item {
			display: flex;
			align-items: center;
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			&:last-child {
				border: none;
				margin-bottom: 0;
				padding-bottom: 0;
			}
			.content {
				min-height: 120rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				
				.color-theme {
					display: inline-block;
					font-size: 28rpx;
					font-weight: bold;
					.oldprice {
						font-weight: 500;
						margin-left: 32rpx;
					}
				}
			}
			.checked {
				font-size: 40rpx;
				margin-left: 24rpx;
				display: block;
				color: #888;
				width: 40rpx;
				height: 40rpx;
			}
			.iconfont2 {
				transform: scale(0.9);
				color: #fc689a;
			}
			image {
				width: 170rpx;
				height: 120rpx;
				border-radius: 10rpx;
				margin-right: 32rpx;
			}
		}
		.desc {
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			
			text {
				font-size: 28rpx;
				font-weight: bold;
				display: block;
				margin-bottom: 24rpx;
			}
		}
		.button-group {
			width: 750rpx;
			text-align: right;
			text {
				display: inline-block;
				width: 180rpx;
				height: 60rpx;
				background-color: #fc689a;
				color: #fff;
				margin: 0 32rpx;
				line-height: 60rpx;
				text-align: center;
				border-radius: 50rpx;
				&:first-child {
					background: #ffc5c5;
				}
			}
		}
	}
</style>

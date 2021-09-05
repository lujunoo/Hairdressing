<template>
	<!-- 添加客户档案 -->
	<view class="t-hairdres-user-add-customer-profile">
		<Card>
			<view class="form--item">
				<text class="label">用户头像</text>
				<view class="right">
					<text class="grap">上传顾客头像</text>
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				</view>
			</view>
			<view class="form--item">
				<text class="label">姓名</text>
				<view class="right">
					<input type="text" placeholder="请填写顾客姓名" value="" />
				</view>
			</view>
			<view class="form--item">
				<text class="label">性别	</text>
				<view class="right">
					<text class="grap">请选择您的性别</text>
					<text @click="toLabel" >请选择<text class="iconfont">&#xe64c;</text></text>
				</view>
			</view>
			<view class="form--item">
				<text class="label">生日	</text>
				<view class="right">
					<text class="grap">请选择您的生日</text>
					<text @click="toLabel" >请选择<text class="iconfont">&#xe64c;</text></text>
				</view>
			</view>
			<view class="form--item">
				<text class="label">职业</text>
				<view class="right">
					<input type="text" placeholder="请填写顾客职业" value="" />
				</view>
			</view>
			<view class="form--item">
				<text class="label">城市</text>
				<view class="right">
					<input type="text" placeholder="请填写顾客所在城市" value="" />
				</view>
			</view>
			<view class="form--item">
				<text class="label">爱好</text>
				<view class="right">
					<input type="text" placeholder="请填写顾客爱好" value="" />
				</view>
			</view>
			<view class="form--item">
				<text class="label">微信号</text>
				<view class="right">
					<input type="text" placeholder="请填写顾客微信号" value="" />
				</view>
			</view>
			<view class="form--item">
				<text class="label">手机号</text>
				<view class="right">
					<input type="text" placeholder="请填写顾客手机号" value="" />
				</view>
			</view>
		</Card>
		<Card>
			<view class="title">基本信息</view>
			<view class="form--item">
				<text class="label">标签</text>
				<view class="right">
					<input type="text" placeholder="标签之间用英文逗号隔开" value="" />
				</view>
			</view>
			<textarea value="" placeholder="备注" />
		</Card>
		<Card>
			<view class="title">喜欢的发型</view>
			<Upload style="margin-bottom: 32rpx;" />
			<view class="title">不喜欢的发型</view>
			<Upload/>
		</Card>
		<!-- 消费记录 -->
		<Card>
			<view class="title title2">
				<text>消费记录</text>
				<text @click="toRecode" >添加</text>
			</view>
			<view v-for="(item,index) in 3" :key="index" class="record-list">
				<text class="time">2021-03-25 11:25:34</text>
				<text class="desc">消费说明消费说明消费说明消费说明消费说明消费说明消费说明消费说明消费说明消费说明消费说明消费说明消费说明消费说明消费说。</text>
				<view class="image">
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				</view>
				<view class="button">
					<text>删除</text>
					<text @click="toRecode">修改</text>
				</view>
			</view>
		</Card>
		<fixedFooter hideLeft>
			<view slot="right" class="t-hairdres-button"><text class="iconfont">&#xe621;</text>确定添加</view>
		</fixedFooter>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Upload from '@/components/Upload'
	import fixedFooter from '@/components/fixedFooter'
	export default {
		components: {
			Card,
			Upload,
			fixedFooter
		},
		data () {
			return {
				active: true
			}
		},
		methods: {
			toRecode () {
				uni.navigateTo({
					url:'./add-record'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-add-customer-profile {
		padding-bottom: 100rpx;
		.record-list {
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			font-size: 24rpx;
			&:last-child {
				margin-bottom: 0;
				padding-bottom: 0;
				border: none;
			}
			.button {
				display: flex;
				justify-content: flex-end;
				
				text {
					display: flex;
					border: solid 2rpx #ffa8a8;
					line-height: 1;
					color: #ffa8a8;
					padding: 16rpx 40rpx;
					margin-left: 50rpx;
					border-radius: 100rpx;
					&:last-child {
						border: solid 2rpx #db6bff;
						color: #db6bff;
					}
				}
			}
			.image {
				display: flex;
				flex-wrap: wrap;
				margin: 0 -10rpx 32rpx -10rpx;
				image {
					width: 200rpx;
					height: 200rpx;
					border-radius: 10rpx;
					margin: 0 8rpx;
				}
			}
			.time {
				margin-bottom: 24rpx;
				display: block;
				text-align: right;
			}
			.desc {
				display: block;
				line-height: 1.8;
				margin-bottom: 24rpx;
			}
		}
		.t-hairdres-button {
			width: 480rpx;
		}
		textarea {
			width: calc(100% - 48rpx);
			font-size: 28rpx;
			height: 200rpx;
			padding: 24rpx;
			background-color: #eeeeee;
			border-radius: 10rpx;
		}
		.rule {
			text-align: center;
			font-size: 24rpx;
			.t-hairdres-button {
				margin:  50rpx 125rpx;
			}
			.iconfont2 {
				color: #fc689a;
			}
		}
		.title {
			font-size: 28rpx;
			font-weight: bold;
			margin-bottom: 32rpx;
		}
		.title2 {
			display: flex;
			justify-content: space-between;
			text {
				&:last-child {
					font-weight: 500;
					color: #db6bff;
				}
			}
		}
		.form--item {
			display: flex;
			justify-content: space-between;
			margin-bottom: 32rpx;
			font-size: 24rpx;
			align-items: center;
			padding-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			&:last-child {
				margin-bottom: 0;
				padding-bottom: 16rpx;
				border: none;
			}
			.label {
				width: 140rpx;
			}
			.right {
				flex: 1;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.grap {
					color: #aaa;
				}
				input {
					flex: 1;
					font-size: 24rpx;
				}
				image {
					display: block;
					width: 60rpx;
					height: 60rpx;
					border-radius: 100rpx;
				}
			}
		}
	}
</style>

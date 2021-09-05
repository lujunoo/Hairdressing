<template>
	<!-- 添加预约 -->
	<view class="t-hairdres-user-add-appointment">
		<Card>
			<view class="form-item">
				<text class="label">预约时间</text>
				<view class="right">
					<input type="text" placeholder="请填写预约时间" value="2021年04月10日  15:00 到店" />
				</view>
			</view>
			<view class="form-item">
				<text class="label">姓名</text>
				<view class="right">
					<input type="text" placeholder="请填写姓名" value="" />
				</view>
			</view>
			<view class="form-item">
				<text class="label">性别</text>
				<view class="right">
					<text class="grap">请选择性别</text>
					<text @click="toLabel" >请选择<text class="iconfont">&#xe64c;</text></text>
				</view>
			</view>
			<view class="form-item">
				<text class="label">手机号</text>
				<view class="right">
					<input type="text" placeholder="请填写手机号" value="" />
				</view>
			</view>
			<view class="form-item">
				<text class="label">微信号</text>
				<view class="right">
					<input type="text" placeholder="请填写微信号" value="" />
				</view>
			</view>
		</Card>
		<!-- 荣誉墙 -->
		<Card>
			<view class="walloffame">
				<view class="title">预约项目</view>
				<view class="image-lits">
					<image v-for="(item,index) in 4" :key="index" src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				</view>
				<view @click="addPackge" class="button">
					<text class="iconfont">&#xe621;</text>预约项目
				</view>
			</view>
		</Card>
		<Card>
			<view class="walloffame">
				<view class="title">备注</view>
				<textarea value="" placeholder="请填写备注" />
			</view>
		</Card>
		<view class="rule">
			<view class="t-hairdres-button">确定添加</view>
		</view>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	export default {
		components: {
			Card
		},
		data () {
			return {
				active: true
			}
		},
		methods: {
			addPackge () {
				uni.navigateTo({
					url:'../../commodity/order/select-user-project'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-add-appointment {
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
			text {
				font-size: 24rpx;
				color: #999;
				font-weight: 500;
			}
		}
		.walloffame {
			.image-lits {
				display: flex;
				flex-wrap: wrap;
				margin-top: 16rpx;
				image {
					width: calc(33% - 20rpx);
					border-radius: 6rpx;
					margin: 10rpx;
					height: 135rpx;
					display: block;
				}
			}
			.photo {
				display: flex;
				margin: 24rpx 0;
			}
			textarea {
				width: calc(100% - 32rpx);
				border-radius: 10rpx;
				padding: 16rpx;
				height: 200rpx;
				font-size: 24rpx;
				margin-top: 24rpx;
				background-color: #fff3e2;
			}
			.button {
				color: #fc689a;
				font-size: 24rpx;
				line-height: 1;
				padding: 24rpx 0;
				text-align: center;
				border-radius: 10rpx;
				margin: 50rpx 210rpx 16rpx 210rpx;
				border: dashed 3rpx #fc689a;
			}
		}
		.form-item {
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
					color: #999;
				}
				input {
					flex: 1;
					font-size: 24rpx;
				}
			}
		}
	}
</style>

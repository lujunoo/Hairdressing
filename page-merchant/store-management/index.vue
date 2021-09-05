<template>
	<!-- 门店管理 -->
	<view class="t-hairdres-merchant-store-management">
		<Card>
			<view class="form-data2">
				<view class="label">
					门店主图
				</view>
				<Upload width="190" height="140" />
			</view>
			<view class="form-data">
				<view class="label">
					店铺LOGO
				</view>
				<view class="input">
					<image class="photo" src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				</view>
			</view>
			<view class="form-data">
				<view class="label">
					门店名称
				</view>
				<view class="input">
					<input type="text" value="" placeholder="请填写内容" />
				</view>
			</view>
			<view class="form-data">
				<view class="label">
					门店电话
				</view>
				<view class="input">
					<input type="text" value="" placeholder="请填写内容" />
				</view>
			</view>
			<view class="form-data">
				<view class="label">
					门店地址
				</view>
				<view class="input">
					<input type="text" value="" placeholder="请填写内容" />
				</view>
			</view>
			<view class="form-data">
				<view class="label">
					营业时间
				</view>
				<view class="input">
					<input type="text" value="" placeholder="请填写内容" />
					<text class="iconfont">&#xe64c;</text>
				</view>
			</view>
			<view class="form-data">
				<view class="label">
					营业状态
				</view>
				<view class="input">
					<input type="text" value="" placeholder="请填写内容" />
					<text class="iconfont">&#xe64c;</text>
				</view>
			</view>
			<view class="form-data">
				<view class="label">
					剪发座位
				</view>
				<view class="input">
					<input type="text" value="" placeholder="请填写内容" />
				</view>
			</view>
			<view class="form-data">
				<view class="label">
					员工人数
				</view>
				<view class="input">
					<input type="text" value="" placeholder="请填写内容" />
				</view>
			</view>
			<view class="form-data">
				<view class="label">
					发型师人数
				</view>
				<view class="input">
					<input type="text" value="" placeholder="请填写内容" />
				</view>
			</view>
			<view class="form-data">
				<view class="label">
					开业时间
				</view>
				<view class="input">
					<input type="text" value="" placeholder="请填写内容" />
				</view>
			</view>
			<view class="form-data">
				<view class="label">
					商户标签
				</view>
				<view @click="selectLabel" class="input">
					<input type="text" value="" placeholder="请填写内容" />
					<text>去选择<text class="iconfont">&#xe64c;</text></text>
				</view>
			</view>
		</Card>
		<fixedFooter hideLeft>
			<view slot='right' class="t-hairdres-button">
				确定修改
			</view>
		</fixedFooter>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import fixedFooter from '@/components/fixedFooter'
	import Upload from '@/components/Upload'
	export default {
		components: {
			Card,
			fixedFooter,
			Upload
		},
		methods: {
			selectLabel () {
				uni.navigateTo({
					url:'./label-list'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-store-management {
		padding-bottom: 100rpx;
		font-size: 24rpx;
		.t-hairdres-button {
			width: 580rpx;
		}
		.label {
			font-size: 24rpx;
			font-weight: bold;
		}
		.form-data2 {
			margin-bottom: 32rpx;
			.label {
				margin-bottom: 32rpx;
			}
		}
		.form-data {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 32rpx;
			padding-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			
			&:last-child {
				padding-bottom: 0;
				margin-bottom: 0;
				border: none;
			}
			.input {
				display: flex;
				flex: 1;
				justify-content: flex-end;
				align-items: center;
				margin-left: 32rpx;
				
				.photo {
					width: 60rpx;
					height: 60rpx;
					display: block;
					border-radius: 100rpx;
				}
				
				input {
					flex: 1;
					font-size: 24rpx;
					padding: 0 24rpx;
				}
			}
		}
	}
</style>

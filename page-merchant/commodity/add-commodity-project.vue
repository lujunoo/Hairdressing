<template>
	<!-- 添加商品-添加项目 -->
	<view class="t-hairdres-merchant-add-commodity">
		<Card>
			<view class="form-item">
				<text class="label">服务类型</text>
				<view class="right">
					<input class="input" type="text" value="" placeholder="请选择服务类型" />
					<text class="iconfont">&#xe731;</text>
				</view>
			</view>
			<view class="form-item">
				<text class="label">设计师类型</text>
				<view class="right">
					<input class="input" type="text" value="" placeholder="请选择设计师类型" />
					<text class="iconfont">&#xe731;</text>
				</view>
			</view>
			<view class="form-item">
				<text class="label">发长</text>
				<view class="right">
					<input class="input" type="text" value="" placeholder="请选择" />
					<text class="iconfont">&#xe731;</text>
				</view>
			</view>
			<view class="form-item">
				<text class="label">项目用时</text>
				<view class="right">
					<input class="input" type="text" value="" placeholder="请填写商品分类" />
					<text>时</text>
				</view>
			</view>
			<view class="form-item">
				<text class="label">门店价</text>
				<view class="right">
					<input class="input" type="text" value="" placeholder="请填写项目用时，半小时为0.5" />
					<text>元</text>
				</view>
			</view>
			<view class="form-item">
				<text class="label">平台套餐价</text>
				<view class="right">
					<input class="input" type="text" value="" placeholder="请输入门店价金额" />
					<text>元</text>
				</view>
			</view>
			<view class="form-item">
				<text class="label">描述（选填）</text>
				<view class="right">
					<textarea value="" placeholder="填写描述" />
				</view>
			</view>
		</Card>
		<view class="t-hairdres-button">
			保存
		</view>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Upload from '@/components/Upload'
	import fixedFooter from '@/components/fixedFooter'
	export default {
		components: {
			Card,
			fixedFooter,
			Upload
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-add-commodity {
		font-size: 24rpx;
		line-height: 1;
		.t-hairdres-button {
			width: 500rpx;
			margin: auto;
		}
		.form-item {
			margin-bottom: 32rpx;
			padding-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			display: flex;
			justify-content: space-between;
			align-items: center;
			&:last-child {
				border: none;
				margin-bottom: 0;
				padding-bottom: 0;
				flex-direction: column;
				align-items: flex-start;
				.label {
					margin-bottom: 24rpx;
				}
			}
			.label {
				width: 200rpx;
			}
			.right {
				flex: 1;
				display: flex;
				justify-content: space-between;
				align-items: center;
				textarea {
					background: #eeeeee;
					width: 580rpx;
					height: 200rpx;
					font-size: 24rpx;
					padding: 24rpx;
				}
				.input {
					flex: 1;
					font-size: 24rpx;
				}
				.iconfont {
					font-size: 36rpx;
				}
			}
		}
	}
</style>

<template>
	<!-- 添加商品 -->
	<view class="t-hairdres-merchant-add-commodity">
		<Card>
			<view class="form-item">
				<text class="label">商品名称</text>
				<view class="right">
					<input class="input" type="text" value="" placeholder="请填写商品名称" />
				</view>
			</view>
			<view class="form-item">
				<text class="label">商品分类</text>
				<view class="right">
					<input class="input" type="text" value="" placeholder="请填写商品分类" />
					<text class="iconfont">&#xe731;</text>
				</view>
			</view>
			<view class="project">
				<text class="label">套餐详情 <text @click="toProject" class="add-project">+添加服务项目</text> </text>
				<view v-for="(item,index) in 3" :key="index" class="project-item">
					<view class="string">
						<text>洗吹</text>
						<text>一次</text>
						<text>¥69.00</text>
						<text>资深设计师</text>
					</view>
					<view class="string">
						描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
					</view>
					<text class="iconfont">&#xe606;</text>
				</view>
			</view>
		</Card>
		<Card>
			<view class="form-item">
				<text class="label">门店售价</text>
				<view class="right">
					<input class="input" type="text" value="" placeholder="请填写门店售价" />
					<text>元</text>
				</view>
			</view>
			<view class="form-item">
				<text class="label">平台套餐价</text>
				<view class="right">
					<input class="input" type="text" value="" placeholder="请填写平台套餐价" />
					<text>元</text>
				</view>
			</view>
			<view class="form-item">
				<text class="label">一级佣金</text>
				<view class="right">
					<input class="input" type="text" value="" placeholder="请输入百分比（2-20）" />
					<text>%</text>
				</view>
			</view>
			<view class="form-item">
				<text class="label">二级佣金</text>
				<view class="right">
					<input class="input" type="text" value="" placeholder="请输入百分比（2-20）" />
					<text>%</text>
				</view>
			</view>
			<view class="form-item">
				<text class="label">消费返佣</text>
				<view class="right">
					<input class="input" type="text" value="" placeholder="请输入百分比（2-20）" />
					<text>%</text>
				</view>
			</view>
			<view class="form-item">
				<text class="label">库存</text>
				<view class="right">
					<input class="input" type="text" value="" placeholder="请填写库存（不填写则不限量）" />
					<text>元</text>
				</view>
			</view>
			<view class="form-item">
				<text class="label">结算价</text>
				<view class="right">
					<input class="input" type="text" value="" placeholder="统一收取2%服务费率" />
				</view>
			</view>
			<view class="form-item">
				<text class="label">套餐说明</text>
				<view class="right">
					<input class="input" type="text" value="" placeholder="请填写库存（不填写则不限量）" />
				</view>
			</view>
			<view class="upload">
				<text class="label">商品主图</text>
				<view class="desc">
					商品主图必须上传，图片像素至少为400*600，图片大小不超过10M，建议图片比例为16:9
				</view>
				<Upload width="300" height="170" :imageData="[]"/>
				<view class="label">
					商品副图（3-5张）
				</view>
				<Upload width="300" height="170" :imageData="[]"/>
			</view>
		</Card>
		<Card>
			<view class="form-item form-item-checked">
				<text class="label">售卖时间</text>
				<view class="checkbox">
					<view class="checked-label">
						<text class="iconfont">&#xe618;</text>
						<text class="name">上架即开始售卖</text>
					</view>
					<view class="checked-label">
						<text class="iconfont iconfont2">&#xe661;</text>
						<text class="name">指定日期</text>
						<text class="time" >选择开始售卖日期</text>
					</view>
				</view>
			</view>
			<view class="form-item form-item-checked">
				<text class="label">券码有效期</text>
				<view class="right checkbox">
					<view class="checked-label">
						<text class="iconfont">&#xe618;</text>
						<text class="name">相对时间</text>
						<text>下单后有效时间</text>
						<input class="input" type="text" placeholder="多少" value="" />
						<text>天</text>
					</view>
					<view class="checked-label">
						<text class="iconfont iconfont2">&#xe661;</text>
						<text class="name">指定时间</text>
						<text class="time" >券码有效期截止日期</text>
					</view>
				</view>
			</view>
			<view class="form-item form-item-checked">
				<text class="label">不可用日期</text>
				<view class="checkbox">
					<view class="checked-label">
						<text class="time" >选择不可用日期</text>
					</view>
				</view>
			</view>
			<view class="form-item form-item-checked" style="flex-direction: column;">
				<text class="label">可否与其他优惠同享</text>
				<view class="checkbox">
					<view class="checked-label">
						<text class="iconfont">&#xe618;</text>
						<text class="name">可与其他优惠同享</text>
					</view>
					<view class="checked-label">
						<text class="iconfont iconfont2">&#xe661;</text>
						<text class="name">不再与其他优惠同享</text>
					</view>
				</view>
			</view>
			<view class="form-item-checked">
				<text class="label" style="margin-top: 32rpx;">是否支持预约</text>
				<view class="checkbox">
					<view class="checked-label">
						<text class="iconfont">&#xe618;</text>
						<text class="name">是</text>
					</view>
					<view class="checked-label">
						<text class="iconfont iconfont2">&#xe661;</text>
						<text class="name">否</text>
					</view>
				</view>
			</view>
			<view class="desc2">
				预约请提前致电商家联系
			</view>
		</Card>
		<view class="statement">
			<text class="iconfont">&#xe63a;</text>
			<text class="iconfont">&#xe692;</text>
			<text>我已阅读并同意<text @click="toDisclaimer" class="color-theme">《免责声明》</text></text>
		</view>
		<fixedFooter hideLeft>
			<view slot="right" class="t-hairdres-button">
				预览并提交
			</view>
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
			fixedFooter,
			Upload
		},
		methods: {
			toProject () {
				uni.navigateTo({
					url:'./add-commodity-project'
				})
			},
			toDisclaimer () {
				uni.navigateTo({
					url:'./disclaimer'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-add-commodity {
		font-size: 24rpx;
		line-height: 1;
		.t-hairdres-button {
			width: 500rpx;
		}
		.statement {
			text-align: center;
			padding: 20rpx 0 160rpx 0;
		}
		.desc2 {
			color: #fc6868;
			margin-top: 32rpx;
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
			}
			.label {
				width: 200rpx;
			}
			.right {
				flex: 1;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.input {
					flex: 1;
					font-size: 24rpx;
				}
				.iconfont {
					font-size: 36rpx;
				}
			}
		}
		.form-item-checked {
			align-items: flex-start;
			.label {
				display: block;
				margin-bottom: 24rpx;
				width: auto;
				margin-right: 80rpx;
			}
			.checkbox {
				color: #666;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-items: flex-start;
				.checked-label {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 24rpx;
					&:last-child {
						margin-bottom: 0;
					}
					.name {
						color: #000;
						margin: 0 24rpx;
					}
					.input {
						border: solid 2rpx #aaa;
						border-radius: 10rpx;
						margin: 0 6rpx;
						padding: 0 6rpx;
					}
				}
				.time {
					color: #999;
					border: solid 2rpx #999;
					border-radius: 10rpx;
					padding: 8rpx 24rpx;
				}
				.iconfont {
					font-size: 30rpx;
					font-weight: bold;
					color: #999;
				}
				.iconfont2 {
					color: #fc6868;
				}
			}
		}
		.project {
			.add-project {
				border: solid 2rpx #fc6968;
				color: #fc6968;
				line-height: 1;
				display: inline-block;
				border-radius: 20rpx;
				padding: 4rpx 16rpx;
				margin-left: 32rpx;
			}
			.project-item {
				margin-top: 24rpx;
				background: #fae5e5;
				padding: 24rpx;
				position: relative;
				.string {
					display: flex;
					justify-content: space-between;
					color: #666;
					&:first-child {
						color: #000;
						padding-right: 64rpx;
						margin-bottom: 24rpx;
					}
				}
				.iconfont {
					top: 0rpx;
					right: 0rpx;
					color: #fc6968;
					position: absolute;
					padding: 24rpx;
				}
			}
		}
		.upload {
			margin-bottom: 32rpx;
			.label {
				margin-bottom: 32rpx;
				margin-top: 32rpx;
			}
			.desc {
				color: #888;
				margin-top: 24rpx;
				margin-bottom: 24rpx;
			}
		}
	}
</style>

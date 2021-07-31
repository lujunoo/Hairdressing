<template>
	<!-- 下单人信息填写 -->
	<view class="t-hairdres-order-user-info">
		<view class="desc">请认真填写以下信息，越详细发型师越了解您，越能做出您满意的发型</view>
		<Card>
			<view class="from-item">
				<text class="title">姓名</text>
				<input type="text" value="" placeholder="请填写姓名" />
			</view>
			<view class="from-item">
				<text class="title">性别</text>
				<view class="checked">
					<label class="radio">
						<text class="iconfont">&#xe661;</text>
						<!-- <text class="iconfont iconfont2">&#xe618;</text> -->
						男
					</label>
					<label class="radio">
						<!-- <text class="iconfont">&#xe661;</text> -->
						<text class="iconfont iconfont2">&#xe618;</text>
						女
					</label>
				</view>
			</view>
			<view class="from-item">
				<text class="title">手机号</text>
				<input type="text" value="" placeholder="请填写姓名" />
			</view>
			<view class="from-item">
				<text class="title">职业</text>
				<input type="text" value="" placeholder="请填写姓名" />
			</view>
			<view class="from-item">
				<text class="title">爱好</text>
				<input type="text" value="" placeholder="请填写姓名" />
			</view>
			<view class="from-item">
				<text class="title">所在城市</text>
				<input type="text" value="" placeholder="请填写姓名" />
			</view>
			<view class="from-item">
				<text class="title">经常在哪里洗发造型？</text>
				<view class="checked">
					<label class="radio">
						<text class="iconfont">&#xe661;</text>
						<!-- <text class="iconfont iconfont2">&#xe618;</text> -->
						家里
					</label>
					<label class="radio">
						<!-- <text class="iconfont">&#xe661;</text> -->
						<text class="iconfont iconfont2">&#xe618;</text>
						理发店
					</label>
				</view>
			</view>
			<view class="from-item">
				<text class="title">自己会打理头发吗？</text>
				<view class="checked">
					<label class="radio">
						<text class="iconfont">&#xe661;</text>
						<!-- <text class="iconfont iconfont2">&#xe618;</text> -->
						会
					</label>
					<label class="radio">
						<!-- <text class="iconfont">&#xe661;</text> -->
						<text class="iconfont iconfont2">&#xe618;</text>
						不会
					</label>
				</view>
			</view>
			<view class="from-item textarea">
				<text class="title">家里有哪些洗护用品？</text>
				<textarea value="" placeholder="请填写内容" />
			</view>
			<view class="from-item textarea">
				<text class="title">家里有哪些造型产品和工具？</text>
				<textarea value="" placeholder="请填写内容" />
			</view>
			<view class="from-item textarea">
				<text class="title">做过最喜欢的发型（最多4张）？</text>
				<Uplaod/>
			</view>
			<view class="from-item textarea">
				<text class="title">做过最不喜欢的发型（最多4张）</text>
				<Uplaod/>
			</view>
			<view class="from-item textarea">
				<text class="title">这次最想做的发型（最多4张）</text>
				<Uplaod/>
			</view>
			<view class="from-item textarea">
				<text class="title">你今天的发型（最多4张）</text>
				<Uplaod/>
			</view>
		</Card>
		<fixedFooter class="fixedFooter" hideLeft>
			<text slot="right" class="t-hairdres-button">保存</text>
		</fixedFooter>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Uplaod from '@/components/Upload'
	import fixedFooter from '@/components/fixedFooter'
	export default {
		components: {
			Card,
			Uplaod,
			fixedFooter
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-order-user-info {
		padding-bottom: 100rpx;
		.fixedFooter {
			background: #F3F5F7;
			.t-hairdres-button {
				width: 500rpx;
			}
		}
		.desc {
			margin: 32rpx;
			padding: 32rpx;
			border-radius: 10rpx;
			background: #f7a0c7;
			font-size: 24rpx;
			color: #FFFFFF;
			line-height: 2;
		}
		.from-item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 32rpx;
			&:last-child {
				margin-bottom: 0;
			}
			.title {
				font-size: 24rpx;
			}
			.checked {
				display: flex;
				justify-content: end;
				flex: 1;
				margin-left: 70rpx;
				font-size: 28rpx;
				.radio {
					flex: 1;
					.iconfont {
						color: #fc6f9f;
						margin-right: 16rpx;
					}
					.iconfont2 {
						display: inline-block;
						transform: scale(1.1);
						color: #999;
					}
				}
			}
			input,
			textarea{
				width: 470rpx;
				height: 60rpx;
				padding: 0 24rpx;
				font-size: 24rpx;
				background-color: #ffeeee;
				border-radius: 20rpx;
			}
			textarea {
				width: calc(100% - 32rpx);
				flex: 1;
				min-height: 150rpx;
				padding: 16rpx 16rpx;
			}
		}
		.textarea {
			flex-direction: column;
			align-items: flex-start;
			.title {
				margin-bottom: 24rpx;
			}
		}
	}
</style>

<template>
	<!-- 发表文章 -->
	<view class="t-hairdres-creat-article">
		<view class="form-data">
			<view class="form-item">
				<view class="label">
					<text>发布区域</text>
				</view>
				<view class="input">
					<text>请选择发布区域</text>
					<text class="iconfont">&#xe731;</text>
				</view>
			</view>
			<view class="form-item">
				<view class="label">
					<text>发帖内容</text>
				</view>
				<view class="input">
					<textarea maxlength="1000" value="" placeholder="发帖内容" />
				</view>
			</view>
			<view class="form-item">
				<view class="label">
					<text>上传图片</text>
				</view>
				<Upload/>
			</view>
			<view class="form-item">
				<view class="label">
					<text>选择话题</text>
				</view>
				<view class="label-list">
					<text class="active">烫染发技术讨论</text>
					<text>但是发射点</text>
					<text>山东分公</text>
					<text>烫染发技术讨论</text>
				</view>
			</view>
			<view class="form-item">
				<button type="">发布</button>
			</view>
		</view>
	</view>
</template>

<script>
	import Upload from '@/components/Upload'
	export default {
		components:{
			Upload
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-creat-article {
		margin: 32rpx;
		padding: 32rpx;
		border-radius: 10rpx;
		background: #FFFFFF;
		
		.form-data {
			.form-item{
				.iconfont {
					font-size: 40rpx;
				}
				.label-list{
					text {
						margin: 0 16rpx 16px 0;
						display: inline-block;
						border-radius: 8rpx;
						padding: 8rpx 16rpx;
						background: #e5e5e5;
						color: #FFFFFF;
						font-size: 24rpx;
					}
					.active {
						background: #fc689a;
					}
				}
				
				button {
					width: 500rpx;
					height: 80rpx;
					line-height: 80rpx;
					color: #FFFFFF;
					background-color: #fc689a;
					border-radius: 40rpx;
					font-size: 24rpx;
					font-weight: bold;
				}
			}
		}
	}
</style>

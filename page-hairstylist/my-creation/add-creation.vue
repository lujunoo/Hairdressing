<template>
	<!-- 添加作品 -->
	<view class="t-hairdres-user-add-appointment">
		<Card>
			<view class="title">商品主图</view>
			<view class="desc">
				商品主图必须上传，图片像素至少为400*600，图片大小不超过10M，建议图片比例为16:9
			</view>
			<Upload width="300" height="170" :imageData="[]"/>
			<view class="form-item"></view>
			<view class="form-item">
				<text class="label">作品名称</text>
				<view class="right">
					<input type="text" placeholder="请填写作品名称" value="" />
				</view>
			</view>
			<view class="walloffame">
				<view class="title">作品描述</view>
				<textarea value="" placeholder="请填写作品描述" />
				<text class="maxlength">0/100字</text>
			</view>
		</Card>
		<!-- 使用套餐 -->
		<Card>
			<view>
				<view class="title">使用套餐</view>
				<view class="project-item" >
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
					<view class="content">
						<view class="info">
							<text class="title2">施华蔻烫染直3选1施华蔻烫染直3选1施华蔻烫染直3选1</text>
						</view>
						<view class="info">
							<text class="color-theme">￥1000<text class="oldprice">￥1000</text></text>
							<text>已售<text class="color-yellow">800</text></text>
						</view>
					</view>
				</view>
				<view @click="addPackge" class="button">
					<text class="iconfont">&#xe621;</text>关联套餐
				</view>
			</view>
		</Card>
		<Card>
			<view class="title">作品标签</view>
			<view class="color-theme">
				每项至少选择一个标签
			</view>
			<view class="label-list">
				<view class="subtitle">性别</view>
				<text class="label-item active">男</text>
				<text class="label-item">女</text>
			</view>
			<view class="label-list">
				<view class="subtitle">长度</view>
				<view class="label-item-group">
					<text class="label-item active">短发</text>
					<text class="label-item">中发</text>
					<text class="label-item">长发</text>
				</view>
				<view class="label-item-group">
					<text class="label-item active">仪式发型</text>
					<text class="label-item">新娘发型</text>
					<text class="label-item">新郎发型</text>
					<text class="label-item">伴娘发型</text>
				</view>
				<view class="label-item-group">
					<text class="label-item active">网红同款</text>
					<text class="label-item">明星同款</text>
					<text class="label-item">主持人发型</text>
				</view>
			</view>
			<view class="label-list">
				<view class="subtitle">颜色</view>
				<text class="label-item active">奶灰</text>
				<text class="label-item">酒红</text>
				<text class="label-item">棕红</text>
			</view>
		</Card>
		<view class="rule">
			<view class="t-hairdres-button">确定添加</view>
		</view>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Upload from '@/components/Upload'
	export default {
		components: {
			Card,
			Upload
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
		.project-item {
			display: flex;
			justify-content: space-between;
			position: relative;
			align-items: center;
			background: #ffe4ed;
			padding: 24rpx;
			border-radius: 10rpx;
			margin-top: 32rpx;
			image {
				width: 170rpx;
				height: 120rpx;
				background-color: #f00055;
				border-radius: 10rpx;
				margin-right: 24rpx;
			}
			.content {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				font-size: 24rpx;
				min-height: 120rpx;
				
				.info {
					display: flex;
					justify-content: space-between;
					color: #666;
					.title2 {
						color: #333333;
						font-size: 28rpx;
						line-height: 1.3;
					}
					.color-theme {
						font-size: 28rpx;
						margin: 0;
						text {
							margin-left: 16rpx;
							font-size: 24rpx;
						}
					}
				}
			}
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
		.label-list {
			margin-bottom: 32rpx;
			.subtitle {
				font-size: 28rpx;
				margin-bottom: 24rpx;
			}
			.label-item-group {
				margin-bottom: 24rpx;
			}
			.label-item {
				font-size: 24rpx;
				line-height: 1;
				display: inline-block;
				margin-right: 24rpx;
				border: solid 2rpx #bfbfbf;
				border-radius: 10rpx;
				color: #999;
				min-width: 100rpx;
				text-align: center;
				padding:  12rpx 12rpx;
			}
			.active {
				background: #fc689a;
				color: #fff;
				border-color: #fc689a;
			}
		}
		.color-theme {
			font-size: 24rpx;
			margin: 32rpx 0;
		}
		.desc {
			font-size: 24rpx;
			color: #666;
			margin: 24rpx 0 32rpx 0;
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
			.maxlength {
				display: block;
				font-size: 24rpx;
				text-align: right;
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
				font-weight: bold;
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

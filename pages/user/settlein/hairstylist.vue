<template>
	<!-- 发型师入驻 -->
	<view class="t-hairdres-user-hairstylist">
		<Card>
			<view class="form--item">
				<text class="label">头像</text>
				<view class="right">
					<text class="grap">请上传本人着装合理的照片</text>
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				</view>
			</view>
			<view class="form--item">
				<text class="label">入驻商户</text>
				<view class="right">
					<text class="grap">请选择要入驻的的商家</text>
					<text @click="toBusiness" >请选择<text class="iconfont">&#xe64c;</text></text>
				</view>
			</view>
			<view class="form--item">
				<text class="label">姓名</text>
				<view class="right">
					<input type="text" placeholder="请填写您名片上的名称" value="" />
				</view>
			</view>
			<view class="form--item">
				<text class="label">头衔</text>
				<view class="right">
					<text class="grap">请选择您的头衔</text>
					<text @click="toLabel" >请选择<text class="iconfont">&#xe64c;</text></text>
				</view>
			</view>
			<view class="form--item">
				<text class="label">工作年限</text>
				<view class="right">
					<input type="text" placeholder="请填写您的从业年限" value="" />
					<text>年</text>
				</view>
			</view>
			<view class="form--item">
				<text class="label">擅长</text>
				<view class="right">
					<input type="text" placeholder="请填写您擅长的技能" value="" />
				</view>
			</view>
			<view class="form--item">
				<text class="label">手机号</text>
				<view class="right">
					<input type="text" placeholder="请填写你的手机号" value="" />
				</view>
			</view>
		</Card>
		<!-- 荣誉墙 -->
		<Card>
			<view class="walloffame">
				<view class="title">荣誉墙</view>
				<view class="image-lits">
					<image v-for="(item,index) in 4" :key="index" src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				</view>
				<view @click="addHonor" class="button">
					<text class="iconfont">&#xe621;</text>添加
				</view>
			</view>
		</Card>
		<!-- 个人简介 -->
		<Card>
			<view class="walloffame">
				<view class="title">个人简介</view>
				<textarea value="" placeholder="请填写个人简介" />
			</view>
		</Card>
		<!-- 证件照 -->
		<Card>
			<view class="walloffame">
				<view class="title">证件信息 <text>（上传身份证正反页，手持身份证正面照）</text></view>
				<view class="photo">
					<Upload :maxLength="1" width="300" height="170" :imageData="[]" title='身份证正面（人像页）'/>
					<Upload :maxLength="1" width="300" height="170" :imageData="[]" title='身份证反面（国徽页）'/>
				</view>
				<Upload :maxLength="1" width="300" height="170" :imageData="[]" title='手持证件照'/>
			</view>
		</Card>
		<view class="rule">
			<text v-if="active" @click="active = !active" class="iconfont iconfont2">&#xe692;</text>
			<text v-else @click="active = !active" class="iconfont">&#xe63a;</text>
			<text>我已阅读并同意 <text @click="toProtocol" class="color-theme">《平台发型师入驻协议及须知》</text></text>
			<view class="t-hairdres-button">提交申请</view>
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
			toBusiness () {
				uni.navigateTo({
					url:'./selecte-business'
				})
			},
			toLabel () {
				uni.navigateTo({
					url:'./selecte-label'
				})
			},
			addHonor () {
				uni.navigateTo({
					url:'./add-honor'
				})
			},
			toProtocol () {
				uni.navigateTo({
					url:'./protocol'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-hairstylist {
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
				border: dashed 3rpx #fc689a;
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
					color: #999;
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

<template>
	<!-- 商家入驻 -->
	<view class="t-hairdres-user-hairstylist">
		<!-- 证件照 -->
		<Card>
			<view class="walloffame">
				<view class="title">门店照片</view>
				<view class="color-theme">
					注：请上传门头、前台、剪发区、烫染区、洗发区、卫生间、休息等待区、员工休息区平面设计图清晰照片。
				</view>
				<Upload :imageData="[]" title=''/>
			</view>
		</Card>
		<Card>
			<view class="form--item">
				<text class="label">商家名称</text>
				<view class="right">
					<input type="text" placeholder="请填写您名片上的名称" value="" />
				</view>
			</view>
			<view class="form--item">
				<text class="label">所在地区</text>
				<view class="right">
					<text class="grap">请选择店铺所在城市(省/市/区)</text>
					<text>请选择<text class="iconfont">&#xe64c;</text></text>
				</view>
			</view>
			<view class="form--item">
				<text class="label">详情地址</text>
				<view class="right">
					<input type="text" placeholder="请填写店铺详情地址" value="" />
					<text class="color-theme">自动定位</text>
				</view>
			</view>
			<view class="form--item">
				<view class="right">
					<map :scale="13" :markers="markers" :longitude="longitude" :latitude="latitude"></map>
				</view>
			</view>
			<view class="form--item">
				<text class="label">商户电话</text>
				<view class="right">
					<input type="text" placeholder="请填写店铺联系电话" value="" />
				</view>
			</view>
			<view class="form--item">
				<text class="label">剪发座位</text>
				<view class="right">
					<input type="text" placeholder="请填写剪发座位数" value="" />
				</view>
			</view>
			<view class="form--item">
				<text class="label">员工人数</text>
				<view class="right">
					<input type="text" placeholder="请填写员工人数" value="" />
				</view>
			</view>
			<view class="form--item">
				<text class="label">发型师人数</text>
				<view class="right">
					<input type="text" placeholder="请填写发型师人数" value="" />
				</view>
			</view>
			<view class="form--item">
				<text class="label">营业时间</text>
				<view class="right">
					<text class="grap">请选择营业时间</text>
					<text>请选择<text class="iconfont">&#xe64c;</text></text>
				</view>
			</view>
			<view class="form--item">
				<text class="label">营业状态</text>
				<view class="right">
					<text class="grap">请选择营业状态</text>
					<text>请选择<text class="iconfont">&#xe64c;</text></text>
				</view>
			</view>
		</Card>
		<Card>
			<view class="form--item">
				<text class="label">法人姓名</text>
				<view class="right">
					<input type="text" placeholder="请填写法人姓名" value="" />
				</view>
			</view>
			<view class="form--item">
				<text class="label">法人手机</text>
				<view class="right">
					<input type="text" placeholder="请填写法人手机" value="" />
				</view>
			</view>
			<view class="form--item">
				<text class="label">身份证号</text>
				<view class="right">
					<input type="text" placeholder="请填写身份证号" value="" />
				</view>
			</view>
			<view class="form--item">
				<text class="label">居住地址</text>
				<view class="right">
					<input type="text" placeholder="请填写居住地址" value="" />
				</view>
			</view>
			<view class="form--item">
				<text class="label">结算账户</text>
				<view class="right">
					<input type="text" placeholder="请填写结算账户" value="" />
				</view>
			</view>
			<view class="form--item">
				<text class="label">开户行</text>
				<view class="right">
					<input type="text" placeholder="请填写开户行" value="" />
				</view>
			</view>
		</Card>
		<!-- 证件照 -->
		<Card>
			<view class="walloffame">
				<view class="title">商家资质<text>（上传营业执照及法人手持营业执照照片）</text></view>
				<view class="photo">
					<Upload :maxLength="1" width="300" height="170" :imageData="[]" title='营业执照'/>
					<Upload :maxLength="1" width="300" height="170" :imageData="[]" title='手执营业执照照片'/>
				</view>
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
			<text>我已阅读并同意 <text @click="toProtocol" class="color-theme">《平台商家入驻协议》</text></text>
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
				active: true,
				longitude: 106.452804,
				latitude: 29.583123,
				markers: [
					{
						id:23452,
						longitude: 106.452804,
						latitude: 29.583123,
						title:'卢大爷在此'
					}
				]
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
			.color-theme {
				font-size: 24rpx;
				margin-bottom: 32rpx;
			}
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

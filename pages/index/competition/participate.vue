<template>
	<!-- 参加比赛 -->
	<view class="t-hairdres-competition" :style="{paddingBottom:`${safeDistance + 100}rpx`}">
		<!-- banner -->
		<banner :images="bannerList" />
		<!-- 数据统计 -->
		<view class="datacount">
			<view class="datacount-item">
				<text>23423</text>
				<text>参赛者</text>
			</view>
			<view class="datacount-item">
				<text>23423</text>
				<text>投票数</text>
			</view>
			<view class="datacount-item">
				<text>23423</text>
				<text>访问量</text>
			</view>
		</view>
		<!-- 倒计时 -->
		<view class="countdown">
			<view class="title">
				<image src="../../../static/images/home-icon4.png" mode="aspectFill"></image>
				<text>投票于25天8小时25分30秒后结束</text>
			</view>
		</view>
		<!-- 表单 -->
		<view class="form-data">
			<view class="title">请上传参赛作品</view>
			<view class="title2">参赛者请上传本人真实作品</view>
			<view class="upload">
				<Upload/>
			</view>
			<view class="title">作品名称</view>
			<input class="input" type="text" value="" placeholder="请填写作品名称" />
			<view class="title">作品描述</view>
			<textarea  class="textarea" value="" placeholder="请填写作品描述" />
			<view class="manual">
				<text v-if="!checked" @click="checked = !checked" class="iconfont">&#xe63a;</text>
				<text v-else  @click="checked = !checked"  class="iconfont">&#xe692;</text>
				<text>我已阅读并同意</text>
				<text>《比赛规则与奖励》</text>
			</view>
			<view class="button">
				提交作品
			</view>
		</view>
		<!-- tabBar -->
		<view class="tabBar" :style="{paddingBottom:`${safeDistance}rpx`}">
			<text @click="toHome">全部参赛</text>
			<text @click="toRule">活动规则</text>
			<text @click="toLeaderboard">当前排名</text>
			<text>我要参赛</text>
		</view>
	</view>
</template>

<script>
	import Banner from '../../../components/Banner'
	import PullDownRefresh from '../../../components/PullDownRefresh'
	import Upload from '../../../components/Upload'
	export default {
		components: {
			Banner,
			PullDownRefresh,
			Upload
		},
		data() {
			return {
				safeDistance: 0,
				checked: false,
				bannerList: [
					'https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg'
				]
			};
		},
		onLoad() {
			this.safeDistance = getApp().globalData.safeDistance
		},
		methods: {
			toUserInfo (data) {
				uni.navigateTo({
					url:"./competition-userInfo"
				})
			},
			toHome () {
				uni.navigateTo({
					url:'./competition'
				})
			},
			toRule () {
				uni.navigateTo({
					url: './activity-rules'
				})
			},
			toLeaderboard () {
				uni.navigateTo({
					url: './leaderboard-user'
				})
			},
		}
	}
</script>
<style>
	page {
		background: #ffcee4;
	}
</style>
<style scoped lang="less">
	.t-hairdres-competition {
		
		.form-data {
			margin: 32rpx;
			padding: 32rpx;
			background: #FFFFFF;
			border-radius: 8rpx;
			
			.upload {
				margin: 32rpx 0 24rpx 0;
			}
			
			.manual {
				text-align: center;
				font-size: 24rpx;
				padding: 16rpx 0;
				
				.iconfont {
					font-family: icon-hairdressing;
					margin-right: -12rpx;
					color: #FC689A;
					padding: 20rpx;
				}
				text {
					&:last-child {
						color: #FC689A;
					}
				}
			}
			
			.button {
				height: 80rpx;
				background: #FC689A;
				color: #FFFFFF;
				font-size: 28rpx;
				font-weight: bold;
				text-align: center;
				line-height: 80rpx;
				border-radius: 100rpx;
				margin: 32rpx 70rpx;
			}
			
			.textarea,.input {
				height: 60rpx;
				background: #fff3e2;
				border: dashed 2rpx #f95abf;
				font-size: 28rpx;
				padding: 0 16rpx;
				margin-bottom: 32rpx;
			}
			.textarea {
				width: 94.5%;
				height: auto;
				padding: 16rpx;
				min-height: 200rpx;
			}
			.title2 {
				font-size: 24rpx;
				margin-top: -16rpx;
			}
			
			.title {
				font-size: 28rpx;
				font-weight: bold;
				margin-bottom: 32rpx;
			}
		}
		
		.tabBar {
			position: fixed;
			bottom: 0;
			left: 0;
			height: 100rpx;
			width: 100%;
			background: #FDB685;
			display: flex;
			justify-content: space-between;
			
			text {
				flex: 1;
				text-align: center;
				line-height: 100rpx;
				color: #FFFFFF;
				font-size: 28rpx;
				
				&:nth-child(4) {
					background: #F95ABF;
				}
			}
		}
		
		
		.countdown {
			margin: 32rpx 75rpx;

			.title {
				background: #FF0000;
				height: 60rpx;
				border-radius: 100rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #FFFFFF;
				font-size: 24rpx;

				image {
					width: 28rpx;
					height: 28rpx;
					margin-right: 16rpx;
				}
			}
		}

		.datacount {
			height: 150rpx;
			background: #FFB95C;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.datacount-item {
				flex: 1;
				text-align: center;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size: 24rpx;
				color: #FFFFFF;
				padding-top: 8rpx;

				text {
					display: block;
					font-size: 32rpx;
					font-weight: bold;
					line-height: 32rpx;
					margin-bottom: 16rpx;

					&:last-child {
						font-size: 28rpx;
						line-height: 28rpx;
						font-weight: 500;
					}
				}

				&:nth-child(2) {
					border-left: solid 1px #FFFFFF;
					border-right: solid 1px #FFFFFF;
				}
			}
		}
	}
</style>

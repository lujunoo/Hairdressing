<template>
	<!-- 个人中心 -->
	<view class="t-hairdres-hairstylist-personal">
		<Banner height="350" :images="images"/>
		<Card>
			<view class="list-item">
				<text class="label">姓名</text>
				<view class="info">
					<input type="text" value="" placeholder="昵称" />
				</view>
			</view>
			<view class="list-item">
				<text class="label">头衔</text>
				<view class="info">
					<text>创始人</text>
					<text @click="selectLabel" >请选择<text class="iconfont">&#xe64c;</text></text>
				</view>
			</view>
			<view class="list-item">
				<text class="label">资历</text>
				<view class="info">
					<input type="text" value="" placeholder="资历" />
				</view>
			</view>
			<view class="list-item">
				<text class="label">擅长</text>
				<view class="info">
					<input type="text" value="洗吹、剪发、烫发、染发、造型" placeholder="资历" />
				</view>
			</view>
			<view class="list-item">
				<text class="label">手机号</text>
				<view class="info">
					<input type="text" value="188xxxxxx8888" placeholder="资历" />
				</view>
			</view>
			<view class="list-item">
				<view style="flex: 1;">
					<text class="title">个人简介</text>
					<textarea value="" placeholder="个人简介" />
				</view>
			</view>
			<view class="list-item">
				<text class="label">门店</text>
				<view class="info">
					<text></text>
					<text @click="Unbind" ><text>iHair Do</text>解除绑定<text class="iconfont">&#xe64c;</text></text>
				</view>
			</view>
			<view @click="totBreakTime" class="list-item">
				<text class="label">作息设置</text>
				<view class="info">
					<text></text>
					<text class="iconfont">&#xe64c;</text>
				</view>
			</view>
			<view @click="toPriceList" class="list-item">
				<text class="label">价目表</text>
				<view class="info">
					<text></text>
					<text class="iconfont">&#xe64c;</text>
				</view>
			</view>
		</Card>
		<Card>
			<view class="title">
				<text>个人简介</text>
				<text @click="lookAll" class="more">查看全部</text>
			</view>
			<view v-for="(item,index) in 2" :key="index" class="honor-list">
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				<view class="string">
					<text>荣誉名称</text>
					<text>荣誉介绍荣誉介绍荣誉介绍荣誉介绍荣誉介绍荣誉介绍荣誉介绍荣誉介绍荣誉介绍荣誉介绍荣誉介绍荣誉介绍</text>
				</view>
			</view>
		</Card>
		<fixedFooter class="fixedFooter" hideLeft>
			<text slot="right" class="t-hairdres-button">确定修改</text>
		</fixedFooter>
		<Dialog ref="dialog" desc="您正在操作解绑当前店铺，解绑店铺后，发型师个人信息会隐藏，重新绑定店铺后才能呈现。"></Dialog>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Banner from '@/components/Banner'
	import fixedFooter from '@/components/fixedFooter'
	import Dialog from '@/components/Dialog'
	export default {
		components:{
			Card,
			Banner,
			fixedFooter,
			Dialog
		},
		data () {
			return {
				images: [
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg',
				]
			}
		},
		methods: {
			selectLabel () {
				uni.navigateTo({
					url:'../../user/settlein/selecte-label'
				})
			},
			toPriceList () {
				uni.navigateTo({
					url:'./price-list'
				})
			},
			lookAll () {
				uni.navigateTo({
					url:'./honor-list'
				})
			},
			totBreakTime () {
				uni.navigateTo({
					url:'./break-time'
				})
			},
			Unbind () {
				this.$refs.dialog.show()
			}
		}
		
	}
</script>

<style scoped lang="less">
	.t-hairdres-hairstylist-personal {
		padding-bottom: 100rpx;
		font-size: 24rpx;
		.t-hairdres-button {
			width: 480rpx;
		}
		.honor-list {
			margin-bottom: 32rpx;
			display: flex;
			align-items: center;
			&:last-child {
				margin-bottom: 0;
			}
			image {
				width: 190rpx;
				height: 134rpx;
				border-radius: 10rpx;
			}
			.string {
				flex: 1;
				display: flex;
				height: 134rpx;
				flex-direction: column;
				justify-content: space-between;
				margin-left: 24rpx;
				text {
					color: #666;
					text-overflow: -o-ellipsis-lastline;
					 overflow: hidden;
					 text-overflow: ellipsis;
					 display: -webkit-box;
					 -webkit-line-clamp: 2;
					 line-clamp: 2;
					 -webkit-box-orient: vertical;
					&:first-child {
						font-size: 28rpx;
						color: #000;
					}
				}
			}
		}
		.title {
			font-size: 28rpx;
			font-weight: bold;
			margin-bottom: 32rpx;
			display: flex;
			justify-content: space-between;
			.more {
				font-weight: 500;
				font-size: 24rpx;
				color: #fc689a;
			}
		}
		.list-item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			&:last-child {
				margin-bottom: 0;
				padding-bottom: 0;
				border: none;
			}
			textarea {
				flex: 1;
				width: calc(100% - 32rpx);
				height: 200rpx;
				background-color: #fff3e2;
				border-radius: 10rpx;
				font-size: 24rpx;
				padding: 16rpx;
			}
			.label {
				width: 140rpx;
			}
			.info {
				flex: 1;
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				input {
					font-size: 24rpx;
				}
			}
		}
	}
</style>

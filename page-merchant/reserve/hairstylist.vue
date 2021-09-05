<template>
	<!-- 可预约发型师 -->
	<view class="t-hairdres-merchant-reserve-hairstylist">
		<TabBar @onClick="getActive" ref="TabBar" background="rgba(0,0,0,0)" :tabList="tabList" isFlex/>
		<Card class="select-user-item" v-for="(item,index) in 10" :key="index" >
			<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
			<view class="content">
				<view class="info">
					<text><text class="name">托尼</text>设计总监</text>
					<text class="iconfont">&#xe606;</text>
				</view>
				<view class="info">
					<text>评分<text class="color-theme">5.0</text>分</text>
					<text>从业16年</text>
				</view>
				<view class="info">
					<text>服务人次<text class="color-red">985</text></text>
					<text>回头客<text class="color-purple">800</text></text>
				</view>
			</view>
		</Card>
		<fixedFooter hideLeft>
			<view  @click="toCreate" slot='right' class="t-hairdres-button">
				添加可预约的发型师
			</view>
		</fixedFooter>
	</view>
</template>

<script>
	import TabBar from '@/components/TabBar'
	import Card from '@/components/Card'
	import fixedFooter from '@/components/fixedFooter'
	export default {
		components: {
			TabBar,
			Card,
			fixedFooter
		},
		data () {
			return {
				tabList: ['店铺预约表','可预约发型师'],
			}
		},
		mounted () {
			this.$refs.TabBar.active = 1
		},
		methods: {
			getActive (index) {
				if (index === 0) {
					uni.navigateTo({
						url:'./reserve'
					})
				}
			},
			toCreate () {
				uni.navigateTo({
					url:'./add-hairstylist'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-reserve-hairstylist {
		padding-bottom: 100rpx;
		.t-hairdres-button {
			width: 580rpx;
		}
		.select-user-item {
			margin: 24rpx 32rpx;
			display: flex;
			justify-content: space-between;
			position: relative;
			.button {
				position: absolute;
				bottom: 32rpx;
				right: 32rpx;
				width: 122rpx;
				height: 50rpx;
				background-image: linear-gradient(90deg, 
					#fc689a 0%, 
					#ff9bfe 100%);
				border-radius: 20rpx;
				color: #FFFFFF;
				font-size: 24rpx;
				text-align: center;
				line-height: 50rpx;
			}
			
			image {
				width: 150rpx;
				height: 150rpx;
				background-color: #f00055;
				border-radius: 10rpx;
				margin-right: 32rpx;
			}
			.content {
				flex: 1;
				display: flex;
				font-size: 24rpx;
				flex-direction: column;
				
				.info {
					flex: 1;
					display: flex;
					justify-content: space-between;
					
					.iconfont {
						font-size: 32rpx;
						color: #fc689a;
					}
					
					.name {
						font-size: 28rpx;
						font-weight: bold;
						margin-right: 16rpx;
					}
				}
			}
		}
	
	}
</style>

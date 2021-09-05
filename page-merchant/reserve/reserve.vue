<template>
	<!-- 预约管理 -->
	<view class="t-hairdres-merchant-reserve">
		<TabBar ref="TabBar" @onClick="getActive" background="rgba(0,0,0,0)" :tabList="tabList" isFlex/>
		<Card>
			<view class="title">iHair Do预约表</view>
			<CalendarHeader class="break-time-calendar-header"/>
			<Schedule @onHead="onHead" @onBody="onBody" :head="head" :body="body" />
			<view class="desc">
				<text class="subtitle">预约提示</text>
				<text class="desc-item"><text class="block1"></text>不能再预约</text>
				<text class="desc-item"><text class="block2"></text>可预约，有可能需要等待</text>
				<text class="desc-item"><text class="block3"></text>可约，正常情况不需要等待</text>
			</view>
		</Card>
		<Card>
			<view class="title title2">是否支持预约</view>
			<view class="checkbox-label">
				<view @click="checked = true" class="label-item">
					<text v-if="checked" class="iconfont iconfont2">&#xe661;</text>
					<text v-else class="iconfont">&#xe618;</text>
					<text>开启预约</text>
				</view>
				<view @click="checked = false" class="label-item">
					<text v-if="checked" class="iconfont">&#xe618;</text>
					<text v-else class="iconfont iconfont2">&#xe661;</text>
					<text>关闭预约</text>
				</view>
			</view>
			<view class="t-hairdres-button">
				确定修改
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import TabBar from '@/components/TabBar'
	import CalendarHeader from '@/components/CalendarHeader'
	import Schedule from '@/components/Schedule'
	export default {
		components: {
			Card,
			TabBar,
			CalendarHeader,
			Schedule
		},
		data () {
			return {
				checked: false,
				tabList: ['店铺预约表','可预约发型师'],
				head: [
					['时间'],
					['曹兵'],
					['曹兵'],
					['曹兵'],
					['曹兵'],
					['曹兵'],
					['曹兵'],
					['曹兵'],
				],
				body:[
					[
						{title:'09:00'},
						{
							title:'休',
							color:'#fff',
							baColor: '#f7a0c7'
						},
						{title:''},
						{title:''},
						{title:''},
						{title:''},
						{title:''},
						{title:''}
					],
					[
						{title:'10:00'},
						{
							title:'休',
							color:'#fff',
							baColor: '#f7a0c7'
						},
						{title:''},
						{title:''},
						{title:''},
						{title:''},
						{title:''},
						{title:''}
					],
					[
						{title:'11:00'},
						{
							title:'休',
							color:'#fff',
							baColor: '#f7a0c7'
						},
						{title:''},
						{title:''},
						{title:''},
						{title:''},
						{title:''},
						{title:''}
					],
					[
						{title:'12:00'},
						{
							title:'休',
							color:'#fff',
							baColor: '#f7a0c7'
						},
						{title:''},
						{title:''},
						{title:''},
						{title:''},
						{title:''},
						{title:''}
					],
					[
						{title:'13:00'},
						{
							title:'休',
							color:'#fff',
							baColor: '#f7a0c7'
						},
						{title:''},
						{title:''},
						{title:''},
						{title:''},
						{title:''},
						{title:''}
					],
					[
						{title:'14:00'},
						{
							title:'休',
							color:'#fff',
							baColor: '#f7a0c7'
						},
						{title:''},
						{title:''},
						{title:''},
						{title:''},
						{title:''},
						{title:''}
					],
					[
						{title:'15:00'},
						{title:''},
						{title:''},
						{title:''},
						{title:''},
						{title:''},
						{title:''},
						{title:''}
					],
					[
						{title:'16:00'},
						{title:''},
						{title:''},
						{title:''},
						{title:''},
						{title:''},
						{title:''},
						{title:''}
					],
					[
						{title:'17:00'},
						{title:''},
						{title:''},
						{title:''},
						{
							title:'休',
							color:'#fff',
							baColor: '#f7a0c7'
						},
						{title:''},
						{title:''},
						{title:''}
					],
					[
						{title:'18:00'},
						{title:''},
						{title:''},
						{
							title:'休',
							color:'#fff',
							baColor: '#f7a0c7'
						},
						{title:''},
						{title:''},
						{title:''},
						{title:''}
					]
				]
			}
		},
		mounted () {
			this.$refs.TabBar.active = 0
		},
		methods: {
			onHead (data) {
				uni.navigateTo({
					url:'./reserve-time'
				})
			},
			onBody (data) {
				uni.navigateTo({
					url:'./reserve-time'
				})
			},
			getActive (index) {
				if (index === 1) {
					uni.navigateTo({
						url:'./hairstylist'
					})
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-reserve {
		.break-time-calendar-header {
			padding:32rpx;
			border-bottom: solid 1px #aaa;
			line-height: 1;
		}
		.title {
			text-align: center;
			font-size: 28rpx;
			font-weight: bold;
		}
		.title2 {
			text-align: left;
		}
		.checkbox-label {
			display: flex;
			align-items: center;
			font-size: 28rpx;
			margin-top: 32rpx;
			margin-bottom: 100rpx;
			.label-item {
				flex: 1;
				.iconfont {
					margin-right: 16rpx;
				}
				.iconfont2 {
					color: #fc689a;
				}
			}
		}
		.block1,
		.block2,
		.block3,
		.block4{
			display: inline-block;
			background: #fc689a;
			border: none;
		}
		.block2 {
			background: #ffb400;
		}
		.block4 {
			background: #efd1d1;
		}
		.button {
			height: 80rpx;
			line-height: 80rpx;
			color: #FFFFFF;
			font-size: 28rpx;
			font-weight: bold;
			text-align: center;
			background-color: #fc689a;
			border-radius: 20rpx;
		}
		.desc {
			line-height: 1;
			.block1,
			.block2,
			.block3,
			.block4 {
				width: 50rpx;
				height: 20rpx;
				margin-right: 16rpx;
			}
			.block3 {
				width: 46rpx;
				height: 18rpx;
				border: solid 2rpx #aaa;
				background: #fff;
			}
			.desc-item {
				display: block;
				font-size: 24rpx;
				display: block;
				color: #888;
				margin-bottom: 24rpx;
				position: relative;
			}
			.subtitle {
				color: #333333;
				padding-left: 0rpx;
				padding-top: 32rpx;
				margin-bottom: 32rpx;
				display: block;
				font-size: 28rpx;
			}
		}
	}
</style>

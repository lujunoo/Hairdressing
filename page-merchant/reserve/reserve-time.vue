<template>
	<!-- 发型师预约表 -->
	<view class="t-hairdres-user-personal-break-time">
		<Card>
			<view class="break-time-header">
				<view class="start-time">
					<text class="label">设置上班时间</text>
					<text>09:00 - 21:00</text>
				</view>
				<view class="start-time">
					<text class="label">设置休息时间</text>
					<text @click="setTime" class="color-theme">查看</text>
				</view>
				<view class="start-time">
					<text class="subtitle">设置休息时间</text>
					<text @click="toSave" class="label color-theme">保存</text>
				</view>
				<CalendarHeader class="break-time-calendar-header"/>
			</view>
			<Schedule @onBody="onBody" :head="head" :body="body" />
			<view class="desc">
				<text class="subtitle">预约提示</text>
				<text class="desc-item"><text class="block1"></text>不能再预约</text>
				<text class="desc-item"><text class="block2"></text>可预约，有可能需要等待</text>
				<text class="desc-item"><text class="block3"></text>可约，正常情况不需要等待</text>
			</view>
		</Card>
		<Dialog ref="dialog" desc="您已对当前工作时间进行更改，是否确认本次操作？！"></Dialog>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import CalendarHeader from '@/components/CalendarHeader'
	import Schedule from '@/components/Schedule'
	import Dialog from '@/components/Dialog'
	export default {
		components:{
			Card,
			CalendarHeader,
			Schedule,
			Dialog
		},
		data () {
			return {
				head: [
					['时间'],
					['4','日'],
					['5','一'],
					['6','二'],
					['7','三'],
					['8','四'],
					['9','五'],
					['10','六'],
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
		methods: {
			setTime () {
				uni.navigateTo({
					url:'./set-break-time'
				})
			},
			toSave () {
				this.$refs.dialog.show()
			},
			onBody (data) {
				if (data.baColor) {
					uni.navigateTo({
						url:'./information'
					})
				} else {
					uni.navigateTo({
						url:'./add-appointment'
					})
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-personal-break-time {
		font-size: 24rpx;
		.break-time-calendar-header {
			padding:32rpx;
			line-height: 1;
		}
		.break-time-header {
			line-height: 1;
			border: solid 2rpx #aaaaaa;
			.start-time {
				display: flex;
				border-bottom: solid 2rpx #aaaaaa;
				&:last-child {
					border: 0;
				}
				text {
					padding: 24rpx 16rpx;
					text-align: center;
					flex: 3;
					border-right: solid 2rpx #aaaaaa;
					&:last-child {
						border: none;
					}
				}
				.label {
					flex: 1.5;
				}
				.subtitle {
					font-weight: bold;
					font-size: 28rpx;
					border: none;
					flex: 6;
					padding-left: 130rpx;
				}
			}
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
	}
</style>

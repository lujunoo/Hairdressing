<template>
	<!-- 设置休息时间 -->
	<view class="t-hairdres-user-personal-set-break-time">
		<Card>
			<view class="title">
				<text>设置休息时间</text>
				<text class="color-theme">保存</text>
			</view>
			<view class="collapse">
				<view :class="{active: active === index}" @click="active = index" v-for="(item,index) in 5" :key="index" class="collapse-item">
					<view class="subtitle">
						<text>{{item}}月</text>
						<text class="iconfont">&#xe64c;</text>
					</view>
					<view class="content">
						<uniCalendar @change="change" :selected="selected"/>
					</view>
				</view>
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import uniCalendar from '@/components/uni-calendar/uni-calendar'
	export default {
		components:{
			Card,
			uniCalendar
		},
		data () {
			return {
				active: 0,
				selected:[
					{
						date: '2021-08-27', 
						info: '',
						data: {
							custom:'hhh',
							name:'地规范',
							a:1,
							b:2
						}
					}
				]
			}
		},
		methods: {
			change (data) {
				const index = this.selected.findIndex(item => item.date === data.fulldate)
				if (index > -1) {
					this.selected.splice(index, 1)
				} else {
					this.selected.push({
						date: data.fulldate,
						info: '',
						data: {
							custom:'hhh',
							name:'地规范',
							a:1,
							b:2
						}
					})
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-personal-set-break-time {
		font-size: 28rpx;
		.collapse {
			border: solid 2rpx  #aaa;
			border-top: none;
			.collapse-item {
				border-bottom: solid 2rpx #aaa;
				&:last-child {
					border-bottom: none;
				}
				.subtitle {
					display: flex;
					justify-content: space-between;
					padding: 24rpx 32rpx;
				}
				.content {
					overflow: hidden;
					max-height: 0;
					transition: 0.3s;
				}
			}
			.active {
				.content {
					max-height: 1000rpx;
					transition: 0.3s;
					border-top: solid 2rpx #eee;
					/deep/.uni-calendar__header {
						display: none;
					}
					/deep/ .uni-calendar-item__weeks-box-item {
						height: 60rpx;
					}
					/deep/ .uni-calendar-item__weeks-box-circle {
						display: none;
					}
					/deep/.uni-calendar-item--checked {
						opacity: 1;
						background: none;
						color: #333;
					}
					/deep/.uni-calendar-item__weeks-box-circle + .uni-calendar-item__weeks-box-text {
						background-color: rgba(252, 104, 154, 80%);
						border-radius: 100rpx;
						width: 50rpx;
						height: 50rpx;
						text-align: center;
						line-height: 50rpx;
						color: #fff;
					}
					/deep/.uni-calendar-item--isDay {
						background: none;
						color: #d964ff;
						opacity: 1;
						.uni-calendar-item__weeks-box-item {
							.uni-calendar-item__weeks-box-text {
								display: none;
							}
						}
					}
					
				}
			}
		}
		.title {
			border: solid 2rpx #aaa;
			padding: 24rpx;
			text {
				&:first-child {
					font-weight: bold;
					margin: 0 170rpx;
				}
			}
		}
	}
</style>

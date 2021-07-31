<template>
	<!-- 订单预约-预约时间 -->
	<view class="t-hairdres-select-time">
		<Card>
			<view class="title">发型师曹兵的空置情况</view>
			<view class="title-date">
				<text class="iconfont">&#xe64c;</text>
				<text>2021年5月</text>
				<text class="iconfont">&#xe64c;</text>
			</view>
			<view class="table">
				<view class="table-row">
					<view class="item-title">时间</view>
					<text v-for="(item,index) in 10" :key="index">9:00</text>
				</view>
				<view v-for="(item,index) in dateList" :key="index" class="table-row">
					<view class="item-title"><text>{{item.name}}</text><text>({{item.subtitle}})</text></view>
					<template v-for="(item2,index2) in item.list">
						<text :key="index2" v-if="item2 === '1'" class="block1"></text>
						<text :key="index2" v-else-if="item2 === '2'" class="block2"></text>
						<text :key="index2" v-else-if="item2 === '3'" class="block3">休</text>
						<text :key="index2" v-else-if="item2 === '4'" class="block4"></text>
						<text :key="index2" v-else></text>
					</template>
				</view>
			</view>
			<view class="desc">
				<text class="subtitle">预约提示</text>
				<text class="desc-item"><text class="block1"></text>不能再预约</text>
				<text class="desc-item"><text class="block2"></text>可预约，有可能需要等待</text>
				<text class="desc-item"><text class="block3">休</text>发型师休假中，不可预约</text>
				<text class="desc-item"><text class="block4"></text>灰色：超出预约时间，请联系商家</text>
				<text class="desc-item">你当前选择的预约时间为：<text class="color-theme">2021-04-07 10:30</text></text>
				<text class="desc-item">可能需要等待</text>
			</view>
			<view class="button">确定选择</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	export default {
		components: {
			Card
		},
		data () {
			return {
				dateList:[
					{
						type: 'date',
						name:  '3',
						subtitle: '一',
						list: ['1', '', '', '', '', '', '', '', '', '']
					},
					{
						type: 'date',
						name:  '4',
						subtitle: '二',
						list: ['', '2', '', '', '', '', '', '', '', '']
					},
					{
						type: 'date',
						name:  '5',
						subtitle: '三',
						list: ['', '', '3', '', '', '', '', '', '', '']
					},
					{
						type: 'date',
						name:  '6',
						subtitle: '四',
						list: ['', '', '', '4', '', '', '', '', '', '']
					},
					{
						type: 'date',
						name:  '7',
						subtitle: '五',
						list: ['', '', '', '', '', '', '', '', '', '']
					},
					{
						type: 'date',
						name:  '8',
						subtitle: '六',
						list: ['', '', '', '', '', '', '', '', '', '']
					},
					{
						type: 'date',
						name:  '9',
						subtitle: '日',
						list: ['', '', '', '', '', '', '', '', '', '']
					}
				]
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-select-time {
		.title {
			text-align: center;
			font-size: 28rpx;
			font-weight: bold;
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
		.block3 {
			background: #ffd6e4;
			font-size: 20rpx;
			color: #333333;
			text-align: center;
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
			margin-bottom: 100rpx;
			line-height: 1;
			.block1,
			.block2,
			.block3,
			.block4 {
				width: 50rpx;
				height: 20rpx;
				margin-right: 16rpx;
			}
			.desc-item {
				display: block;
				font-size: 24rpx;
				display: block;
				color: #888;
				margin-bottom: 24rpx;
				position: relative;
				
				&:last-child {
					padding-left: 275rpx;
					color: #222;
				}
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
		.table {
			display: flex;
			border-top: solid 2rpx #eee;
			border-left: solid 2rpx #eee;
			.table-row {
				flex: 1;
				display: flex;
				flex-direction: column;
				font-size: 24rpx;
				
				>text {
					flex: 1;
					border-bottom: solid 2rpx #eee;
					border-right: solid 2rpx #eee;
					text-align: center;
					height: 40rpx;
					display: block;
				}
				.item-title {
					text-align: center;
					line-height: 60rpx;
					border-bottom: solid 2rpx #eee;
					border-right: solid 2rpx #eee;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					height: 60rpx;
					text {
						display: block;
						line-height: 0.9;
						&:last-child {
							transform: scale(0.8) rotateX(40deg);
						}
					}
				}
				
			}
		}
		.title-date {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 32rpx 0;
			
			.iconfont {
				width: 40rpx;
				height: 40rpx;
				background-color: #f7a0c7;
				border-radius: 100rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 40rpx;
			}
			text {
				&:first-child {
					transform: rotate(180deg);
				}
				&:nth-child(2) {
					line-height: 1;
					padding: 18rpx 42rpx;
					font-size: 28rpx;
					color: #FFFFFF;
					background-color: #f7a0c7;
					border-radius: 20rpx;
				}
			}
		}
	}
</style>

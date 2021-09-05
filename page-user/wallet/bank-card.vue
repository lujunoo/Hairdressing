<template>
	<!-- 我的银行卡 -->
	<view class="t-hairdres-user-bank-card">
		<Card class="user-bank-card" v-for="(item,index) in cardList" :key="index" :style="{background: item.color}">
			<text class="iconfont iconfont2">&#xe982;</text>
			<view class="content">
				<view class="title">
					<text>{{item.title}}</text>
					<text @click="deleteData(item)" class="iconfont">&#xe60f;</text>
				</view>
				<text>{{item.type}}</text>
				<text>{{item.number}}</text>
			</view>
		</Card>
		<view @click="addCard" class="addCard">
			<text class="iconfont">&#xe621;</text>
			<text>添加银行卡</text>
		</view>
		<Dialog @onConfirm="onConfirm" title="温馨提示" desc="您正在操作删除银行卡，是否确认？" ref="Dialog"></Dialog>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import Dialog from '@/components/Dialog'
	export default {
		components: {
			Card,
			Dialog
		},
		data () {
			return {
				cardList:[
					{
						title:'建设银行',
						type:'储蓄卡',
						color:'#173c98',
						number: '3453 xxxx xxxx 3454',
					},
					{
						title:'招商银行',
						type:'储蓄卡',
						color:'#a61f23',
						number: '3453 xxxx xxxx 3454',
					},
					{
						title:'农业银行',
						type:'储蓄卡',
						color:'#298e5a',
						number: '3453 xxxx xxxx 3454',
					}
				],
				cardInfo:[
					{
						title: '建设银行',
						code: '2434',
						color: 'red',
						icon: '&#xe97d;'
					}
				]
			}
		},
		methods: {
			deleteData (item) {
				this.$refs.Dialog.show()
				console.log(item)
			},
			onConfirm () {
				this.$refs.Dialog.close()
			},
			addCard () {
				uni.navigateTo({
					url:'./add-card'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-bank-card {
		.addCard {
			height: 80rpx;
			margin: 95rpx 125rpx;
			border-radius: 100rpx;
			text-align: center;
			line-height: 80rpx;
			font-size: 24rpx;
			color: #fc689a;
			font-weight: bold;
			border: solid 6rpx #fc689a;
			.iconfont {
				margin-right: 16rpx;
			}
		}
		.user-bank-card {
			display: flex;
			height: 185rpx;
			align-items: center;
			font-size: 24rpx;
			.iconfont2 {
				width: 80rpx;
				height: 80rpx;
				text-align: center;
				line-height: 80rpx;
				font-size: 40rpx;
				background: #FFFFFF;
				border-radius: 100rpx;
				margin-right: 24rpx;
			}
			.content {
				flex: 1;
				height: 100%;
				display: flex;
				color: #FFFFFF;
				flex-direction: column;
				justify-content: space-between;
				.title {
					display: flex;
					justify-content: space-between;
					.iconfont {
						font-size: 40rpx;
						transform: translate(35%,-20%);
						background: none;
					}
					text {
						&:first-child {
							font-weight: bold;
							font-size: 28rpx;
						}
					}
				}
				text {
					display: block;
				}
			}
		}
	}
</style>

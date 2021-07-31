<template>
	<!-- 标题栏 -->
	<view class="t-hairdres-title">
		<text :class="{showred:showred}" class="title">{{title}}</text>
		<view @click="toDetail" v-if="showLeft" class="option">
			<text>{{desc}}</text>
			<text class="iconfont">&#xe64c;</text>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'Title',
		props: {
			title: {
				type: String,
				default: "默认标题"
			},
			showLeft:{
				type:Boolean,
				default: false
			},
			desc: {
				type: String,
				default: '查看更多'
			},
			showred: {
				type:Boolean,
				default: true
			}
		},
		methods: {
			toDetail () {
				this.$emit('onClick')
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-title {
		padding: 32rpx 0;
		font-size: 32rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		.option {
			font-size: 24rpx;
			color: #999999;
			display: flex;
			align-items: center;
			
			.iconfont {
				font-size: 28rpx;
				margin-bottom: -5rpx;
				font-family: icon-hairdressing;
				font-weight: bold;
			}
			
		}
		.title {
			font-weight: bold;
			display: block;
			position: relative;
			
			&::after {
				content: "";
				width: 10rpx;
				height: 15rpx;
				background-color: #fc689a;
				border-radius: 3rpx;
				position: absolute;
				bottom: 8rpx;
				right: -20rpx;
			}
		}
		
		.showred {
			&::after {
				background-color: rgba(0,0,0,0)
			}
		}
	}
</style>

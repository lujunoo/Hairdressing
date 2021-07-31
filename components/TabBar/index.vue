<!-- tabBar -->
<template>
	<view class="t-hairdres-tabBar-box">
		<scroll-view v-if="!isFlex" :scroll-x="true" :style="{height: `${height}rpx`, background:`${this.background}`}" class="t-hairdres-scroll">
			<text v-for="(item,index) in tabList" :style="{lineHeight: `${height}rpx`}" :class="{ active: active === index}" @click="active = index" :key="index">{{item}}</text>
		</scroll-view>
		<view v-if="isFlex" :style="{height: `${height}rpx`, background:`${background}`}" class="t-hairdres-flex">
			<text v-for="(item,index) in tabList"  :style="{lineHeight: `${height}rpx`}"  :class="{ active: active === index}" @click="active = index" :key="index">{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'TabBar',
		props: {
			background: {
				type: String,
				default: '#ffffff'
			},
			height: {
				type: Number,
				default: 80
			},
			isFlex: {
				type: Boolean,
				default: false
			},
			tabList: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		computed: {
			setTextStyle () {
				return {  }
			},
			getStyle () {
				return { }
			}
		},
		data () {
			return {
				active: 0,
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-tabBar-box {
		background: #FFFFFF;
		width: 100%;
		height: 80rpx;
		position: sticky;
		top: 0;
		z-index: 99;
		
		.t-hairdres-scroll {
			width: 100%;
			white-space: nowrap;
			height: 80rpx;
			
			text {
				margin: 0 32rpx;
				display: inline-block;
				font-size: 32rpx;
				position: relative;
			}
		}
		
		.t-hairdres-flex {
			display: flex;
			justify-content: space-around;
			
			text {
				display: inline-block;
				font-size: 32rpx;
				position: relative;
			}
		}
		
		.active {
			color: #f95abf;
			font-size: 32rpx;
			font-weight: 600;

			&::after {
				content: '';
				width: 100%;
				height: 6rpx;
				border-radius: 10rpx;
				background: #f95abf;
				position: absolute;
				bottom: 0;
				left: 0;
			}
		}
	}
</style>

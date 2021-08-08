<template>
	<view class="t-hairdres-filter">
		<view v-if="open" @click="open = false" class="mask"></view>
		<view class="filter">
			<view class="filter-item" @click="filterAcitve(item, index)" v-for="(item,index) in titleList" :key="index">
				<text>{{item}}</text>
			    <text class="icon">&#xe63d;</text>
			</view>
		</view>
		<view v-if="open" class="filter-child">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'FilterTable',
		props: {
			titleList: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		data () {
			return {
				acitve: {},
				open: false
			}
		},
		methods: {
			filterAcitve (item, index) {
				this.acitve = item
				this.open = true
				this.$emit('onResult', { data: item, index: index })
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-filter {
		position: relative;
		z-index: 1;
		background: #FFFFFF;
		height: 80rpx;
		
		.mask {
			position: absolute;
			top: 72rpx;
			left: 0;
			width: 100%;
			height: 85vh;
			background: rgba(0,0,0,0.05);
			z-index: 1;
		}
		
		.filter-child {
			border-top: solid #f0f0f0 1px;
			box-shadow: 0 16rpx 16rpx rgba(0,0,0,0.1);
			width: 100%;
			background: #FFFFFF;
			position: absolute;
			top: 74rpx;
			left: 0;
			z-index: 2;
			
			text {
				display: block;
				font-size: 28rpx;
				color: #999999;
				padding: 0 32rpx 32rpx 32rpx;
				&:first-child {
					padding-top: 32rpx;
				}
			}
		}
		
		.filter {
			font-family: icon-hairdressing;
			display: flex;
			height: 80rpx;
			justify-content: space-between;
			z-index: 2;
			
			.filter-item {
				font-size: 28rpx;
				color: #333333;
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				
				text {
					&:last-child {
						transition: 0.3s;
						margin-left: 8rpx;
						font-size: 24rpx;
						display: block;
					}
				}
			}
		}
	}
</style>

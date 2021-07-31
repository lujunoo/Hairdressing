<!-- 搜索组件 -->
<template>
	<view class="t-hairdres-search">
		<view class="t-search-left">
			<slot></slot>
		</view>
		<view :style="{'background': color ? color : ''}" class="t-search-box">
			<input class="t-search-input" type="text" :placeholder="placeholder" value="" />
			<text class="icon-hairdressingguanbi">&#xe607;</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'SearchBox',
		props: {
			// 搜索框的颜色
			color: {
				type: String,
				default: '#ffd6e4'
			},
			// 圆角
			radius: {
				type: Number,
				default: 100
			},
			// placeholder
			placeholder: {
				type: String,
				default: '请输入搜索内容'
			}
		},
		data() {
			return {
				value: ''
			};
		}
	}
</script>

<style scoped lang="less">
.t-hairdres-search {
	width: 100%;
	height: 65rpx;
	display: flex;
	z-index: 1;
	position: relative;
	justify-content: space-between;
	
	.t-search-box {
		border-radius: 100rpx;
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		.t-search-input {
			flex: 1;
			font-size: 24rpx;
			padding: 0 32rpx;
		}
		
		.icon-hairdressingguanbi {
			color: #616161;
			display: block;
			margin-right: 32rpx;
			font-size: 36rpx;
			font-family: icon-hairdressing;
		}
	}
}
</style>

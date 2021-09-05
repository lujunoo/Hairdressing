<template>
	<!-- 选择店铺标签 -->
	<view class="t-hairdres-merchant-label-list">
		<Card>
			<view class="label-list">
				<view class="title">
					环境设施（最多选5种）
				</view>
				<view class="label">
					<text @click="addLabel(item)" :class="{active: active.indexOf(item) !== -1}" v-for="item in 10" :key="item">免费停车</text>
				</view>
			</view>
			<view class="label-list">
				<view class="title">
					服务特色（最多选5种）
				</view>
				<view class="label">
					<text @click="addLabel(item)" :class="{active: active.indexOf(item) !== -1}" v-for="item in 10" :key="item">免费停车</text>
				</view>
			</view>
			<view class="label-list">
				<view class="title">
					装修风格（最多选5种）
				</view>
				<view class="label">
					<text @click="addLabel(item)" :class="{active: active.indexOf(item) !== -1}" v-for="item in 10" :key="item">免费停车</text>
				</view>
			</view>
			<view class="t-hairdres-button">
				确定选择
			</view>
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
				active: [1]
			}
		},
		methods: {
			addLabel (index) {
				if (this.active.indexOf(index) !== -1) {
					this.active.splice(this.active.indexOf(index), 1)
				} else {
					this.active.push(index)
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-label-list {
		.label-list {
			margin-bottom: 40rpx;
			.title {
				font-size: 28rpx;
				font-weight: bold;
				margin-bottom: 24rpx;
			}
			.label {
				display: flex;
				flex-wrap: wrap;
				margin: -12rpx;
				text {
					font-size: 24rpx;
					line-height: 1;
					color: #666666;
					border: solid 2rpx #aaa;
					margin: 12rpx;
					border-radius: 10rpx;
					padding: 10rpx 16rpx;
				}
				.active {
					background: #fc689a;
					border-color: #fc689a;
					color: #FFFFFF;
				}
			}
		}
	}
</style>

<template>
	<!-- 日程表 -->
	<view class="t-hairdres-schedule">
		<!-- 表头 -->
		<view class="table-heade">
			<text @click="onHead(item)" class="heade-th" v-for="(item,index) in head" :key="index">
				<text v-if="child" v-for="(child,index2) in item" :key="index2">
					{{child}}
				</text>
			</text>
		</view>
		<view class="table-body">
			<view v-for="(item,index) in body" :key="index" class="body-tr">
				<text @click="onBody(child)" :style="{ background:child.baColor, color: child.color }" v-for="(child,index2) in item" :key="index2">
					{{child.title}}
				</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props: {
			head: {
				type: Array,
				default: () => {
					return []
				}
			},
			body: {
				type: Array,
				default: () => {
					return []
				}
			},
		},
		methods: {
			onHead (data) {
				this.$emit('onHead',data)
			},
			onBody (data) {
				this.$emit('onBody',data)
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-schedule {
		font-size: 24rpx;
		border-left: solid 2rpx #aaa;
		.table-heade{
			display: flex;
			align-items: center;
			border-bottom: solid 2rpx #aaa;
			.heade-th {
				width: 80rpx;
				height: 60rpx;
				border-right: solid 2rpx #aaa;
				display: flex;
				flex-direction: column;
				justify-content: center;
				text {
					display: flex;
					align-items: center;
					flex-direction: column;
				}
			}
		}
		.table-body {
			display: flex;
			flex-direction: column;
			.body-tr {
				display: inherit;
				border-bottom: 1rpx solid #aaa;
				text {
					width: 80rpx;
					display: block;
					padding: 16rpx 0;
					text-align: center;
					border-right: 1rpx solid #aaa;
				}
			}
		}
	}
</style>

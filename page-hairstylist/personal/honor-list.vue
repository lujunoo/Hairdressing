<template>
	<!-- 荣誉墙 -->
	<view class="t-hairdres-user-personal-honor-list">
		<TabBar background="rgba(0,0,0,0)" isFlex :tabList="tabList" />
		<Card>
			<view class="honor-list">
				<view v-for="(item,index) in 10" :key="index" class="list-item">
					<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
					<text>荣誉名称荣誉名称荣誉名称</text>
				</view>
			</view>
		</Card>
		<fixedFooter hideLeft>
			<view @click="toDetail" slot="right" class="t-hairdres-button">
				<text class="iconfont">&#xe621;</text>
				<text>上传荣誉资质</text>
			</view>
		</fixedFooter>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	import TabBar from '@/components/TabBar'
	import fixedFooter from '@/components/fixedFooter'
	export default {
		components: {
			Card,
			TabBar,
			fixedFooter
		},
		data () {
			return {
				tabList: ['审核通过', '审核中', '审核不通过']
			}
		},
		methods: {
			toDetail () {
				uni.navigateTo({
					url: './add-honor'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-personal-honor-list {
		padding-bottom: 100rpx;
		font-size: 24rpx;
		.honor-list {
			display: flex;
			flex-wrap: wrap;
			.list-item {
				width: calc(50% - 16rpx);
				height: 216rpx;
				margin-right: 16rpx;
				overflow: hidden;
				position: relative;
				margin-bottom: 32rpx;
				text {
					background: rgba(0,0,0,0.3);
					color: #fff;
					display: block;
					position: absolute;
					bottom: 0;
					left: 0;
					width: calc(100% - 32rpx);
					line-height: 1;
					padding:  16rpx 24rpx;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
				image {
					width: 100%;
					height: 100%;
				}
				&:nth-child(2n) {
					margin-right: 0;
					margin-left: 16rpx;
				}
			}
		}
		.t-hairdres-button {
			width: 480rpx;
		}
	}
</style>

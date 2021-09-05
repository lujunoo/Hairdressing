<template>
	<!-- 我的作品 -->
	<view class="t-hairdres-user-hairstylist-my-creation">
		<TabBar isFlex background="rgba(0,0,0,0)" :tabList="tabList"/>
		<Card class="my-creation-list">
			<view @click="toDetail" v-for="(item,index) in 10"  :key="index" class="list-item">
				<image src="https://cdn.pixabay.com/photo/2021/07/21/04/35/woman-6482214_960_720.jpg" mode="aspectFill"></image>
				<text class="iconfont">&#xe606;</text>
			</view>
		</Card>
		<fixedFooter hideLeft>
			<view @click="toDetail" slot="right" class="t-hairdres-button">
				<text class="iconfont">&#xe621;</text>
				<text>上传作品</text>
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
				tabList: ['审核通过','审核中', '审核不通过']
			}
		},
		methods: {
			toDetail () {
				uni.navigateTo({
					url:'./add-creation'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-hairstylist-my-creation {
		padding-bottom: 100rpx;
		.t-hairdres-button {
			width: 480rpx;
		}
		.my-creation-list {
			display: flex;
			flex-wrap: wrap;
			.list-item {
				width: calc(50% - 12rpx);
				height: 360rpx;
				margin-bottom: 24rpx;
				margin-right: 12rpx;
				overflow: hidden;
				border-radius: 16rpx;
				position: relative;
				&:nth-child(2n) {
					margin-right: 0;
					margin-left: 12rpx;
				}
				image {
					width: 100%;
					height: 100%;
					display: block;
				}
				.iconfont {
					font-size: 40rpx;
					padding: 24rpx;
					position: absolute;
					top: 0rpx;
					right: 0rpx;
					display: block;
					z-index: 1;
					color: #db6bff;
				}
			}
		}
	}
</style>

<template>
	<!-- 荣誉墙 -->
	<view class="t-hairdres-honor">
		<Card>
			<Title v-if="hideTitle" @onClick="toHonor" showLeft title="荣誉证书"/>
			<view @click="toDetail" class="">
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				<text class="subtitle">中国美发美容协会第五届理事会理事单位</text>
				<text class="desc">文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍字介绍介绍文字介绍文字介绍字介绍介绍文字介绍文字介绍文绍文字介绍字介绍</text>
			</view>
		</Card>
	</view>
</template>

<script>
	import Title from '@/components/Title'
	import Card from '@/components/Card'
	export default {
		props: {
			hideTitle: {
				type:Boolean,
				default: false
			}
		},
		components: {
			Title,
			Card
		},
		methods: {
			toDetail () {
				uni.navigateTo({
					url: '../../../leaderboard-honor-detail'
				})
			},
			toHonor () {
				uni.navigateTo({
					url: '../../../leaderboard-honor'
				})
			},
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-honor {
		image {
			display: block;
			width: 100%;
			height: 400rpx;
			margin-bottom: 24rpx;
		}
		.subtitle {
			font-size: 28rpx;
			font-weight: bold;
			display: block;
			line-height: 1;
			margin-bottom: 24rpx;
		}
		.desc {
			font-size: 24rpx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
		.card-title {
			margin: -32rpx;
			margin-bottom: 0;
		}
	}
</style>

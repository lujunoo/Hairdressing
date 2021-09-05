<template>
	<!-- 招聘详情 -->
	<view class="t-hairdres-recruitment">
		<Card>
			<view class="subtitle">首席发型设计师</view>
			<view class="subtitle">月薪：<text class="color-red">¥6000-8000</text></view>
			<view class="subtitle">福利待遇：</view>
			<view class="label">
				<text v-for="(item,index) in 3" :key="index">周末双休</text>
			</view>
		</Card>
		<Card>
			<view class="list-item">
				<view class="subtitle">职位要求：</view>
				<view class="desc">
					1.职位要求职位要求职位要求职位要求职位要求职位要求职位要求职位要求职位要求；					2.职位要求职位要求职位要求职位要求					3.职位要求职位要求职位要求职位要求职位要求					4.职位要求职位要求职位要求
				</view>
			</view>
			<view class="list-item">
				<view class="subtitle">岗位职位：</view>
				<view class="desc">
					1.职位要求职位要求职位要求职位要求职位要求职位要求职位要求职位要求职位要求；
					2.职位要求职位要求职位要求职位要求
					3.职位要求职位要求职位要求职位要求职位要求
					4.职位要求职位要求职位要求
				</view>
			</view>
		</Card>
		<Card>
			<view class="list-item">
				<view class="subtitle">工作地点：</view>
				<view class="desc">
					贵州省遵义市汇川区珠海路曼哈顿时代公馆一单元九楼四号
				</view>
			</view>
			<view class="list-item">
				<view class="map">
					<map :scale="13" :markers="markers" :longitude="longitude" :latitude="latitude"></map>
				</view>
			</view>
			<view class="button">联系商家</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	export default {
		components: {
			Card
		},
		data() {
			return {
				longitude: 106.452804,
				latitude: 29.583123,
				markers: [
					{
						id:23452,
						longitude: 106.452804,
						latitude: 29.583123,
						title:'卢大爷在此'
					}
				]
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-recruitment {
		.button {
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			font-size: 28rpx;
			font-weight: bold;
			color: #FFFFFF;
			background: #fc689a;
			border-radius: 10rpx;
			margin-top: 56rpx;
		}
		.map {
			height: 300rpx;
			map {
				height: 100%
			}
		}
		.subtitle {
			font-weight: bold;
			font-size: 28rpx;
			line-height: 1;
			margin-bottom: 32rpx;
		}
		.list-item {
			display: flex;
			justify-content: start;
			margin-top: 40rpx;
			&:first-child{
				margin: 0;
			}
			.subtitle {
				width: 150rpx;
				transform: translateY(10rpx);
			}
			.desc {
				flex: 1;
				font-size: 28rpx;
				color: #666;
			}
		}
		.label {
			display: flex;
			flex-wrap: wrap;
			text {
				font-size: 24rpx;
				color: #FFFFFF;
				background: #ffc0c0;
				border-radius: 5rpx;
				margin-left: 16rpx;
				line-height: 1;
				padding: 8rpx 16rpx;
			}
		}
	}
</style>

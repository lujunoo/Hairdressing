<template>
	<!-- 教师详情 -->
	<view class="t-hairdres-school-teachers-project-detail">
		<Card class="card">
			<Banner height="360" width="690" class="banner" :images="bannerList"/>
			<Title title="课程名称"></Title>
			<view class="price">
				<text>¥8888<text>¥12900</text></text>
			</view>
		</Card>
		<Card class="card">
			<Title class="card-title" title="课程详情"></Title>
			<view class="desc">
				         老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍。
		 老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍。
		 老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍老师介绍。
			</view>
		</Card>
	</view>
</template>
<script>
	import Banner from '@/components/Banner'
	import Title from '@/components/Title'
	import Collection from '@/components/PictureCollection'
	import TabBar from '@/components/TabBar'
	import Card from '@/components/Card'
	export default {
		components:{
			Banner,
			Title,
			Collection,
			Card,
			TabBar
		},
		data () {
			return {
				bannerList: [
					'https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg'
				],
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-school-teachers-project-detail {
		.card {
			padding: 32rpx;
			margin-bottom: 32rpx;
			.card-title {
				margin-top: -32rpx;
			}
			.price {
				display: flex;
				justify-content: space-between;
				font-size: 28rpx;
				text {
					&:first-child {
						font-weight: bold;
						color: #ff0000;
						
						text {
							font-weight: 500;
							color: #999;
							position: relative;
							margin-left: 32rpx;
							
							&::after {
								content: "";
								width: 100%;
								height: 2rpx;
								background: #999;
								position: absolute;
								top: 50%;
								left: 0;
							}
						}
					}
				}
			}
		}
		
		.desc {
			font-size: 24rpx;
			line-height: 1.8;
			margin-top: -16rpx;
		}
		
		.banner {
			margin: -32rpx -32rpx 0 -32rpx;
			border-radius: 10rpx 10rpx 0 0 ;
			overflow: hidden;
		}
	}
</style>

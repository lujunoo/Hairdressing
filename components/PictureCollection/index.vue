<template>
	<!-- 图片轮播预览 -->
	<view class="t-hairdres-collection">
		<view :style="{height: `${coverHeight}rpx`}" class="cover">
			<image :src="bannerList[current]" mode="aspectFill"></image>
		</view>
		<swiper :display-multiple-items="multiple" class="swiper">
			<swiper-item @click="setCurrent(index)" :class="{active: current === index}" v-for="(item,index) in bannerList" :key="index">
				<view class="swiper-item">
					<image :src="item" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: 'PictureCollection',
		props: {
			coverHeight: {
				type:Number,
				default: 400
			},
			multiple: {
				type: Number,
				default: 4
			}
		},
		data () {
			return {
				current: 0,
				bannerList: [
					'https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg',
					'https://cdn.pixabay.com/photo/2021/07/12/11/09/sea-6406047_960_720.jpg',
					'https://cdn.pixabay.com/photo/2021/07/16/09/54/travel-6470467_960_720.jpg',
					'https://cdn.pixabay.com/photo/2021/07/07/22/29/badlands-national-park-6395444_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg'
				],
			}
		},
		methods: {
			setCurrent (data) {
				this.current = data
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-collection {
		
		.swiper {
			width: 100%;
			height: 135rpx;
			margin-top: 24rpx;
			
			.swiper-item {
				width: calc(100% - 20rpx);
				height: calc(100% - 6rpx);
				border-radius: 8rpx;
				overflow: hidden;
				margin: 0 16rpx;
				transition: 0.3s;
				border: solid 1px rgba(0,0,0,0);
				transform: scale(0.9);
				
				image {
					display: block;
					width: 100%;
					height: 100%;
				}
			}
			
			.active {
				.swiper-item {
					transition: 0.3s;
					transform: scale(1);
					border: solid 2rpx #fc689a;
				}
			}
		}
		.cover {
			width: 100%;
			height: 400rpx;
			border-radius: 16rpx;
			overflow: hidden;
			
			image {
				width: 100%;
				height: 100%;
				display: block;
			}
		}
	}
</style>

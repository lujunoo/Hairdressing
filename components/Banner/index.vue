<template>
	<view :style="{ height: setHeight }" class="t-hairdres-banner">
		<swiper class="swiper" indicator-dots indicator-active-color="#fff" indicator-color="rgba(255,255,255,0.5)" :vertical="vertical" autoplay interval="5000" duration="300">
			<swiper-item v-for="(item, index) in images" :key="index">
				<view class="swiper-item">
					<image class="swiper-item-image" :src="item" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: 'Banner',
		props: {
			width: {
				type: String,
				default: 'auto'
			},
			height: {
				type: String,
				default: '400rpx'
			},
			images: {
				type: Array,
				default: () => {
					return []
				}
			},
			vertical: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			setWidth () {
				if (this.width.indexOf('%') !== -1 || this.width.indexOf('px') !== -1 || this.width.indexOf('rpx') !== -1 || this.width.indexOf('auto')) {
					return this.width
				} else {
					return `${this.width}rpx`
				}
			},
			setHeight () {
				if (this.height.indexOf('%') !== -1 || this.height.indexOf('px') !== -1 || this.height.indexOf('rpx') !== -1) {
					return this.height
				} else {
					return `${this.height}rpx`
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-banner {
		background: #f3f5f9;
		
		.swiper {
			width: 100%;
			height: 100%;
			
			.swiper-item {
				width: 100%;
				height: 100%;
				
				.swiper-item-image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>

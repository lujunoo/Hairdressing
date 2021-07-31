<template>
	<view class="t-hairdres-upload" :style="{ width: `${width}rpx`, height: `${height}rpx` }">
		<view v-for="(item,index) in imageList" :key="index" class="image">
			<image :src="item" mode="aspectFill"></image>
			<text @click="deleteImage(index)" class="iconfont">&#xe60f;</text>
		</view>
		<view @click="openImage" class="uplaod-button">
			<text class="iconfont">&#xe644;</text>
			<text>{{title}}</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:'Upload',
		props: {
			title: {
				type:String,
				default:'上传作品'
			},
			width: {
				type: Number,
				type: 140
			},
			height: {
				type: Number,
				type: 140
			}
		},
		data () {
			return {
				imageList: [
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg'
				]
			}
		},
		methods: {
			openImage () {
				const that = this
				uni.chooseImage({
					success(data) {
						data.tempFilePaths.forEach(item => {
							that.imageList.push(item)
						})
					}
				})
			},
			deleteImage (index) {
				this.imageList.splice(index, 1)
			}
		}
	}
</script>

<style scoped lang="less">
.t-hairdres-upload {
	display: flex;
	flex-wrap: wrap;
	
	.image {
		width: 140rpx;
		height: 140rpx;
		margin-right: 16rpx;
		margin-bottom: 16rpx;
		position: relative;
		
		.iconfont {
			display: block;
			color: #FFFFFF;
			position: absolute;
			top: -10rpx;
			right: -10rpx;
			font-size: 20rpx;
			text-align: center;
			line-height: 32rpx;
			padding-left: 6rpx;
			width: 28rpx;
			height: 32rpx;
			border-radius: 40rpx;
			background: #FC689A;
			font-family: icon-hairdressing;
		}
		
		image {
			border-radius: 8rpx;
			width: 100%;
			height: 100%;
		}
	}
	.uplaod-button {
		width: 140rpx;
		height: 140rpx;
		border-radius: 8rpx;
		background: #EEEEEE;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 20rpx;
		.iconfont {
			font-size: 60rpx;
			transform: scale(1.2);
			color: #999999;
			font-family: icon-hairdressing;
		}
	}
}
</style>

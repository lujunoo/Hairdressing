<template>
	<view class="t-hairdres-upload" :style="{ width: `${width}rpx`, height: `${height}rpx` }">
		<view v-for="(item,index) in imageList" :key="'img'+index" class="image">
			<image :src="item" mode="aspectFill"></image>
			<text @click="deleteItem(1,index)" class="iconfont">&#xe60f;</text>
		</view>
		<view @click="openImage" class="uplaod-button">
			<text class="iconfont">&#xe644;</text>
			<text>{{title}}</text>
		</view>
		<view v-for="(item,index) in viewList" :key="'video'+index" class="image">
			<video :controls='false' :show-center-play-btn="false" :show-play-btn="false" :src="item" />
			<text @click="deleteItem(2,index)" class="iconfont">&#xe60f;</text>
		</view>
		<view v-if="showVideo" @click="openVideo" class="uplaod-button">
			<text class="iconfont iconfont2">&#xe78e;</text>
			<text>上传视频</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:'Upload',
		props: {
			title: {
				type:String,
				default:'上传图片'
			},
			width: {
				type: Number,
				type: 140
			},
			height: {
				type: Number,
				type: 140
			},
			showVideo: {
				type: Boolean,
				default: false
			}
		},
		data () {
			return {
				imageList: [
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg',
					'https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg'
				],
				viewList: []
			}
		},
		methods: {
			openVideo () {
				const that = this
				uni.chooseVideo({
					success(data) {
						console.log(data)
						that.viewList.push(data.tempFilePath)
					}
				})
			},
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
			deleteItem (type,index) {
				if (type === 1) {
					this.imageList.splice(index, 1)
				} else {
					this.viewList.splice(index, 1)
				}
				
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
		
		image,video {
			border-radius: 8rpx;
			width: 100%;
			height: 100%;
		}
	}
	.uplaod-button {
		width: 140rpx;
		height: 140rpx;
		margin-right: 16rpx;
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
		.iconfont2 {
			transform: scale(.75);
		}
	}
}
</style>

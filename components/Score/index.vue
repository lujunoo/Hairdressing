<template>
	<!-- 评分 -->
	<view class="t-hairdres-score">
		<text class="iconfont"  v-for="(item,index) in parseInt(score)" :key="index" >&#xe62b;</text>
		<text class="iconfont iconfont2" v-if="showGray"  v-for="(item2,index2) in parseInt(5 - score)" :key="'t_'+index2" >&#xe62b;</text>
		<text class="score" >{{getString}}</text>
	</view>
</template>

<script>
	export default {
		props:{
			score: {
				type:Number | String,
			    default: 5
			},
			text: {
				type: String,
				default: null
			},
			showGray: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			getString () {
				if (this.text) {
					return this.text
				}
				return `${this.score}分`
			}
		}
	}
</script>

<style scoped lang="less">
	.flexScore {
		display: flex;
		justify-content: space-between;
	}
	.t-hairdres-score {
		line-height: 1;
		.number {
			line-height: 1;
		}
		.iconfont {
			font-size: 24rpx;
			color: #ea9518;
		}
		.iconfont2 {
			color: #ccc;
		}
		
		.score {
			font-size: 24rpx;
			color: #666666;
			display: inline-block;
			margin-left: 16rpx;
		}
	}
</style>

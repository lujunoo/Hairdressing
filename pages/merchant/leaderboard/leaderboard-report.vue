<template>
	<!-- 投诉举报 -->
	<view class="t-hairdres-shop-work-complaint">
		<card>
			<view class="form-data">
				<view class="form-item">
					<view class="label">
						<text>图片</text>
					</view>
					<Upload/>
					<text class="count">{{image.length}}/4</text>
				</view>
				<view class="form-item">
					<view class="label">
						<text>投诉内容：</text>
					</view>
					<view class="input">
						<textarea maxlength="300" v-model="textarea" placeholder="发帖内容" />
					</view>
					<text class="count">{{textarea.length}}/300</text>
				</view>
				<view class="form-item">
					<button type="default">确认提交</button>
				</view>
			</view>
		</card>
	</view>
</template>

<script>
	import card from '@/components/Card'
	import Upload from '@/components/Upload'
	export default {
		components:{
			card,
			Upload
		},
		data () {
			return {
				image:[],
				textarea:''
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-shop-work-complaint {
		.count {
			text-align: right;
			display: block;
			font-size: 24rpx;
		}
		button {
			margin: 120rpx 0;
		}
	}
</style>

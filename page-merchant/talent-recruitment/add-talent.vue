<template>
	<!-- 发布招聘 -->
	<view class="t-hairdres-merchant-add-talent">
		<Card>
			<view class="form-data direction">
				<text class="label">职位名称</text>
				<view class="right">
					<input type="text" placeholder="请填写内容" value="" style="width: 100%; border: none;text-align: left;" />
				</view>
			</view>
			<view class="form-data direction">
				<text class="label">月薪</text>
				<view class="right">
					<input type="text" placeholder="请填写内容" value="" />
					<text class="border"></text>
					<input type="text" placeholder="请填写内容" value="" />
					<text>元</text>
				</view>
			</view>
			<view class="form-data">
				<text class="label">职位要求</text>
				<view class="right">
					<textarea value="" placeholder="职位要求" />
				</view>
			</view>
			<view class="form-data">
				<text class="label">岗位职责</text>
				<view class="right">
					<textarea value="" placeholder="岗位职责" />
				</view>
			</view>
			<view class="form-data direction">
				<text class="label">工作地点</text>
				<view class="right">
					<input type="text" placeholder="请填写内容" value="" style="width: 80%; border: none;text-align: left;" />
					<text class="color-red">定位</text>
				</view>
			</view>
			<view class="form-data">
				<map :scale="13" :markers="markers" :longitude="longitude" :latitude="latitude"></map>
			</view>
			<view class="form-data">
				<text class="label">福利待遇</text>
				<view class="right">
					<text :class="{acitve: acitve.indexOf(index) !== -1 }" @click="setActive(index)" v-for="(item,index) in 20" :key="index" class="label-item">交通补助</text>
				</view>
			</view>
			<view class="t-hairdres-button">
				确定发布
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/Card'
	export default {
		components:{
			Card
		},
		data () {
			return {
				acitve: [0],
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
		},
		methods: {
			setActive (index) {
				if (this.acitve.indexOf(index) !== -1) {
					this.acitve.splice(this.acitve.indexOf(index), 1)
				} else {
					this.acitve.push(index)
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-merchant-add-talent {
		font-size: 24rpx;
		.form-data {
			flex-direction: ;
			.label {
				font-weight: bold;
				width: 120rpx;
			}
			input {
				font-size: 24rpx;
				text-align: left;
			}
			textarea {
				font-size: 24rpx;
				padding: 16rpx;
				width: calc(100% - 32rpx);
				height: 200rpx;
				background-color: #fff3e2;
				border-radius: 10rpx;
				border: dashed 4rpx #fc689a;
				margin-top: 24rpx;
			}
			.color-red {
				margin-left: 24rpx;
			}
			.label-item {
				border-radius: 10rpx;
				padding: 8rpx 16rpx;
				line-height: 1;
				margin-right: 16rpx;
				margin-top: 16rpx;
				display: inline-block;
				color: #555;
				border: solid 2rpx #888;
			}
			.acitve {
				color: #fff;
				background: #fc689a;
				border-color: #fc689a;
			}
			padding-bottom: 32rpx;
			margin-bottom: 32rpx;
			border-bottom: solid 2rpx #eee;
			&:last-child {
				margin-bottom: 0;
				border: none;
			}
		}
		.direction {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.right {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				.border {
					margin: 0 16rpx;
					width: 30rpx;
					height: 2rpx;
					background: #eee;
				}
				input {
					height: 50rpx;
					text-align: center;
					width: 140rpx;
					border-radius: 10rpx;
					border: solid 2rpx #eee;
				}
			}
		}
	}
</style>

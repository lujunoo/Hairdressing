<template>
	<!-- 帮助中心 -->
	<view class="t-hairdres-user-setting-help-center">
		<Card>
			<view class="title">
				常见问题
			</view>
			<view :class="{ active: active === index }" @click="setActive(index)" v-for="(item,index) in 10" :key="index" class="list-item">
				<view class="sub-title">
					<text>账号被盗了怎么办？能找回吗？</text>
					<text class="iconfont">&#xe731;</text>
				</view>
				<view class="list-content">
					<text></text>
					账号被盗后应在第一时间联系平台进行冻结，提供相应资料给平台，平台协助用户找回账户。用户在日常使用中，应注册保护自己的密码案例性，不随意泄漏给他人。
				</view>
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
				active: null
			}
		},
		methods: {
			setActive (index) {
				if (this.active === index) {
					this.active = null
				} else {
					this.active = index
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-setting-help-center {
		.list-item {
			font-size: 24rpx;
			margin-bottom: 32rpx;
			.sub-title {
				height: 70rpx;
				background-color: #eeeeee;
				border-radius: 20rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 32rpx;
			}
			.list-content {
				transition: 0.5s;
				height: auto;
				transition: 0.5s;
				max-height: 0;
				text-indent: 2em;
				overflow: hidden;
				text {
					display: block;
					margin-bottom: 24rpx;
				}
			}
			&:last-child {
				margin-bottom: 0;
			}
			.iconfont {
				font-size: 40rpx;
				transition: 0.5s;
			}
		}
		.active {
			.sub-title {
				.iconfont {
					transition: 0.5s;
					transform: rotate(180deg);
				}
			}
			.list-content {
				max-height: 300rpx;
				transition: 0.5s;
			}
		}
		.title {
			font-size: 28rpx;
			font-weight: bold;
			margin-bottom: 32rpx;
		}
	}
</style>

<template>
	<!-- 粉丝,关注用户 -->
	<view class="t-hairdres-user-fans">
		<view v-for="(item,index) in 20" :key="index" class="item">
			<view class="user">
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				<text class="name">风中捉影</text>
			</view>
			<text class="address">重庆江北</text>
			<text class="btn">关注Ta</text>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="less">
	.t-hairdres-user-fans {
		margin: 32rpx;
		padding: 32rpx;
		background: #FFFFFF;
		
		.item {
			margin-bottom: 32rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			&:last-child {
				margin-bottom: 0;
			}
			
			.btn {
				text-align: center;
				line-height: 40rpx;
				font-size: 24rpx;
				color: #fc699a;
				width: 120rpx;
				height: 40rpx;
				border-radius: 10rpx;
				border: solid 2rpx #fc699a;
			}
			
			.address {
				font-size: 24rpx;
				color: #666666;
			}
			
			.user {
				display: flex;
				align-items: center;
				
				.name {
					font-weight: bold;
					font-size: 28rpx;
				}
				image {
					border-radius: 100rpx;
					margin-right: 24rpx;
					display: block;
					height: 60rpx;
					width: 60rpx;
				}
			}
		}
	}
</style>

<template>
	<!-- 预约详情 -->
	<view class="t-hairdres-user-information">
		<view class="string">预约详情</view>
		<Card>
			<view class="title">顾客信息</view>
			<view class="list-item">
				<text class="label">姓名</text>
				<text class="right">王先生</text>
			</view>
			<view class="list-item">
				<text class="label">性别</text>
				<text class="right">男</text>
			</view>
			<view class="list-item">
				<text class="label">手机号</text>
				<text class="right">18888888888</text>
			</view>
			<view class="list-item">
				<text class="label">职业</text>
				<text class="right">学生</text>
			</view>
		</Card>
		<Card>
			<view class="title">顾客选择的优惠菜单</view>
			<view class="list-item">
				<text class="label">总价合计</text>
				<view class="right">
					<text class="oldprice">原价：¥ 225.00</text>
					<text class="color-purple">¥ 185.00</text>
				</view>
			</view>
			<view class="list-item">
				<text class="label">预约项目</text>
				<view class="right">
					<text class="color-yellow">已支付订单全额</text>
				</view>
			</view>
			<view class="project-item" >
				<image src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				<view class="content">
					<view class="info">
						<text class="title">施华蔻烫染直3选1施华蔻烫染直3选1施华蔻烫染直3选1</text>
					</view>
					<view class="info">
						<text class="color-theme">￥1000<text class="oldprice">￥1000</text></text>
						<text>已售<text class="color-yellow">800</text></text>
					</view>
				</view>
			</view>
			<view class="list-item">
				<text class="label">操作用时预计：<text class="color-red">3.5小时</text></text>
			</view>
			<view class="list-item">
				<text class="label">预约时间</text>
				<view class="right">
					<text>2021年04月06日 9:30到店</text>
				</view>
			</view>
			<view class="list-item">
				<text class="label">
					<text class="iconfont">&#xe787;</text>
					<text class="address">重庆市江北区建新北路38号25-15</text>
					<text class="iconfont">&#xe744;</text>
				</text>
			</view>
		</Card>
		<Card>
			<view class="title">详细资料</view>
			<view class="list-item">
				<text class="label">爱好</text>
				<text class="right">看电影，听音乐，打游戏</text>
			</view>
			<view class="list-item">
				<text class="label">所在城市</text>
				<text class="right">贵州遵义</text>
			</view>
			<view class="list-item">
				<text class="label">经常在家里洗发造型</text>
			</view>
			<view class="list-item">
				<text class="label">自己会打理头发</text>
			</view>
			<view class="list-item">
				<view class="label">
					<text >家里有的洗护用品：</text>
					洗发露，护发素，弹力素
				</view>
			</view>
			<view class="list-item">
				<view class="label">
					<text >家里有的造型产品和工具：</text>
					电吹风，卷发棒，夹发板
				</view>
			</view>
			<view class="list-item">
				<view>做过最喜欢的发型</view>
			</view>
			<view class="list-item">
				<view class="image-list">
					<image v-for="(item,index) in 7" :key="index" src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				</view>
			</view>
			<view class="list-item">
				<view>做过最不喜欢的发型</view>
			</view>
			<view class="list-item">
				<view class="image-list">
					<image v-for="(item,index) in 7" :key="index" src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				</view>
			</view>
			<view class="list-item">
				<view>这次最想做的发型</view>
			</view>
			<view class="list-item">
				<view class="image-list">
					<image v-for="(item,index) in 7" :key="index" src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				</view>
			</view>
			<view class="list-item">
				<view>顾客今天的发型</view>
			</view>
			<view class="list-item">
				<view class="image-list">
					<image v-for="(item,index) in 7" :key="index" src="https://cdn.pixabay.com/photo/2020/05/30/07/15/mountains-5237939_960_720.jpg" mode="aspectFill"></image>
				</view>
			</view>
		</Card>
	</view>
</template>

<script>
	import Card from "@/components/Card"
	export default {
		components: {
			Card
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-user-information {
		font-size: 24rpx;
		.project-item {
			display: flex;
			justify-content: space-between;
			position: relative;
			align-items: center;
			background: #ffe4ed;
			padding: 24rpx;
			border-radius: 10rpx;
			margin-bottom: 32rpx;
			image {
				width: 170rpx;
				height: 120rpx;
				background-color: #f00055;
				border-radius: 10rpx;
				margin-right: 24rpx;
			}
			.content {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				font-size: 24rpx;
				min-height: 120rpx;
				
				.info {
					display: flex;
					justify-content: space-between;
					color: #666;
					.title {
						color: #333333;
						font-size: 28rpx;
						line-height: 1.3;
					}
					.color-theme {
						font-size: 28rpx;
						text {
							margin-left: 16rpx;
							font-size: 24rpx;
						}
					}
				}
			}
		}
		.list-item {
			display: flex;
			margin-bottom: 32rpx;
			&:last-child {
				margin-bottom: 0;
			}
			.image-list {
				display: flex;
				flex-wrap: wrap;
				image {
					width: 146rpx;
					height: 146rpx;
					background-color: #fc6968;
					border-radius: 10rpx;
					margin-right: 14rpx;
					margin-bottom: 15rpx;
					&:nth-child(4n) {
						margin-right: 0;
					}
				}
			}
			.iconfont {
				display: inline-block;
				color: #fc689a;
				transform: scale(1.3);
			}
			.address {
				margin: 0 16rpx;
			}
			.right {
				flex: 2;
				display: flex;
				.oldprice {
					margin-right: 32rpx;
				}
			}
			.label {
				flex: 1;
			}
		}
		.title {
			font-size: 28rpx;
			color: #000;
			font-weight: bold;
			margin-bottom: 32rpx;
		}
		.string {
			background: #ffb1b1;
			color: #FFFFFF;
			font-size: 28rpx;
			font-weight: bold;
			line-height: 1;
			padding: 16rpx 32rpx;
			margin: 32rpx;
			border-radius: 10rpx;
		}
	}
</style>

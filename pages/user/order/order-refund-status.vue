<template>
	<!-- 退款状态 -->
    <view class="t-hairdres-user-order-status">
        <Card>
            <view class="title">
                <text class="iconfont">&#xe634;</text>
                <text>退款中</text>
            </view>
            <view class="list-item">
                <text>退款金额</text>
                <text>¥ 160.00</text>
            </view>
            <view class="list-item">
                <text>退回账户</text>
                <text>微信</text>
            </view>
            <view class="list-item">
                <text>到账时间</text>
                <text>24小时内到账</text>
            </view>
            <view class="progress">
                <text class="subtitle">退款进度</text>
                <view class="progress-list">
                    <view v-for="item in 3" :key="item" class="progress-item">
                        <text class="item-title">提交退款申请</text>
                        <text>审核说明审核说明审核说明审核说明审核说明审核说明审核说明审核说明审核说明审核说明审核说明审核说明审核说明审核说明审核说明</text>
                        <text class="time">2021-03-22 12:35:57</text>
                    </view>
                </view>
            </view>
        </Card>
    </view>
</template>
<script>
import Card from '@/components/Card'
export default {
    components: {
        Card
    }
}
</script>
<style lang="less" scoped>
    .t-hairdres-user-order-status {
        .progress {
            .subtitle {
                font-size: 28rpx;
                font-weight: bold;
            }
            .progress-list {
                border-left: solid 4rpx #fc689a;
                padding-left: 32rpx;
                font-size: 24rpx;
                color: #888;
                margin-top: 32rpx;
                margin-left: 16rpx;
                .progress-item {
                    margin-bottom: 32rpx;
                }
                text {
                    display: block;
                }
                .time {
                    margin-top: 16rpx;
                    color: #000;
                }
                .item-title {
                    color: #000;
                    margin-bottom: 8rpx;
                    position: relative;
                    &::after {
                        content: "";
                        width: 24rpx;
                        height: 24rpx;
                        background-color: #fc689a;
                        border-radius: 100rpx;
                        position: absolute;
                        top: 0;
                        left: -44rpx;
                    }
                }
            }
        }
        .list-item {
            font-size: 24rpx;
            color: #666;
            line-height: 1;
            text {
                margin-bottom: 32rpx;
                &:first-child {
                    display: inline-block;
                    margin-right: 130rpx;
                }
            }
        }
        .title {
            padding-top: 8rpx;
            padding-bottom: 40rpx;
            margin-bottom: 40rpx;
            border-bottom: solid 2rpx #eee;
            font-size: 32rpx;
            display: flex;
            align-items: center;
            .iconfont {
                font-size: 50rpx;
                color: #fc689a;
                margin-right: 16rpx;
            }
        }
    }
</style>
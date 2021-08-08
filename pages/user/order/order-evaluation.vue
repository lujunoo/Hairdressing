<template>
    <!-- 订单评价 -->
    <view class="t-hairdres-order-evaluation">
        <Card>
            <!-- 评分 -->
            <view class="evaluation-score">
                <text>评分</text>
                <view class="images">
                    <image
                        @click="setScore(0,item)"
						v-for="item in score"
						:key="item"
                        :src="getSrc"
                        mode="aspectFill"
                    />
					<image
                        @click="setScore(1,item)"
						v-for="item in 5-score"
						:key="item"
					    src="../../../static/images/order-icon0.png"
					    mode="aspectFill"
					/>
                </view>
                <text>{{getLevel}}</text>
            </view>
            <!-- 评价内容 -->
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <Upload showVideo/>
            <view class="label-list">
                <text class="title">评论标签</text>
                <text :class="{active:active.includes(item)}" v-for="item in 10" @click="setActive(item)" :key="item" class="label-item">服务热情</text>
            </view>
            <view class="t-hairdres-button">发布</view>
        </Card>
    </view>
</template>

<script>
    import Card from '@/components/Card'
    import Upload from '@/components/Upload'
    export default {
        components: {
            Card,
            Upload
        },
		data () {
			return {
				score: 4,
                active:[]
			}
		},
		computed: {
			getSrc() {
				return require(`../../../static/images/order-icon${this.score}.png`)
			},
            getLevel() {
                let string = ''
                switch (this.score) {
                    case 1:
                        string = '非常差'
                        break;
                    case 2:
                        string = '差'
                        break;
                    case 3:
                        string = '一般'
                        break;
                    case 4:
                        string = '满意'
                        break;
                    default:
                        string = '非常满意'
                        break;
                }
                return string
            }
		},
        methods: {
            setActive (item) {
                if (this.active.includes(item)) {
                    this.active.splice(this.active.indexOf(item), 1)
                    return false
                }
                this.active.push(item)
            },
            setScore (type, item) {
                // 减分
                if (type === 0) {
                    this.score = item
                } else {
                    this.score += item
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .t-hairdres-order-evaluation {
        .t-hairdres-button {
            margin: 80rpx 60rpx;
        }
        .label-list {
            padding-top: 16px;
            .title {
                display: block;
                font-size: 28rpx;
                font-weight: bold;
            }
            .label-item {
                display: inline-block;
                font-size: 24rpx;
                color: #fff;
                line-height: 1;
                border-radius: 100rpx;
                padding: 8rpx 24rpx;
                margin-right: 16rpx;
                margin-top: 16rpx;
                background-color: #ffe4e4;
            }
            .active {
                background-color: #fcabc7;
            }
        }
        textarea {
            padding: 16rpx;
            font-size: 28rpx;
            height: 200rpx;
            background-color: #fff3e2;
            border-radius: 10rpx;
            border: dashed 4rpx #f95abf;
            margin: 32rpx 0;
        }
        .evaluation-score {
            display: flex;
            justify-content: center;
            align-items: center;
            .images {
                display: flex;
                align-items: center;
            }
            text {
                font-size: 24rpx;
                margin: 0 24rpx;
            }
            image {
                width: 50rpx;
                height: 50rpx;
                border-radius: 100rpx;
                display: block;
                margin: 0 8rpx;
            }
        }
    }
</style>

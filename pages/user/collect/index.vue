<template>
	<!-- 收藏 -->
    <view class="t-hairdres-user-collect">
        <TabBar isFlex @onClick="getIndex" :tabList="tabList"/>
        <Card>
            <!-- 瀑布流 -->
            <view :class="{'t-hairdres-waterfallsflow2': active === 1, 't-hairdres-waterfallsflow': active === 0 }" >
                <view @click="toDetail(item)" v-if="index % 2=== 0" class="item" v-for="(item,index) in list" :key="index" >
                    <image v-if="active === 0" :src="item" mode="widthFix"></image>
                    <image v-else :src="item" mode="aspectFill"></image>
                    <!-- 发型师 -->
                    <view :class="{userinfo2: active === 1 }" class="userinfo">
                        <view class="left">
                            <view v-if="active === 0" class="cover">
                                <image src="https://cdn.pixabay.com/photo/2021/07/02/03/19/panpipe-6380762_960_720.jpg" mode="aspectFill" />
                            </view>
                            <text>呢称</text>
                        </view>
                        <text class="iconfont">&#xe62b;</text>
                    </view>
                </view>
                <view @click="toDetail(item)"  v-if="index % 2!== 0" class="item" v-for="(item,index) in list" :key="index" >
                    <image v-if="active === 0" :src="item" mode="widthFix"></image>
                    <image v-else :src="item" mode="aspectFill"></image>
                    <!-- 发型师 -->
                    <view :class="{userinfo2: active === 1 }" class="userinfo">
                        <view class="left">
                            <view v-if="active === 0" class="cover">
                                <image src="https://cdn.pixabay.com/photo/2021/07/02/03/19/panpipe-6380762_960_720.jpg" mode="aspectFill" />
                            </view>
                            <text>呢称</text>
                        </view>
                        <text class="iconfont">&#xe62b;</text>
                    </view>
                </view>
            </view>
        </Card>
    </view>    
</template>
<script>
import Card from '@/components/Card'
import TabBar from '@/components/TabBar'
export default {
    components: {
        Card,
        TabBar
    },
    data () {
        return {
            tabList:['作品','发型师'],
            active: 0,
            list:[
                'https://cdn.pixabay.com/photo/2021/07/02/03/19/panpipe-6380762_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/07/21/04/35/woman-6482214_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/07/05/11/23/palmtrees-6388901_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/07/15/08/44/town-6467851_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/07/02/03/19/panpipe-6380762_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/07/21/04/35/woman-6482214_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/07/05/11/23/palmtrees-6388901_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/07/15/08/44/town-6467851_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_960_720.jpg',
            ]
        }
    },
    methods: {
		toDetail () {
			if (this.active === 0) {
				uni.navigateTo({
					url:'../../find/work-detail/index'
				})
			} else {
				uni.navigateTo({
					url:'../../merchant/leaderboard/leaderboard-hairstylist-detail'
				})
			}
		},
        getIndex (index) {
            this.active = index
        }
    }
}
</script>
<style lang="less" scoped>
.t-hairdres-user-collect {
    .t-hairdres-waterfallsflow,.t-hairdres-waterfallsflow2 {
		column-count: 2;
		column-gap: 24rpx;
        .userinfo {
            position: absolute;
            bottom: 0;
            left: 0;
            width: calc(100% - 64rpx);
            background: rgba(255, 120, 57, 0.4);
            display: flex;
            align-items: center;
            padding: 16rpx 32rpx;
            justify-content: space-between;
            .left {
                display: flex;
                align-items: center;
            }
            .cover {
                width: 40rpx;
                height: 40rpx;
                border-radius: 50rpx; 
                overflow: hidden;
                margin-right: 16rpx;
                image {
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }
            text {
                display: block;
                font-size: 24rpx;
            }
            .iconfont {
                color: #fc689a;
                font-size: 32rpx;
            }
        }

        .userinfo2 {
            background: rgba(0, 0, 0, 0.4);

            text {
                color: #fff;
            }
        }
		
		.item {
			margin-bottom: 24rpx;
			border-radius: 16rpx;
			position: relative;
			overflow: hidden;
			
			image {
				width: 100%;
				display: block;
			}
		}
	}
    .t-hairdres-waterfallsflow2 {
        column-count: none;
		column-gap: none;
        .item {
            height: 360rpx;
            image {
                height: 100%;
            }
        }
    }
}
</style>
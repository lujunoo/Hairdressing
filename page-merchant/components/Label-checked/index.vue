<template>
	<!-- 选择标签 -->
	<view class="t-hairdres-label">
		<text :class="{ active: ischecked ? checked === index : checkedlist.indexOf(index) !== -1 }" @click="setActive(index)" v-for="(item,index) in labels" :key='index' >{{item}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			labels: {
				type:Array,
				default: ()=> {
					return []
				}
			},
			// 是否单选
			ischecked: {
				type: Boolean,
				default: true
			}
		},
		data () {
			return {
				checked: 0,
				checkedlist:[0]
			}
		},
		methods: {
			setActive (index) {
				if (this.ischecked) {
					this.checked = index
				} else {
					if (this.checkedlist.includes(index)) {
						this.checkedlist.splice(this.checkedlist.indexOf(index), 1)
					} else {
						this.checkedlist.push(index)
					}
				}
				this.$emit('result', this.ischecked ? this.checked : this.checkedlist)
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-label {
		text {
			font-size: 24rpx;
			color: #666666;
			line-height: 1;
			border: solid 2rpx #bfbfbf;
			line-height: 1;
			display: inline-block;
			margin-right: 24rpx;
			margin-top: 24rpx;
			padding: 12rpx 32rpx;
			border-radius: 16rpx;
		}
		.active {
			background: #fc689a;
			color: #fff;
			border-color: #fc689a;
		}
	}
</style>

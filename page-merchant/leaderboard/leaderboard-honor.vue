<template>
	<!-- 荣誉列表 -->
	<view class="t-hairdres-hairstylist">
		<view @click="toDetail" v-for="(item,index) in 10" :key="index" class="list-item">
			<Honor/>
		</view>
	</view>
</template>

<script>
	import Honor from '@/components/Honor'
	export default {
		components:{
			Honor
		},
		methods: {
			toDetail () {
				uni.navigateTo({
					url: './leaderboard-honor-detail'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.t-hairdres-hairstylist {
	}
</style>

<script>
	export default {
		globalData: {
			safeDistance: 1, //IOS手机底部安全距离
			statusBarHeight: 1, //顶部状态栏高度
		},
		onLaunch: function() {
			this.globalData.safeDistance = Math.abs(uni.getSystemInfoSync().safeAreaInsets.bottom)
			this.globalData.statusBarHeight = Math.abs(uni.getSystemInfoSync().statusBarHeight)
		},
		onShow: function() {
			
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
 page {
	background-color: #f3f5f7;
}
</style>

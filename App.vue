<script>
	export default {
		globalData: {
			safeDistance: 1, //IOS手机底部安全距离
		},
		onLaunch: function() {
			this.globalData.safeDistance = Math.abs(uni.getSystemInfoSync().safeAreaInsets.bottom)
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

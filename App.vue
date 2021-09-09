<script>
	import store from '@/store'
	import { mapGetters } from 'vuex'
	import { getLocation } from '@/unit/common'
	export default {
		computed: {
			...mapGetters(['location'])
		},
		onLaunch: function() {
			if (!this.location) {
				getLocation()
			}
			uni.getSystemInfo({
				success: (result) => {
					store.commit('SET_DEVICE_INFO', result)
				}
			})
			uni.getStorage({
				key: '_TOKEN_EXPIRE',
				success: ({ result }) => {
					store.commit("SET_TOKENEXPIRE", result)
				},
			})
			uni.getStorage({
				key: '_TOKEN',
				success: ({ result }) => {
					store.commit("SET_TOKEN", result)
				},
			})
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

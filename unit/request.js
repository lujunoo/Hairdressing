import store from "@/store"
const baseUrl = 'http://meifa.ihairdo.cn/index.php'

export const APIRequest = (url = '', data = {}, method = 'POST',  header = {
	accessToken: store.state.authorization.accessToken || ''
}) => {
    return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			data,
			method,
			header,
			success: ({ statusCode, errMsg, data }) => {
				if (statusCode === 200) {
					if (data.code !== 0) {
						uni.showToast({
							icon:'none',
							title: data.msg 
						})
					}
					resolve(data.data)
					return
				}
				reject(errMsg)
			},
			fail: (error) => {
				reject('request:请求错误')
			}
		})
	})
}
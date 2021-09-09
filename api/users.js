import { APIRequest } from '@/unit/request.js'
import store from '@/store'
const API = {
	login: '/api/openidLogin',
	getOpenid: '/api/getOpenid',
	getUserInfo: '/api/getUserInfo',
}

export const authorize = () => {
	return new Promise((resolve, reject) => {
		uni.login({
			provider: 'weixin',
			success: ({ code }) => {
				getOpenId(code).then(({ openid }) => {
					userLogin(openid).then(loginDate => {
						const { token, token_expire } = loginDate
						store.commit("SET_TOKEN", token)
						store.commit("SET_TOKENEXPIRE", token_expire * 1000)
						getUserInfo().then(userInfo => {
							store.commit("SET_USERINFO", userInfo)
						})
						resolve(true)
					})
				})
			},
			fail: (error) => {
				reject(error)
				uni.showToast({
					icon:'none',
					title: error
				})
			}
		})
	})
}
const getOpenId = (code) => {
	return APIRequest(API.getOpenid, { code }, 'GET')
}
export const userLogin = (openid) => {
	return APIRequest(API.login, { openid })
}
const getUserInfo = () => {
	return APIRequest(API.getUserInfo)
}

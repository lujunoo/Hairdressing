/*
 * @Author: 小推车(lujunoo@outlook.com) 
 * @Date: 2021-09-09 22:05:31 
 * @Last Modified by: 小推车(lujunoo@outlook.com)
 * @Last Modified time: 2021-09-09 23:37:11
 * @desc: 授权信息 
 */
const state = {
	userInfo: {},
	openId: '',
	tokenExpire:'',
	accessToken:''
	
}
const mutations = {
	SET_USERINFO: (state, data) => {
		state.userInfo = data
	},
	SET_OPENID: (state, data) => {
		state.openId = data
	},
	SET_TOKEN: (state, data) => {
		state.accessToken = data
		uni.setStorage({
			key: '_TOKEN',
			data: data
		})
	},
	SET_TOKENEXPIRE: (state, data) => {
		state.tokenExpire = data
		uni.setStorage({
			key: '_TOKEN_EXPIRE',
			data: data
		})
	}
}
const actions = {
	
}

export default {
	state,
	mutations,
	actions
}
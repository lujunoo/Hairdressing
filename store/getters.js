export default {
	// 授权
	openId: state => state.authorization.openId,
    tokenExpire: state => state.authorization.tokenExpire,
	accessToken: state => state.authorization.accessToken,
	userInfo: state => state.authorization.userInfo,
	// 位置
	getLocation: state => state.location.address
}
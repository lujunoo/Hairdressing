/*
 * @Author: 小推车(lujunoo@outlook.com) 
 * @Date: 2021-09-09 22:05:31 
 * @Last Modified by: 小推车(lujunoo@outlook.com)
 * @Last Modified time: 2021-09-09 23:43:43
 * @desc: 设备信息 
 */
const state = {
    deviceInfo: {}
}
const mutations = {
    SET_DEVICE_INFO: (state, date) => {
        state.deviceInfo = date
    }
}
const actions = {
}
export default {
    state,
    mutations,
    actions
}
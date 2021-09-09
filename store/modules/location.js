/*
 * @Author: 小推车(lujunoo@outlook.com) 
 * @Date: 2021-09-09 22:05:31 
 * @Last Modified by: 小推车(lujunoo@outlook.com)
 * @Last Modified time: 2021-09-10 00:59:24
 * @desc: 位置信息 
 */
const state = {
    latitude: '',
    longitude: '',
    address: {}
}
const mutations = {
    SET_LATITUDE: (state, date) => {
        state.latitude = date
    },
    SET_LONGITUDE: (state, date) => {
        state.longitude = date
    },
    SET_ADDRESS: (state, date) => {
        state.address = date
    },
}
const actions = {
}
export default {
    state,
    mutations,
    actions
}
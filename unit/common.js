// 工具函数
import { config } from '@/unit/config'
import store from '@/store'
var amapFile = require('@/unit/amap-wx.js');

export const getLocation = () => {
    const myAmapFun = new amapFile.AMapWX({ key: config.MAP_KEY })
    myAmapFun.getRegeo({
        success: result => {
            const { regeocodeData: { addressComponent }, latitude, longitude } = result[0]
            store.commit("SET_LATITUDE", latitude)
            store.commit("SET_LONGITUDE", longitude)
            store.commit("SET_ADDRESS", addressComponent)
        },
        fail: info => {
            console.log(info)
            uni.showToast({
                title: '',
                icon: '获取位置失败'
            })
        }
    })
}
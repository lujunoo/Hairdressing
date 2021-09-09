/*
 * @Author: 小推车(lujunoo@outlook.com) 
 * @Date: 2021-09-10 01:03:28 
 * @Last Modified by: 小推车(lujunoo@outlook.com)
 * @Last Modified time: 2021-09-10 01:18:37
 * @desc 商家模块接口
 */
import { APIRequest } from '@/unit/request.js'
const API = {
	shopList: '/api/getShopList',
}
 export const shopList = parameter => {
	return APIRequest(API.shopList, parameter)
}
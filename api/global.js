/*
 * @Author: 小推车(lujunoo@outlook.com) 
 * @Date: 2021-09-10 01:03:28 
 * @Last Modified by: 小推车(lujunoo@outlook.com)
 * @Last Modified time: 2021-09-10 01:19:42
 * @desc 全局工共接口
 */
import { APIRequest } from '@/unit/request.js'
const API = {
	banner: '/api/banner',
}
 export const banners = (type) => {
	return APIRequest(API.banner, { type })
}
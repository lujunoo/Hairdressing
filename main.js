import Vue from 'vue'
import App from './App'
// 全局样式
import '@/style/index.less'
import store from './store'
import request from './unit/request.js'

//把vuex定义成全局组件
Vue.prototype.$store = store
Vue.prototype.$request = request
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()

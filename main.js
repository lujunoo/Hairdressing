import Vue from 'vue'
import App from './App'
// 全局样式
import '@/style/index.less'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

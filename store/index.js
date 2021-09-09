import Vue from 'vue'
import Vuex from 'vuex'
import authorization from './modules/authorization'
import device from './modules/device'
import location from './modules/location'
import getters from './getters.js'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        authorization,
        device,
        location
    },
    getters
})
export default store
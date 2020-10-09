import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import { user } from "@/store/module/user"
import { router } from "@/store/module/router"
import { dictionary } from "@/store/module/dictionary"
Vue.use(Vuex)


// 把用户的登录信息存储到本地, 防止刷新是被清除
const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    modules: ['user']
})
export const store = new Vuex.Store({
    modules: {
        user,
        router,
        /**
         * 标记
         */
        dictionary
    },
    plugins: [vuexLocal.plugin]
})
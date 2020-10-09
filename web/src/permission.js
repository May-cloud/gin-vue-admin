import router from './router'
import { store } from './store/index'

let asyncRouterFlag = 0

const whiteList = ['login', 'register']

router.beforeEach(async(to, from, next) => {
    const token = store.getters['user/token']
        // 在白名单中的判断情况
    if (whiteList.indexOf(to.name) > -1) {
        if (token) {
            next({ path: '/layout/dashboard' })
        } else {
            next()
        }
    } else {
        // 不在白名单中并且已经登陆的时候
        if (token) {
            // 添加flag防止多次获取动态路由和栈溢出
            if (!asyncRouterFlag) {
                asyncRouterFlag++
                // 获取动态路由
                //
                await store.dispatch('router/SetAsyncRouter')
                // 获取动态的路由(后台获取的路由添加到asyncRouters)
                const asyncRouters = store.getters['router/asyncRouters']
                // 真正的添加路由
                router.addRoutes(asyncRouters)
                next({...to, replace: true })
            } else {
                next()
            }
        }
        // 不在白名单中并且未登陆的时候
        if (!token) {
            next({
                name: "login",
                query: {
                    // hash是一个可读可写的字符串，读取时返回的是 URL 的锚部分，包括#号
                    redirect: document.location.hash
                }
            })
        }
    }
})
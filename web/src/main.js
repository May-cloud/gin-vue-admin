import Vue from 'vue'
import App from './App.vue'
// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 全局配置elementui的dialog不能通过点击遮罩层关闭
ElementUI.Dialog.props.closeOnClickModal.default = false
Vue.use(ElementUI);

// 引入封装的router
import router from '@/router/index'

// canvas背景插件
import vueParticleLine from 'vue-particle-line'
import 'vue-particle-line/dist/vue-particle-line.css'

Vue.use(vueParticleLine)

// time line css
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'

// 富文本插件
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)

// markdown插件
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)

import '@/permission'
// Vuex
import {store} from '@/store/index'

// 构造提示为false
Vue.config.productionTip = false

// 路由守卫
import Bus from '@/utils/bus.js'

Vue.use(Bus)

// 音乐播放器插件
import APlayer from '@moefe/vue-aplayer';

Vue.use(APlayer, {
    defaultCover: 'https://github.com/u3u.png',
    productionTip: true,
});


import {auth} from '@/directive/auth'
// 按钮权限指令
auth(Vue)

// 上传文件夹组件
import uploader from 'vue-simple-uploader'

Vue.use(uploader)

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')     // 手动挂载到id为App的DOM中,需要注意的是该方法直接挂载到入口文件的id=App的dom元素上

//引入echarts 数据可视化处理插件
import echarts from 'echarts'

Vue.prototype.$echarts = echarts;

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import http from '../http'
import { Toast } from 'vant';
Vue.use(Vant); //通过全局方法使用插件，使用之后调用的是该组件install方法

Vue.config.productionTip = false
    //全局挂载使用this.就可以使用
Vue.prototype.$http = http
Vue.prototype.$msg = Toast
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
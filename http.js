import axios from 'axios'
import router from './src/router'
import Vue from 'vue'
const http = axios.create({
        baseURL: 'http://112.74.99.5:3000/web/api',
        timeout: 5000
    })
    //拦截器
    //发送请求成功与失败
http.interceptors.request.use(config => {
    //若不返回，后面拿不到config
    //使用拦截器的场景：信息不符合服务器要求，发送请求时要在界面中显示请求图标，一些网络请求必须请携带一些特殊信息
    // console.log(config)
    if (localStorage.getItem('token') && localStorage.getItem('id')) {
        config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
    }
    return config
}, error => { return Promise.reject(error) });
//响应数据成功与失败:
http.interceptors.response.use(
    response => { return response },
    error => {
        //如果本地数据删除，解决用户未输入信息跳转到个人界面
        if (error.response.status == 401 || error.response.status == 402) {
            console.dir(error)
            router.push('/longin')
            Vue.prototype.$msg.fail(error.response.data.message)
        }
        return Promise.reject(error)
    }


);

export default http;
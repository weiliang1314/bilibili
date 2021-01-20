import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/longin'
    }, {
        path: '/home',
        name: 'home',
        component: () =>
            import ('../views/home')
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('../views/about.vue')
    },
    {
        path: '/longin',
        name: 'longin',
        component: () =>
            import ('../views/longin.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () =>
            import ('../views/user.vue'),
        meta: {
            istoken: true
        }
    },
    {
        path: '/useredit',
        name: 'useredit',
        component: () =>
            import ('../views/useredit.vue'),
        meta: {
            istoken: true
        }
    },
]

const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })
    //路由跳转之前；导航守卫
router.beforeEach((to, from, next) => {
    //权限验证
    if ((!localStorage.getItem('token') || !localStorage.getItem('id')) && to.meta.istoken == true) {
        router.push('/longin');
        Vue.prototype.$msg.fail('请重新登录')
        return;
    }
    next();



})

export default router
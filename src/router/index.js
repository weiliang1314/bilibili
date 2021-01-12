import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/about'
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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
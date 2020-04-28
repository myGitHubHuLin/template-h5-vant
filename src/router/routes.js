
// layout
import Main from '@/views/main/Main.vue'
// pages
const page404 = () => import('@/views/404.vue')
const Home = () => import('@/views/main/Home.vue')
const PersonCenter = () => import('@/views/main/PersonCenter.vue')
const WxTest = () => import('@/views/main/WxTest.vue')

// 注意
// meta: {
//   isOpen: true // 默认所有页面都是要权限的,配置isOpen:true 设置无需权限访问
// }
const routes = [
    {
        path: '/',
        name: 'main',
        redirect: '/home',
        component: Main,
        children: [
            {
                path: 'home',
                name: 'home',
                meta: {
                    title: '主页'
                },
                component: Home
            },
            {
                path: 'PersonCenter',
                name: 'PersonCenter',
                meta: {
                    title: '个人中心'
                },
                component: PersonCenter
            },
            {
                path: 'WxTest',
                name: 'WxTest',
                meta: {
                    title: '微信jssdk测试',
                    isOpen: true
                },
                component: WxTest
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            isOpen: true
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
    },
    {
        path: '*',
        name: 'page404',
        meta: {
            title: '页面未找到'
        },
        component: page404
    }
]
export default routes;
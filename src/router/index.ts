import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const modulesFiles: {} = import.meta.glob('./modules/*.ts', { eager: true })

const modules = Object.keys(modulesFiles).reduce((modules, modulePath) => {
    return [...modules, ...modulesFiles[modulePath].default]
}, [])

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
            title: '首页',
        },
    },
    ...modules,
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// 前置路由守卫
router.beforeEach((to: any, from: any, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next()
})

router.afterEach((to: any, from: any, failure) => {
    console.log(to, from)
})
export default router;
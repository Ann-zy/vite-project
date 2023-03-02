export default [
    {
        path: '/report',
        name: 'report',
        component: () => import("@/views/report/index.vue"),
        meta: {
            title: '报表',
        },
    },
]
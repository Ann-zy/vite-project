export default [
    {
        path: '/order',
        name: 'order',
        component: () => import("@/views/order/index.vue"),
        meta: {
            title: '订单',
        },
    },
]
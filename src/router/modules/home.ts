import { RouteRecordRaw } from "vue-router";
import { Layout } from '../Layout'

const homeRouter: Array<RouteRecordRaw> = [
    {
        path: '/home',
        component: Layout,
        redirect: "/home/index",
        children: [
            {
                path: "index",
                name: "home",
                component: () => import("@/view/home/index.vue"),
                meta: {
                    keepAlive: true,
                    requiresAuth: true,
                    title: "首页",
                    key: "home"
                }
            }
        ]
    }
]

export default homeRouter;
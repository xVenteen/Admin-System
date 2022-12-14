import { RouteRecordRaw } from "vue-router";
import { Layout } from "../Layout"

const menuRouter: Array<RouteRecordRaw> = [
    {
        path: '/menu',
        component: Layout,
        redirect: '/menu/menu1',
        meta: {
            title:'菜单嵌套'
        },
        children: [
			{
				path: "/menu/menu1",
				name: "menu1",
				component: () => import("@/view/menu/menu1/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "菜单1",
					key: "menu1"
				}
			},
			{
				path: "/menu/menu2/menu21",
				name: "menu21",
				component: () => import("@/view/menu/menu2/menu21/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "菜单2-1",
					key: "menu21"
				}
			},
			{
				path: "/menu/menu2/menu22/menu221",
				name: "menu221",
				component: () => import("@/view/menu/menu2/menu22/menu221/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "菜单2-2-1",
					key: "menu221"
				}
			},
			{
				path: "/menu/menu2/menu22/menu222",
				name: "menu222",
				component: () => import("@/view/menu/menu2/menu22/menu222/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "菜单2-2-2",
					key: "menu222"
				}
			},
			{
				path: "/menu/menu2/menu23",
				name: "menu23",
				component: () => import("@/view/menu/menu2/menu23/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "菜单2-3",
					key: "menu23"
				}
			},
			{
				path: "/menu/menu3",
				name: "menu3",
				component: () => import("@/view/menu/menu3/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "菜单3",
					key: "menu3"
				}
			}
		]
    }
]

export default menuRouter;
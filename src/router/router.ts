import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";


/* 导入路由文件模板 */
const metaRouters = import.meta.glob("./modules/*.ts", { import: 'default', eager: true })

export const routerArray: RouteRecordRaw[] = []
Object.values(metaRouters).forEach((item: any) => {
    item.map((val: any) => {
        routerArray.push(val);
    });
});


const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/login/login.vue')
    },
    { path: '/', redirect: { name: 'login' } },
    ...routerArray,
    {
        // 找不到路由重定向到404页面
        path: "/:pathMatch(.*)",
        redirect: { name: "404" }
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
    strict: false,
	// 切换页面，滚动到最顶部
	scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router


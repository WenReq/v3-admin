import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import errorRouter from "./modules/error";

// * 导入所有的 router
const metaRouters = import.meta.glob("./modules/*.ts", { import: "default", eager: true });

// * 处理路由
export const routerArray: RouteRecordRaw[] = [];

Object.keys(metaRouters).forEach(item => {
	console.log(item);
	// TODO: this should be done dynamic router modules
	// routerArray.concat(metaRouters[item]);
	/* Object.keys(metaRouters[item]).forEach((key: any) => {
		routerArray.push(...metaRouters[item][key]);
	}); */
});

const routes: RouteRecordRaw[] = [
	{
		// 重定向到 login
		path: "/",
		redirect: { name: "login" }
	},
	{
		path: "/login",
		name: "login",
		meta: {
			key: "login",
			title: "登录页",
			keepAlive: true,
			requireAuth: false
		},
		component: () => import("@/views/login/index.vue")
	},
	...errorRouter,
	{
		// 找不到路由重定向到 404 页面
		path: "/:pathMatch(.*)",
		redirect: { name: "404" }
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});
export default router;

import { RouteRecordRaw } from "vue-router";
import { Layout } from "@/routers/constant";

// 首页模块
const homeRouter: Array<RouteRecordRaw> = [
	{
		path: "/home",
		component: Layout,
		redirect: "/home/index",
		children: [
			{
				path: "index",
				name: "home",
				component: () => import("@/views/home/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "首页",
					key: "home"
				}
			}
		]
	},
	{
		path: "/test",
		component: Layout,
		redirect: "/test/index",
		children: [
			{
				path: "index",
				name: "test",
				component: () => import("@/views/test/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "测试页",
					key: "test"
				}
			}
		]
	}
];

export default homeRouter;

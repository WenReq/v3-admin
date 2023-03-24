import router from "./router";
import NProgress from "@/config/nprogress";
import { HOME_URL } from "@/config/config";
import { AxiosCanceler } from "@/api/helper/axiosCancel";
import { GlobalStore } from "@/store";

import errorRouter from "./modules/error";
import homeRouter from "./modules/home";

const errMap = errorRouter.map(it => it.path);
const homeMap = homeRouter.map(it => it.path);

const axiosCanceler = new AxiosCanceler();

// * 路由拦截 beforeEach
router.beforeEach((to, from, next) => {
	// * 开始进度条
	NProgress.start();
	// * 在跳转路由之前，清除所有的请求
	axiosCanceler.removeAllPending();

	// * 判断当前路由是否需要访问权限
	if (!to.matched.some(record => record.meta.requiresAuth)) return next();

	// * 判断是否有Token
	const globalStore = GlobalStore();
	if (!globalStore.token) {
		next({
			path: "/login"
		});
		NProgress.done();
		return;
	}

	const routerList = [...errMap, ...homeMap, HOME_URL];

	// * 如果访问的地址没有在路由表中重定向到 403 页面中
	if (routerList.indexOf(to.path) !== -1) return next();
	next({
		path: "/403"
	});
});

router.afterEach(() => {
	NProgress.done();
});

export default router;

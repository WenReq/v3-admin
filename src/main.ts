import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routers";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons-vue";
// 导入Unocss
import "uno.css";
// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";
// pinia store
import pinia from "@/store/index";

// 创建vue实例
const app = createApp(App);

// 应用级错误处理
app.config.errorHandler = (err, instance, info) => {
	// 向追踪服务报告错误
	console.log(err, instance, info);
};

// 注册element Icons组件
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});

// 挂载实例
app.use(router).use(pinia).use(ElementPlus).mount("#app");

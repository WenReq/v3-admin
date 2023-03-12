import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/routers";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 导入Unocss
import "uno.css";
// 创建vue实例
const app = createApp(App);

// 应用级错误处理
app.config.errorHandler = (err, instance, info) => {
	// 向追踪服务报告错误
	console.log(err, instance, info);
};

// 挂载实例
app.use(router).use(ElementPlus).mount("#app");

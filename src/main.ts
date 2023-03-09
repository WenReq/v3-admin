import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/routers";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 创建vue实例
const app = createApp(App);

// 挂载实例
app.use(router).use(ElementPlus).mount("#app");

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// 引入Unocss
import Unocss from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		//设置别名
		alias: {
			"@": path.resolve(__dirname, "./src")
		}
	},
	plugins: [
		vue(),
		Unocss({
			// 使用Unocss
			presets: [presetUno(), presetAttributify(), presetIcons()]
		})
	],
	server: {
		host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
		port: 8080, //启动端口
		open: true,
		cors: true,
		// 设置 https 代理
		proxy: {
			"/api": {
				target: "http://localhost:3000",
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, "")
			}
		}
	}
});

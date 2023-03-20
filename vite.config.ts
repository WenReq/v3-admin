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
			"@": path.resolve(__dirname, "src")
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
		port: 8080, //启动端口
		hmr: {
			host: "127.0.0.1",
			port: 8080
		},
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

/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2023-09-13 16:47:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2023-09-13 16:48:36
 * @FilePath: /v3-admin/src/styles/theme/header.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Theme } from "@/hooks/interface";

export const headerTheme: Record<Theme.ThemeType, { [key: string]: string }> = {
	light: {
		"--el-header-logo-text-color": "#303133",
		"--el-header-bg-color": "#ffffff",
		"--el-header-text-color": "#303133",
		"--el-header-text-color-regular": "#606266",
		"--el-header-border-color": "#e4e7ed"
	},
	inverted: {
		"--el-header-logo-text-color": "#dadada",
		"--el-header-bg-color": "#191a20",
		"--el-header-text-color": "#e5eaf3",
		"--el-header-text-color-regular": "#cfd3dc",
		"--el-header-border-color": "#414243"
	},
	dark: {
		"--el-header-logo-text-color": "#dadada",
		"--el-header-bg-color": "#141414",
		"--el-header-text-color": "#e5eaf3",
		"--el-header-text-color-regular": "#cfd3dc",
		"--el-header-border-color": "#414243"
	}
};

import { Login } from "@/api/interface/index";

import http from "@/api";

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
	return http.post<Login.ResLogin>(`/api/auth/login`, params);
};

// * 获取验证码
export const getCodeApi = () => {
	return http.get(`/api/auth/code`);
};

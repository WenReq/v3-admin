<template>
	<el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
		<el-form-item prop="username">
			<el-input v-model="loginForm.username" placeholder="用户名：admin" clearable>
				<template #prefix>
					<el-icon class="el-input__icon"><user /></el-icon>
				</template>
			</el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input type="password" show-password v-model="loginForm.password" placeholder="密码：123456" clearable>
				<template #prefix>
					<el-icon class="el-input__icon"><lock /></el-icon>
				</template>
			</el-input>
		</el-form-item>
		<el-form-item prop="code">
			<div class="code-block">
				<el-input v-model="loginForm.code" placeholder="验证码" class="code-input" clearable>
					<template #prefix>
						<el-icon class="el-input__icon"><ChromeFilled /></el-icon>
					</template>
				</el-input>
				<div class="code-part" v-html="imgUrl" @click="getCode"></div>
			</div>
		</el-form-item>
	</el-form>
	<div class="login-btn">
		<el-button :icon="CircleClose" round @click="resetForm(loginFormRef)" size="large">重置</el-button>
		<el-button :icon="UserFilled" round @click="login(loginFormRef)" size="large" type="primary" :loading="loading">
			登录
		</el-button>
	</div>
</template>
<script setup lang="ts" name="loginForm">
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Login } from "@/api/interface";
import { ElNotification } from "element-plus";
import { CircleClose, UserFilled } from "@element-plus/icons-vue";
import type { FormRules, FormInstance } from "element-plus";
import { loginApi, getCodeApi } from "@/api/modules/login";
import { GlobalStore } from "@/store";
import { getTimeState } from "@/utils/utils";

const imgUrl = ref<string>("");

onMounted(async () => {
	getCode();
});

const getCode = async () => {
	const res = await await getCodeApi();
	imgUrl.value = res.data as string;
};

const globalStore = GlobalStore();

const loginFormRef = ref<FormInstance>();
const loginRules = reactive<FormRules>({
	username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
	password: [{ required: true, message: "请输入密码", trigger: "blur" }],
	code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
});

// 登录表单数据
const loginForm = reactive<Login.ReqLoginForm>({
	username: "",
	password: "",
	code: ""
});
const loading = ref<boolean>(false);

const router = useRouter();

// login
const login = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.validate(async valid => {
		if (valid) {
			loading.value = true;
			try {
				let requestLoginForm: Login.ReqLoginForm = {
					username: loginForm.username,
					password: loginForm.password,
					code: loginForm.code
				};
				const res = await loginApi(requestLoginForm);
				if (res) {
					const token = (res as any).data!.token;
					globalStore.setToken(token);
					router.push({ name: "home" });
					ElNotification({
						title: getTimeState(),
						message: "欢迎登录 V3-Admin",
						type: "success",
						duration: 3000
					});
				} else {
					// 验证码不匹配时，从新请求新的验证码。并清空，之前输入的验证码。
					getCode();
					loginForm.code = "";
				}
			} finally {
				loading.value = false;
			}
		}
	});
};

// 重置 resetForm
const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.resetFields();
};
</script>
<style scoped lang="scss">
@import "../index.scss";
</style>

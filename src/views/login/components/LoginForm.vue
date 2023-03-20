<template>
	<el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
		<el-form-item prop="username">
			<el-input v-model="loginForm.username" placeholder="用户名">
				<template #prefix>
					<el-icon class="el-input__icon"><user /></el-icon>
				</template>
			</el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input type="password" show-password v-model="loginForm.password" placeholder="密码">
				<template #prefix>
					<el-icon class="el-input__icon"><lock /></el-icon>
				</template>
			</el-input>
		</el-form-item>
	</el-form>
	<div class="login-btn">
		<el-button :icon="CircleClose" round @click="resetForm(loginFormRef)" size="large">重置</el-button>
		<el-button :icon="UserFilled" round @click="login(loginFormRef)" size="large" type="primary" :loading="loading">
			登录
		</el-button>
	</div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Login } from "@/api/interface";
import { ElMessage } from "element-plus";
import { CircleClose, UserFilled } from "@element-plus/icons-vue";
import type { FormRules, FormInstance } from "element-plus";
import { loginApi, getCodeApi } from "@/api/modules/login";
import { GlobalStore } from "@/store";

onMounted(async () => {
	const res = await await getCodeApi();
	console.log(res);
});

const globalStore = GlobalStore();

const loginFormRef = ref<FormInstance>();
const loginRules = reactive<FormRules>({
	username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
	password: [{ required: true, message: "请输入密码", trigger: "blur" }]
});

// 登录表单数据
const loginForm = reactive<Login.ReqLoginForm>({
	username: "admin",
	password: "123456"
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
					password: loginForm.password
				};
				const res = await loginApi(requestLoginForm);
				const token = (res as any).data!.access_token;
				globalStore.setToken(token);
				ElMessage.success("登录成功！");
				router.push({ name: "home" });
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

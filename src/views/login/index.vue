<script setup lang="ts" name="login">
import LoginForm from "./components/LoginForm.vue";
// import { Login } from "@/api/interface/index";
// import { reactive } from "vue";

// const obj = reactive<Login.ReqLoginForm>({
// 	username: "admin",
// 	password: "123456"
// });
</script>
<template>
	<div class="login-container flx-center">
		<div class="login-content">
			<div class="login-left">
				<img src="@/assets/images/login_left.png" alt="login" />
			</div>
			<div class="login-box">
				<img class="login-img" src="@/assets/images/form_icon.png" />
				<div class="login-form">
					<div class="login-logo">
						<img class="login-icon" src="@/assets/images/logo.svg" />
						<p class="logo-text">V3 - Admin</p>
					</div>
					<!-- :obj="obj" -->
					<LoginForm ref="loginRef" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>

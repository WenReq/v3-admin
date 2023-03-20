<template>
	<div class="not-container">
		<img src="@/assets/images/404.png" class="not-img" alt="403" />
		<div class="not-detail">
			<h2>404</h2>
			<h4>抱歉，您访问的页面不存在~🤷‍♂️🤷‍♀️</h4>
			<!-- TODO: 返回首页的逻辑事件；使用 store 中的方法；@click="$event => tabStore.goHome()" -->
			<el-button type="primary">返回首页</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
// TODO: 引入tabs相关的 store; const tabStore = TabStore();
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>

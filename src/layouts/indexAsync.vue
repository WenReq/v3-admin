<template>
	<!-- template 中使用不必要的包装元素 -->
	<suspense>
		<!-- 具有深层异步依赖的组件 -->
		<template #default>
			<component :is="LayoutComponents[layout]" />
		</template>
		<!-- 在 #fallback 插槽中显示 “正在加载中” -->
		<template #fallback>
			<Loading />
		</template>
	</suspense>
	<ThemeDrawer />
</template>

<script setup lang="ts" name="layoutAsync">
import { defineAsyncComponent, type Component, computed } from "vue";
import { LayoutType } from "@/stores/interface";
import { useGlobalStore } from "@/stores/modules/global";
import Loading from "@/components/Loading/index.vue";
import ThemeDrawer from "./components/ThemeDrawer/index.vue";

const LayoutComponents: Record<LayoutType, Component> = {
	// Vue3 中需要使用 defineAsyncComponent 来声明异步组件。
	vertical: defineAsyncComponent(() => import("./LayoutVertical/index.vue")),
	classic: defineAsyncComponent(() => import("./LayoutClassic/index.vue")),
	transverse: defineAsyncComponent(() => import("./LayoutTransverse/index.vue")),
	columns: defineAsyncComponent(() => import("./LayoutColumns/index.vue"))
};

const globalStore = useGlobalStore();
const layout = computed(() => globalStore.layout);
</script>

<style scoped lang="scss">
.layout {
	min-width: 600px;
}
</style>

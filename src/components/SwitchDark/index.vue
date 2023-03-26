<template>
	<el-switch
		v-model="themeConfig.isDark"
		@change="onAddDarkChange"
		inline-prompt
		active-color="#dcdfe6"
		:active-icon="Sunny"
		:inactive-icon="Moon"
	/>
</template>

<script setup lang="ts" name="switchDark">
import { Sunny, Moon } from "@element-plus/icons-vue";
import { computed } from "vue";
import { GlobalStore } from "@/store";
import { useDarkFn } from "@/hooks/useDark";

const globalStore = GlobalStore();

const { switchTheme } = useDarkFn();

const themeConfig = computed(() => globalStore.themeConfig);

const onAddDarkChange = (value: boolean) => {
	globalStore.setThemeConfig({
		...themeConfig.value,
		isDark: value
	});
	switchTheme();
};
</script>

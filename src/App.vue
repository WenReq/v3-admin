<template>
	<!-- Config Provider 被用来提供全局的配置选项，让你的配置能够在全局都能够被访问到。 -->
	<!-- locale	翻译文本对象；size - 全局组件大小；button - 按钮相关配置 -->
	<el-config-provider :locale="locale" :size="assemblySize" :button="buttonConfig">
		<router-view></router-view>
	</el-config-provider>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useTheme } from "@/hooks/useTheme";
import { ElConfigProvider } from "element-plus";
import { useGlobalStore } from "@/stores/modules/global";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";

// 请注意，store 是一个用 reactive 包裹的对象，这意味着，不需要在 getter 之后写 .value，但是，就像setup 中的props 一样，我们不能对其进行解构，因为它会破坏响应式。
const globalStore = useGlobalStore();

// init theme
const { initTheme } = useTheme();
initTheme();
// element assemblySize
const assemblySize = computed(() => globalStore.assemblySize);

// element button config
// 自动在两个中文字符之间插入空格
const buttonConfig = reactive({ autoInsertSpace: false });

const language = ref("zh-cn");
const locale = computed(() => (language.value === "zh-cn" ? zhCn : en));

// const toggle = () => {
// 	language.value = language.value === "zh-cn" ? "en" : "zh-cn";
// };
</script>

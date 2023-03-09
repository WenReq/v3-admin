<script setup lang="ts">
import { ref, inject } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
console.log(count.value, "count");

const name = inject("parentName");
console.log(name);

// 在模板中启用 v-focus
const vFocus = {
	mounted: (el: HTMLInputElement) => el.focus
};
</script>

<template>
	<h1>{{ msg }}</h1>
	<div v-bind="$attrs" class="component">{{ $attrs }} | {{ $attrs["class"] }}</div>
	<!-- 插槽出口 -->
	<slot></slot>
	<!-- 依赖注入 -->
	<div>{{ name }}</div>
	<!-- 自定义指令 -->
	<input v-focus />
</template>

<style scoped></style>

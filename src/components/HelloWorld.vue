<script setup lang="ts">
import { ref, inject } from "vue";

// ts中用widthDefaults来设置默认参数
withDefaults(defineProps<{ msg: string; arr: number[] }>(), {
	arr: () => [666]
});
const count = ref(0);
console.log(count.value, "count");

const name = inject("parentName");
console.log(name);

// 在模板中启用 v-focus
const vFocus = {
	mounted: (el: HTMLInputElement) => el.focus
};

const emit = defineEmits(["on-click"]);
const send = () => {
	emit("on-click", "这是子组件HelloWorld的值");
};
</script>

<template>
	<h1>{{ msg }}</h1>
	<h1>{{ arr }}</h1>
	<div v-bind="$attrs" class="component">{{ $attrs }} | {{ $attrs["class"] }}</div>
	<!-- 插槽出口 -->
	<slot></slot>
	<!-- 依赖注入 -->
	<div>{{ name }}</div>
	<!-- 自定义指令 -->
	<div><input v-focus /></div>
	<!-- 传值给父组件 -->
	<button
		class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 border-none cursor-pointer"
		@click="send()"
	>
		这是一个按钮
	</button>
	<button
		p="y-2 x-4"
		font="semibold"
		shadow="lg"
		text="white"
		bg="green-500 hover:green-700"
		border="rounded-lg none"
		m="t-5 l-5"
		cursor="pointer"
		@click="send()"
	>
		这是一个按钮
	</button>
	<div class="i-ic-baseline-add-circle text-3xl bg-green-500"></div>
</template>

<style scoped></style>

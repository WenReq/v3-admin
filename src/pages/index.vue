<script lang="ts">
export default {
	// 如果你不想要一个组件自动地继承 attribute，你可以在组件选项中设置 inheritAttrs: false。
	inheritAttrs: false
};
</script>

<script setup lang="ts">
import { ref, provide } from "vue";
import { useMouse, useCounter, useMagicKeys } from "@vueuse/core";
import HelloWorld from "@/components/HelloWorld.vue";
const { current } = useMagicKeys();

const { x, y } = useMouse();
const { count, inc, dec } = useCounter();

let countNumber = ref(0);

function increment() {
	countNumber.value++;
}

provide("parentName", "wen");

const getProp = (val: string) => {
	console.log("val", val);
};
</script>

<template>
	<div>
		<a href="https://vuejs.org/" target="_blank">
			<img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>

		<h3>Mouse: {{ x }} x {{ y }}</h3>
		<h3>current: {{ current }}</h3>
		<h3>
			Counter: {{ count }}
			<a @click="inc()" style="margin-right: 10px">+</a>
			<a @click="dec()">-</a>
		</h3>

		<button @click="increment">{{ countNumber }}</button>

		<HelloWorld :msg="'propsValue'" :arr="[1, 2, 3]" @on-click="getProp" class="attrClass">slot内容</HelloWorld>
	</div>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

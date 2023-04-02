<template>
	<div class="header">
		<TollBarLeft />
		<TollBarRight />
	</div>
</template>

<script setup lang="ts">
import TollBarLeft from "./components/TollBarLeft.vue";
import TollBarRight from "./components/TollBarRight.vue";
</script>

<style lang="scss">
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 60px;
}
</style>

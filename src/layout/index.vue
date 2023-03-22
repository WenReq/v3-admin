<script setup name="Layout">
import Topbar from "./components/Topbar/index.vue";
import Header from "./components/Header/index.vue";
import MainSidebar from "./components/MainSidebar/index.vue";
import SubSidebar from "./components/SubSidebar/index.vue";
</script>

<template>
	<div class="common-layout">
		<el-container class="w100% h100%">
			<el-header bg-green-300>
				<Header />
			</el-header>
			<el-container class="wrapper w100% h100% relative">
				<el-aside flex w-30>
					<MainSidebar bg-blue-400 />
					<SubSidebar bg-blue-200 />
				</el-aside>
				<el-container class="main-container">
					<el-main>
						<Topbar bg-red-300 />
						<div class="main">
							<RouterView v-slot="{ Component, route }">
								<Transition name="main" mode="out-in" appear>
									<keep-alive>
										<component :is="Component" :key="route.fullPath"></component>
									</keep-alive>
								</Transition>
							</RouterView>
						</div>
					</el-main>
					<el-footer bg-yellow-200>Footer</el-footer>
				</el-container>
			</el-container>
			<el-backtop :right="20" :bottom="20" title="回到顶部" />
		</el-container>
	</div>
</template>

<style lang="scss" scoped>
.common-layout {
	margin: 0 auto;
	height: 100%;
}
</style>

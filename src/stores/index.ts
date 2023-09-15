import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// pinia persist
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;

/**
 * Pinia
 *
 * 请注意，store 是一个用 reactive 包裹的对象，这意味着，不需要在 getter 之后写 .value，但是，就像setup 中的props 一样，我们不能对其进行解构，因为它会破坏响应式。
 * 为了从 Store 中提取属性同时保持其响应式，您需要使用storeToRefs()。 它将为任何响应式属性创建 refs。storeToRefs: 创建一个引用对象，包含 store 的所有 state、 getter 和 plugin 添加的 state 属性。 类似于 toRefs()，但专门为 Pinia store 设计， 所以 method 和非响应式属性会被完全忽略。
 *
 ************** State ***************
 * 重置状态：
 * const store = useStore();
 * store.$reset()
 *
 * 改变状态:
 * store.$patch((state) => {
 * 	state.items.push({ name: 'shoes', quantity: 1 });
 * 	state.hasChanged = true
 * })
 *
 * 替换state:
 * store.$state = { counter: 666, name: 'Paimon' }
 *
 *************** Getter *************
 * 直接在 store 实例上访问 getter:
 * <p>Double count is {{ store.doubleCount }}</p>
 * const store = useStore()
 *
 * 访问其他 getter:
 * 通过 this 访问任何其他 getter。
 *
 * 将参数传递给 getter:
 * 	<script>
			export default {
				setup() {
					const store = useStore()
					return { getUserById: store.getUserById }
				},
			}
			</script>
			<template>
				<p>User 2: {{ getUserById(2) }}</p>
			</template>
		</script>
 * 访问其他 Store 的getter:
		import { useOtherStore } from './other-store'

		export const useStore = defineStore('main', {
			state: () => ({
				// ...
			}),
			getters: {
				otherGetter(state) {
					const otherStore = useOtherStore()
					return state.localData + otherStore.data
				},
			},
		})
 *
 *************** Actions *************
 * actions 可以是异步的。
 *
 * 访问其他 store 操作：
 * 	import { useAuthStore } from './auth-store'
 * 	actions: {
 * 		const auth = useAuthStore()
 *  }
 *
 *************** Plugins *************
 * 扩充 store:
 * 	pinia.use(() => ({ hello: 'world' }))
 *  为了让 hello 在 devtools 中可见,请确保将它添加到 store._customProperties 仅在开发模式 开发工具：
 *  	从上面的例子
			pinia.use(({ store }) => {
			  // 请注意，每个 store 都使用 reactive 包装。这就是为什么您可以在没有 .value 的情况下访问所有计算属性以及它们是响应式的原因。
				store.hello = 'world'
				// 确保您的打包器可以处理这个问题。 webpack 和 vite 应该默认这样做
				if (process.env.NODE_ENV === 'development') {
					// 添加您在 store 中设置的任何 keys
					store._customProperties.add('hello')
				}
			})
 */

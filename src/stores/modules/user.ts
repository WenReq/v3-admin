import { defineStore } from "pinia";
import { UserState } from "@/stores/interface";
import piniaPersistConfig from "@/config/piniaPersist";

export const useUserStore = defineStore({
	id: "v3-user",
	state: (): UserState => ({
		token: "",
		userInfo: { name: "V3-Admin" }
	}),
	getters: {},
	actions: {
		// Set Token
		setToken(token: string) {
			this.token = token;
		},
		// Set setUserInfo
		setUserInfo(userInfo: UserState["userInfo"]) {
			this.userInfo = userInfo;
		}
	},
	persist: piniaPersistConfig("v3-user")
});

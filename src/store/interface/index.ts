/* themeConfigProp */
export interface ThemeConfigProp {
	primary: string;
	isDark: boolean;
}

/* GlobalState */
export interface GlobalState {
	token: string;
	userInfo: any;
	assemblySize: string;
	language: string;
	themeConfig: ThemeConfigProp;
}

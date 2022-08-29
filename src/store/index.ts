import { defineStore, createPinia } from 'pinia'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import piniaPersistConfig from '@/config/piniaPersist'
import { GlobalState } from './interface'

export const GlobalStore = defineStore({
    id: 'GlobalState',
    state: (): GlobalState => ({
        token: '',
        userInfo: '',
        assemblySize: 'default',
        language: '',
        themeConfig: {
			// 默认 primary 主题颜色
			primary: "#409EFF",
			// 深色模式
			isDark: false,
			// 灰色模式
			isGrey: false,
			// 色弱模式
			isWeak: false,
			// 面包屑导航
			breadcrumb: true,
			// 标签页
			tabs: true,
			// 页脚
			footer: true
		}
    }),
    getters: {},
    actions: {
        // setToken
        setToken(token: string) {
            this.token = token;
        },
        // setUserInfo
        setUserInfo(userInfo: any) {
            this.userInfo = userInfo;
        },
        // setAssemblySizeSize
        setAssemblySizeSize(assemblySize: string) {
            this.assemblySize = assemblySize;
        },
        // updateLanguage
        updateLanguage(language: string) {
            this.language = language;
        },
    },
    persist: piniaPersistConfig("GlobalState")
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


export default pinia


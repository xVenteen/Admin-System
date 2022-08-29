import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import "@/styles/base.scss";
import "@/styles/common.scss";
import * as Icons from "@element-plus/icons-vue";
import router from '@/router/router'

import pinia from '@/store/index'

const app = createApp(App);

Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(router).use(pinia).mount('#app')

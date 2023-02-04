import { createApp } from 'vue'
import App from './App.vue'

// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";

// element-ui
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// icon
import * as Icons from "@element-plus/icons-vue";

// iconfont css
import "@/assets/iconfont/iconfont.scss";
// custom element dark(自定义暗黑模式)
import "@/styles/theme/element-dark.scss";

// vue-router
import router from '@/routers/index';

// 状态存储
import pinia from "@/stores/index";


const app = createApp(App);

// 注册element Icons组件
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(router)
.use(pinia)
.use(ElementPlus)
.mount("#app");

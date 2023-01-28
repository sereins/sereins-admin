import { createApp } from 'vue'
import App from './App.vue'

// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// vue-router
import router from '@/routers/index';

// 状态存储
import pinia from "@/stores/index";

const app = createApp(App);
app.use(router)
.use(pinia)
.use(ElementPlus)
.mount("#app");

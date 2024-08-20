import { createApp } from "vue";
import "element-plus/dist/index.css";
import "./style.css";
import "./styles/element.scss";
import ElementPlus from "element-plus";
import App from "./App.vue";
import microApp from "@micro-zoe/micro-app";
import router from "./router";

microApp.start();
microApp.router.setBaseAppRouter(router);

createApp(App).use(router).use(ElementPlus).mount("#app");

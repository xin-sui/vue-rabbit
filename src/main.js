import "./assets/main.css";

import {createApp} from "vue";
import {createPinia} from "pinia";

import App from "./App.vue";
import router from "./router";
//初始化样式
import "@/styles/common.scss";
// //测试接口函数
// import {getCategoryList} from "@/apis/testApi";
// getCategoryList().then((res) => {
//     console.log(res);
// });
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
//导入图片懒加载插件
import {lazyPlugin} from "@/directives";
// 导入组件插件
import {componentsPlugin} from "@/components/index";
const app = createApp(App);

app.use(createPinia().use(piniaPluginPersistedstate));
app.use(router);
//注册插件
app.use(lazyPlugin);
app.use(componentsPlugin);
app.mount("#app");

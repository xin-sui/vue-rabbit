import "./assets/main.css";

import {createApp} from "vue";
import {createPinia} from "pinia";

import App from "./App.vue";
import router from "./router";
//初始化样式
import '@/styles/common.scss'
// //测试接口函数
// import {getCategoryList} from "@/apis/testApi";
// getCategoryList().then((res) => {
//     console.log(res);
// });

//导入vueUse工具 检查是否到达视口
import {useIntersectionObserver} from '@vueuse/core'

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
//定义全局指令
app.directive('img-lazy', {
    //el:指令绑定的那个元素 img
    //binging:binding.value 指令等于后面绑定的表达式的值 图片url
    mounted(el, binding) {
        console.log("el", el, "binding", binding.value)
        useIntersectionObserver(
            el,
            ([{isIntersecting}]) => {
                console.log(isIntersecting)
                if (isIntersecting) {
                    //进入视口区域
                    el.src = binding.value
                }
            },
        )
    }
})
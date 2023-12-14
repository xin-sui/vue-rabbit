//导入vueUse工具 检查是否到达视口
import {useIntersectionObserver} from "@vueuse/core";
//定义懒加载插件
export const lazyPlugin = {
    install(app) {
        //懒加载逻辑
        //定义全局指令
        app.directive("img-lazy", {
            //el:指令绑定的那个元素 img
            //binging:binding.value 指令等于后面绑定的表达式的值 图片url
            mounted(el, binding) {
                // console.log("el", el, "binding", binding.value);
                const {stop} = useIntersectionObserver(el, ([{isIntersecting}]) => {
                    // console.log(isIntersecting);
                    if (isIntersecting) {
                        //进入视口区域
                        el.src = binding.value;
                        //停止监听
                        stop();
                    }
                });
            }
        });
    }
};

import {ref, computed} from "vue";
import {defineStore} from "pinia";

// 导出一个使用计数器存储的函数
export const useCounterStore = defineStore("counter", () => {
    // 声明一个计数器变量
    const count = ref(0);
    // 计算变量，计算count的值乘以2
    const doubleCount = computed(() => count.value * 2);
    // 定义一个增加计数器的函数
    function increment() {
        count.value++;
    }

    // 返回计数器变量，doubleCount变量，increment函数
    return {count, doubleCount, increment};
});

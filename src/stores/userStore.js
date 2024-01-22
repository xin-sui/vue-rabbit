import {ref} from "vue";
import {defineStore} from "pinia";
import {loginAPI} from "@/apis/user.js";
import {useCartStore} from "./carStore";

export const useUserStore = defineStore(
    "user",
    () => {
        const userStore = useCartStore();
        // 定义管理用户数据state
        const userInfo = ref({});
        //定义获取接口数据action
        const getUserInfo = async (account, password) => {
            console.log(account, password);
            // 调用接口
            const res = await loginAPI(account, password);
            userInfo.value = res.result;
        };
        // 定义修改state数据action
        const clearUserInfo = () => {
            userInfo.value = {};
            //清除购物车方法
            userStore.clearCart();
        };

        // 返回对象
        return {userInfo, getUserInfo, clearUserInfo};
        // 以对象形式return
    },
    //开启持久化功能
    {
        persist: true
    }
);

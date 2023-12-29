//封装购物车模块
import {defineStore} from "pinia";
import {ref} from "vue";

export const useCartStore = defineStore(
    "cart",
    () => {
        // 购物车列表
        const cartList = ref([]);
        // 添加商品到购物车
        const addCart = (goods) => {
            // 添加逻辑
            //添加过 count+1
            //没有添加直接push
            const item = cartList.value.find((item) => goods.skuId === item.skuId);
            if (item) {
                item.count++;
            } else {
                cartList.value.push(goods);
            }
            // 更新购物车列表
        };
        const delCart = (skuId) => {
            // 删除逻辑
            const index = cartList.value.findIndex((item) => item.skuId === skuId);
            if (index !== -1) {
                cartList.value.splice(index, 1);
            }
        };
        // 更新商品数量
        return {cartList, addCart, delCart};
    },
    {
        persist: true // 开启本地存储
    }
);

//封装购物车模块
import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {useUserStore} from "./userStore";
import {insertCartAPI, findNewCartListAPI, delCartAPI} from "@/apis/cart";

export const useCartStore = defineStore(
    "cart",
    () => {
        const userStore = useUserStore();
        const isLogin = computed(() => userStore.userInfo.token);
        // 购物车列表
        const cartList = ref([]);

        // 添加商品到购物车
        const addCart = async (goods) => {
            if (isLogin.value) {
                // 已登录，执行添加逻辑
                await insertCartAPI(goods);
                await updateNewList();
            } else {
                // 添加逻辑
                //添加过 count+1
                //没有添加直接push
                const item = cartList.value.find((item) => goods.skuId === item.skuId);
                if (item) {
                    item.count++;
                } else {
                    // 更新购物车列表
                    cartList.value.push(goods);
                }
            }
        };
        const delCart = async (skuId) => {
            if (isLogin) {
                await delCartAPI([skuId]);
                await updateNewList();
            } else {
                // 删除逻辑
                const index = cartList.value.findIndex((item) => item.skuId === skuId);
                if (index !== -1) {
                    cartList.value.splice(index, 1);
                }
            }
        };
        //获取最新的购物车列表
        const updateNewList = async () => {
            const res = await findNewCartListAPI();
            cartList.value = res.result;
        };
        //单选功能
        const singeleCheck = (skuId, selected) => {
            console.log(skuId, selected);
            // 通过skuid找到需要修改项
            const item = cartList.value.find((item) => item.skuId === skuId);
            console.log(item);
            item.selected = selected;
        };
        //计算商品数量之和
        const allCount = computed(() => cartList.value.reduce((total, item) => total + item.count, 0));
        //总价count*price之和
        const allPrice = computed(() => cartList.value.reduce((total, item) => total + item.count * item.price, 0));

        //是否全选
        const isAll = computed(() => cartList.value.every((item) => item.selected));
        //全选
        const allCheck = (selected) => {
            cartList.value.forEach((item) => (item.selected = selected));
        };
        //计算商品已选择数量
        const selectedCount = computed(() =>
            cartList.value.filter((item) => item.selected).reduce((total, item) => total + item.count, 0)
        );
        //已选择商品价钱合计
        const selectedPrice = computed(() =>
            cartList.value.filter((item) => item.selected).reduce((total, item) => total + item.count * item.price, 0)
        );
        return {
            cartList,
            isAll,
            allCount,
            allPrice,
            selectedCount,
            selectedPrice,
            addCart,
            delCart,
            singeleCheck,
            allCheck
        };
    },
    {
        persist: true // 开启本地存储
    }
);

//封装分类数据业务相关代码
import {getTopCategoryAPI} from "@/apis/category";
import {onMounted, ref} from "vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";

export const useCategory = () => {
    const categoryData = ref({});
    const route = useRoute();
    //获取面包屑导航数据
    const getTopCategory = async (id = route.params.id) => {
        //如果传入id则为传入id，否则为路由id
        // 调用getTopCategoryAPI函数，获取id对应的分类信息
        const res = await getTopCategoryAPI(id);
        // console.log(res);
        categoryData.value = res.result;
    };
    // 第一种方法监听路由
    // watch(() => route.params.id, () => {
    //     // 当路由参数id发生变化时，调用getTopCategory函数
    //     getTopCategory()
    // })

    onMounted(() => {
        getTopCategory();
    });
    //第二种方法 使用onBeforeRouteUpdate
    onBeforeRouteUpdate((to) => {
        // 当路由参数id发生变化时，调用getTopCategory函数
        getTopCategory(to.params.id);
    });
    return {categoryData};
};

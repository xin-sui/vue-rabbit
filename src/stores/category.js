import {ref} from "vue";
import {defineStore} from "pinia";
import {getCategoryAPI} from "@/apis/layout";

export const useCategoryStore = defineStore("category", () => {
    //导航列表数据管理
    //导航列表数据
    const categoryList = ref([]);

    // 获取分类
    const getCategory = async () => {
        // 调用接口获取分类
        const res = await getCategoryAPI();
        // 将获取的分类赋值给categoryList
        categoryList.value = res.result;
    };
    return {getCategory, categoryList};
});

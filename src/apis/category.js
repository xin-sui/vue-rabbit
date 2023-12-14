import httpInstance from "@/utils/https";
//面包屑导航数据
// 导出一个函数，用于获取指定id的分类信息
export const getTopCategoryAPI = (id) => {
    // 调用httpInstance函数，传入一个对象，包含请求的url和参数
    return httpInstance({
        url: "/category",
        params: {
            id
        }
    });
};

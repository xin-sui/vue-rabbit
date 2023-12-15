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
/**
 * @description 获取二级分类列表数据
 *@param{*} id 分类id
 *@return {*}
 */
export const getCategoryFilterAPI = (id) => {
    return httpInstance({
        url: "/category/sub/filter",
        params: {
            id
        }
    });
};

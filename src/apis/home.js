import httpInstance from "@/utils/https";

//封装获取banner接口
// 导出一个函数，用于获取banner API
export function getBannerAPI(params = {}) {
    // 返回一个httpInstance，请求地址为'/home/banner'
    //广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
    const {distributionSite = "1"} = params;
    return httpInstance({
        url: "/home/banner",
        params: {distributionSite}
    });
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return httpInstance({
        url: "/home/new"
    });
};

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return httpInstance({
        url: "home/hot"
    });
};
/**
 * @description: 获取所有商品
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return httpInstance({
        url: "/home/goods"
    });
};

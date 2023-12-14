import httpInstance from "@/utils/https";
// 定义一个函数getCategoryAPI，用于获取分类信息 头部标题
export function getCategoryAPI() {
    return httpInstance({
        url: "home/category/head"
    });
}
